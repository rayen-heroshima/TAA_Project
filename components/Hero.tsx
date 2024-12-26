//import { div } from "framer-motion/client";
"use client";
import { esgData } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";
import Breadcrumbs from "./Breadcrumbs";
export default function Hero(){
    return(
        <div className="max-w-7xl mx-auto space-y-12">
          <Breadcrumbs/>
          <h1 className="text-2xl font-semibold mb-6 text-red-800 ">
            <center>
              ESG dans le secteur automobile : Construisons un avenir durable
              ensemble
            </center>
          </h1>

          <h3>
            <center>Concepts Clés ESG</center>{" "}
          </h3>
        
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-0 ">
              {esgData.map((category) => (
                <HoverEffect
                  key={category.id}
                  category={category}
                 
                />
              ))}
            </div>
          </div>

          
        </div>


    )
}