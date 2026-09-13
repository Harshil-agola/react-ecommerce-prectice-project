import { API_BASE_URL } from "./constants"

export const request = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Request failed")
  }

  return data as T
}