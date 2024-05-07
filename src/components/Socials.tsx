import { IconCMC } from './icons/IconCMC'
import { IconDextools } from './icons/IconDextools'
import { IconTelegram } from './icons/IconTelegram'
import { IconTwitter } from './icons/IconTwitter'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const SOCIAL_LINKS = {
  x: 'https://twitter.com/penny_doge',
  telegram: 'https://t.me/PennyDogeSOL',
}

interface SocialsProps {
  className?: string
}

export function Socials({ className }: SocialsProps) {
  return (
    <div className={twMerge('flex w-full max-w-[24rem] flex-col', className)}>
      <div className="flex w-full gap-4">
        <div className="bordered aspect-square flex-1">
          <Link
            title="X(Twitter)"
            href={SOCIAL_LINKS.x}
            target="_blank"
            className="pixel-corners flex size-full items-center justify-center bg-black text-white"
          >
            <IconTwitter size="3rem" />
          </Link>
        </div>
        <div className="bordered aspect-square flex-1">
          <Link
            title="Telegram"
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            className="pixel-corners flex size-full items-center justify-center bg-blue-400 text-white"
          >
            <IconTelegram size="3rem" />
          </Link>
        </div>
        <div className="bordered aspect-square flex-1">
          <button
            title="Coinmarketcap (In Progress)"
            className="pixel-corners flex size-full items-center justify-center bg-blue-600 text-white"
          >
            <IconCMC size="2rem" />
          </button>
        </div>
        <div className="bordered aspect-square flex-1">
          <button
            title="Dextools (In Progress)"
            className="pixel-corners flex size-full items-center justify-center bg-[#05A3C9] text-white"
          >
            <IconDextools size="3rem" />
          </button>
        </div>
      </div>
      <img src="/assets/shelf.png" alt="shelf" className="bordered" />
    </div>
  )
}
