import { Link } from "@remix-run/react";
import styled from "styled-components";

function SongListItem() {
    return (
        <StyledSongListItem className="d-flex p-4 shadow-sm rounded-3">
            <Link className="h-10" to="/song/1">
                <img
                    placeholder="https://via.placeholder.com/300"
                    src={`https://picsum.photos/200?random=${Math.round(
                        Math.random() * 100
                    )}`}
                    alt=""
                    className="mt-2 shadow-lg rounded-3"
                />
            </Link>

            <Link
                to="/song/1"
                className="p-1 ms-2 mt-3 flex-shrink-1  align-items-center"
            >
                <p className="fs-4 mx-0 mt-0 mb-0 fw-bold">Would I see you</p>
                <p> Hellboy </p>
            </Link>
        </StyledSongListItem>
    );
}

const StyledSongListItem = styled.div`
    margin: 25px;
    padding: 10px;
    img {
        width: 80px;
        height: 80px;
    }
`;
export default SongListItem;
