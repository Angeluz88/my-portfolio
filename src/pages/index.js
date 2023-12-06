import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Proyects from '@/components/Proyects'



export default function Home() {
  return (
    <main>
      <div className='bg-black'>
       <Navbar/>
       <Hero/>
       <About/>
       <Proyects/>
       <Footer />
      </div>
    </main>
  )
};
