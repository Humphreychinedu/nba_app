import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sidenav';

const Header = (props) =>  {

    const navBars = () => {
       return ( <div className={style.bars}>
            <FontAwesome name='bars'
             style={{
                 color: '#dfdfdf',
                 padding: '10px',
                 cursor: 'pointer',              
                  }}
                  onClick={props.onOpenNav}
                 />
        </div>
       )
    }

    const logo = () => {
        return (
            <Link to='/' className={style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    return (
       <header className={style.header}>
           <SideNav {...props}/>
           <div className={style.headerOpt}>
               { navBars() }
                {logo()}
           </div>
       </header>

    )
}

export default Header;