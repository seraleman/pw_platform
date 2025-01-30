'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const TopMenu = () => {
  return (
    <nav className="flex items-center w-full dark:bg-purple-brand px-4">
      {/* column left (optional content) */}
      <div className="flex-1"></div>

      {/* Center column */}
      {/* Logo */}
      <div className="flex-1 flex justify-center my-2">
        <Link href={'/'}>
          <div className="dark:hidden">
            <Image
              alt="logo"
              src="/images/brand/logo.png"
              width={200}
              height={200}
            />
          </div>

          <div className="hidden dark:block">
            <Image
              alt="logo-dark"
              src="/images/brand/logo-dark.png"
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>

      {/* column right */}
      <div className="flex-1">
        {/* cart icon */}
        {/* <div className="flex justify-end">
          <Link href="/cart" className="mx-2">
            <div className="relative ml-2 mr-10">
              <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 text-white dark:text-purple-brand bg-purple-brand dark:bg-white">
                3
              </span>
              <IoCartOutline className="w-6 h-6" />
            </div>
          </Link>
        </div> */}
      </div>
    </nav>
  )
}
