import { FloorAsset } from './FloorAsset'
import { IconCMC } from './icons/IconCMC'
import { IconDextools } from './icons/IconDextools'
import { IconTelegram } from './icons/IconTelegram'
import { IconTwitter } from './icons/IconTwitter'
import Link from 'next/link'

const title = `You have to buy PennyDoge $PDG`

const steps = [
  {
    title: 'Create a Wallet',
    content: 'Get Phantom from your app store or via phantom.app for desktop',
  },
  {
    title: 'Buy Solana (SOL)',
    content: 'Purchase SOL on any major crypto exchange',
  },
  {
    title: 'Transfer to Wallet ',
    content: 'Move your SOL to Phantom',
  },
  {
    title: 'Swap on Raydium',
    content: 'Visit Raydium to swap SOL for $PDG',
  },
]

export function Floor1() {
  return (
    <div className="relative flex min-h-[calc(100vh+50rem)] w-full items-end justify-end overflow-hidden px-8 lg:min-h-[calc(100vh+24rem)] lg:items-center lg:justify-start">
      <img
        src="/assets/penny-doge-flip.png"
        alt="penny doge"
        className="absolute bottom-0 left-0 z-[1] h-[408px]"
      />
      <img
        src="/assets/door.png"
        alt="door"
        className="bordered absolute bottom-0 right-0 hidden h-[58rem] translate-x-1/2 2xl:block"
      />
      <div className="absolute right-[50%] top-[10%] flex w-full translate-x-1/2 flex-col-reverse items-center gap-24 px-8 md:w-auto md:px-0 lg:right-[4rem] lg:top-[40%] lg:-translate-y-1/2 lg:translate-x-0 xl:top-[50%] 2xl:right-[30%]">
        <img
          src="/assets/painting-2.png"
          className="bordered relative h-[24rem] w-[24rem]"
          alt="painting 2"
        />
        <div className="flex w-full max-w-[24rem] flex-col">
          <div className="flex w-full gap-4">
            <div className="bordered aspect-square flex-1">
              <Link
                title="X(Twitter)"
                href="https://twitter.com/penny_doge"
                target="_blank"
                className="pixel-corners flex size-full items-center justify-center bg-black text-white"
              >
                <IconTwitter size="3rem" />
              </Link>
            </div>
            <div className="bordered aspect-square flex-1">
              <Link
                title="Telegram"
                href="https://t.me/pennydoge"
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
      </div>
      <div
        style={{ animationDuration: '5s' }}
        className="relative z-10 mb-96 flex flex-col gap-8 motion-safe:animate-float md:mb-24 lg:ml-48 "
      >
        <div className="bordered">
          <div className="pixel-corners w-auto bg-white p-8">
            <h2 className="text-2xl">{title}</h2>
          </div>
        </div>
        <div className="bordered">
          <div className="pixel-corners w-auto max-w-[48ch] bg-white p-8">
            <h3 className="mb-4 text-lg font-bold">Here is how:</h3>
            <ol className="list-inside list-decimal">
              {steps.map((step) => (
                <li className="mt-4 text-lg">
                  {step.title}
                  <h5 className="text-gray-500">{step.content}</h5>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <FloorAsset className="absolute bottom-0 left-0 right-0" />
    </div>
  )
}
