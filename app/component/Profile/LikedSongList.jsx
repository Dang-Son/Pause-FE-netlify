import { useState } from "react";
import styled from "styled-components";
import LikedSong from "./LikedSong";

export const StyledMainButton = styled.div`
    text-align: center;
    margin-bottom: -53px;
    button {
        font-size: 14px;
        color: #fff;
        background-color: #e75e8d;
        padding: 12px 30px;
        display: inline-block;
        border-radius: 25px;
        font-weight: 400;
        text-transform: capitalize;
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
        z-index: 0;
        border: none;
    }

    button:hover {
        background-color: #fff;
        color: #e75e8d;
    }
`;
const defaultDisplayValue = 3;
function LikedSongList({ liked_songs_data }) {
    const [showNumber, setShowNumber] = useState(defaultDisplayValue);
    return (
        <>
            {liked_songs_data.slice(0, showNumber).map((song) => {
                return (
                    <LikedSong
                        key={song.id}
                        id={song.id}
                        {...song.attributes}
                    />
                );
            })}
            {liked_songs_data.length > showNumber ? (
                <div className="col-lg-12">
                    <StyledMainButton className="main-button" style={{}}>
                        <button
                            onClick={() =>
                                setShowNumber(liked_songs_data.length)
                            }
                        >
                            <i className="fa fa-arrow-down"></i>
                            {` ${liked_songs_data.length - showNumber}`}
                        </button>
                    </StyledMainButton>
                </div>
            ) : (
                <div className="col-lg-12">
                    <StyledMainButton className="main-button">
                        <button
                            onClick={() => setShowNumber(defaultDisplayValue)}
                        >
                            <i className="fa fa-arrow-up"></i>
                        </button>
                    </StyledMainButton>
                </div>
            )}
            {/* <ReactAudioPlayer
                src="https://res.cloudinary.com/dck0bidwh/video/upload/v1670685099/orytclaq85ux64w5u8xg.mp3"
                autoPlay
                controls
            /> */}
        </>
    );
}

export default LikedSongList;
