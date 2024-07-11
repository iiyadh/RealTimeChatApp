import "./userInfo.css"
import { useContext } from "react";
import { ContextU } from "../../../context/UserContext";

function Userinfo(){
    const {userData} = useContext(ContextU);
    return (
        <div className="userInfo">
            <div className="user">
                <img src={userData.avatar || "./avatar.png"} alt="" />
                <h2>{userData.username}</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}
export default Userinfo;