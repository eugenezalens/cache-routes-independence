import { setSpParams } from '@/helpers/sp'
import { type TUrlSearchParamsInput } from '@/types'

import {
  type TGetDetailsRoute,
  type TGetBrowseRoute,
  type TRoutesConfig,
  type TGetCreateRoute,
  type TGetEditRoute,
} from './routes.types'

function addSearchParams(path: string, searchParams?: TUrlSearchParamsInput): string {
  if (!searchParams) {
    return path
  }

  const sp = new URLSearchParams()
  setSpParams(sp, searchParams)

  return `${path}?${sp.toString()}`
}

function buildBrowseRoute({ pluralEntity }: TRoutesConfig): TGetBrowseRoute {
  return (config) => addSearchParams(`/${pluralEntity}`, config?.searchParams)
}

function buildDetailsRoute({ pluralEntity }: TRoutesConfig): TGetDetailsRoute {
  return ({ params, searchParams }) => addSearchParams(`/${pluralEntity}/${params.id}`, searchParams)
}

function buildCreateRoute({ pluralEntity }: TRoutesConfig): TGetCreateRoute {
  return (config) => addSearchParams(`/${pluralEntity}/create`, config?.searchParams)
}

function buildEditRoute({ pluralEntity }: TRoutesConfig): TGetEditRoute {
  return ({ params, searchParams }) => addSearchParams(`/${pluralEntity}/${params.id}/edit`, searchParams)
}

export const RoutesHelpers = {
  build: {
    browse: buildBrowseRoute,
    details: buildDetailsRoute,
    create: buildCreateRoute,
    edit: buildEditRoute,
  },
} as const
