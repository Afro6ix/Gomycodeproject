import React from 'react'
import Image from 'next/image'

export const golfBrands = [
  {
    id: 1,
    name: "Titliest",
    logo: "/Titliest.png"
  },
  {
    id: 2,
    name: "Callaway",
    logo: "/Callaway.png"
  },
  {
    id: 3,
    name: "TaylorMade",
    logo: "/TaylorMade.png"
  },
  {
    id: 4,
    name: "Ping",
    logo: "/Ping.png"
  },
  {
    id: 5,
    name: "Cobra",
    logo: "/Cobra.png"
  },
  {
    id: 6,
    name: "Mizuno",
    logo: "/Mizuno.png"
  },
  {
    id: 7,
    name: "Srixon",
    logo: "/Srixon.png"
  },
  {
    id: 8,
    name: "Wilson",
    logo: "/Wilson.png"
  },
  {
    id: 9,
    name: "PXG",
    logo: "Pxg.png"
  },
  {
    id: 10,
    name: "Odyssey",
    logo: "/Odyssey.png"
  },
  {
    id: 11,
    name: "Penfold Golf",
    logo: "Penfolds.png"
  },
  {
    id: 12,
    name: "MacGregor Golf",
    logo: "Macgregor.png"
  },
  {
    id: 13,
    name: "Bridgestone Golf",
    logo: "BridgestoneGolf.png"
  },
  {
    id: 14,
    name: "Galvin Green",
    logo: "Galvingreen.png"
  },
  {
    id: 15,
    name: "Malbon Golf",
    logo: "Malbon.png"
  },
  {
    id: 16,
    name: "Eastside Golf",
    logo: "EastsideGolf.png"
  },
  {
    id: 17,
    name: "Asher Golf",
    logo: "AsherGolf.png"
  },
  {
    id: 18,
    name: "SuperStroke",
    logo: "Superstroke.png"
  },
  {
    id: 19,
    name: "Takomo",
    logo: "Takomo.png"
  },
  {
    id: 20,
    name: "Ben Hogan Golf",
    logo: "Benhogan.png"
  },
  {
    id: 21,
    name: "New Level Golf",
    logo: "Newlevel.png"
  },
  {
    id: 22,
    name: "FootJoy",
    logo: "Footjoy.png"
  },
  {
    id: 23,
    name: "Puma",
    logo: "Puma.png"
  },
  {
    id: 24,
    name: "Nike Golf",
    logo: "Nikegolf.png"
  },
  {
    id: 25,
    name: "Adidas Golf",
    logo: "AdidasGolf.png"
  },
  {
    id: 26,
    name: "Under Armour Golf",
    logo: "UnderArmour.png"
  },
  {
    id: 27,
    name: "J. Lindeberg",
    logo: "JLindeberg.png"
  },
  {
    id: 28,
    name: "Sunday Golf",
    logo: "Sundaygolf.png"
  },
  {
    id: 29,
    name: "Manors",
    logo: "Manors.png"
  },
  {
    id: 30,
    name: "GolfWear",
    logo: "Golfwear.png"
  },
 

]


const ProductsBrand = () => {

  return (
    <div className="container mx-auto mb-10 flex flex-wrap justify-center items-center gap-4 p-4 lg:p-8 bg-gray-100 md:bg-gray-200 lg:bg-gray-300 rounded-lg shadow-md sm:gap-6 md:gap-8 lg:gap-10">
      {golfBrands.map((brand) => (
        <div key={brand.id} className="flex flex-col items-center">
          <img src={brand.logo} alt={brand.name} width={100} height={100} className="w-24 h-24 object-contain" />
          <span className="mt-2 text-sm font-medium">{brand.name}</span>
        </div>
      ))}
    </div>
  
  )
}

export default ProductsBrand