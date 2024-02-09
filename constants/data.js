export const features = [
  {
    title: "Curated property listings",
    description:
      "Explore a handpicked selection of luxury properties tailored to your preferences. Luxvilla's curated listings showcase exceptional homes, ensuring a refined and exclusive real estate experience.",
    icon: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1705261034/icons/xsfriq6vttapd7xtxvjb.svg",
  },
  {
    title: "24/7 Chat and Call scheduling",
    description:
      "Connect effortlessly with sellers through our 24/7 chat functionality. Luxvilla empowers you to schedule calls at your convenience, fostering direct communication and enhancing your journey to finding the perfect property.",
    icon: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1705261033/icons/azflux0orqxwtpcz14ct.svg",
  },
  {
    title: "Secure and seamless transactions",
    description:
      "Trust in secure and seamless transactions. Luxvilla prioritizes the safety of your transactions, providing a trustworthy platform for hassle-free property purchases. Your dream home is just a secure click away",
    icon: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1705261034/icons/uay6h0s3qknvyblmtjln.svg",
  },
  {
    title: "Personalized user experience",
    description:
      "Experience real estate tailored to you. Luxvilla's personalized user profiles and advanced algorithms deliver a unique journey, providing tailored recommendations and ensuring your search for the perfect home is as individual as you are.",
    icon: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1705261034/icons/xo8f68sposyvihnjbcbz.svg",
  },
];

export const featuredProperties = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1704410351/pexels-maria-orlova-4947782_rmral4.jpg",
    description:
      "This stunning beachfront property offers an unparalleled combination of luxury, comfort, and breathtaking views. Nestled along the pristine shores, this residence...",
    title: "267, Etim Eyan Crescent Flat 29A",
    location: "Victoria Island, Lagos State",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1704410350/pexels-maria-orlova-4916516_y8fdon.jpg",
    description:
      "This stunning beachfront property offers an unparalleled combination of luxury, comfort, and breathtaking views. Nestled along the pristine shores, this residence...",
    title: "267, Etim Eyan Crescent Flat 29A",
    location: "Victoria Island, Lagos State",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1704410349/pexels-maria-orlova-4946982_n7v7rj.jpg",
    description:
      "This stunning beachfront property offers an unparalleled combination of luxury, comfort, and breathtaking views. Nestled along the pristine shores, this residence...",
    title: "267, Etim Eyan Crescent Flat 29A",
    location: "Victoria Island, Lagos State",
  },
];
 const date = new Date()
 

export const actions = [
  {
    id:1,
    header: 'Buy a Property',
    action: 'see listed properties'
  },
  {
    id:2,
    header: 'Sell a Property',
    action: 'list your properties'
  },
  {
    id:3,
    header: 'Rent a Property',
    action: 'see listed properties'
  }
]

export const listings = [
  {
    id: 1,
    title: "267, Etim Eyan Crescent Flat 29A",
    description: "This stunning beachfront property offers an unparalleled combination of luxury, comfort, and breathtaking views. Nestled along the pristine shores, this residence presents a unique opportunity for those seeking a refined coastal lifestyle...",
    displayImage: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1704410351/pexels-maria-orlova-4947782_rmral4.jpg",
    type:"rentage",
    budget: "450k/year",
    location: "Victoria Island, Lagos",
    rating: "4.0/5",
    dateListed: date.getDate() ,
  },
  {
    id: 2,
    title: "267, Etim Eyan Crescent Flat 29A",
    description: "This stunning beachfront property offers an unparalleled combination of luxury, comfort, and breathtaking views. Nestled along the pristine shores, this residence presents a unique opportunity for those seeking a refined coastal lifestyle...",
    displayImage: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1704410349/pexels-maria-orlova-4946982_n7v7rj.jpg",
    type:"buy",
    budget: "450k/year",
    location: "Victoria Island, Lagos",
    rating: "3.0/5",
    dateListed: date.getDate() ,
  },
  {
    id: 3,
    title: "267, Etim Eyan Crescent Flat 29A",
    description: "This stunning beachfront property offers an unparalleled combination of luxury, comfort, and breathtaking views. Nestled along the pristine shores, this residence presents a unique opportunity for those seeking a refined coastal lifestyle...",
    displayImage: "https://res.cloudinary.com/dnq4kwg8w/image/upload/v1704410350/pexels-maria-orlova-4916516_y8fdon.jpg",
    type:"rentage",
    budget: "450k/year",
    location: "Victoria Island, Lagos",
    rating: "4.0/5",
    dateListed: date.getDate() ,
  },
]
