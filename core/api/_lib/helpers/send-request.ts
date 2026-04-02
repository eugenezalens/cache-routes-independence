import { HttpErrors } from '@/core/http-errors'

import { type TApiResult } from '../api.types'

export async function sendRequest<TData = unknown>(url: URL, requestInit: RequestInit): Promise<TApiResult<TData>> {
  let response: Response

  try {
    response = await fetch(url, requestInit)
  } catch (error) {
    console.error('Network error while fetching:', error)
    throw new HttpErrors.Upstream('Network error: Unable to reach upstream')
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new HttpErrors.NotFound(`Entity not found at ${url}`)
    }

    if (response.status >= 500) {
      throw new HttpErrors.Upstream(`Upstream returned ${response.status}`)
    }

    throw new HttpErrors.Upstream(`Request failed with status ${response.status}`)
  }

  const data = (await response.json()) as TData

  return {
    data,
    headers: response.headers,
    status: response.status,
  }
}
