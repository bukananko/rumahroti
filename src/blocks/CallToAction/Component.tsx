import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { ButtonProps } from '@/components/ui/button'

type Props = CTABlockProps & { className?: string; buttonVariant?: ButtonProps['variant'] }

export const CallToActionBlock: React.FC<Props> = ({
  links,
  richText,
  className,
  buttonVariant,
}) => {
  return (
    <div className={cn(className)}>
      <div className="max-w-[48rem] z-50">
        {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
      </div>
      <div className="flex flex-col gap-8 z-50 w-max">
        {(links || []).map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance={buttonVariant} />
        })}
      </div>
    </div>
  )
}
