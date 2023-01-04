import { Link } from "@remix-run/react";
import styled from "styled-components";

function MenuItem({ children, text, onClick, activeItem, setActiveItem }) {
    const StyledMenuItem = styled.li`
        list-style-type: none;
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            opacity: 0.9;
            color: ${(props) => (props.isActive ? `#ff883e` : `#000000a7`)};
        }

        span {
            color: ${(props) => (props.isActive ? `#ff883e` : `#000000a7`)};
            opacity: 0.8;
            font-weight: ${(props) => (props.isActive ? "bolder" : "normal")};
        }

        :hover {
            font-size: 20px;
            transition: all 0.3s ease-in-out;
        }
    `;

    const link = text !== "Home" ? text.toString().toLowerCase() : "";
    return (
        <Link to={`/${link}`}>
            <StyledMenuItem
                isActive={activeItem === text}
                className="my-4"
                onClick={() => {
                    setActiveItem(text);
                }}
            >
                {children}
                <span color="#2E3271">{text}</span>
            </StyledMenuItem>
        </Link>
    );
}

export default MenuItem;
