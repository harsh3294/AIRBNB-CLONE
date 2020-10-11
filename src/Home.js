import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
function Home()
{
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" title="Unique stays" description="Spaces that are more than just a place to sleep" price="" />
                <Card src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720" title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts" price="" />
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Entire homes" description="Comfortable private places,with room for friends or family" price="" />
            </div>
            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/c1c8dd39-bd73-4535-9259-9d9efe05af80.jpg?im_w=720" title="Dome house . Sonseca El Avistador. Montes de Toledo " description="In a unique enclave, facing the Montes de Toledo, a few meters from the beginning of the mountain. Framing, as if it were a photographic frame " price="c7,3635/night" />
                <Card title="Campervan/Motorhome hosted by Nicole & Hervé" src="https://a0.muscache.com/im/pictures/bb6a136e-296a-4bd4-bd4d-6de11847bf49.jpg?im_w=720" price="₹11,660 / night" description="Welcome to our Airstream. Our property sits on 2.5 landscaped acres overlooking the Heart of the beautiful Temecula Valley Wine Country." />
                <Card title="Hideaway Tent with Pool and Hot Tub" src="https://a0.muscache.com/im/pictures/4cd1daf3-a3a0-49b8-8664-fa7b647c346d.jpg?im_w=720" price="₹7,781/ night" description="It is a Colorado Yurt Company luxury tent - experience comfort while just steps away from nature. Tucked back under the maple trees, with a covered patio to enjoy." />

            </div>
        </div>
    )
}

export default Home