import { Page, CallToActionBlock, MediaBlock } from '@/payload-types'

const getAdditionalHero = (layout: Page['layout']) => {
  const mergedHero = []
  const hero = layout.filter((block) => block.blockName?.toLowerCase().includes(`hero`))

  for (let i = 2; i <= hero.length; i++) {
    const n = layout.filter((block) => block.blockName?.toLowerCase().includes(`hero ${i}`)) as
      | CallToActionBlock[]
      | MediaBlock[]

    if (n) {
      const mediaBlock = n.map((item) => {
        if ('media' in item) {
          return item.media
        }
      })

      const content = n.map((item) => {
        if ('richText' in item) {
          return {
            ...item,
            media: mediaBlock[0],
            type: 'highImpact',
          }
        }
      })

      mergedHero.push(...content.filter((item) => item))
    }
  }

  return mergedHero
}

export default getAdditionalHero
