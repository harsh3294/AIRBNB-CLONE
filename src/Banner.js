import { Button } from '@material-ui/core'
import Search from './Search';
import React, { useState } from 'react'
import './Banner.css'
import { useHistory } from 'react-router-dom';
function Banner()
{
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                <Button variant="outlined" className=" banner__searchButton" onClick={() => setShowSearch(!showSearch)}>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <Search />}
            </div>
            <div className="banner__info">
                <h1>Get Out And Stretch Your Imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you </h5>
                <Button variant="outlined" onClick={() => history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
