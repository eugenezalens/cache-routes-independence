import { type TCacheBuilderConfig } from '@/core/api'
import { type TCachePolicy } from '@/features/contracts'
import { appendSpNumberList, getSpNumberList, setSpPagination, setSpParams } from '@/helpers/sp'

import { type TListQueryRequestParams } from './list-query.types'
import { type TPaginationMeta } from '../../types/data-access.types'

function buildSp(params?: TListQueryRequestParams): URLSearchParams {
  const searchParams = new URLSearchParams()

  if (params?.idList) {
    appendSpNumberList(searchParams, 'id', params.idList)
  }

  if (params?.pagination) {
    setSpPagination(searchParams, params.pagination)
  }

  if (params?.otherParams) {
    setSpParams(searchParams, params.otherParams)
  }

  return searchParams
}

function getCachePolicy(searchParams: URLSearchParams, cachePolicy: TCachePolicy): TCacheBuilderConfig {
  const idList = getSpNumberList(searchParams, 'id')

  const hasSelection = idList.length > 0

  if (hasSelection) {
    return cachePolicy.selection.getCacheConfig(idList)
  }

  return cachePolicy.list.getCacheConfig()
}

function buildPaginationMeta(searchParams: URLSearchParams, headers: Headers): TPaginationMeta {
  const page = Number(searchParams.get('_page')) || 1
  const limit = Number(searchParams.get('_limit')) || 10
  const totalItems = Number(headers.get('x-total-count')) || 0
  const totalPages = Math.ceil(totalItems / limit)

  return {
    page,
    limit,
    totalItems,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

export const ListQueryHelpers = {
  buildSp,
  getCachePolicy,
  buildPaginationMeta,
} as const
