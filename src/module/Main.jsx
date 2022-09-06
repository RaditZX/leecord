import SidebarIcon from "../component/sidebarIcon"
import SidebarChannel from "../component/sidebarChannel"
import TextChat from "../component/textChat"
import SidebarUser from "../component/sidebarUser"

export default function Main(){
    return (
        <div className="">
            <div className="d-flex text-white">
                <SidebarIcon/>
                <SidebarChannel/>
                <div className="container-center">
                    <div className="chat">
                        <div className="d-flex mb-2 gap-2">
                            <div className="container-center-left">
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/296985440_1070840886884995_5895404322536119442_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwADJ9vaPwmipig9WY4eTu1-ht0QhxUcW2WWe0H3Nv0mg&oe=63029EDD" alt="" />
                            </div>
                            <div className="container-center-right">
                                <p style={{fontWeight:"bold",margin:"0"}}>RaaqiAthaulla</p>
                                <p>Naha maneh topfrag wae euy</p>
                            </div>
                        </div>
                        <div className="d-flex mb-2 gap-2 flex-row-reverse">
                            <div className="container-center-left">
                                <img src="https://64.media.tumblr.com/335b529308a131bcb2f74eb988cfb7fb/94993c7acf89b929-34/s2048x3072/18c3d9dc1ad618beb246f960655f2ea62530441c.jpg" alt="" />
                            </div>
                            <div className="container-center-right-user ">
                                <p style={{fontWeight:"bold",margin:"0"}}>Kazehya</p>
                                <p>Raaqi botfrag terus kapan topfrag</p>
                            </div>
                        </div>
                    </div>
                    <TextChat/>
                </div>
                <SidebarUser/>
            </div>
        </div>
    )
}