import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const example = [
    {
        date: "02/14",
        venue: "Adults Only",
        city: "Los Angeles",
        link: "https://tixr.com/e/93437"
    },
    {
        date: "00/00",
        venue: "Super Bowl",
        city: "Los Angeles",
        link: ""
    },
    {
        date: "00/00",
        venue: "Genghis Cohen",
        city: "Los Angeles",
        link: ""
    },
]

const UpcomingShows: React.FC = () => {
    return(
        <PageWrapper>
            <div className="block w-[80%] m-auto">
                <p className="font-semibold italic mb-2">upcoming shows</p>
                <div className="grid grid-cols-6">
                    <p className="col-span-1 border-[2px] border-r-0 border-black bg-[#FFE68F] text-center p-2">date</p>
                    <p className="col-span-2 border-[2px] border-r-0 border-black bg-[#FFD3E3] text-center p-2">venue</p>
                    <p className="col-span-2 border-[2px] border-r-0 border-black bg-[#E3FED6] text-center p-2">city</p>
                    <p className="col-span-1 border-[2px] border-black bg-[#8DCFFF] text-center p-2">info</p>
                    {example.map((example, index) => (
                        <>
                            <p key={index} className="col-span-1 border-[2px] border-r-0 border-t-0 border-black text-center p-3">{example.date}</p>
                            <p className="col-span-2 border-[2px] border-r-0 border-t-0 border-black p-3">{example.venue}</p>
                            <p className="col-span-2 border-[2px] border-r-0 border-t-0 border-black p-3">{example.city}</p>
                            <p className="col-span-1 border-[2px] border-t-0 border-black p-3"><Link to={example.link} className="underline hover:text-[#0f4bf0]">tickets</Link></p>
                        </>
                    ))}
                </div>
            </div>
        </PageWrapper>
    )
}

export default UpcomingShows;