import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

interface PageWrapperProps{
    children: React.ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> =  ({children}) => {
    return (
        <div className="flex flex-col w-[100vw] items-center relative min-h-[100vh] gap-10 justify-center">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default PageWrapper