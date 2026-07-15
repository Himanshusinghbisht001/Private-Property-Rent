import React from 'react'

function Rooms() {

  const houses = [
    {
      id: 1,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/houses/h12.jpg",
        "/public/houses/h11.jpg",
        "/public/houses/h10.jpg",
      ],
    },
    {
      id: 2,
      title: "Luxury Farm House",
      price: "$75,000",
      location: "Nainital, Uttarakhand",
      rating: 4.9,
      images: [
        "/houses/h9.jpg",
        "/houses/h8.jpg",
        "/houses/h7.jpg",
      ],
    },
    {
      id: 3,
      title: "Modern Pool House",
      price: "$90,000",
      location: "Goa",
      rating: 4.7,
      images: [
        "/houses/h1.jpg",
        "/houses/h2.jpg",
        "/houses/h3.jpg",
      ],
    },
    {
      id: 4,
      title: "Wooden Cabin",
      price: "$40,000",
      location: "Manali, Himachal",
      rating: 4.6,
      images: [
        "/houses/h5.jpg",
        "/houses/h2.jpg",
        "/houses/h10.jpg",
      ],
    },
    {
      id: 5,
      title: "Beach Side Villa",
      price: "$1,20,000",
      location: "Kerala",
      rating: 5.0,
      images: [
        "/houses/h8.jpg",
        "/houses/h7.jpg",
        "/houses/h3.jpg",
      ],
    },
    {
      id: 6,
      title: "Mountain View House",
      price: "$68,000",
      location: "Mussoorie",
      rating: 4.8,
      images: [
        "/houses/h2.jpg",
        "/houses/h12.jpg",
        "/houses/h1.jpg",
      ],
    },
    {
      id: 7,
      title: "Luxury Farm House",
      price: "$75,000",
      location: "Nainital, Uttarakhand",
      rating: 4.9,
      images: [
        "/houses/h9.jpg",
        "/houses/h8.jpg",
        "/houses/h7.jpg",
      ],
    },
    {
      id: 8,
      title: "Luxury Farm House",
      price: "$75,000",
      location: "Nainital, Uttarakhand",
      rating: 4.9,
      images: [
        "/houses/h1.jpg",
        "/houses/h2.jpg",
        "/houses/h3.jpg",
      ],
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

export default Rooms
