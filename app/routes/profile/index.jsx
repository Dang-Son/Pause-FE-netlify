import { useLoaderData } from "@remix-run/react";
import LikedSongList from "~/component/Profile/LikedSongList";
import PopularSongs from "~/component/Profile/PopularSongs";
import { ARTIST, BACKEND_SERVER_LINK, USER_ID } from "~/constants/constant";
import ProfileInfo from "../../component/Profile/ProfileInfo";
export const loader = async () => {
    const playList_url =
        BACKEND_SERVER_LINK + "/user/" + USER_ID + "?include=songs,playlists";
    const response = await fetch(playList_url);
    var data = await response.json();

    if (data.data.attributes.type == ARTIST) {
        // Call another api
    }
    return data;
};

export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        },
        {
            rel: "stylesheet",
            href: "assets/css/templatemo-cyborg-gaming.css",
        },
        {
            rel: "stylesheet",
            href: "assets/css/owl.css",
        },

        {
            rel: "stylesheet",
            href: "assets/css/animate.css",
        },
        {
            rel: "stylesheet",
            href: "https://unpkg.com/swiper@7/swiper-bundle.min.css",
        },
        {
            rel: "stylesheet",
            href: "assets/css/fontawesome.css",
        },
    ];
}

function ProfileIndex() {
    const loaderData = useLoaderData();
    if (loaderData.data) {
        const {
            data: {
                attributes: userInfo,
                relationships: {
                    liked_songs: { data: liked_songs_data },
                    liked_playlists: { data: liked_playlists_data },
                },
            },
        } = loaderData;
        console.log(
            "🚀 ~ file: index.jsx:59 ~ ProfileIndex ~ liked_playlists_data",
            liked_playlists_data
        );

        return (
            <>
                {/* <!-- Additional CSS Files --> */}

                {/* <!-- ***** Preloader Start ***** --> */}
                {/* <PreLoader /> */}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-content">
                                {/* <!-- ***** Banner Start ***** --> */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="main-profile ">
                                            <ProfileInfo
                                                {...userInfo}
                                                liked_songs={liked_songs_data}
                                            />
                                            <PopularSongs />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ***** Banner End ***** --> */}

                                {/* <!-- ***** Gaming Library Start ***** --> */}
                                <div className="gaming-library profile-library">
                                    <div className="col-lg-12">
                                        <div className="heading-section">
                                            <h4>
                                                <em>Your Gaming</em> Library
                                            </h4>
                                        </div>
                                        <LikedSongList
                                            liked_songs_data={liked_songs_data}
                                        />
                                    </div>
                                </div>
                                {/* <!-- ***** Gaming Library End ***** --> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Scripts --> */}
                {/* <!-- Bootstrap core JavaScript --> */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
                <script src="assets/js/isotope.min.js"></script>
                <script src="assets/js/owl-carousel.js"></script>
                <script src="assets/js/tabs.js"></script>
                <script src="assets/js/popup.js"></script>
                <script src="assets/js/custom.js"></script>
            </>
        );
    }
    return undefined;
}

export default ProfileIndex;
