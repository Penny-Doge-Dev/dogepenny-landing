import { FloorAsset } from './FloorAsset'
import { useScreenContext } from '@contexts/ScreenContext'
import { useState } from 'react'

const CA = 'F6SafxawsnzZfbXADVz5ip1AEJna5Kb2NkycgdAGSHxS'

export function Floor3() {
  const { lg } = useScreenContext()

  const [copyText, setCopyText] = useState('Copy')

  const handleCopy = () => {
    setCopyText('Copied')

    navigator.clipboard.writeText(CA)

    setTimeout(() => {
      setCopyText('Copy')
    }, 3000)
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-8 pb-96 pt-48">
      <img
        className="absolute left-1/2 top-[1rem] h-[24rem] -translate-x-1/2 md:h-[36rem]"
        src="/assets/coin.gif"
        alt="Penny Doge Coin"
      />
      <div className="relative z-10 flex w-full max-w-full flex-col items-center justify-center gap-24 md:gap-0">
        <h1
          style={{
            WebkitTextStroke: lg ? '8px #FB850E' : '2px #FB850E',
            animationDuration: '3s',
          }}
          className="text-primary motion-safe:animate-float text-center text-[4rem] font-extrabold md:text-[max(8rem,12vw)]"
        >
          Penny Doge
        </h1>
        <div
          style={{ animationDuration: '3s' }}
          className="motion-safe:animate-float flex w-full max-w-full flex-col justify-between gap-4 border-[4px] border-black bg-white p-8 md:w-max md:flex-row md:items-center md:gap-16"
        >
          <div className="flex-col">
            <h3 className="text-xl font-bold">Contract Address</h3>
            <h2 className="break-words">{CA}</h2>
          </div>
          <button
            onClick={handleCopy}
            className="bg-primary hover:bg-primaryDarker active:bg-primaryDarkest border-secondary w-full border-[4px] px-12 py-4 text-2xl font-bold transition md:w-auto"
          >
            {copyText}
          </button>
        </div>
      </div>
      <div className="absolute bottom-[2rem] left-[2rem] isolate z-[2]">
        <img
          src="/assets/coin.png"
          alt="coin"
          style={{ animationDuration: '2s' }}
          className="motion-safe:animate-float -z-1 absolute left-[36%] top-[-6rem] h-[6rem] -translate-x-1/2"
        />
        <img
          src="/assets/box-1.png"
          alt="box-1"
          className="relative z-[3] h-[16rem]"
        />
      </div>
      <div className="absolute bottom-[2rem] right-[2rem] isolate z-[3]">
        <img
          src="/assets/coin.png"
          alt="coin"
          style={{ animationDuration: '2s' }}
          className="motion-safe:animate-float -z-1 absolute left-[16%] top-[-6rem] h-[6rem] -translate-x-1/2"
        />
        <img
          src="/assets/box-2.png"
          alt="box-2"
          className="relative z-[3] h-[10rem]"
        />
      </div>
      <FloorAsset className="absolute bottom-0 left-0 right-0" />
    </div>
  )
}
