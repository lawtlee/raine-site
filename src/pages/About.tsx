import PageWrapper from "../components/PageWrapper"
import WebTab from "../components/WebTab";

const About = () => {
    return (
        <PageWrapper>
            <img src="src/assets/monitor.svg" className="absolute z-[-1]" />
            <div className="flex flex-wrap gap-2">
                <div className="lg:w-[25vw] w-[80vw] flex flex-col gap-2">
                    <WebTab color="bg-[#FFC6CD]">
                        <p className="p-2">ABOUT ME</p>
                        <div className="lg:w-[25vw] flex w-full justify-center rounded-md object-center h-[25vw]">
                            <img
                                className="object-center rounded-lg"
                                src="src/assets/raine.jpg"
                            />
                        </div>
                    </WebTab>
                </div>
                <div className="flex flex-col lg:w-[25vw] w-[80vw] text-[14px] gap-2">
                    <WebTab color="bg-[#FFE68F]">
                        <p className="p-1">
                            Raine is emerging as a compelling songwriter and
                            vocalist from the San Fernando Valley, weaving a
                            unique tapestry of R&B, indie, and soul. Her
                            introspective debut EP, "Incognito," garnered
                            immediate attention, landing coveted spots on
                            Spotify's "New Music Friday" and "Fresh Finds"
                            playlists.
                        </p>
                    </WebTab>
                    <WebTab color="bg-[#8DCFFF]">
                        <p className="p-1">
                            Recently distinguished as one of KCRW’s 2023 Young
                            Creators, Raine's collaborative reach extends
                            globally—from partnering with Japan's rock talents
                            Kenta Dedachi and SKYE to syncing with LA's R&B
                            collective Motion Blu. As she captivates local
                            audiences with regular performances in LA, fans
                            eagerly anticipate her upcoming single, "Petrichor,"
                            and second EP slated for a 2024 release.
                        </p>
                    </WebTab>
                </div>
            </div>
        </PageWrapper>
    );
}

export default About;