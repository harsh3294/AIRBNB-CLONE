import { Search } from '@material-ui/icons'
import LanguageIcon from '@material-ui/icons/Language';
import React from 'react'
import './Header.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Header()
{
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="airbnb" />
            </Link>

            <div className="header__center">
                <input type="text" />
                <Search />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default Header
