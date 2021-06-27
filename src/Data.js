


class Host {
    constructor(id, stayImages, title, guests, bedrooms, beds, description, hostPic, stars, pricePerDay, superHost ){
        this.id = id; 
        this.stayImages = stayImages; 
        this.location = "Panama City Beach, Florida, United States"; 
        this.title = title; 
        this.guests = guests; 
        this.bedrooms = bedrooms; 
        this.baths = 2;
        this.beds = beds; 
        this.description = description; 
        this.hostPic = hostPic; 
        this.stars = stars; 
        this.pricePerDay = pricePerDay; 
        this.superHost = superHost; 
        this.isLiked = false; 
    }
}


 export default function hostMaker(){
     
    const host1 = new Host(
        0,
        [
            "Images/Host1/pic1.jpg", 
            "Images/Host1/pic2.jpg", 
            "Images/Host1/pic3.jpg", 
            "Images/Host1/pic4.jpg", 
            "Images/Host1/pic5.jpg"
        ],
        "JUST BEACHY - Gulfview and steps away from beaches",
        3, 
        2,
        3, 
        "Private balcony with amazing views of the gulf. Steps away from the beach, shopping, dining and entertainment. Laketown Wharf resort amenities include five pools with one pool just for kids, fitness center with gulf views, putting green, parking garage, nightly fountain and light show. This condo includes 2 bedroom, 2 bathrooms and a bunk room. All furniture and appliances are less than a year old. Under new management by owner. We look forward to sharing our beautiful condo with you!",
        "Images/Host1/host.jpg",
        "5.0",
        154, 
        false
    ); 

    const host2 = new Host(
        1,
        [
           "Images/Host2/pic1.jpg",
           "Images/Host2/pic2.jpg",
           "Images/Host2/pic3.jpg",
           "Images/Host2/pic4.jpg",
           "Images/Host2/pic5.jpg"
        ],
        "Grand Panama 103 B2",
        3, 
        1,
        2, 
        "We have Gulf views from our condo and we are just steps from the only heated pool and fitness center at the resort. Grilling stations are at pool side also. Beach Service included Mar 15 - Oct 15 2021. Save Hundreds by reserving with us today.",
        "Images/Host2/host.jpg",
        "4.64",
        98, 
        false
    ); 

    const host3 = new Host(
        2,
        [
            "Images/Host3/pic1.jpg",
            "Images/Host3/pic2.jpg",
            "Images/Host3/pic3.jpg",
            "Images/Host3/pic4.jpg",
            "Images/Host3/pic5.jpg"
         ],
        "Seascape at Laketown Wharf—Penthouse Views!",
        3, 
        1,
        4, 
        "Welcome to SeaScape with breathtaking penthouse views of the Sea as well as the city Scape! Recently updated with fresh paint, furnishings and a remodeled kitchen. This 21st, top floor unit will not disappoint! Private access to the beach is directly across the street! Come see for yourself why Trip Advisor has deemed Panama City Beach the top 10 Traveler's Choice, Best of the Best 2021.",
        "Images/Host3/host.jpg",
        "5.00",
        200, 
        true
    ); 


    const host4 = new Host(
        3,
        [
            "Images/Host4/pic1.jpg",
            "Images/Host4/pic2.jpg",
            "Images/Host4/pic3.jpg",
            "Images/Host4/pic4.jpg",
            "Images/Host4/pic5.jpg"
         ],
        "Ocean Front, Lg Balcony, Perfect Location in PCB",
        2, 
        1,
        2, 
        "Welcome to SeaScape with breathtaking penthouse views of the Sea as well as the city Scape! Recently updated with fresh paint, furnishings and a remodeled kitchen. This 21st, top floor unit will not disappoint! Private access to the beach is directly across the street! Come see for yourself why Trip Advisor has deemed Panama City Beach the top 10 Traveler's Choice, Best of the Best 2021.",
        "Images/Host4/host.jpg",
        "4.81",
        144, 
        false
    ); 


    const host5 = new Host(
        4,
        [
            "Images/Host5/pic1.jpeg",
            "Images/Host5/pic2.jpeg",
            "Images/Host5/pic3.jpeg",
            "Images/Host5/pic4.jpeg",
            "Images/Host5/pic5.jpeg"
         ],
        "Enjoy Oceanfront & Lagoon Pool at Shores of Panama",
        2, 
        1,
        2, 
        "Completely renovated in April 2021! Welcome to BEACHFRONT Paradise! You'll love this west facing, 12th floor unit with incredible sunset views! We also feature a reserved parking space on the same floor. Load and unload without the elevator! Best resort style pool in PCB!",
        "Images/Host5/host.jpg",
        "5.0",
        271, 
        false
    ); 


    const host6 = new Host(
        5,
        [
            "Images/Host6/pic1.jpg",
            "Images/Host6/pic2.jpg",
            "Images/Host6/pic3.jpg",
            "Images/Host6/pic4.jpg",
            "Images/Host6/pic5.jpg"
         ],
        "NEWLIST! Beachfront Penthouse w/Wraparound Balcony",
        2, 
        1,
        2, 
        "Magnificent 23rd floor, corner unit Penthouse w/wraparound balcony at the beautiful Shores of Panama Resort offers the best views on the beach!! Spacious penthouse has a dedicated parking spot on the 6th Floor and features two Master Bedrooms, both with King Beds and their own full bathrooms, as well as a private Bunk Room, with a door and a half bathroom for the kids",
        "Images/Host6/host.jpg",
        "4.92",
        253, 
        true
    ); 

    const host7 = new Host(
        6,
        [
            "Images/Host7/pic1.jpg",
            "Images/Host7/pic2.jpg",
            "Images/Host7/pic3.jpg",
            "Images/Host7/pic4.jpg",
            "Images/Host7/pic5.jpg"
         ],
        "New Luxury 2BR Beachfront Resort! Prime Location",
        1, 
        1,
        1, 
        "Newly decorated 1-bedroom luxury at Majestic Beach Resort. Located in the heart of Panama City Beach Florida.",
        "Images/Host7/host.jpg",
        "4.81",
        225, 
        false
    ); 

    
    const host8 = new Host(
        7,
        [
            "Images/Host8/pic1.jpg",
            "Images/Host8/pic2.jpg",
            "Images/Host8/pic3.jpg",
            "Images/Host8/pic4.jpg",
            "Images/Host8/pic5.jpg"
         ],
        "Family-Friendly Oceanfront Condo with Balcony and Gulf Views - Walk to the Beach",
        1, 
        1,
        1, 
        "This condo has the heart of a beach house, which is the way we like it! Wooden accents and fun decor help set the scene for your beachy getaway. From the furnished balcony, you'll be able to look out upon the shared pools and hot tub, then out to the beach and wider ocean.",
        "Images/Host8/host.jpg",
        "4.63",
        152, 
        true
    ); 


    
    const host9 = new Host(
        8,
        [
            "Images/Host9/pic1.jpg",
            "Images/Host9/pic2.jpg",
            "Images/Host9/pic3.jpg",
            "Images/Host9/pic4.jpg",
            "Images/Host9/pic5.jpg"
         ],
        "1 Bed/1 Bath Villa Edgewater Beach & Golf Resort",
        1, 
        1,
        1, 
        "Enjoy our 3 bedroom and 3 bath Villa at the Edgewater Beach and Golf Resort! The ONLY Full service resort in PCB! Smaller private pools just steps from our condo. The ocean and big pool is a short golf cart ride ... FREE pick up right in front of your condo at a moment's notice! This place has it all! Beach, pools, tennis, golf, basketball, spa, hot tub, restaurants, room service, and much more!",
        "Images/Host9/host.jpg",
        "4.8",
        300, 
        false
    ); 
    
    const data = [host1, host2, host3, host4, host5, host6, host7, host8, host9]
    return data; 
}




