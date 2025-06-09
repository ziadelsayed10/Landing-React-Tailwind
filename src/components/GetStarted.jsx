import React from 'react'

function GetStarted() {
  return (
<>
<section className='mt-[150px] text-white'>
    <div className='container relative'>
        <div className='bg-[#1c2238] absolute left-[50%] translate-x-[-50%]  rounded-[5px] element-center flex-col w-[865px] max-w-[100%] min-h-[275px] p-[30px]'>
            <h3 className='text-[25px] md:text-[35px] font-semibold mb-[15px]'>Get Early Access Today</h3>
            <p className='w-[620px] max-w-full mx-auto mb-[30px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
                 reiciendis quam! Alias neque repellendus repudiandae?
                 </p>
                 <form className='w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px] '>
                    <input className='w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black font-medium' type='email' placeholder='Enter Your Email'/>
                    <button className='w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]' type='submit'>Get Started For Free</button>
                 </form>
        </div>
    </div>
</section>



</>  )
}

export default GetStarted