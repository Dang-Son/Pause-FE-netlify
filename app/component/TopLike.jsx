import styled from "styled-components";
import { StyleTitleFont, StyledNormalFont } from "./RecentlyPlayed";

const StyledListSong = styled.div`
  display: flex;
  width: 300px;
  .song {
    display: block;
    padding-left: 5px;
  }
`;

const StyledAvatar = styled.div`
  background-image: url(${(prop) => prop.imageUrl});
  background-size: cover;
  display: block;
  width: 60px;
  height: 50px;
  margin-right: 10px;
  /* background-color: #000; */
  transform: translateY(10%);
  border-radius: 5%;
  border: 1.5px solid gray;
`;

function TopLike() {
  return (
    <StyledListSong>
      <StyledAvatar
        className="avatar"
        imageUrl="https://picsum.photos/500"
      ></StyledAvatar>
      <div className="song">
        <StyleTitleFont className="artist">Artist</StyleTitleFont>
        <StyleTitleFont className="name">Name</StyleTitleFont>
        <StyledNormalFont className="followed">Followed</StyledNormalFont>
      </div>
    </StyledListSong>
  );
}

export default TopLike;
