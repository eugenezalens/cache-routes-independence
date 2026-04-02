import 'server-only'

import { executeCreateMutation } from './_lib/mutations/create/execute-create-mutation.server'
import { executeUpdateMutation } from './_lib/mutations/update/execute-create-mutation.server'
import { performServerByIdQuery } from './_lib/queries/by-id/perform-query.server'
import { performServerListQuery } from './_lib/queries/list/perform-list-query.server'

export const ServerApi = {
  queries: {
    byId: performServerByIdQuery,
    list: performServerListQuery,
  },
  /**
   * Mutations may only run within a Server Action execution context.
   * This constraint is enforced by the call stack context,
   * not by the file where the invocation is located.
   */
  mutations: {
    create: executeCreateMutation,
    update: executeUpdateMutation,
  },
} as const

export { executeByIdQuery } from './_lib/queries/by-id/execute-by-id-query.server'
export { executeListQuery } from './_lib/queries/list/execute-list-query.server'
