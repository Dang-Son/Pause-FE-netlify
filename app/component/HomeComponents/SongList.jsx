import { Link } from "@remix-run/react";
import { StyledSection, StyleCard } from "../HomeComponents/Chart";
import SongListItem from "./SongListItem";

function SongList({ title }) {
    return (
        <StyleCard className="mt-4 position-relative" height="60vh">
            <StyledSection>{title}</StyledSection>

            <Link
                to="/search"
                className="position-absolute top-0 end-0 mt-3 me-4 text-secondary fw-bolder"
            >
                See all
            </Link>

            <SongListItem />
            <SongListItem />

            <SongListItem />

            <SongListItem />
        </StyleCard>
    );
}

export default SongList;
