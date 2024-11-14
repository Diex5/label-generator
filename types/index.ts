// index.ts

type Product = {
  id: number
  name: string
  description: string | null
  imageUrl: string | null
  variants: Variant[]
  createdAt: Date
  updatedAt: Date
  OrderItem: OrderItem[]
}

type Variant = {
  id: number
  name: string
  value: string
  price: number
  productId: number
  product: Product
  createdAt: Date
  updatedAt: Date
  OrderItem: OrderItem[]
}

type User = {
  id: number
  email: string
  passwordHash: string
  fullName: string | null
  createdAt: Date
  updatedAt: Date
  orders: Order[]
  paymentMethods: StripePaymentMethod[]
}

type Order = {
  id: number
  userId: number
  user: User
  totalPrice: number
  status: string
  createdAt: Date
  updatedAt: Date
  items: OrderItem[]
  paymentIntents: StripePaymentIntent[]
  StripeCheckoutSession: StripeCheckoutSession[]
  StripeInvoice: StripeInvoice[]
}

type OrderItem = {
  id: number
  orderId: number
  productId: number
  variantId: number
  quantity: number
  unitPrice: number
  totalPrice: number
  order: Order
  product: Product
  variant: Variant
}

type StripePaymentIntent = {
  id: number
  orderId: number
  status: string
  clientSecret: string
  amount: number
  createdAt: Date
  updatedAt: Date
  order: Order
}

type StripePaymentMethod = {
  id: number
  userId: number
  stripePaymentMethodId: string
  type: string
  cardLast4: string | null
  expMonth: number | null
  expYear: number | null
  createdAt: Date
  updatedAt: Date
  user: User
}

type StripeCheckoutSession = {
  id: number
  orderId: number
  sessionId: string
  paymentUrl: string
  status: string
  createdAt: Date
  updatedAt: Date
  order: Order
}

type StripeInvoice = {
  id: number
  orderId: number
  invoiceId: string
  amount: number
  status: string
  createdAt: Date
  updatedAt: Date
  order: Order
}

// Exportuj všechny typy
export {
  Product,
  Variant,
  User,
  Order,
  OrderItem,
  StripePaymentIntent,
  StripePaymentMethod,
  StripeCheckoutSession,
  StripeInvoice,
}
