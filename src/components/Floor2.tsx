import { FloorAsset } from './FloorAsset'

const content = `Dive into the zany and delightful universe of PennyDoge, where memes meet money on the super-speedy Solana blockchain. It’s not just a token—it's a ticket to fun and a sprinkle of financial freedom!`

export function Floor2() {
  return (
    <div className="relative flex h-[1440px] w-full items-center justify-center overflow-hidden px-8">
      <img
        src="/assets/penny-doge.png"
        alt="penny doge"
        className="absolute bottom-0 right-0 z-[1] h-[408px]"
      />
      <img
        src="/assets/painting.png"
        alt="painting"
        className="bordered mb-96 md:mb-0"
      />
      <img
        src="/assets/window.png"
        alt="window"
        className="bordered absolute right-[10%] top-[8rem] h-[5rem] md:top-[10rem] md:h-auto"
      />
      <div
        style={{ animationDuration: '5s' }}
        className="bordered -transalate-y-1/2 absolute bottom-[24rem] left-[1rem] right-[1rem] z-10 w-auto max-w-[48ch] motion-safe:animate-float md:bottom-[24rem] md:left-auto md:right-[15%] md:w-max"
      >
        <div className="pixel-corners flex flex-col justify-between gap-4 bg-white p-8 text-lg md:flex-row md:items-center md:gap-16">
          <h2>{content}</h2>
        </div>
      </div>
      <FloorAsset className="absolute bottom-0 left-0 right-0" />
    </div>
  )
}
