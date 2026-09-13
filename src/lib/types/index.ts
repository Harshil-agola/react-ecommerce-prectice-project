export interface ProductDimensions {
  width: number
  height: number
  depth: number
}

export interface ProductReview {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface ProductMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  sku: string
  weight: number
  dimensions: ProductDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: ProductReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: ProductMeta
  images: string[]
  thumbnail: string
}



// User Types
export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender?: string
  image?: string
}

export interface LoginResponse extends User {
  accessToken: string
  refreshToken?: string
}

export interface LoginCredentials {
  username: string
  password: string
  expiresInMins?: number
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken?: string
}

export class ApiError extends Error {
  status: number
  data?: unknown

  constructor(message: string, status: number, data?: unknown) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.data = data
  }
}

