import { useLoaderData } from "@remix-run/react";
import styled from "styled-components";
import { StyleTitleFont, StyledNormalFont } from "./RecentlyPlayed";

const StyledArtist = styled.div`
  .section-at {
    padding-top: 10px;
    width: 100%;
  }
  li {
    display: flex;
    padding: 0px 3px 0px 0;
  }
`;

const StyledListArtist = styled.div`
  /* position: flex; */
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
`;

const StyledAvatar = styled.div`
  background-image: url(${(prop) => prop.imageUrl});
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #000; */
  background-size: cover;
  border: 1.5px solid gray;
`;

const StyledArtistInfo = styled.div`
  display: inline-block;
  padding-left: 7px;
  height: 50px;
  justify-content: center;
  /* transform: translateY(-15%); */
  width: 150px;
  margin-right: 30px;
  .name {
    width: 150px !important;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledBtnFollow = styled.button`
  width: auto;
  height: 30px;
  justify-content: center;
  /* float: right; */
  /* border-radius: 50%; */
  transform: translateX(150%);
`;

function ArtistYouShouldFollow() {
  const { data } = useLoaderData();

  return (
    <StyledArtist>
      <div className="fs-5 fw-semibold">Artist you should follow</div>
      <div className="section-at">
        {data.slice(0, 3).map((song) => (
          <ul key={song.id}>
            <li>
              <StyledListArtist className="d-flex align-items-center mb-3">
                <StyledAvatar imageUrl="https://picsum.photos/500" />
                <StyledArtistInfo>
                  <StyleTitleFont className="name">
                    {song.attributes.name}
                  </StyleTitleFont>
                  <StyledNormalFont className="followed">
                    Followed
                  </StyledNormalFont>
                </StyledArtistInfo>
                <StyledBtnFollow>Follow</StyledBtnFollow>
              </StyledListArtist>
            </li>
          </ul>
        ))}
      </div>
    </StyledArtist>
  );
}

export default ArtistYouShouldFollow;
