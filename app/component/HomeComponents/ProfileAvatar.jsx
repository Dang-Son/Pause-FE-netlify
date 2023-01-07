import styled from "styled-components";

function ProfileAvatar() {
    const StyledAvatar = styled.div`
        padding: 0;
        margin: 0;

        img {
            margin-right: 15px;
            width: 50px;
            height: 50px;
        }
        p {
            padding: 0;
            margin: 0;
        }
        p.name {
            color: #2e3271;
        }
    `;
    return (
        <StyledAvatar className="d-flex flex-row mb-3 me-3 align-content-end">
            <img
                placeholder="https://via.placeholder.com/300"
                src={`https://picsum.photos/200?random=${Math.round(
                    Math.random() * 100
                )}`}
                alt=""
                className="rounded-2 shadow-lg"
            />
            <div>
                <p className="fw-bold name"> Tran Duc Tam</p>
                <p className="fs-5 text-body-tertiary">Audience</p>
            </div>
        </StyledAvatar>
    );
}

export default ProfileAvatar;
