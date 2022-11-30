import { Outlet, useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import ListSongs from "~/component/RecentlyPlayed";
// import MoreSong from "~/component/MoreSong";
// import RecentlyPlayed from "~/component/RecentlyPlayed";
import Sidebar from "~/sidebar";

export const loader = async () => {
  const playList_url = "http://127.0.0.1:8000/api/song";
  const response = await fetch(playList_url);
  // console.log(response);
  var data = await response.json();
  // console.log(data);
  return data;
};

const StyledLeftSide = styled.div`
  float: left;
  width: 70%;
  padding: 15px;
  border-right: 1px solid rgb(192, 192, 192);
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
`;

const StyledMoreSong = styled.div`
  width: auto;
  height: auto;
  margin-top: 20px;
  /* background-color: black; */
  /* padding-right: 15px; */
  .section {
    display: flex;
    padding-top: 15px;
    margin-right: 0px !important;
    /* scroll-snap-type: x mandatory; */
    /* width: 900px; */
  }
  li {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 170px;
    height: 220px;
    margin: 0 10px;
  }
`;

const StyledRightSide = styled.div`
  display: inline-block;
  width: 30%;
  padding-top: 15px;
  height: auto;
  margin-left: 3rem;
  /* background-color: #000; */
`;

function Index() {
  // const { data } = useLoaderData();
  // console.log("2", data);

  return (
    <>
      <StyledLeftSide>
        <StyledListRecentlyPlayed>
          <div className="fs-3 fw-semibold">Recently Played</div>
          {/* {data.map((song) => (
            <>
              <li key={song.id}>
                <h3>{song.artist}</h3>
                <h3>{song.attributes.name}</h3>
              </li>
            </>
          ))} */}
          <div className="section">
            <ul>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
            </ul>
          </div>
        </StyledListRecentlyPlayed>

        <StyledMoreSong>
          <div className="fs-3 fw-semibold">More of what you like</div>
          <div className="section">
            <ul>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
            </ul>
          </div>
        </StyledMoreSong>

        <StyledMoreSong>
          <div className="fs-3 fw-semibold">Top songs</div>
          <div className="section">
            <ul>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
              <li>
                <ListSongs />
              </li>
            </ul>
          </div>
        </StyledMoreSong>
      </StyledLeftSide>

      <StyledRightSide>
        <Sidebar>
          <Outlet />
        </Sidebar>
      </StyledRightSide>
    </>
  );
}

export default Index;
