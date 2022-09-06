import BottomBar from "./bottomBar"

export default function SidebarFriends(){
    return (
        <div className="sidebar-friends-container">
            <div className="sidebar-friend">
                <div className="userRole">
                    <p className="fw-bold">Friends</p>
                    <div className="d-flex gap-2">
                        <div className="sidebar-user-icon">
                            <img src="https://64.media.tumblr.com/335b529308a131bcb2f74eb988cfb7fb/94993c7acf89b929-34/s2048x3072/18c3d9dc1ad618beb246f960655f2ea62530441c.jpg" width="50" alt=""/>
                        </div>
                        <div className="sidebar-user-name">
                            <p className="text-danger fw-bold">Kazehaya</p>
                        </div>
                    </div>
                </div>
                <div className="userRole">
                    <div className="d-flex gap-2">
                        <div className="sidebar-user-icon">
                            <img src="https://pps.whatsapp.net/v/t61.24694-24/296985440_1070840886884995_5895404322536119442_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwADJ9vaPwmipig9WY4eTu1-ht0QhxUcW2WWe0H3Nv0mg&oe=63029EDD" width="50" alt=""/>
                        </div>
                        <div className="sidebar-user-name">
                            <p className="text-primary fw-bold">RaaqiAthaulla</p>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBar/>
        </div>
    )

}