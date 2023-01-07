import styled from "styled-components";
import Charts, { StyleCard } from "../component/HomeComponents/Chart";
import ProfileAvatar from "../component/HomeComponents/ProfileAvatar";
import SongList from "../component/HomeComponents/SongList";
import SongCard from "../component/HomeComponents/SongCard";
export const loader = async () => {
    const playList_url = "http://127.0.0.1:8000/api/song";
    const response = await fetch(playList_url);
    var data = await response.json();
    return data;
};

const StyledLeftSide = styled.div`
    float: left;
    padding: 15px;
`;

const StyledListRecentlyPlayed = styled.div`
    width: auto;
    height: auto;
    /* background-color: black; */
    padding-right: 15px;
    .section {
        display: flex;
        padding-top: 15px;
        /* scroll-snap-type: x mandatory; */
        /* width: 900px; */
    }
    li {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 170px;
        height: 200px;
        margin: 0 10px;
    }
    .font-bold {
        font-weight: 900;
        font-weight: bold;
        color: #2e3271;
    }

    .max-200 {
        max-width: 1900px;
    }
`;

export const StyledFont = styled.div`
    .opa-9 {
        opacity: 0.5;
    }
`;
function Index() {
    return (
        <StyledFont>
            <StyledLeftSide>
                <StyledListRecentlyPlayed>
                    <div className="d-flex">
                        <div className="fs-3 fw-bold font-bold p-2 w-75 ">
                            Discover &gt;
                            <span className="opa-9"> Recently Played </span>
                        </div>

                        <div className=" p-2 flex-shrink-1">
                            <ProfileAvatar />
                        </div>
                    </div>

                    <Charts />
                </StyledListRecentlyPlayed>

                {/* Listening history */}
                <div className="row">
                    <div className="col-9">
                        <SongList title="Listening history" />
                    </div>
                    <div className="col-3">
                        <StyleCard className="mt-4" height="280px">
                            <SongCard />
                        </StyleCard>
                    </div>
                </div>
            </StyledLeftSide>
        </StyledFont>
    );
}

export default Index;
