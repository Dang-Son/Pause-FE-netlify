import { Link } from "@remix-run/react";

function LikePlaylist({ name, imageURL = "assets/images/clip-03.jpg" }) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="item">
                <div className="thumb">
                    <img
                        src={imageURL}
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
                    <h4>{name}</h4>
                    <span>
                        <i className="fa fa-eye"></i> 183
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LikePlaylist;
