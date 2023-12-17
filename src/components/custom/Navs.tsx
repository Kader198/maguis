'use client';
import {Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import {datalinks, NavsIcons} from "@/utils/data";
import {useRouter} from "next/navigation";
import React from "react";

export const Navs = () => {
    const router = useRouter()
    return (
        <main className="flex ">
            <Menubar className={'my-3.5 ml-3.5 h-10 '}>
                {
                    datalinks?.map(link => {
                        return (
                        <MenubarMenu key={link.url} >
                            <MenubarTrigger
                                key={link.url} onClick={() => {router.push(link.url)}} className={'active:border-amber-400 justify-center'}>
                                {/*// @ts-ignore*/}
                                <link.Icon className={'w-6 h-5'}/>
                                {link.name}
                            </MenubarTrigger>
                        </MenubarMenu>
                    )})
                }
            </Menubar>
        </main>
    );
};