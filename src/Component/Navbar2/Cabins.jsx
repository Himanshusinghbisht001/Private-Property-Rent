import React from 'react'

function Cabins() {

  const houses = [
    {
      id: 1,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/cabin/c1.avif",
        "/public/cabin/c2.avif",
        "/public/cabin/c3.avif",      ],
    },
    {
      id: 2,
      title: "Luxury Farm House",
      price: "$75,000",
      location: "Nainital, Uttarakhand",
      rating: 4.9,
      images: [
        "/public/cabin/c4.avif",
        "/public/cabin/c5.avif",
        "/public/cabin/c6.avif",      ],
    },
    {
      id: 3,
      title: "Modern Pool House",
      price: "$90,000",
      location: "Goa",
      rating: 4.7,
      images: [
        "/public/cabin/c7.avif",
        "/public/cabin/c10.avif",
        "/public/cabin/c1.avif",      ],
    },
    {
      id: 4,
      title: "Wooden Cabin",
      price: "$40,000",
      location: "Manali, Himachal",
      rating: 4.6,
      images: [
        "/public/cabin/c10.avif",
        "/public/cabin/c2.avif",
        "/public/cabin/c1.avif",      ],
    },
    {
      id: 5,
      title: "Beach Side Villa",
      price: "$1,20,000",
      location: "Kerala",
      rating: 5.0,
      images: [
        "/public/cabin/c3.avif",
        "/public/cabin/c4.avif",
        "/public/cabin/c5.avif",      ],
    },
    {
      id: 6,
      title: "Mountain View House",
      price: "$68,000",
      location: "Mussoorie",
      rating: 4.8,
      images: [
        "/public/cabin/c16.avif", 
        "/public/cabin/c17.avif", 
        "/public/cabin/c5.avif",      ],
    },
    {
      id: 7,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/cabin/c1.avif",
        "/public/cabin/c2.avif",
        "/public/cabin/c2.avif",      ],
    },
    {
      id: 8,
      title: "2BHK Villa in Jhansi",
      price: "$50,000",
      location: "Jhansi, Uttar Pradesh",
      rating: 4.8,
      images: [
        "/public/cabin/c2.avif",
        "/public/cabin/c3.avif",
        "/public/cabin/c4.avif",      ],
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

export default Cabins
