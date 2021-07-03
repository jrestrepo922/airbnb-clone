import React  from 'react';
import './Home.css';
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import hostMaker from '../Data';


// ES7 snippets to do 'rfce'

function Home() {

    const hosts = hostMaker(); 



    return (
        <div className='home'>
            <Banner />

                <div className="home__section"> 
                    <Card
                        src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720"
                        title="Outdoor gateaways"
                        description="Unique outdoor activities we can do together, led by a world of hosts."
                        url="https://www.airbnb.com/s/homes?location_search=NEARBY&kg_and_tags%5B%5D=Tag:8072&room_types%5B%5D=Entire%20home%2Fapt"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
                        title="Unique stays"
                        description="Spaces that are more than just a place to sleep."
                        url="https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
                        title="Entire homes"
                        description="Comfortable private places, with room for friends or family."
                        url="https://www.airbnb.com/s/homes?ne_lat=55.691974530412054&ne_lng=-58.253257397906594&sw_lat=12.57342546958795&sw_lng=-110.3451426020934&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE"
                    />
                </div>



            <div className='home__section'>

                
                    <Card
                        id={0}
                        src={hosts[0].stayImages[0]}
                        title={hosts[0].title}
                        description="Superhost with a stunning view of the beachside in Sunny Panama city Beach"
                        price={`$${hosts[0].pricePerDay}/night`}
                        className="card__bottom"
                    />
                    <Card
                        id={4}
                        src={hosts[4].stayImages[0]}
                        title={hosts[4].title}
                        description="Enjoy the amazing sights of London with this stunning condo"
                        price={`$${hosts[4].pricePerDay}/night`}
                        className="card__bottom"
                    />
                    <Card
                        id={8}
                        src={hosts[8].stayImages[0]}
                        title={hosts[8].title}
                        description="Superhost with great amenities and a fabolous shopping complex nearby"
                        price={`$${hosts[4].pricePerDay}/night`}
                        className="card__bottom"
                    />
                </div>

        </div>
    )
}

export default Home


    // //fuctionality for scrolling
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // function handleMouseDown(e){
    //     let slider = e.target;
    //     isDown = true;
    //     slider.classList.add('active');
    //     startX = e.pageX - slider.offsetLeft;
    //     scrollLeft = slider.scrollLeft;
    // }

    // function handleMouseLeave(e){
    //     let slider = e.target;
    //     isDown = false;
    //     slider.classList.remove('active');
    // }

    // function handleMouseUp(e){
    //     let slider = e.target;
    //     isDown = false;
    //     slider.classList.remove('active');
    // }

    // function handleMouseMove(e){
    //     let slider = e.target;
    //     if(!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - slider.offsetLeft;
    //     const walk = (x - startX) * 3; //scroll-fast
    //     slider.scrollLeft = scrollLeft - walk;
    //     console.log(walk);
    // }