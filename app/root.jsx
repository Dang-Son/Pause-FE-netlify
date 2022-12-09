import { LiveReload, Outlet, Links, Meta } from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";
import Header from "./header";
import "~/styles/bootstrap.min.css";
import styled from "styled-components";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];
export const meta = () => {
    return {};
};

export default function App() {
    return (
        <Document>
            <Container>
                <Outlet />
            </Container>
        </Document>
    );
}

const StyledContent = styled.div`
    display: flex;
    height: 1000px;
    padding: 60px 30px 0 30px;
`;

function Document({ children, title }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-csale=1"
                />
                <Meta />
                <Links />
                <script
                    src="https://kit.fontawesome.com/6d6975ab12.js"
                    crossOrigin="anonymous"
                ></script>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                    crossOrigin="anonymous"
                />

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                    crossOrigin="anonymous"
                ></script>
                {typeof document === "undefined" ? "__STYLES__" : null}
                <title>{title ? title : "My App"}</title>
                <Header></Header>
            </head>
            <body>
                {children}
                {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
            </body>
        </html>
    );
}

function Container({ children }) {
    return (
        <>
            <StyledContent>{children}</StyledContent>
        </>
    );
}
