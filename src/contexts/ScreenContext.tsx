/* eslint-disable @typescript-eslint/no-empty-function */
import { TLanguage } from '@utils/constants'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useMediaQuery, useScrollLock } from 'usehooks-ts'

type ScreenContextType = {
  lang: TLanguage
  loading: boolean
  activeTab: string
  setActiveTab: (value: string) => void
  setLang: (lang: TLanguage) => void
  setLoading: (value: boolean) => void
  navOpened: boolean
  setNavOpened: (value: boolean) => void
  lockScroll: () => void
  unlockScroll: () => void
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

const ScreenContext = createContext<ScreenContextType>({
  lang: 'en',
  activeTab: '',
  loading: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  setLang: () => {},
  lockScroll: () => {},
  unlockScroll: () => {},
  setActiveTab: () => {},
  setLoading: () => {},
  navOpened: false,
  setNavOpened: () => {},
})

export function ScreenProvider({ children }: { children: ReactNode }) {
  const [navOpened, setNavOpened] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('')
  const [lang, setLang] = useState<TLanguage>('en')
  const { lock: lockScroll, unlock: unlockScroll } = useScrollLock({
    autoLock: false,
  })

  const sm = useMediaQuery(`(min-width: 640px)`)
  const md = useMediaQuery(`(min-width: 768px)`)
  const lg = useMediaQuery(`(min-width: 1024px)`)
  const xl = useMediaQuery(`(min-width: 1280px)`)
  const xxl = useMediaQuery(`(min-width: 1536px)`)

  return (
    <ScreenContext.Provider
      value={{
        lang,
        setLang,
        loading,
        activeTab,
        setActiveTab,
        setLoading,
        navOpened,
        setNavOpened,
        lockScroll,
        unlockScroll,
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
