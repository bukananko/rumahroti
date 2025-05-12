import ParallaxSection from '@/components/ParallaxSection'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className="font-mono z-[9999999px]">
      <section className="bg-hero bg-cover bg-center min-h-screen flex justify-center items-start flex-col">
        <div className="container space-y-5">
          <h2 className="text-6xl text-white">Welcome</h2>
          <p className="text-white">
            Welcome to Rumah Roti, where the aroma of fresh <br /> bread and the warmth of the
            atmosphere greet you!
          </p>
          <div className="space-x-5 flex items-center">
            <Link
              target="_blank"
              className="bg-transparent outline px-4 py-2 rounded text-white outline-1 hover:scale-105 transition-all ease-in-out duration-200"
              href="https://wa.me/628113809220"
            >
              Order Now
            </Link>
            <Link
              target="_blank"
              className={`hover:scale-105 transition-all ease-in-out duration-200 ${buttonVariants({ variant: 'default' })}`}
              href="https://maps.app.goo.gl/DZGsjNTTZZvPgsGp9"
            >
              View Map
            </Link>
          </div>
        </div>
      </section>

      <section className="container flex justify-center py-10 md:py-20 bg-white dark:bg-card">
        <div className="text-3xl md:text-5xl">
          A warm and cozy <br /> ambiance awaits you <br /> at
          <span className="font-bold"> Rumah Roti.</span>
        </div>
      </section>

      <ParallaxSection />

      <section className="container flex flex-col gap-20 justify-end items-end py-20 bg-white dark:bg-card">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="m-auto space-y-4">
            <p>OUR MENU</p>
            <h2 className="text-4xl font-bold">LIST OF DISHES</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enjoy our daily selection of handcrafted breads, from flaky viennoiseries and rustic
              sourdough to specialty toasts and fresh-baked buns.
            </p>
          </div>

          <div>
            <Image
              src="/menu.png"
              alt="Menu"
              loading="eager"
              fetchPriority="auto"
              decoding="async"
              width={1080}
              height={1080}
            />
          </div>
        </div>

        <div className="gap-10 flex max-md:flex-col-reverse">
          <div>
            <Image
              src="/sourdough.png"
              alt="Sourdough"
              loading="eager"
              fetchPriority="auto"
              decoding="async"
              width={1080}
              height={1080}
            />
          </div>

          <div className="m-auto space-y-4">
            <p>OUR UNIQUENESS</p>
            <h2 className="text-4xl font-bold">
              CROISSANTS, <br className="max-md:hidden" />
              SOURDOUGH & TOAST
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Time melts away at Rumah Roti, where the aroma of croissants, the tang of sourdough,
              and the crunch of toast bring comfort all day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card container pb-20">
        <div className="flex justify-center items-center flex-col space-y-4 bg-kursi py-44 bg-bottom">
          <h2 className="text-3xl md:text-6xl font-bold text-white">VISIT US</h2>
          <p className="text-white text-center md:text-xl">
            Jl. Gunung Catur II no 15B Denpasar Barat
          </p>

          <Link
            href="https://wa.me/628113809220"
            className={`hover:scale-105 transition-all ease-in-out duration-200 ${buttonVariants()}`}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage
