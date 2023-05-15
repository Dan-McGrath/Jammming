const Track = ({ tracks }) => {
    return (
        <>
            {
            tracks.map(track =>
            <> 
                <div className="track">
                    <p>{track.id}</p>
                    <p>{track.artist}</p>
                    <p>{track.songName}</p>
                    <p>{track.duration}</p>
                </div>
                <div className="add-button">
                    <button className="btn">+</button>
                </div>
                    
                
            </>    
            )
        }
        </>
        
    )
}

export default Track;