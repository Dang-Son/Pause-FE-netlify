import styled from "styled-components";
import { IMAGE_PLACEHOLDER_LINK } from "~/constants/constant";
import { StyleTitleFont } from "./RecentlyPlayed";

const AvatarNewTrack = styled.div`
  background-image: url(${(prop) => prop.imageUrl});
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #000; */
  background-size: cover;

  .aaa {
    filter: blur(1px);
  }
`;

const StyledBorder = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px dashed black;
  /* animation: rotation 7s infinite linear; */
  transform: translateY(-100%);

  /* @keyframes rotation {
    from {
      transform: translateY(-100%) rotate(0deg);
    }
    to {
      transform: translateY(-100%) rotate(359deg);
    }
  } */
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
      <AvatarNewTrack
        className="position-relative"
        imageUrl={IMAGE_PLACEHOLDER_LINK}
      >
        <StyledNoti className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle aaa">
          <span class="visually-hidden">New alerts</span>
        </StyledNoti>
      </AvatarNewTrack>
      <StyledBorder />
      <Name>
        <StyleTitleFont>Name</StyleTitleFont>
      </Name>
    </div>
  );
}

export default NewTrack;
