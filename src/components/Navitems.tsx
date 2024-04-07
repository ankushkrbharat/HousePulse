"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Item } from "@radix-ui/react-dropdown-menu"
import { BadgeIndianRupee, GanttChart, IndianRupee, LucideCircuitBoard, Newspaper, Phone, UserRound } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

        const navdata=[{
            id:"0",
            name:"Investment",
            route:"/investment",
            icon:<BadgeIndianRupee/>
        },
        {
            id:"1",
            name:"Blogs",
            route:"/blogs",
            icon:<Newspaper/>

        },
        {
            id:"2",
            name:"Contact",
            route:"/Contact",
            icon:<Phone/>
        }
    ]


const Navitems = () => {

    const path=usePathname()

  return (
    <>
         {navdata.map((item)=>(
                <div id={item.id} key={item.id} className="flex flex-row gap-4" >
                <Link href={item.route} className="flex ">
                    <Button className={cn(item.route==path&&"bg-primary","hover:bg-primary/5 hover:text-primary hover:light:text-black flex gap-2")} variant={"ghost"}><span className="w-6 h-6">{item.icon??""}</span>{item.name}</Button>
                </Link>
                </div>
            ))}
    </>
  )
}

export default Navitems