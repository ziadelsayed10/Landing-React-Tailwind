import { useState } from "react"
import FeatureBox from "./FeatureBox";

function Features() {

    const [items, setitems] = useState([
        {
        icon: "icon-access-anywhere.svg" ,
         title:"Access your files anywhere",
         desc:"lorem hdhdbd jimfmv ydbcmj jssjnmnd cmdmcm jvmfumv ijjf hhggh i.alkjf"
    },
        {
        icon: "icon-collaboration.svg" ,
         title:"Access yyour files anywhere",
         desc:"lorem hdhdbd jimfmv ydbcmj jssjnmnd cmdmcm jvmfumv ijjf hhggh i.alkjf"
    },
        {
        icon: "icon-access-anywhere.svg" ,
         title:"Access yyyour files anywhere",
         desc:"lorem hdhdbd jimfmv ydbcmj jssjnmnd cmdmcm jvmfumv ijjf hhggh i.alkjf"
    },
        {
        icon: "icon-any-file.svg" ,
         title:"Access yyyyour files anywhere",
         desc:"lorem hdhdbd jimfmv ydbcmj jssjnmnd cmdmcm jvmfumv ijjf hhggh i.alkjf"
    },
]);
  return (
<>
<section>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
{items.map((item)=>(
    <FeatureBox key={item.title} title={item.title} icon={item.icon} desc={item.desc}/>
))}
        </div>
    </div>
</section>
</>  )
}

export default Features