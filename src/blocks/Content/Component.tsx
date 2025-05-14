import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

type Props = ContentBlockProps & { isProse: boolean; className?: string }

export const ContentBlock: React.FC<Props> = (props) => {
  const { columns, isProse, className } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className={cn(className)}>
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { enableLink, link, richText, size } = col

          return (
            <div
              className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                'md:col-span-2': size !== 'full',
              })}
              key={index}
            >
              {richText && <RichText data={richText} enableGutter={false} enableProse={isProse} />}

              {enableLink && <CMSLink {...link} />}
            </div>
          )
        })}
    </div>
  )
}
