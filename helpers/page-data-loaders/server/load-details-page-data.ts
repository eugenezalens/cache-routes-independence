import 'server-only'

import { notFound } from 'next/navigation'

import { HttpErrors } from '@/core/http-errors'
import { type TApiEnvelope } from '@/features/data-access'
import { type TOptional, type TServerPageParams } from '@/types'
import { type TUrlParamsValue, type TUrlParams } from '@/types/page.types'

type TExtractId<TParams extends TUrlParams> = (params: TParams) => TUrlParamsValue

async function parseId<TParams extends TUrlParams>(
  paramsPromise: TServerPageParams<TParams>,
  extractId: TExtractId<TParams>,
): Promise<TOptional<number>> {
  const params = await paramsPromise
  const rawId = extractId(params)

  if (typeof rawId !== 'string' || rawId.trim() === '') {
    return undefined
  }

  const id = Number(rawId)

  if (!Number.isInteger(id) || id <= 0) {
    return undefined
  }

  return id
}

export async function loadDetailsPageData<TEntity = unknown, TParams extends TUrlParams = TUrlParams>(
  params: TServerPageParams<TParams>,
  extractId: TExtractId<TParams>,
  getDataById: (id: number) => Promise<TApiEnvelope<TEntity>>,
): Promise<TApiEnvelope<TEntity>> {
  try {
    const id = await parseId(params, extractId)

    if (id === undefined) {
      notFound()
    }

    return await getDataById(id)
  } catch (error) {
    if (error instanceof HttpErrors.NotFound) {
      notFound()
    }

    throw error
  }
}
