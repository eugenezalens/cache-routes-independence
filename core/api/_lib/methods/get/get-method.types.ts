import { type TUrlBuilderConfig, type TCacheBuilderConfig } from '../../api.types'

export type TGetRequestBuilderConfig = { cache?: TCacheBuilderConfig }
export type TGetRequestConfig = TUrlBuilderConfig & TGetRequestBuilderConfig
