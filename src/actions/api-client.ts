import { request } from "../lib/request"
import type {
  Product,
  LoginResponse,
  LoginCredentials,
} from "../lib/types"

interface ProductResponse<T> {
  products: T
  limit: number
  skip: number
  total: number
}


class APIClient {
  async getProducts(): Promise<ProductResponse<Product[]>> {
    return request<ProductResponse<Product[]>>("/products")
  }

  async loginUser(credentials: LoginCredentials): Promise<LoginResponse> {
    const data = await request<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })

    console.log(data)

    return data
  }

}

export const apiClient = new APIClient()