import { request } from "../lib/request"
import { tokenStore } from "../lib/token-store"
import type { Product, LoginResponse, LoginCredentials } from "../lib/types"

interface ProductResponse<T> {
  products: T
  limit: number
  skip: number
  total: number
}

class APIClient {
  getAccessToken() {
    return tokenStore.get()
  }

  async getProducts(): Promise<ProductResponse<Product[]>> {
    return request<ProductResponse<Product[]>>("/products")
  }

  async loginUser(credentials: LoginCredentials): Promise<LoginResponse> {
    const data = await request<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })

    tokenStore.set(data.accessToken)
    return data
  }

  async logoutUser(): Promise<void> {
    tokenStore.set(null)
  }

  async getCurrentLoggedInUser(): Promise<LoginResponse> {
    return request<LoginResponse>("/auth/me")
  }
}

export const apiClient = new APIClient()