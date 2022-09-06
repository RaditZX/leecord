import SidebarIcon from "../component/sidebarIcon"
import SidebarFriends from "../component/sidebarFriends"
import TextChat from "../component/textChat"
import SidebarUser from "../component/sidebarUser"

export default function Home(){
    return (
        <div className="">
            <div className="d-flex text-white">
                <SidebarIcon/>
                <SidebarFriends/>
                <div className="home-center">
                    <div className="welcome">
                        <h1>WELCOME TO LEECORD</h1>
                        <p style={{margin:"0"}}>Rules:</p>
                        <p>1.joni selalu botfrag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}