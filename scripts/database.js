const database = {
    parkAreas: [
       { id: 1, 
        name: "Chamfort River", 
        section: "Northeast Section",
        description: "It is a beautiful river",
       },{
        id:2,
        name: "Lost Wolf Hiking Trail",
        section: "Northern Section",
        description: "It is a scenic hiking trail",
       },{
        id:3,
        name: "Lodge",
        section: "Northwest Section",
        description: "The main attraction is the Lodge, but there is also a hotel, and a restaurant",
       },{
        id:4,
        name: "Gander River",
        section: "Southwest Section",
        description: "It is a natural preserve",
       },{
        id:5,
        name: "Campgrounds",
        section: "Southern Section",
        description: "The campgrounds also offer an office park, and children play areas"
       },{
        id:6,
        name: "Pine Bluff Trails",
        section: "Southeast Section",
        description: "A vast network of trails for levels of hikers, offers food vendors"
       },   
    ],
    Services: [
     {   id: 1,
        activity: "Rafting",
     },
     {   id: 2,
        activity: "Canoeing", 
     },   
     {   id: 3,
        activity: "Fishing",
     },   
     {   id: 4,
        activity: "Hiking",
     },   
     {   id: 5,
        activity: "Picnicking", 
     },   
     {   id: 6,
        activity: "Rock Climbing", 
     },   
     {   id: 7,
        activity: "Lodging", 
     },   
     {   id: 8,
        activity: "Parking",
     },   
     {   id: 9,
        activity: "Information",
     },   
     {   id: 10,
        activity: "Ziplining",
     },  
    ],
    Guests: [
    {
        id: 1,
        name: "John Doe",
        parkId: 5,
    },
     {
        id: 2,
        name: "Jane Smith",
        parkId: 3,
    },
     {
        id: 3,
        name: "Emily Johnson",
        parkId: 1,
    },
     {
        id: 4,
        name: "Michael Brown",
        parkId: 6,
    },
     {
        id: 5,
        name: "Sarah Davis",
        parkId: 4,
    },
     {
        id: 6,
        name: "David Wilson",
        parkId: 2,
    },
     {
        id: 7,
        name: "Laura Garcia",
        parkId: 1,
    },
     {
        id: 8,
        name: "James Martinez",
        parkId: 6,
    },
     {
        id: 9,
        name: "Olivia Rodriguez",
        parkId: 3,
    },
     {
        id: 10,
        name: "Daniel Lee",
        parkId: 2,
    },
    ],
    areaServices:[
    // Chamfort River
        {    
        parkId: 1,
        serviceId: 1,
    },
     {
        parkId: 1,
        serviceId: 2,
    },
     {
        parkId: 1,
        serviceId: 3
    },
    // Lost Wolf Hiking Trail
    {
        parkId: 2,
        serviceId: 4,
    },
    {
        parkId: 2,
        serviceId: 5,
    },
    {
        parkId: 2,
        serviceId: 6
    },
    // Lodge
    {
        parkId: 3,
        serviceId: 7,
    },
     {
        parkId: 3,
        serviceId: 8,
    },
     {
        parkId: 3,
        serviceId: 9
    },
    // Gander River 
    {
        parkId: 4,
        serviceId: 3,
    },
     {
        parkId: 4,
        serviceId: 4,
    },
    // Campgrounds 
    {
        parkId: 5,
        serviceId: 7,
    },
     {
        parkId: 5,
        serviceId: 8,
    },
     {
        parkId: 5,
        serviceId: 9
    },
    // Pine Bluff Trails 
    {
        parkId: 6,
        serviceId: 4,
    },
     {
        parkId: 6,
        serviceId: 5,
    },
     {
        parkId: 6,
        serviceId: 10
    },
    ]
}