import styled from "styled-components";
import PlaylistCard from "./PlaylistCard";

function Charts() {
    return (
        <StyleCard>
            <StyledSection>Charts: Top 50</StyledSection>
            <ul className="mx-0">
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </ul>
        </StyleCard>
    );
}

export default Charts;
export const StyledSection = styled.h5`
    padding-top: 20px;
    padding-left: 20px;
    color: #2e3271;
    opacity: 0.9;
`;

export const StyleCard = styled.div`
    border-radius: 20px;
    max-width: 70vw;
    background: white;
    height: ${(props) => (props.height ? props.height : "230px")};
    ul {
        margin: 0;
        padding: 0;
        display: flex;
    }
    overflow: hidden;
`;
