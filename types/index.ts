// index.ts

export type Product = {
  id: number
  name: string
  slug: string
  description: string | null
  imageUrl: string | null
  variants: Variant[]
  createdAt: Date
  updatedAt: Date
  OrderItem: OrderItem[]
}

export type Variant = {
  id: number
  name: string
  value: string
  price: number
  productId: number
  quantity: number | 0
  product: Product
  createdAt: Date
  updatedAt: Date
  OrderItem: OrderItem[]
}

export type User = {
  id: number
  email: string
  passwordHash: string
  fullName: string | null
  createdAt: Date
  updatedAt: Date
  orders: Order[]
  paymentMethods: StripePaymentMethod[]
}

export type Order = {
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

export type OrderItem = {
  id: number
  orderId: number
  productId: number
  variantId: number
  quantity: number
  unitPrice: number
  totalPrice: number
  order?: Order | null
  product: Product
  variant: Variant
}

export type StripePaymentIntent = {
  id: number
  orderId: number
  status: string
  clientSecret: string
  amount: number
  createdAt: Date
  updatedAt: Date
  order: Order
}

export type StripePaymentMethod = {
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

export type StripeCheckoutSession = {
  id: number
  orderId: number
  sessionId: string
  paymentUrl: string
  status: string
  createdAt: Date
  updatedAt: Date
  order: Order
}

export type StripeInvoice = {
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
