import { type TUrlBuilderConfig } from '../../api.types'

export type TPostRequestConfig = TUrlBuilderConfig & {
  body: string
}
