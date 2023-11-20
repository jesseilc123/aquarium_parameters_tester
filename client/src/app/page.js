import Image from 'next/image'
import FreshwaterForm from './FreshwaterForm'
import SaltwaterForm from './SaltwaterForm'

export default function Home() {
  return (
    <main className="">
      <div className="">
        Hello
        <FreshwaterForm />
        <SaltwaterForm />
      </div>
        
    </main>
  )
}
