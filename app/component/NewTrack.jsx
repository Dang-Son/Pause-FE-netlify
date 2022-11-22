import styled from "styled-components";
import { StyleTitleFont } from "./RecentlyPlayed";

const AvatarNewTrack = styled.div`
  background-image: url(${(prop) => prop.imageUrl});
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #000; */
  background-size: cover;
  border: 1.5px solid gray;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNoti = styled.span`
  scale: 0.7 !important;
`;

function NewTrack() {
  return (
    <div>
      <AvatarNewTrack imageUrl="https://picsum.photos/500">
        <StyledNoti className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle aaa">
          {/* <span class="visually-hidden">New alerts</span> */}
        </StyledNoti>
      </AvatarNewTrack>
      <Name>
        <StyleTitleFont>Name</StyleTitleFont>
      </Name>
    </div>
  );
}

export default NewTrack;
