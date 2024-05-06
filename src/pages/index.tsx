import { Floor1 } from '@components/Floor1'
import { Floor2 } from '@components/Floor2'
import { Floor3 } from '@components/Floor3'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <Floor3 />
      <Floor2 />
      <Floor1 />
    </main>
  )
}
