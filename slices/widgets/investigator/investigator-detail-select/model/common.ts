import type { InvestigatorSource } from "@shared/model"

export type InvestigatorDetailItem = {
  id: string
  imageId: string
  type: 'custom' | 'parallel' | 'book' | 'skin' | 'default'
  icon?: string
  name: string
  value: string | null
  investigator: InvestigatorSource
}