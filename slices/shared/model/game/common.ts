import type { InvestigatorSource, Story } from "../api"
import type { Investigator as InvestigatorMedia } from "arkham-investigator-data"
import type { Nullable } from "../util";
import type { ImageRequireSource } from "react-native";

export type Faction = 'neutral' | 'mystic' | 'rogue' | 'survivor' | 'seeker' | 'guardian'

export type FactionImages = Record<Faction, ImageRequireSource>

export type InvestigatorSkillType = 'willpower' | 'intellect' | 'combat' | 'agility'

export type SkillType = InvestigatorSkillType | 'wild'

export type SelectedInvestigator = {
  code: string
  variantId: Nullable<string>
  skinId: Nullable<string>
}

export type InvestigatorDetails = {
  investigator: InvestigatorSource
  alternate: InvestigatorDetails[]
  story: Story
  media?: InvestigatorMedia
  isOfficial: boolean
}

export type InvestigatorDetailItem = {
  id: string
  imageId: string
  type: 'custom' | 'parallel' | 'book' | 'skin' | 'default'
  icon?: string
  name: string
  value: string | null
  details: InvestigatorDetails
}