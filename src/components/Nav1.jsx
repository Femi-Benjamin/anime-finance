import Homeicon from '../assets/images/Homeicon.svg'
import Notificationicon from '../assets/images/Notificationicon.svg'
import Teamsicon from '../assets/images/Teamsicon.svg'
import Walleticon from '../assets/images/Walleticon.svg'
import Settingsicon from '../assets/images/Settingsicon.svg'
import { Link } from "react-router-dom";

const Nav1 = () => {
    return (
        <div className="pb-1">
            <div className="px-96 border p-7 rounded-2xl border-l-0 border-r-0 border-b-0 ">
                <div>
                    <ul className="flex justify-between text-[18px]">
                        <Link to="/dashboard">
                            <div className='flex items-center gap-3 cursor-pointer'>
                                <img src={Homeicon} alt="" />
                                <li>Home</li>
                            </div>
                        </Link>

                        <Link to="/announcement">
                            <div className='flex items-center gap-3 cursor-pointer'>
                                <img src={Notificationicon} alt="" />
                                <li>Announcement</li>
                            </div>
                        </Link>

                        <Link to="/teams">
                            <div className='flex items-center gap-3 cursor-pointer'>
                                <img src={Teamsicon} alt="" />
                                <li>Teams</li>
                            </div>
                        </Link>

                        <div className='flex items-center gap-3 cursor-pointer'>
                            <img src={Walleticon} alt="" />
                            <li>Wallet</li>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <img src={Settingsicon} alt="" />
                            <li>Settings</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav1
