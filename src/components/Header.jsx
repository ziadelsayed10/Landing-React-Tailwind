import { useEffect, useRef, useState } from "react"

function Header() {
const headerRef = useRef();
useEffect(()=>{
    window.addEventListener("scroll", () =>{
        if (window.scrollY >45) {
            headerRef.current.style.background = "#0c1524";
            headerRef.current.style.padding = "20px 0";
        }else{
            headerRef.current.style.background = "transparent";
            headerRef.current.style.padding = "60px 0";

        }
})
},[])


    const [links, setlinks] = useState(["features","Team","Signin"])
    return (
        <>
            <header
            ref={headerRef}
            className=" pt-14  fixed top-0 left-0 w-full z-50 transition-all duration-200  ">
                
            
            <div className="container  flex justify-between items-center gap-[30px] sm:gap-0 flex-col  sm:flex-row">
            <a href="/"><img src="/images/logo.svg" /></a>
            <nav>
                <ul className="flex items-center gap-12">
                    {links.map((link) => (
                        <li  key={link}>
                            <a href= '/' 
                            className="text-white opacity-[0.9]
                             hover:opacity-[1]
                              hover:underline  
                              transition-opacity duration-200">
                                {link}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>
            </div>
            </header>
        </>
    )
}

export default Header