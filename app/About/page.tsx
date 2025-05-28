 import React from 'react'
import Image from 'next/image'
import Overview from '@/components/Overview'

const Aboutpage = () => {


  return (
<div className='mt-24'>
        <div>
            <section className="bg-[#C2EFD4] min-h-[50vh] flex items-center">
            <div className="container mx-auto px-6 py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                              <div className="lg:w-1/2 mb-12 lg:mb-0">
                                  <h1 className="text-[#224f34] text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold font-rufina leading-tight mb-6">
                                      Our Story
                                  </h1>
                                  <p className="text-[#267d49] text-xl lg:text-xl font-medium font-poppins leading-relaxed mb-8">
                                    AJ Golf Street was born from a simple idea: to bring style, performance, and accessibility to the modern golfer. Whether you are hitting the greens on a crisp morning or browsing for the next favourite piece of gear, we believe golf should be as much about self-expression as it about precision. Founded by golf lovers, AJ Golf Street blends classic golf heritage with a fresh, street-smart edge. We carefully curate and create apparels, accessories, and gear that perform on the course and look great off it- designed for players who value both form and function.
                                  </p>
                                  <button className="px-8 py-4 text-white text-lg font-medium font-poppins uppercase bg-[#224e34] rounded-[3px] shadow-lg hover:bg-[#1a3a27] transition-colors">
                                      Connect with Us
                                  </button>
                              </div>
                          <div className="lg:w-1/2 flex justify-center">
                              <img
                                  className="w-full max-w-xl rounded-lg shadow-xl"
                                  src="About.png"
                                  alt="Children benefiting from donations"
                                  width={800}
                                  height={600}
                                  loading="eager"
                                  style={{ objectFit: 'cover', maxHeight: '500px' }}
                              />
                          </div>
                </div>
             </div>
            </section>
        </div>

            <div className='container mx-auto px-6 py-12'>
            <section className="text-gray-700">
                            <div className="flex justify-center mt-10 text-4xl font-regular">
                            Why Us?
                            </div>
                        <div className="container px-5 py-12 mx-auto">
                                    <div className="flex flex-wrap text-center justify-center">
                                        <div className="p-4 md:w-1/4 sm:w-1/2">
                                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                            <div className="flex justify-center">
                                                <img src="Professionalism.png" 
                                                className="w-64 mb-3" />
                                            </div>
                                            <h2 className="title-font font-regular text-2xl text-gray-900">Professionalism</h2>
                                            </div>
                                        </div>

                                        <div className="p-4 md:w-1/4 sm:w-1/2">
                                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                            <div className="flex justify-center">
                                                <img src="Transfer.png" className="w-64 mb-3" />
                                            </div>
                                            <h2 className="title-font font-regular text-2xl text-gray-900">Fast and Reliable</h2>
                                            </div>
                                        </div>

                                        <div className="p-4 md:w-1/4 sm:w-1/2">
                                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                            <div className="flex justify-center">
                                                <img src="Network.png
                                                " className="w-64 mb-3" />
                                            </div>
                                            <h2 className="title-font font-regular text-2xl text-gray-900">Effective Network</h2>
                                            </div>
                                        </div>

                                        <div className="p-4 md:w-1/4 sm:w-1/2">
                                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                                <div className="flex justify-center">
                                                    <img src="Aim.png" className="w-64 mb-3" />
                                                </div>
                                                <h2 className="title-font font-regular text-2xl text-gray-900">Aims Achieved</h2>
                                                </div>
                                            </div>

                        
                                        

                                     </div>
                        </div>
            </section>
            </div>
</div>
  )
}

export default Aboutpage

// This code defines an About page for a golf apparel and accessories brand, AJ Golf Street.
// It includes a section about the brand's story, highlighting its mission to blend style and performance in golf gear.