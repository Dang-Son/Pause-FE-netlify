import { Link } from "@remix-run/react";

function ProfileInfo({ name, type, description, liked_songs }) {
    return (
        <div className="row">
            <div className="col-lg-4">
                <img
                    src="./assets/images/profile.jpg"
                    alt=""
                    style={{
                        borderRadius: "23px",
                    }}
                />
            </div>
            <div className="col-lg-4 align-self-center">
                <div className="main-info header-text">
                    <span>{type}</span>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="main-border-button">
                        <Link to="/profile" href="#">
                            Start Live Stream
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 align-self-center">
                <ul>
                    <li>
                        Liked songs <span>{liked_songs.length}</span>
                    </li>
                    <li>
                        Friends Online <span>16</span>
                    </li>
                    <li>
                        Live Streams <span>None</span>
                    </li>
                    <li>
                        Clips <span>29</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;
