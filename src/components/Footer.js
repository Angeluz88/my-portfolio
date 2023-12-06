
import Link from 'next/link';



function Footer() {
  
  return (
    <footer className='w-full'>
      <div className='grid grid-cols-3 justify-evenly w-auto h-auto'>
      <h3 className='flex flex-col col-span-2 place-self-center text-2xl text-cyan-600 font-bold'>Tanks for you visit!</h3>
      <nav className='flex flex-col justify-center '>
        <Link href="/" className='pb-6 text-xl text-cyan-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>whatsapp</Link>
        <Link href="/" className='pb-6 text-xl text-cyan-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>gmail</Link>
        <Link href="/" className='pb-6 text-xl text-cyan-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>linkedIn</Link>
      </nav>
      <p className='self-end place-self-center col-span-3 text-cyan-600'> & copy all right reserved</p>
      </div>
    </footer>
  )
}

export default Footer;