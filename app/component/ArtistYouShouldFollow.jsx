import styled from "styled-components";
import { StyleTitleFont, StyledNormalFont } from "./RecentlyPlayed";

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

const StyledArtist = styled.div`
  display: inline-block;
  padding-left: 7px;
  height: 50px;
  justify-content: center;
  /* transform: translateY(-15%); */
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
  return (
    <StyledListArtist className="d-flex align-items-center mb-3">
      <StyledAvatar imageUrl="https://picsum.photos/500" />
      <StyledArtist>
        <StyleTitleFont className="name">
          Anh mai la nguoi den sau
        </StyleTitleFont>
        <StyledNormalFont className="followed">Followed</StyledNormalFont>
      </StyledArtist>
      <StyledBtnFollow>Follow</StyledBtnFollow>
    </StyledListArtist>
  );
}

export default ArtistYouShouldFollow;
