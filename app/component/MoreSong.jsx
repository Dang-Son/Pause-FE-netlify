import styled from "styled-components";

const StyledMoreSong = styled.div`
  .avatar {
    /* background-color: #000; */
    background-image: url(${(prop) => prop.imageUrl});
    background-size: cover;
    width: auto;
    height: 180px;
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .description {
    text-overflow: ellipsis;
  }
`;
function MoreSong() {
  return (
    <StyledMoreSong imageUrl="https://picsum.photos/500">
      <div className="avatar"></div>
      <div className="info">
        <div className="title">Title</div>
        <div className="description">
          Son vip pro no 1 dang test desctription rat dai sssssss aaaaaaaaa
          ddddddddd ffffffffffff
        </div>
      </div>
    </StyledMoreSong>
  );
}

export default MoreSong;
