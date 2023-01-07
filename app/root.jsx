import {
    LiveReload,
    Outlet,
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import globalStylesUrl from "~/styles/global.css";

import Header from "./header";

export const links = () => [
    {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/lux/bootstrap.min.css",
    },
    {
        rel: "stylesheet",
        href: globalStylesUrl,
    },
];

export const meta = () => {
    return {};
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                {typeof document === "undefined" ? "__STYLES__" : null}
            </head>
            <body>
                <div className="row">
                    <div className="col-2">
                        <Header />
                    </div>

                    <div className="col-10">
                        <Outlet />
                    </div>
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
