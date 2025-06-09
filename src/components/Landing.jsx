import React from 'react'

function Landing() {
  return (
<>

<section className='bg-[#1c2230]'>
    <div className='container'>
<div className=' element-center flex-col pt-[200px] '>
<div className='w-[750px] max-w-full'>
<img src='/src/assets/images/landing-img.png' alt='landing-img'
 className='w-full h-fit px-16'/>
</div>

<div className=' text-white text-center px-16'>
    <h1 className='text-[21px] md:text-[34px] font-semibold mb-[15px] '>
        All Your Files In One Secure Location
        <br/>
        <br/>
        accessible anywhere.
    </h1>
    <p className='font-normal text-lg px-[15px]
     md:w-[600px] max-w-full mb-[30px]'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quaerat sed animi magnam recusandae illum esse,
          at praesentium iusto corporis ea.
    </p>
</div>
<a href='/' className=' text-white btn w-[280px] h-[60px]
 rounded-[30px] element-center font-medium'>
    Get Started
     </a>
</div>
    </div>
    <div className='w-full h-[200px]'>
        <img src="/src/assets/images/bg-curvy-desktop.svg"
     alt="" className='w-full h-full' /></div>
</section>

</>  
)
}

export default Landing