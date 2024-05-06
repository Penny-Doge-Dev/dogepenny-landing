import { FloorAsset } from './FloorAsset'

const content = `Dive into the zany and delightful universe of PennyDoge, where memes meet money on the super-speedy Solana blockchain. It’s not just a token—it's a ticket to fun and a sprinkle of financial freedom!`

export function Floor2() {
  return (
    <div className="relative flex min-h-[calc(100vh+50rem)] w-full items-center justify-center overflow-hidden px-8 lg:min-h-[calc(100vh+24rem)]">
      <img
        src="/assets/penny-doge.png"
        alt="penny doge"
        className="absolute bottom-0 right-0 z-[1] h-[408px]"
      />
      <img
        src="/assets/painting.png"
        alt="painting"
        className="mb-96 md:mb-0"
      />
      <img
        src="/assets/window.png"
        alt="window"
        className="absolute right-[10%] top-[8rem] h-[5rem] md:top-[10rem] md:h-auto"
      />
      <div
        style={{ animationDuration: '5s' }}
        className="motion-safe:animate-float -transalate-y-1/2 absolute bottom-[24rem] left-[1rem] right-[1rem] z-10 flex w-auto max-w-[48ch] flex-col justify-between gap-4 border-[4px] border-black bg-white p-8 text-lg md:bottom-[20%] md:left-auto md:right-[15%] md:w-max md:flex-row md:items-center md:gap-16"
      >
        <h2>{content}</h2>
      </div>
      <FloorAsset className="absolute bottom-0 left-0 right-0" />
    </div>
  )
}
