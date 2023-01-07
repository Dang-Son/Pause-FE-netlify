import styled from "styled-components";

import { PlayIcon } from "@heroicons/react/24/solid";
function PlaylistCard({ genreName = "All genres" }) {
    const StyledPlaylistCard = styled.div`
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 150px;
        margin-top: 10px;
        margin-left: 20px;
        border-radius: 10px;
        border: #70809094 1px solid;
        padding-left: 10px;
        padding-right: 10px;

        :hover {
            background: #ff883ea6;
            transform: scale(1.1, 1.1);
            transition: all 0.3s ease-in-out;
        }

        svg {
            position: absolute;
            top: 45px;
            left: 52px;
            width: 22px;
            height: 22px;
            border-radius: 25px;
            background: #ff883e;
            color: white;
            padding: 2px;
            padding-left: 3px;
        }

        p.title {
            margin: 0;
            margin-top: 5px;
            margin-left: 10px;
            font-size: 13px;
            font-weight: bold;
            color: #2e3271;
        }

        p.name {
            font-size: 13px;
            font-weight: bold;
            margin-left: 10px;
        }
    `;

    const StyledImage = styled.img`
        margin-top: 10px;
        align-items: center;
        width: 95px;
        height: 90px;
        border-radius: 10px;
    `;
    return (
        <StyledPlaylistCard>
            <StyledImage
                placeholder="https://via.placeholder.com/300"
                src={`https://picsum.photos/200?random=${Math.round(
                    Math.random() * 100
                )}`}
                alt=""
                className="mx-auto d-block shadow-lg"
            />
            <p className="title"> {genreName}</p>
            <p className="name">Top 50 </p>

            <PlayIcon />
        </StyledPlaylistCard>
    );
}

export default PlaylistCard;
