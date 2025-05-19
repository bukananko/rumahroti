import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { payload } from '@/utilities/payload'
import {
  ContentBlock as ContentBlockType,
  MediaBlock,
  Page,
  CallToActionBlock as CTABlockType,
} from '@/payload-types'
import { CarouselWithDots } from '@/components/carousel-with-dots'
import { CarouselItem } from '@/components/ui/carousel'
import getAdditionalHero from '@/utilities/getAdditionalHero'

const HomePage = async () => {
  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: 'home',
      },
    },
    select: {
      hero: true,
      layout: true,
    },
  })

  const hero = result.docs[0]?.hero || ({} as Page['hero'])
  const layout = result.docs[0]?.layout ?? []
  const parallaxImage = layout.find((block) =>
    block.blockName?.toLowerCase().includes('parallax'),
  ) as MediaBlock

  const section1 = layout.find((block) =>
    block.blockName?.toLowerCase().includes('section 1'),
  ) as ContentBlockType
  const section2 = layout.find((block) =>
    block.blockName?.toLowerCase().includes('section 2'),
  ) as ContentBlockType
  const section3 = layout.filter((block) =>
    block.blockName?.toLowerCase().includes('section 3'),
  ) as ContentBlockType & MediaBlock
  const section4 = layout.filter((block) =>
    block.blockName?.toLowerCase().includes('section 4'),
  ) as CTABlockType & MediaBlock

  const additionalHero = getAdditionalHero(layout)

  return (
    <main className="font-mono z-[9999999px] overflow-x-hidden">
      <CarouselWithDots className="bg-white dark:bg-card">
        <CarouselItem>
          <section
            id="hero"
            className="h-96 md:h-[525px] lg:min-h-screen flex justify-center items-start flex-col relative"
          >
            <Media
              resource={hero?.media}
              imgClassName="absolute z-[-1] brightness-[.60] inset-0 object-cover h-full"
            />

            <div className="flex justify-center items-start flex-col max-md:p-5 max-xl:p-10 md:pr-10 xl:mx-[160px] xl:w-1/2">
              <RichText
                className="mb-6 xl:pr-[90px] text-white max-lg:prose-h1:text-5xl prose-h1:text-6xl px-0 mx-0 lg:prose-p:text-lg"
                data={hero!.richText!}
              />
              {Array.isArray(hero?.links) && hero.links?.length > 0 && (
                <ul className="flex md:justify-center gap-4">
                  <li className="max-md:hidden">
                    <CMSLink {...hero.links[0]?.link} />
                  </li>
                  <li>
                    <CMSLink {...hero.links[1]?.link} />
                  </li>
                </ul>
              )}
            </div>
          </section>
        </CarouselItem>

        {additionalHero.length > 0 &&
          additionalHero.map((item, i) => (
            <CarouselItem key={item?.id}>
              <section
                id={`hero-${i}`}
                className="h-96 md:h-[525px] lg:min-h-screen flex justify-center items-start flex-col relative"
              >
                <Media
                  resource={item?.media}
                  imgClassName="absolute z-[-1] brightness-[.60] inset-0 object-cover h-full"
                />

                <div className="flex justify-center items-start flex-col max-md:p-5 max-xl:p-10 md:pr-10 xl:mx-[160px] xl:w-1/2">
                  <RichText
                    className="mb-6 xl:pr-[90px] text-white max-lg:prose-h1:text-5xl prose-h1:text-6xl px-0 mx-0 lg:prose-p:text-lg"
                    data={item!.richText!}
                  />
                  {Array.isArray(item?.links) && item.links?.length > 0 && (
                    <ul className="flex md:justify-center gap-4">
                      <li className="max-md:hidden">
                        <CMSLink {...item.links[0]?.link} />
                      </li>
                      <li>
                        <CMSLink {...item.links[1]?.link} />
                      </li>
                    </ul>
                  )}
                </div>
              </section>
            </CarouselItem>
          ))}
      </CarouselWithDots>

      <section id="1" className="flex justify-center px-5 py-10 md:py-20 bg-white dark:bg-card">
        <ContentBlock
          blockType="content"
          columns={section1?.columns}
          isProse={false}
          className="text-4xl md:text-5xl max-sm:prose-p:inline"
        />
      </section>

      <section
        id="2"
        className="h-[608px] flex justify-end items-end pb-10 pt-80 max-md:px-5 max-xl:px-10 xl:px-[160px]"
      >
        <Media
          resource={parallaxImage?.media}
          imgClassName="fixed z-[-2] brightness-[.60] inset-0 object-cover h-full"
        />
        <ContentBlock
          blockType="content"
          columns={section2.columns}
          isProse={false}
          className="flex justify-center items-center text-5xl text-right text-white"
        />
      </section>

      <section
        id="3"
        className="flex flex-col gap-32 justify-end items-end py-20 bg-white dark:bg-card max-md:px-5 max-xl:px-10 xl:px-[160px]"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <ContentBlock
            blockType="content"
            columns={(section3[0] as ContentBlockType).columns?.slice(0, 1)}
            isProse={true}
            className="flex justify-center items-center prose-h3:text-4xl md:prose-h3:text-5xl prose-h3:mt-0 md:last:prose-p:text-lg"
          />
          <Media resource={(section3[1] as MediaBlock).media} imgClassName="" />
        </div>

        <div className="gap-10 flex max-md:flex-col-reverse">
          <Media resource={(section3[2] as MediaBlock).media} imgClassName="" />

          <ContentBlock
            blockType="content"
            columns={(section3[0] as ContentBlockType).columns?.slice(1)}
            isProse={true}
            className="flex justify-center items-center prose-h3:text-4xl md:prose-h3:text-5xl prose-h3:mt-0 md:last:prose-p:text-lg"
          />
        </div>
      </section>

      <section id="map" className="bg-white dark:bg-card max-md:px-5 max-xl:px-10 xl:px-[160px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1978.2142831065084!2d110.916906!3d-7.41773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f7f724a2d05%3A0x9d6410baf197bd17!2sRumah%20Roti%20Sourdough!5e0!3m2!1sen!2sus!4v1747209378691!5m2!1sen!2sus"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>
      </section>

      <section
        id="4"
        className="py-20 max-md:px-5 max-xl:px-10 xl:px-[160px] dark:bg-card bg-white z-0"
      >
        <div className="relative h-[430px] md:h-[497px]">
          <Media
            resource={(section4[1] as MediaBlock).media}
            imgClassName="absolute z-0 brightness-[.60] inset-0 object-cover h-full"
          />

          <CallToActionBlock
            blockType="cta"
            links={(section4[0] as CTABlockType).links}
            richText={(section4[0] as CTABlockType).richText}
            className="prose-h1:font-semibold prose-h1:text-white prose-p:text-white prose-p:text-lg md:prose-p:text-xl space-y-6 md:space-y-10 px-10 flex flex-col justify-center items-center w-full h-full"
            buttonVariant="secondary"
          />
        </div>
      </section>
    </main>
  )
}

export default HomePage
