import styled from "styled-components";

export const StyledNormalFont = styled.div`
  font-size: 0.7rem !important;
`;

export const StyleTitleFont = styled.div`
  font-size: 0.9rem !important;
`;

const StyledListSongs = styled.div`
  .avatar {
    /* background-color: #000; */
    background-image: url(${(prop) => prop.imageUrl});
    width: 150px;
    height: 150px;
    background-size: cover;
    border-radius: 3%;
    z-index: 1;
    border: 1px solid gray;
  }

  .wrapper {
    /* width: 200px; */
    height: 160px;
    /* position: flex; */
  }

  .deep2 {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 3%;
    /* border: 1px solid red; */
    transform: translateX(5%) translateY(-95%);
    background: gray 0.5;
    z-index: -1;
    border: 1px solid gray;
  }

  .deep3 {
    /* position: relative; */
    width: 150px;
    height: 150px;
    border-radius: 3%;
    /* border: 1px solid red; */
    transform: translateX(10%) translateY(-90%);
    background: gray 0.5;
    z-index: -1;
    border: 1px solid gray;
  }

  .title {
    /* display: flex; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* justify-content: center; */
  }
  .description {
    color: dimgray !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    width: 150px;
    height: auto;
  }
`;
function ListSongs() {
  return (
    <StyledListSongs imageUrl="https://picsum.photos/500">
      <div className="wrapper">
        <div className="avatar"></div>
        <div className="deep2"></div>
        {/* <div className="deep3"></div> */}
      </div>

      <div className="info">
        <StyleTitleFont className="title">
          Anh mai la nguoi den sau
        </StyleTitleFont>
        <StyledNormalFont className="description small-font">
          Son vip pro no 1 dang test desctription rat dai sssssss aaaaaaaaa
          ddddddddd ffffffffffff
        </StyledNormalFont>
      </div>
    </StyledListSongs>
  );
}

export default ListSongs;
