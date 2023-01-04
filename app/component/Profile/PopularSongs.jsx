import { Link } from "@remix-run/react";
import LikePlaylist from "./Playlist";

function PopularSongs() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="clips">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section">
                                <h4>
                                    <em>Your Most Popular</em> Songs
                                </h4>
                            </div>
                        </div>

                        <LikePlaylist />

                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <img
                                        src="assets/images/clip-02.jpg"
                                        alt=""
                                        style={{
                                            borderRadius: "23px",
                                        }}
                                    />
                                    <Link
                                        to="/profile"
                                        href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                        target="_blank"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                </div>
                                <div className="down-content">
                                    <h4>Second Clip</h4>
                                    <span>
                                        <i className="fa fa-eye"></i> 183
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <img
                                        src="assets/images/clip-03.jpg"
                                        alt=""
                                        style={{
                                            borderRadius: "23px",
                                        }}
                                    />
                                    <Link
                                        to="/profile"
                                        href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                        target="_blank"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                </div>
                                <div className="down-content">
                                    <h4>Third Clip</h4>
                                    <span>
                                        <i className="fa fa-eye"></i> 141
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <img
                                        src="assets/images/clip-04.jpg"
                                        alt=""
                                        style={{
                                            borderRadius: "23px",
                                        }}
                                    />
                                    <Link
                                        to="/profile"
                                        href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                        target="_blank"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                </div>
                                <div className="down-content">
                                    <h4>Fourth Clip</h4>
                                    <span>
                                        <i className="fa fa-eye"></i> 91
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="main-button">
                                <Link to="/profile" href="#">
                                    Load More Clips
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularSongs;
