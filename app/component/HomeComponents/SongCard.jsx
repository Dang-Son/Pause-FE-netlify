import { useRef, useState } from "react";
import styled from "styled-components";
import Player from "../SongControl/components/Player";

function SongCard() {
    const StyledImage = styled.img`
        align-items: center;
        border-radius: 10px;
        width: 170px;
        height: 170px;
    `;

    // Ref
    const audioRef = useRef(null);

    // State
    const [songs, setSongs] = useState([
        {
            name: "Beaver Creek",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: "2",
            active: true,
        },
    ]);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    // Functions
    const updateTimeHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime, duration });
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        let nextSong = songs[(currentIndex + 1) % songs.length];
        await setCurrentSong(nextSong);

        const newSongs = songs.map((song) => {
            if (song.id === nextSong.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        if (isPlaying) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            {/* <StyledImage
                placeholder="https://via.placeholder.com/200"
                src="https://picsum.photos/id/287/4288/2848"
                alt=""
                className=" rounded-4 shadow-lg "
            /> */}

            <Player
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
                setSongs={setSongs}
            />

            <audio
                onLoadedMetadata={updateTimeHandler}
                onTimeUpdate={updateTimeHandler}
                onEnded={songEndHandler}
                ref={audioRef}
                src={currentSong.audio}
            />
        </div>
    );
}

export default SongCard;
