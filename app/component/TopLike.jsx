import styled from "styled-components";
import { StyleTitleFont, StyledNormalFont } from "./RecentlyPlayed";

const StyledListSong = styled.div`
  display: flex;
  width: 300px;
  height: 70px;
  .song {
    display: block;
    padding-left: 5px;
  }

  .wrapper {
    /* width: 200px; */
    height: 80px;
    /* position: flex; */
  }

  .deep2 {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 3%;
    /* border: 1px solid red; */
    transform: translateX(5%) translateY(-85%);
    background: gray 0.5;
    z-index: -1;
    border: 1px solid gray;
  }
`;

const StyledAvatar = styled.div`
  background-image: url(${(prop) => prop.imageUrl});
  background-size: cover;
  display: block;
  width: 50px;
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
      <div className="warpper">
        <StyledAvatar
          className="avatar"
          imageUrl="https://picsum.photos/500"
        ></StyledAvatar>
        <div className="deep2"></div>
      </div>
      <div className="song">
        <StyleTitleFont className="artist">Artist</StyleTitleFont>
        <StyleTitleFont className="name">Name</StyleTitleFont>
        <StyledNormalFont className="followed">Followed</StyledNormalFont>
      </div>
    </StyledListSong>
  );
}

export default TopLike;
