import { useState } from "react"
import PageWrapper from "../components/PageWrapper"

const Subscribe = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        // TODO: Handle Email Submit (Ask client how they want to store information)
        console.log(email)
    }

    return (
        <PageWrapper>
            <img src="src/assets/decor/yellow_heart.svg" className="absolute left-52 top-60"/>
            <img src="src/assets/decor/green_heart.svg" className="absolute right-52 bottom-60"/>
            <img src="src/assets/heart.svg" className="absolute z-[-1]" />
            <div className="inline-block w-[50%]">
                <div className="w-[40%] m-auto">
                    <p className="font-semibold italic mb-5">let's keep in touch!</p>
                    <input
                        type="text"
                        placeholder="email"
                        className="placeholder:text-black border-[1px] mb-5 border-black pl-2
                        focus:outline-none w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div
                    className="m-auto border-[2px] border-black w-fit bg-[#F29CBB] rounded-[50px] 
                    hover:underline hover:underline-offset-[3px] cursor-pointer text-center"
                    onClick={handleSubmit}
                >
                    <p className="p-1 pl-2 pr-2">subscribe</p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Subscribe;