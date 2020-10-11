import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage()
{
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26<sup>th</sup>  August To 30<sup>th</sup> August . 2 Guest</p>
                <h4>Stays NearBy</h4>
                <Button variant="outlined">Cancellation Flexibility </Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult img="https://a0.muscache.com/im/pictures/19fa037c-7129-4ba2-9517-3753514c2db8.jpg?im_w=720" location="Private room in London" title="Stay at  this spacious Edwardain House" description="1 Guest . 1 Bedroom . 1 Bed . 1.5 Shared Bathrooms .  WIFI . Kitchen . Free Parking . Washing Machine" star={4.73} price="₹3000/night" total="₹3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/19fa037c-7129-4ba2-9517-3753514c2db8.jpg?im_w=720" location="Private room in London" title="Stay at  this spacious Edwardain House" description="1 Guest . 1 Bedroom . 1 Bed . 1.5 Shared Bathrooms .  WIFI . Kitchen . Free Parking . Washing Machine" star={4.73} price="₹3000/night" total="₹3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/19fa037c-7129-4ba2-9517-3753514c2db8.jpg?im_w=720" location="Private room in London" title="Stay at  this spacious Edwardain House" description="1 Guest . 1 Bedroom . 1 Bed . 1.5 Shared Bathrooms .  WIFI . Kitchen . Free Parking . Washing Machine" star={4.73} price="₹3000/night" total="₹3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/19fa037c-7129-4ba2-9517-3753514c2db8.jpg?im_w=720" location="Private room in London" title="Stay at  this spacious Edwardain House" description="1 Guest . 1 Bedroom . 1 Bed . 1.5 Shared Bathrooms .  WIFI . Kitchen . Free Parking . Washing Machine" star={4.73} price="₹3000/night" total="₹3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/19fa037c-7129-4ba2-9517-3753514c2db8.jpg?im_w=720" location="Private room in London" title="Stay at  this spacious Edwardain House" description="1 Guest . 1 Bedroom . 1 Bed . 1.5 Shared Bathrooms .  WIFI . Kitchen . Free Parking . Washing Machine" star={4.73} price="₹3000/night" total="₹3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/19fa037c-7129-4ba2-9517-3753514c2db8.jpg?im_w=720" location="Private room in London" title="Stay at  this spacious Edwardain House" description="1 Guest . 1 Bedroom . 1 Bed . 1.5 Shared Bathrooms .  WIFI . Kitchen . Free Parking . Washing Machine" star={4.73} price="₹3000/night" total="₹3000 total" />
        </div>
    )
}

export default SearchPage
