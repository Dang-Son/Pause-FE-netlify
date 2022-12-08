import styled from "styled-components";

function BackgroundProfile() {
    return (
        <StyledBackground>
            <StyleImageBackground src="https://picsum.photos/500" alt="d" />
        </StyledBackground>
    );
}
export default BackgroundProfile;
const StyledBackground = styled.div`
    width: 100%;
    padding: 0px;
    margin: 0px;
    height: 200px;
`;

const StyleImageBackground = styled.img`
    width: 5%;
`;
