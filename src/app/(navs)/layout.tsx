import {Navs} from "@/components/custom/Navs";
import React from "react";

export default function EducationsLayout({children}: {children: React.ReactNode}) {
  return (
      <div className={'container'}>
        <Navs/>
        {children}
      </div>
  )
}