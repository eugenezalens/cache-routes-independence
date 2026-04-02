import { RoutesHelpers } from './routes.helpers'
import { type TRoutes, type TRoutesConfig } from './routes.types'

export function buildRoutes(config: TRoutesConfig): TRoutes {
  const routes: TRoutes = {
    browse: RoutesHelpers.build.browse(config),
    details: RoutesHelpers.build.details(config),
    create: RoutesHelpers.build.create(config),
    edit: RoutesHelpers.build.edit(config),
  }

  return routes
}
