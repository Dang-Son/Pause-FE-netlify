import styled from "styled-components";
import MenuItem from "./component/Sidebar/MenuItem";
import {
    NewspaperIcon,
    MagnifyingGlassCircleIcon,
    HeartIcon,
    RectangleStackIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowLeftCircleIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "@remix-run/react";

function Header() {
    const StyledHeader = styled.header`
        position: fix;
        padding-left: 20px;
        padding-top: 10px;
        height: 100vh;
        background: white;
        border-right: 3.5px solid rgba(255, 115, 0, 0.2);
    `;

    const StyledBranch = styled.span`
        letter-spacing: 12px;
        font-size: 35px;
        font-weight: bold;
        color: #ff883e;
        cursor: pointer;
        text-decoration: none;
    `;

    const StyledNavMenu = styled.div`
        h5 {
            margin-top: 40px;
            opacity: 0.7;
        }

        ul {
            margin: 0;
            padding: 0;
            margin-top: 10px;
        }
    `;

    const styledSvg = {
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };

    const [activeItem, setActiveItem] = useState("Home");
    const menuItemProps = { activeItem, setActiveItem };

    return (
        <StyledHeader className="header-area header-sticky sticky-top shadow-sm">
            <Link to="/">
                <StyledBranch className="branch-name">Sparingly</StyledBranch>
            </Link>

            {/* NavMenu */}
            <StyledNavMenu>
                <h5 className="text-secondary fw-light top-item">MENU</h5>
                <ul>
                    <MenuItem {...menuItemProps} text="Home">
                        <NewspaperIcon {...styledSvg} />
                    </MenuItem>

                    <MenuItem {...menuItemProps} text="Search">
                        <MagnifyingGlassCircleIcon {...styledSvg} />
                    </MenuItem>

                    <MenuItem text="Favorite">
                        <HeartIcon {...styledSvg} />
                    </MenuItem>

                    <MenuItem text="Playlist">
                        <RectangleStackIcon {...styledSvg} />
                    </MenuItem>

                    <MenuItem text="Following">
                        <UserIcon {...styledSvg} />
                    </MenuItem>
                </ul>

                <h5 className="text-secondary fw-light ">GENERAL</h5>
                <MenuItem text="Setting">
                    <Cog6ToothIcon {...styledSvg} />
                </MenuItem>

                <MenuItem text="Logout">
                    <ArrowLeftCircleIcon {...styledSvg} />
                </MenuItem>

                <h5 className="text-secondary fw-light ">MOBILE</h5>
                <MenuItem text="Apps">
                    <DevicePhoneMobileIcon {...styledSvg} />
                </MenuItem>
            </StyledNavMenu>
        </StyledHeader>
    );
}

export default Header;
