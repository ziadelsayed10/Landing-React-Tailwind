import React, { useState } from 'react'
import TestimonialBox from './TestimonialBox'

function Testomonial() {

const [testData,setTestData] = useState([
  {

    id:1,
    desc: "Lorem fmkfmfkvmfkvmfkvmkfvmkfmvkfmv ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit!",
image:"profile-1.jpg",
position:"Founder & CEO, Huddle",
name:"Elsayed mostafa"
  },
  {

    id:2,
    desc: "Lorem fjnjvnfjvfkvmfkvkfvmfkmvkfmvkfmkfmvkfv  ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit!",
image:"profile-2.jpg",
position:"Founder & CEO, Huddle",
name:"Elsayed nyazii"
  },
  {

    id:3,
    desc: "Lorem xkfkvkvmfkvmfvkl ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit!",
image:"profile-3.jpg",
position:"Founder & CEO, Huddle",
name:" marii Elsayd "
  },
])

  return (
<>
<section className='mt-[150px]'>

<div className='container relative'>

<div className='absolute left-[20px] top-[-35px]'>
  <img src='/src/assets/images/bg-quotes.png'/>
</div>
<div className='grid grid-cols-1 md:grid-cols-2
 lg:grid-cols-3 gap-[40px] relative z-50'>
{testData.map((item)=>(
  <TestimonialBox key={item.id}desc={item.desc} image={item.image}
   position={item.position} name={item.name} />
))}

</div>

</div>

</section>
</>  )
}

export default Testomonial