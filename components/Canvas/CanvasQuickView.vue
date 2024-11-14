<script lang="ts" setup>
const props = defineProps<{
  width: number
  height: number
}>()

const stageSize = reactive({
  width: props.width,
  height: props.height,
})

const backgroundRectConfig = reactive({
  x: 0,
  y: 0,
  width: props.width,
  height: props.height,
  fill: '#ffffff',
  listening: false, // Make it non-interactive
})
const stageRef = ref(null)
const layerRef = ref(null)
const transformerRef = ref(null)
const selectedShapeName = ref('')
const uploadedImages = reactive([])
const coords = ref({ x: 0, y: 0 })
const { canvasTexture, canvas } = useTexture()

function updateCanvasTexture () {
  requestAnimationFrame(() => {
    const stage = stageRef.value?.getNode()
    if (stage) {
      const transformerNode = transformerRef.value.getNode()
      transformerNode.hide()

      layerRef.value.getNode().batchDraw()
      const dataURL = stage.toDataURL({ pixelRatio: 2 })

      canvasTexture.value = dataURL

      transformerNode.show()
    }
  })
}

function handleTransformEnd (e) {
  const image = uploadedImages.find(img => img.config.name === selectedShapeName.value)
  if (image) {
    image.config.x = e.target.x()
    image.config.y = e.target.y()
    image.config.rotation = e.target.rotation()
    image.config.scaleX = e.target.scaleX()
    image.config.scaleY = e.target.scaleY()
  }
  updateCanvasTexture() // Update the texture after transformation
}

function handleStageMouseDown (e) {
  if (e.target === e.target.getStage()) {
    selectedShapeName.value = ''
    updateTransformer()
    return
  }

  const clickedOnTransformer = e.target.getParent().className === 'Transformer'
  if (clickedOnTransformer) {
    return
  }

  const name = e.target.name()
  const image = uploadedImages.find(img => img.config.name === name)
  if (image) {
    selectedShapeName.value = name
    coords.value = {
      x: e.target.x(),
      y: e.target.y(),
    }
  }
  else {
    selectedShapeName.value = ''
  }
  updateTransformer()
}

function updateTransformer () {
  const transformerNode = transformerRef.value?.getNode()
  const stage = transformerNode?.getStage()
  const selectedNode = stage?.findOne('.' + selectedShapeName.value)

  if (selectedNode && transformerNode) {
    transformerNode.nodes([selectedNode])
  }
  else {
    transformerNode?.nodes([])
  }

  layerRef.value?.getNode().batchDraw()
}

function addImageFromUrl () {
  // Remove existing image with the name 'buttonImage' if it exists
  const existingImageIndex = uploadedImages.findIndex(image => image.config.name === 'buttonImage')
  if (existingImageIndex !== -1) {
    uploadedImages.splice(existingImageIndex, 1)
    updateCanvasTexture() // Update the texture after removing an image
    layerRef.value.getNode().batchDraw() // Redraw after a batch of changes
  }

  const imageObj = new Image()
  imageObj.crossOrigin = 'anonymous'
  imageObj.onload = function () {
    const imageConfig = {
      image: imageObj,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      draggable: true,
      name: 'buttonImage',
    }
    uploadedImages.push({ config: imageConfig })
    updateCanvasTexture() // Update the texture after adding an image
    layerRef.value.getNode().batchDraw() // Only redraw after a batch of changes
  }
  imageObj.src = 'https://placehold.co/600x400'
}

function handleDragMove (e) {
  coords.value = {
    x: e.target.x(),
    y: e.target.y(),
  }
  updateCanvasTexture() // Update the texture after dragging
}

onMounted(() => {
  const konvaCanvas = stageRef.value.getNode().content
  canvas.value = konvaCanvas
  layerRef.value.getNode().batchDraw() // Zajistí kresbu na layer při mountu
  updateCanvasTexture()
})

watch(canvasTexture, () => {
  updateCanvasTexture()
})
</script>

<template>
  <div>
    <button @click="addImageFromUrl">
      Přidat obrázek z URL {{ width }}x{{ height }}
    </button>
    <div border-3 border-black w-fit m-auto relative>
      <div absolute w-2px bg-black h-full top-0 left="50%" z-10 />
      <div relative w-full h-full>
        <v-stage ref="stageRef" :config="stageSize" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown">
          <v-layer ref="layerRef">
            <v-rect :config="backgroundRectConfig" />
            <v-group
              v-for="(image) in uploadedImages"
              :key="image.config.name"
              :config="image.config"
              @transformend="handleTransformEnd"
              @dragmove="handleDragMove"
            >
              <v-image :image="image.image" :x="0" :y="0" :width="100" :height="100" />
            </v-group>
            <v-transformer ref="transformerRef" />
          </v-layer>
        </v-stage>
      </div>
    </div>
  </div>
</template>

<style>
</style>
