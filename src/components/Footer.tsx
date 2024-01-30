import React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return(
        <div className="absolute bottom-6 w-[85vw] flex flex-row justify-between items-center">
            <Link to="/upcoming-shows" className="hover:underline underline-offset-[3px]">upcoming shows</Link>
            <div className="flex gap-3 items-center">
                <Link to="https://music.apple.com/us/artist/raine/572730270"><img src="src/assets/logos/apple_music.svg"/></Link>
                <Link to="https://www.tiktok.com/@rainesmusic?_t=8jSQZwurdTq&_r=1"><img src="src/assets/logos/tiktok.svg"/></Link>
                <Link to="https://www.youtube.com/channel/UCE8kmNXJS9SCIM3Gm0GqY3w"><img src="src/assets/logos/youtube.svg"/></Link>
                <Link to="https://open.spotify.com/artist/1hxElSEVvcFYd7lTQaTXYG"><img src="src/assets/logos/spotify.svg"/></Link>
                <Link to="https://www.instagram.com/singing_intheraine/?hl=en"><img src="src/assets/logos/instagram.svg"/></Link>
            </div>
            <Link to="/subscribe" className="hover:underline underline-offset-[3px]">subscribe</Link>
        </div>
    )
}

export default Footer