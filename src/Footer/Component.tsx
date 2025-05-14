import Link from 'next/link'
import React from 'react'
import type { Footer } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white dark:bg-card border-t-gray-500 px-5 lg:px-[160px]">
      <div className="py-5 gap-8 flex flex-col md:flex-row md:justify-between items-center">
        <p className="font-bold flex-1 text-lg">
          {/* <Logo className="dark:invert" /> */}
          Rumah Roti Sourdough
        </p>

        <p className="flex-1 text-center font-mono text-gray-500 dark:text-gray-400">
          Open Daily 10 AM – 07 PM
        </p>

        <Link
          className="hover:scale-105 transition-all ease-in-out duration-200 flex-auto place-items-end"
          href="https://instagram.com/rumahrotisourdough"
        >
          <Instagram />
        </Link>
      </div>
    </footer>
  )
}
