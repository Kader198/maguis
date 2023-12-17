'use client';
import {Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import {datalinks} from "@/utils/data";
import {useRouter} from "next/navigation";

export const Navs = () => {
    const router = useRouter()
    return (
        <main className="flex min-h-screen flex-col  justify-between py-3.5 px-2.5">
            <Menubar className={'py-6  mx-4'}>
                {
                    datalinks?.map(link => (
                        <MenubarMenu key={link.url}>
                            <MenubarTrigger key={link.url} onClick={() => {
                                router.push(link.url)
                            }} className={'w-1/5 justify-center py-2'}>{
                                link.name
                            }</MenubarTrigger>
                        </MenubarMenu>

                    ))
                }
            </Menubar>
        </main>
    );
};