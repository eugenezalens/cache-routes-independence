import 'client-only'

import { performClientByIdQuery } from './_lib/queries/by-id/perform-by-id-query.client'
import { performClientListQuery } from './_lib/queries/list/perform-list-query.client'

export const ClientApi = {
  queries: {
    byId: performClientByIdQuery,
    list: performClientListQuery,
  },
} as const
