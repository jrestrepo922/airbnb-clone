


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
    }
}


 export default function hostMaker(){
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


    const host5 = new Host(
        5,
        [
            "https://www.airbnb.com/rooms/49313220/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624530911_ew%2BgfnWjeldt50qp&guests=1&adults=1",
            "https://www.airbnb.com/rooms/49313220/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624530911_ew%2BgfnWjeldt50qp&guests=1&adults=1&heroPhotoId=1169833411",
            "https://www.airbnb.com/rooms/49313220/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624530911_ew%2BgfnWjeldt50qp&guests=1&adults=1&heroPhotoId=1166932664",
            "https://www.airbnb.com/rooms/49313220/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624530911_ew%2BgfnWjeldt50qp&guests=1&adults=1&heroPhotoId=1166935640",
            "https://www.airbnb.com/rooms/49313220/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624530911_ew%2BgfnWjeldt50qp&guests=1&adults=1&heroPhotoId=1168502817"        
        ],
        "Enjoy Oceanfront & Lagoon Pool at Shores of Panama",
        2, 
        1,
        2, 
        "Completely renovated in April 2021! Welcome to BEACHFRONT Paradise! You'll love this west facing, 12th floor unit with incredible sunset views! We also feature a reserved parking space on the same floor. Load and unload without the elevator! Best resort style pool in PCB!",
        "https://a0.muscache.com/im/pictures/user/fff691bc-0f1d-4970-9773-fbd57af54fd4.jpg?im_w=240",
        "5.0",
        271, 
        true
    ); 


    const host6 = new Host(
        6,
        [
            "https://www.airbnb.com/rooms/47544831/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531092_WCMuissK0Wqv5X6i&guests=1&adults=1",
            "https://www.airbnb.com/rooms/47544831/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531092_WCMuissK0Wqv5X6i&guests=1&adults=1&heroPhotoId=1118134126",
            "https://www.airbnb.com/rooms/47544831/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531092_WCMuissK0Wqv5X6i&guests=1&adults=1&heroPhotoId=1118134101",
            "https://www.airbnb.com/rooms/47544831/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531092_WCMuissK0Wqv5X6i&guests=1&adults=1&heroPhotoId=1118134124",
            "https://www.airbnb.com/rooms/47544831/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531092_WCMuissK0Wqv5X6i&guests=1&adults=1&heroPhotoId=1118149285"        
        ],
        "NEWLIST! Beachfront Penthouse w/Wraparound Balcony",
        2, 
        1,
        2, 
        "Magnificent 23rd floor, corner unit Penthouse w/wraparound balcony at the beautiful Shores of Panama Resort offers the best views on the beach!! Spacious penthouse has a dedicated parking spot on the 6th Floor and features two Master Bedrooms, both with King Beds and their own full bathrooms, as well as a private Bunk Room, with a door and a half bathroom for the kids",
        "https://a0.muscache.com/im/pictures/user/b441b593-cecb-4d81-bd23-32bf10e5a297.jpg?im_w=240",
        "4.92",
        253, 
        true
    ); 

    const host7 = new Host(
        7,
        [
            "https://www.airbnb.com/rooms/950149/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531335_pwsCNUt6UNolE5Kt&guests=1&adults=1",
            "https://www.airbnb.com/rooms/950149/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531335_pwsCNUt6UNolE5Kt&guests=1&adults=1&heroPhotoId=699581100",
            "https://www.airbnb.com/rooms/950149/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531335_pwsCNUt6UNolE5Kt&guests=1&adults=1&heroPhotoId=699581585",
            "https://www.airbnb.com/rooms/950149/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531335_pwsCNUt6UNolE5Kt&guests=1&adults=1&heroPhotoId=699581252",
            "https://www.airbnb.com/rooms/950149/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531335_pwsCNUt6UNolE5Kt&guests=1&adults=1&heroPhotoId=699581678"        
        ],
        "New Luxury 2BR Beachfront Resort! Prime Location",
        1, 
        1,
        1, 
        "Newly decorated 1-bedroom luxury at Majestic Beach Resort. Located in the heart of Panama City Beach Florida.",
        "https://a0.muscache.com/im/users/2665757/profile_pic/1411945529/original.jpg?im_w=240",
        "4.81",
        225, 
        true
    ); 

    
    const host8 = new Host(
        8,
        [
            "https://www.airbnb.com/rooms/44590743/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531545_xED1BA%2B9MGvtiKW1&guests=1&adults=1",
            "https://www.airbnb.com/rooms/44590743/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531545_xED1BA%2B9MGvtiKW1&guests=1&adults=1&heroPhotoId=1128567421",
            "https://www.airbnb.com/rooms/44590743/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531545_xED1BA%2B9MGvtiKW1&guests=1&adults=1&heroPhotoId=1128567847",
            "https://www.airbnb.com/rooms/44590743/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531545_xED1BA%2B9MGvtiKW1&guests=1&adults=1&heroPhotoId=1128567633",
            "https://www.airbnb.com/rooms/44590743/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531545_xED1BA%2B9MGvtiKW1&guests=1&adults=1&heroPhotoId=1128568222"        
        ],
        "Family-Friendly Oceanfront Condo with Balcony and Gulf Views - Walk to the Beach",
        1, 
        1,
        1, 
        "This condo has the heart of a beach house, which is the way we like it! Wooden accents and fun decor help set the scene for your beachy getaway. From the furnished balcony, you'll be able to look out upon the shared pools and hot tub, then out to the beach and wider ocean.",
        "https://a0.muscache.com/im/pictures/user/15bc495a-b2cc-4dd1-978c-a3b81f358166.jpg?im_w=240",
        "4.63",
        152, 
        true
    ); 


    
    const host9 = new Host(
        9,
        [
            "https://www.airbnb.com/rooms/29606733/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531706_f7Be4%2FumL%2B8PH%2FhR&guests=1&adults=1",
            "https://www.airbnb.com/rooms/29606733/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531706_f7Be4%2FumL%2B8PH%2FhR&guests=1&adults=1&heroPhotoId=605267610",
            "https://www.airbnb.com/rooms/29606733/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531706_f7Be4%2FumL%2B8PH%2FhR&guests=1&adults=1&heroPhotoId=605268172",
            "https://www.airbnb.com/rooms/29606733/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531706_f7Be4%2FumL%2B8PH%2FhR&guests=1&adults=1&heroPhotoId=605268036",
            "https://www.airbnb.com/rooms/29606733/photos?translate_ugc=false&federated_search_id=263ed20a-fc24-489e-9f25-075b67816cff&source_impression_id=p3_1624531706_f7Be4%2FumL%2B8PH%2FhR&guests=1&adults=1&heroPhotoId=605268532"        
        ],
        "1 Bed/1 Bath Villa Edgewater Beach & Golf Resort",
        1, 
        1,
        1, 
        "Enjoy our 3 bedroom and 3 bath Villa at the Edgewater Beach and Golf Resort! The ONLY Full service resort in PCB! Smaller private pools just steps from our condo. The ocean and big pool is a short golf cart ride ... FREE pick up right in front of your condo at a moment's notice! This place has it all! Beach, pools, tennis, golf, basketball, spa, hot tub, restaurants, room service, and much more!",
        "https://a0.muscache.com/im/pictures/user/d5f5e855-6d90-4c0b-aa79-6056f9745e09.jpg?im_w=240",
        "4.8",
        300, 
        false
    ); 
    
    const data = [host1, host2, host3, host4, host5, host6, host7, host8, host9]
    return data; 
}




