import { Link } from "@remix-run/react";
import styled from "styled-components";
import { numberWithCommas } from "~/utils/utils";
const StyledDisableButton = styled.a`
    :hover {
        color: #ec6090 !important;
    }
`;
const StyledImage = styled.img`
    width: 300px;
`;
function LikedSong({ name_song, artist_name, id, liked, views }) {
    return (
        <div className="item">
            <ul>
                <li>
                    <Link to="/">
                        <StyledImage
                            placeholder="https://via.placeholder.com/300"
                            src={`https://picsum.photos/300?random=${id}`}
                            alt=""
                            className="templatemo-item"
                        />
                    </Link>
                </li>
                <li
                    style={{
                        width: "20em",
                    }}
                >
                    <h4>Dota 2 {name_song}</h4>
                    <span>{artist_name}</span>
                </li>

                <li>
                    <h4>View Count </h4>
                    <span>{views}</span>
                </li>
                <li>
                    <h4>Favourite</h4>
                    <span>{numberWithCommas(liked)}</span>
                </li>
                <li>
                    <div className="main-border-button border-no-active">
                        <StyledDisableButton to="/profile" href="#">
                            Donwloaded
                        </StyledDisableButton>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default LikedSong;
