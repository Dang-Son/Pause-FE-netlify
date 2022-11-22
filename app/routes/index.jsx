import { Outlet } from "@remix-run/react";
import styled from "styled-components";
import ListSongs from "~/component/RecentlyPlayed";
// import MoreSong from "~/component/MoreSong";
// import RecentlyPlayed from "~/component/RecentlyPlayed";
import Sidebar from "~/sidebar";

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
  height: 1000px;
  margin-left: 3rem;
  /* background-color: #000; */
`;

function Index() {
  return (
    <>
      <StyledLeftSide>
        <StyledListRecentlyPlayed>
          <div className="fs-3 fw-semibold">Recently Played</div>
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
