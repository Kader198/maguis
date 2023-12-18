import { Box, Code, Cpu, Github, Layout, Linkedin, Mail, Server, Twitter } from "lucide-react";
import Image from "next/image";

export default function Page(){
    return (
        <div className="">    
            <section className=" flex justify-around mx-2 items-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-gray-200  py-20 rounded-xl">
                <div className="text-center">
        
                <h2 className="text-slate-700 text-2xl">
                    Hi, My Name is <span className=" underline">
                        Abdel Kader Maguis
                    </span>        
                    </h2> 
                    <div className="mt-4 text-slate-700 text">
                        I'm &nbsp;
                        <span className=" underline">
                            React developer
                        </span> & &nbsp;
                        <span className=" underline">
                         Software Engineer
                        </span>
                    </div>
                    <div className="flex justify-center mt-5">
                    <div className="flex justify-center space-x-4 mt-8">
      {/* Github Button */}
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700">
        <Github className="h-5 w-5 " />
      </a>

      {/* Linkedin Button */}
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-700">
        <Linkedin className="h-5 w-5" />
    
      </a>

      {/* Mail Button */}
      <a href="mailto:your.email@example.com" className="flex items-center bg-red-800 text-white py-2 px-4 rounded-full hover:bg-red-700">
        <Mail className="h-5 w-5 " />    
      </a>

      {/* Twitter Button */}
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400">
        <Twitter className="h-5 w-5 " />
      </a>
    </div>
                    </div>
                </div>
                
                <Image alt="My face"
                    width={200}
                    height={200}
                    className="rounded-xl"
                    src="/assets/face.jpg" />

            </section>
        </div>
    )
}