import headerStyle from '../styles/header.module.css';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    return (
       <div className={headerStyle.header_container}>
           <div className={headerStyle.title}>
               <h2>KEYWORDS</h2>
           </div>
           <div className={headerStyle.search_user}>
               <div className={headerStyle.search_box}>
                    <form action="">
                        <input type="text" />
                        <button type="submit">Submit &#8594; </button>
                    </form>
               </div>
               <div className="user_round">
               <Avatar>A</Avatar>
               </div>
           </div>
       </div>
    );
};

export default Header;