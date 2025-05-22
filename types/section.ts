import type { HeroImage } from './common'
import type { gtmEventMap } from '@/constants/gtm'

export type SectionPost = {
  id: string
  title: string
  publishedDate: string
  link: string
  postMainImage: HeroImage
  textContent: string
}

export type GtmSectionPageEvents = (typeof gtmEventMap)['section']
