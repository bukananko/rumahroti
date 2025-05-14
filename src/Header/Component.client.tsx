'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="relative z-20 bg-white dark:bg-card"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="py-4 flex justify-between items-center px-5 lg:px-[160px]">
        <Link href="/">
          <Logo loading="eager" priority="high" className="dark:invert" />
        </Link>

        <div className="space-x-5 max-md:hidden">
          <Link target="_blank" href="https://wa.me/628113809220" className="hover:underline">
            Contact Us
          </Link>
          <Link
            target="_blank"
            href="https://instagram.com/rumahrotisourdough"
            className="hover:underline"
          >
            Social Media
          </Link>
          <Link href="/posts" className="hover:underline">
            Blog
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-10">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link target="_blank" href="https://wa.me/628113809220">
                Contact Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link target="_blank" href="https://instagram.com/rumahrotisourdough">
                Social Media
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link target="_blank" href="/posts">
                Blog
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <HeaderNav data={data}  /> */}
      </div>
    </header>
  )
}
