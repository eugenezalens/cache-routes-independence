'use client'

import { createContext } from 'react'

import { type TPaginationContext } from '../types/pagination.types'

export const PaginationContext = createContext<TPaginationContext | null>(null)
