/* eslint-disable @typescript-eslint/no-empty-function */

import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useMediaQuery, useScrollLock } from 'usehooks-ts'

type ScreenContextType = {
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

const ScreenContext = createContext<ScreenContextType>({
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
})

export function ScreenProvider({ children }: { children: ReactNode }) {
  const sm = useMediaQuery(`(min-width: 640px)`)
  const md = useMediaQuery(`(min-width: 768px)`)
  const lg = useMediaQuery(`(min-width: 1024px)`)
  const xl = useMediaQuery(`(min-width: 1280px)`)
  const xxl = useMediaQuery(`(min-width: 1536px)`)

  return (
    <ScreenContext.Provider
      value={{
        sm,
        md,
        lg,
        xl,
        xxl,
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}

export function useScreenContext() {
  const context = useContext(ScreenContext)

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useScreenContext was used outside of its Provider')
  }

  return context
}
