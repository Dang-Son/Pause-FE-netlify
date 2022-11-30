import styled from "styled-components";
import NewTrack from "./component/NewTrack";
import ArtistYouShouldFollow from "./component/ArtistYouShouldFollow";
import TopLike from "./component/TopLike";

// Artist you should follow

// Top like
const StyledTopLike = styled.div`
  width: auto;
  .section-l {
    display: block;
    padding: 5px 0px;
  }
  li {
    display: flex;
    padding-top: 10px;
  }
`;

function Sidebar() {
  return (
    <>
      <NewTrack />

      <ArtistYouShouldFollow />

      <StyledTopLike>
        <div className="fs-5 fw-semibold">9999 likes</div>
        <div className="section-l">
          <ul>
            <li>
              <TopLike />
            </li>
            <li>
              <TopLike />
            </li>
            <li>
              <TopLike />
            </li>
            <li>
              <TopLike />
            </li>
          </ul>
        </div>
      </StyledTopLike>
    </>
  );
}

export default Sidebar;
