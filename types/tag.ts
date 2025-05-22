import type { HeroImage } from './common'
import type { gtmEventMap } from '@/constants/gtm'

export type TagPost = {
  title: string
  publishedDate: string
  link: string
  sectionColor: string
  sectionName: string
  postMainImage: HeroImage
  textContent: string
}

export type TagInfo = {
  name: string
}

export type GtmTagPageEvents = (typeof gtmEventMap)['tag']
