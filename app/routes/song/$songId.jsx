import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BACKEND_SERVER_LINK } from "~/constants/constant";
import NavigationInfo from "../../component/Figma/NavigationInfo";

export const loader = async ({ params }) => {
    const playList_url = BACKEND_SERVER_LINK + "/song/" + params.songId;
    const response = await fetch(playList_url);

    if (response.status === 404) {
        return redirect("/");
    }
    var data = await response.json();

    return data;
};

export default function SongDetailRoute() {
    const { data } = useLoaderData();
    console.log("🚀 ~ file: $songId.jsx:19 ~ SongDetailRoute ~ data", data);

    return (
        <div>
            <NavigationInfo />
        </div>
    );
}
