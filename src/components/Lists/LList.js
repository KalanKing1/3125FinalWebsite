import location1 from '../Assets/mountain.png';
import location2 from '../Assets/mountain.png';
import location3 from '../Assets/mountain.png';

export const LList = [
    {
        id: 1,
        locationName: "location1",
        distance: 999.0,
        locationImage: location1,
        filters: ["close", "popular"],
        altImages: [location1, location1, location1],
        locationDesc: "This is a product that is producting around"
    },
    {
        id: 2,
        locationName: "location2",
        distance: 999.0,
        locationImage: location2,
        filters: ["far", "popular"],
        altImages: [location1, location1, location1],
        locationDesc: "This is a product that is producting around"
    },
    {
        id: 3,
        locationName: "location3",
        distance: 999.0,
        locationImage: location3,
        filters: ["beginner", "unpopular"],
        altImages: [location1, location1, location1],
        locationDesc: "This is a product that is producting around"
    },

]