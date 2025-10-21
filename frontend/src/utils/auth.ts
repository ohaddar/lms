import { fetchApi } from './api'
import type { User, LoginCredentials } from '../types'

export async function loginUser(credentials: LoginCredentials): Promise<User> {
  const response = await fetchApi<{ user: User }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
  return response.user
}

export async function logoutUser(): Promise<void> {
  await fetchApi('/auth/logout', {
    method: 'POST',
  })
}

export async function getCurrentUser(): Promise<User> {
  const response = await fetchApi<{ user: User }>('/auth/me')
  return response.user
}
