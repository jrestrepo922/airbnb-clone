


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
        this.starts = stars; 
        this.pricePerDay = pricePerDay; 
        this.superHost = superHost; 
    }
}


 function hostMaker(){
    const host1 = new Host(
        1,
        ["https://a0.muscache.com/im/pictures/57870313-6fa6-4633-9879-f3869970b5ed.jpg?im_w=960", "https://www.airbnb.com/rooms/44681094/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624450383_ZLOJt%2FFaTUXMz3W2&guests=1&adults=1&heroPhotoId=1051927075", "https://www.airbnb.com/rooms/44681094/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624450383_ZLOJt%2FFaTUXMz3W2&guests=1&adults=1&heroPhotoId=1051927125",
         "https://www.airbnb.com/rooms/44681094/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624450383_ZLOJt%2FFaTUXMz3W2&guests=1&adults=1&heroPhotoId=1051927090",    "https://www.airbnb.com/rooms/44681094/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624450383_ZLOJt%2FFaTUXMz3W2&guests=1&adults=1&heroPhotoId=1051927130"],
        "JUST BEACHY - Gulfview and steps away from beaches",
        3, 
        2,
        3, 
        "Private balcony with amazing views of the gulf. Steps away from the beach, shopping, dining and entertainment. Laketown Wharf resort amenities include five pools with one pool just for kids, fitness center with gulf views, putting green, parking garage, nightly fountain and light show. This condo includes 2 bedroom, 2 bathrooms and a bunk room. All furniture and appliances are less than a year old. Under new management by owner. We look forward to sharing our beautiful condo with you!",
        "https://a0.muscache.com/im/pictures/user/e0cc9af4-cda4-40a0-9a0b-48417638767c.jpg?im_w=240",
        "5.0",
        154, 
        true
    ); 

    const host2 = new Host(
        2,
        [
            "https://www.airbnb.com/rooms/17712396/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451520_5YGROYLcNbYmXRqD&guests=1&adults=1", 
            "https://www.airbnb.com/rooms/17712396/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451520_5YGROYLcNbYmXRqD&guests=1&adults=1&heroPhotoId=1092998132", 
            "https://www.airbnb.com/rooms/17712396/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451520_5YGROYLcNbYmXRqD&guests=1&adults=1&heroPhotoId=1092998161",
            "https://www.airbnb.com/rooms/17712396/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451520_5YGROYLcNbYmXRqD&guests=1&adults=1&heroPhotoId=1092998145",    
            "https://a0.muscache.com/im/pictures/d01167df-f5e3-441e-b7bd-504d5f33fec6.jpg?im_w=720"
        ],
        "Grand Panama 103 B2",
        3, 
        1,
        2, 
        "We have Gulf views from our condo and we are just steps from the only heated pool and fitness center at the resort. Grilling stations are at pool side also. Beach Service included Mar 15 - Oct 15 2021. Save Hundreds by reserving with us today.",
        "https://a0.muscache.com/im/pictures/user/3928791e-39ca-42de-bf33-ff0fc13202c6.jpg?im_w=240",
        "4.64",
        98, 
        false
    ); 

    const host3 = new Host(
        3,
        [
            "https://www.airbnb.com/rooms/46348590/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451897_8pWNZ8qieFVyypKy&guests=1&adults=1", 
            "https://www.airbnb.com/rooms/46348590/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451897_8pWNZ8qieFVyypKy&guests=1&adults=1&heroPhotoId=1131171206", 
            "https://www.airbnb.com/rooms/46348590/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451897_8pWNZ8qieFVyypKy&guests=1&adults=1&heroPhotoId=1131171207",
            "https://www.airbnb.com/rooms/46348590/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451897_8pWNZ8qieFVyypKy&guests=1&adults=1&heroPhotoId=1131171185",    
            "https://www.airbnb.com/rooms/46348590/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624451897_8pWNZ8qieFVyypKy&guests=1&adults=1&heroPhotoId=1130089278"
        ],
        "Seascape at Laketown Wharf—Penthouse Views!",
        3, 
        1,
        4, 
        "Welcome to SeaScape with breathtaking penthouse views of the Sea as well as the city Scape! Recently updated with fresh paint, furnishings and a remodeled kitchen. This 21st, top floor unit will not disappoint! Private access to the beach is directly across the street! Come see for yourself why Trip Advisor has deemed Panama City Beach the top 10 Traveler's Choice, Best of the Best 2021.",
        "https://a0.muscache.com/im/pictures/user/aa82fa31-3f28-40fb-9b80-0d73441987e4.jpg?im_w=240",
        "5.00",
        200, 
        true
    ); 


    const host4 = new Host(
        4,
        [
            "https://www.airbnb.com/rooms/44356639/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624452372_6oa09DQ4qBdt%2BBvG&guests=1&adults=1",
            "https://www.airbnb.com/rooms/44356639/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624452372_6oa09DQ4qBdt%2BBvG&guests=1&adults=1&heroPhotoId=1041671765",
            "https://www.airbnb.com/rooms/44356639/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624452372_6oa09DQ4qBdt%2BBvG&guests=1&adults=1&heroPhotoId=1041671862",
            "https://www.airbnb.com/rooms/44356639/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624452372_6oa09DQ4qBdt%2BBvG&guests=1&adults=1&heroPhotoId=1041671813",
            "https://www.airbnb.com/rooms/44356639/photos?translate_ugc=false&federated_search_id=5cf2aa65-20a3-42be-a7dc-87b25bc4891f&source_impression_id=p3_1624452372_6oa09DQ4qBdt%2BBvG&guests=1&adults=1&heroPhotoId=1041671917"
        ],
        "Ocean Front, Lg Balcony, Perfect Location in PCB",
        2, 
        1,
        2, 
        "Welcome to SeaScape with breathtaking penthouse views of the Sea as well as the city Scape! Recently updated with fresh paint, furnishings and a remodeled kitchen. This 21st, top floor unit will not disappoint! Private access to the beach is directly across the street! Come see for yourself why Trip Advisor has deemed Panama City Beach the top 10 Traveler's Choice, Best of the Best 2021.",
        "https://a0.muscache.com/im/pictures/user/aa82fa31-3f28-40fb-9b80-0d73441987e4.jpg?im_w=240",
        "4.81",
        144, 
        false
    ); 
}


hostMaker()


const host4 = new Host(
    4,
    [
        "",
        "",
        "",
        "",
        ""        
    ],
    "",
    2, 
    1,
    2, 
    "",
    "",
    "",
    144, 
    false
); 
