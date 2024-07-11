import { useEffect } from "react";
import "./details.css"
import { signOut } from 'firebase/auth';

function Details(props){
    
    const handleLogout = ()=>{
        signOut(props.auth);
        props.setUserData(null);
    }

    return(
        <div className="details">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                 <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">        
                                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_srQHWm05VKnAtAmIq0voNJFefq473KcyOp6YJxMzDvs53-AMjbYpsr2AmI4UdDoxIsMfatN3OX_cYTFpReobX92z6iEnN34erwDk_Q9xf6cdZALrA2sZuRk9KCDwg=s0-d"/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" className="icons" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">        
                                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_srQHWm05VKnAtAmIq0voNJFefq473KcyOp6YJxMzDvs53-AMjbYpsr2AmI4UdDoxIsMfatN3OX_cYTFpReobX92z6iEnN34erwDk_Q9xf6cdZALrA2sZuRk9KCDwg=s0-d"/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" className="icons" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">        
                                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_srQHWm05VKnAtAmIq0voNJFefq473KcyOp6YJxMzDvs53-AMjbYpsr2AmI4UdDoxIsMfatN3OX_cYTFpReobX92z6iEnN34erwDk_Q9xf6cdZALrA2sZuRk9KCDwg=s0-d"/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" className="icons" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">        
                                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_srQHWm05VKnAtAmIq0voNJFefq473KcyOp6YJxMzDvs53-AMjbYpsr2AmI4UdDoxIsMfatN3OX_cYTFpReobX92z6iEnN34erwDk_Q9xf6cdZALrA2sZuRk9KCDwg=s0-d"/>
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" className="icons" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Details;