import React from 'react'

function FarmHouse() {

  const houses = [
    {
      id: 1,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/FarnHouse/7.jpg",
        "/public/FarnHouse/f12.jpg",
        "/public/FarnHouse/f8.jpg",      ],
    },
    {
      id: 2,
      title: "Luxury Farm House",
      price: "$75,000",
      location: "Nainital, Uttarakhand",
      rating: 4.9,
      images: [
        "/public/FarnHouse/f5.jpg",
        "/public/FarnHouse/f6.jpg",
        "/public/FarnHouse/7.jpg",      ],
    },
    {
      id: 3,
      title: "Modern Pool House",
      price: "$90,000",
      location: "Goa",
      rating: 4.7,
      images: [
        "/public/FarnHouse/f6.jpg",
        "/public/FarnHouse/f9.jpgf",
        "/public/FarnHouse/7.jpg",      ],
    },
    {
      id: 4,
      title: "Wooden Cabin",
      price: "$40,000",
      location: "Manali, Himachal",
      rating: 4.6,
      images: [
        "/public/FarnHouse/f12.jpg",
        "/public/FarnHouse/f9.jpg",
        "/public/FarnHouse/7.jpg",      ],
    },
    {
      id: 5,
      title: "Beach Side Villa",
      price: "$1,20,000",
      location: "Kerala",
      rating: 5.0,
      images: [
        "/public/FarnHouse/f9.jpg",
        "/public/FarnHouse/f12.jpg",
        "/public/FarnHouse/7.jpg",      ],
    },
    {
      id: 6,
      title: "Mountain View House",
      price: "$68,000",
      location: "Mussoorie",
      rating: 4.8,
      images: [
        "/public/FarnHouse/f10.jpg", 
        "/public/FarnHouse/f5.jpg", 
        "/public/FarnHouse/7.jpg",      ],
    },
    {
      id: 7,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/FarnHouse/f12.jpg",
        "/public/FarnHouse/f9.jpg",
        "/public/FarnHouse/7.jpg",      ],
    },
    {
      id: 8,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/FarnHouse/7.jpg",
        "/public/FarnHouse/7.jpg",
        "/public/FarnHouse/7.jpg",      ],
    },

  ];


  return (
    <div>
      <div className=" flex flex-wrap items-center gap-20 px-12 py-10">
        {
          houses.map((elem, index) => {
            return (
              <div key={index} className=" flex flex-col gap-2 ">
                <div className=" flex overflow-x-scroll rounded-lg w-50 h-50 bg-amber-400">
                  <img className=' w-full h-full object-cover' src={elem.images[0]} alt="" />
                  <img className=' w-full h-full object-cover' src={elem.images[1]} alt="" />
                  <img className=' w-full h-full object-cover' src={elem.images[2]} alt="" />
                </div>
                <div className="flex flex-col items-center">
                  <p>{elem.title}</p>
                  <p>{elem.location}</p>
                  <p>{elem.price}</p>
                </div>
              </div>

            )
          })
        }
      </div>
     
    </div>
  )
}

export default FarmHouse
