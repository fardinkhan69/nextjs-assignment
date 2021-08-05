import sidebarStyel from '../styles/sidebar.module.css'

import logo from './logo.png'
import Image from 'next/image'
import Navbar from './Navbar';
const Sidebar = () => {
    return (
        <div className={sidebarStyel.sidebar_container}>
            <div className={sidebarStyel.logo_container}>
                <Image src={logo}  height={80} />
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    );
};

export default Sidebar;