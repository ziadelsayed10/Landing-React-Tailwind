import React, { useState } from 'react'
import{FaTwitter,FaInstagram, FaFacebookF} from 'react-icons/fa'
function Footer() {
  const[contact,setcontact] = useState([
    {icon:"icon-phone.svg" , text:"0140525285252"},
    {icon:"icon-email.svg" , text:"ddas@fadsecff.com"}
]);
const[links, setlinks] = useState([
  "About us",
  "tact uscon",
  "jobs",
  "terms",
  "press",
  "privecy",
  "blog",
]);


const [socialicons,setsocialicons]= useState([
"facebook",
"twitter",
"instagram"

]);
  return (
<>
<section className='bg-[#0c1524] pt-[420px] md:pt-[300px] pb-[100px] text-white'>
<div className='container'>
<a href='/'>

<img src='/src/assets/images/logo.svg'
className='w-[175px] h-[66px] object-contain'
/>
</a>

<div className='mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]'>
  <div className='flex items-start gap-[15px] w-[340px] max-w-full'>
<img src='/src/assets/images/icon-location.svg'
className='w-[18px] h-[18px] object-contain'
/>
<p className='font-normal text-sm tracking-[0.8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta
   quos obcaecati
   sunt nesciunt perspiciatis id commodi similique quo facere?</p>

  </div>
<div>
{contact.map((item)=>(
<div key={item.text} className='flex items-center gap-[15px] mb-[15px] last-of-type:mb-0'>
  <img src={`src/assets/images/${item.icon}`} className='w-[18px]  h-[18px] object-contain'
  />
<p>{item.text}</p>
</div>
))}
</div>


<ul className='grid grid-cols-1 md:grid-cols-2 gap-[20px] transition-colors duration-200 text-base'>
{links.map((link)=>(
  <li className=' hover:text-mainColor' key={link}>
  <a href={`/${link.toLocaleLowerCase()}`}>{link}</a>
  </li>
))}

</ul>


<ul className='flex gap-[15px] w-full justify-center md:w-auto'>

  {socialicons.map((item)=>(
    <li key={item}>
<a href='' className='group'>
 <div className='w-[40px] h-[40px] element-center border border-white rounded-full'>
{item === "facebook" ? (
<FaFacebookF className='group-hover:text-mainColor transition-all duration-200'/> 
): item === "twitter" ? (
<FaTwitter className='group-hover:text-mainColor transition-all duration-200'/> 
):( <FaInstagram className='group-hover:text-mainColor transition-all duration-200'/> 
)}
 </div>
</a>
    </li>
  ))}
</ul>

</div>
</div>

</section>
</>  
)
}

export default Footer