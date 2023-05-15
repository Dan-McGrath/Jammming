import { tracksArray } from "../mockdata";
import Track from "./Track";

const Tracklist = () => {
    return (
        <div className="track-info">
            <Track tracks={tracksArray} />
        </div>
    )
}

export default Tracklist