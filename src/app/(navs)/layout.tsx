import {Navs} from "@/components/custom/Navs";
import React from "react";

export default function EducationsLayout({children}: {children: React.ReactNode}) {
  return (
      <div className={'container'}>
        <Navs/>
        <div className=" p-2">
          {children}
        </div>
      </div>
  )
}