import Image from "next/image";

const Hero = () => {
  return (
    <div className="m-5 mt-40 text-cyan-600">
      <h1 className="text-2xl text-cyan-600 font-bold">Welcome</h1>
      <h2> My name is Angel, i´m full-stack Developer.</h2> 
      <p>I have been studying programming since 2021, but in 2022 i leaned towards web development.</p>
       <p> I always used platforms like Udemy, OpenBootcamp and Youtube. </p>
       <p>to formalize my knowledge, in 2023, i took a Full-Stack course with official certification and 
        National validity that lasted 8 months.</p>
        <h3>Enjoy the tour!</h3> 
        <aside>
          <Image src="/profilePhoto.png" alt="me" width={180} height={180}/>
        </aside>
    </div> 
  )
}

export default Hero;