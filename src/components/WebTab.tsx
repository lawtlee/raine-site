import { ReactNode } from "react";

interface WebTabProps{
    children: ReactNode,
    color: string
}

const WebTab:React.FC<WebTabProps> = ({children, color}) => {
    return(
        <div className="rounded-md border-[2px] border-black">
            <div className={`flex flex-row justify-between 
                items-center border-b-[2px] border-black ${color}`}>
                <div className="flex flex-row items-center gap-1 p-1">
                    <img src="src/assets/red_dot.svg"/>
                    <img src="src/assets/yellow_dot.svg"/>
                    <img src="src/assets/green_dot.svg"/>
                </div>
                <img src="src/assets/close.svg" className="p-1"/>
            </div>
            {children}
        </div>
    )
}

export default WebTab;