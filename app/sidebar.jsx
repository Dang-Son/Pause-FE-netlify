import styled from "styled-components";
import NewTrack from "./component/NewTrack";
import ArtistYouShouldFollow from "./component/ArtistYouShouldFollow";
import TopLike from "./component/TopLike";

// New Track
const StyledNewTrack = styled.div`
  .section-nt {
    display: flex;
  }
  li {
    display: inline-block;
    margin: 15px 25px 15px 0;
  }
  ul {
    padding: 0%;
  }
`;

// Artist you should follow
const StyledArtist = styled.div`
  .section-at {
    padding-top: 10px;
    width: 100%;
  }
  li {
    display: flex;
    padding: 5px 3px 5px 0;
  }
`;

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
      <StyledNewTrack>
        <div className="fs-5 fw-semibold">New tracks</div>
        <div className="section-nt">
          <ul>
            <li>
              <NewTrack />
            </li>
            <li>
              <NewTrack />
            </li>
            <li>
              <NewTrack />
            </li>
            <li>
              <NewTrack />
            </li>
            <li>
              <NewTrack />
            </li>
            <li>
              <NewTrack />
            </li>
          </ul>
        </div>
      </StyledNewTrack>

      <StyledArtist>
        <div className="fs-5 fw-semibold">Artist you should follow</div>
        <div className="section-at">
          <ul>
            <li>
              <ArtistYouShouldFollow />
            </li>
            <li>
              <ArtistYouShouldFollow />
            </li>
            <li>
              <ArtistYouShouldFollow />
            </li>
          </ul>
        </div>
      </StyledArtist>

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
