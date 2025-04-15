import React from 'react'
// import TestimonialSlider from '@/components/TestimonialSlider'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Link, NavLink } from "react-router-dom";
function Home() {
  return (
    < >
<div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest">
  {/* Background Image */}
  <img src="./banner.jpg" alt="Background" className="absolute inset-0 w-full h-full opacity-90" style={{ objectFit: 'cover', backgroundRepeat: 'repeat' }} />
  <h1 className="relative text-white text-5xl font-bold bg-transparent"> Home</h1>
</div>


         {/*Categories Section */}
         <div className='bg-white p-10 md:p-20'>
        <div className='flex flex-col md:flex-row items-center mx-5 md:mx-10'>
          <div className='w-full md:w-full justify-center p-6 text-center md:text-left'>
            <h3 className='text-center text-red-500 font-bold mt-6 text-lg md:text-xl'>Customer Favorites</h3>
            <h1 className='text-center pb-10 text-2xl md:text-4xl font-bold mt-5'>Our Catagories</h1>
            <div className=''>
              <Link to={'menu'} className='flex flex-wrap justify-center md:justify-start gap-6 mt-5'>
              {[
                { name: 'Men', img: './dessert.png' },
                { name: 'Women',  img: './dessert.png'  },
                { name: 'Childrens', img: './dessert.png'  }
              ].map((dish, index) => (
                <Card key={index} className='w-full sm:w-80 justify-center mx-auto '>
                  <CardHeader className='bg-white'>
                    <img src={dish.img} alt={dish.name} className='bg-blue-200 p-4 w-20 flex m-auto  object-cover rounded-3xl mt-2' />
                    <CardTitle>
                      <h2 className='flex justify-center text-center font-bold text-black text-lg md:text-xl'>{dish.name}</h2>
                    </CardTitle>
                    {/* <CardDescription className='text-sm md:text-base mt-3 flex justify-center'>
                      {dish.desc}
                    </CardDescription> */}
                   
                  </CardHeader>
                </Card>
              ))}
              </Link>
            </div>
          </div>
        </div>
      </div>



     {/*Dishes Section */}
     <div className='bg-white p-10 md:p-20 sm:p-10'>
        <div className='flex flex-col md:flex-row items-center mx-5 md:mx-10'>
          <div className='w-full md:w-full justify-center text-center md:text-left'>
            <h3 className='text-red-500 font-bold mt-6 text-lg md:text-xl'>Special Dishes</h3>
            <h1 className='text-2xl md:text-4xl font-bold mt-5'>Standout Dishes From Our Menu</h1>
            <Link to={'menu'}>
            <div className='flex flex-wrap justify-center md:justify-start gap-6 mt-5'>
              {[ 
                { name: 'Fattoush Salad', price: 24, rating: 4.2, img: './download.jpg' },
                { name: 'Vegetable Salad', price: 27, rating: 4.9, img: './download.jpg' },
                { name: 'Egg Vegi Salad', price: 31, rating: 4.5, img: './download.jpg' }
              ].map((dish, index) => (
                <Card key={index} className='w-full sm:w-80 justify-center mx-auto '>
                  <CardHeader className='bg-white'>
                    <CardTitle>
                      <h2 className='flex justify-center text-center text-green-800 text-lg md:text-xl'>{dish.name}</h2>
                    </CardTitle>
                    <img src={dish.img} alt={dish.name} className='w-full h-40 object-cover rounded-lg mt-2 ' />
                    <CardDescription className='text-sm md:text-base mt-3'>
                      A refreshing Middle Eastern salad with crispy pita chips, fresh vegetables, and a zesty sumac dressing.
                    </CardDescription>
                    <div className='flex items-center justify-between w-full pt-5'>
                      <div className='font-bold text-lg'><span className='text-red-600'>$</span> {dish.price.toFixed(2)}</div>
                      <div className='flex items-center'> 
                        <span className='mr-1'>{dish.rating}</span>
                        <img src='./star-remove.png' alt='star' className='w-5 h-5' />
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            </Link>
          </div>
        </div>
      </div>

    {/* Testimonial Section */}
        {/* <div className='bg-white p-20'>
        <div className='md:flex sm:block my-0 mx-10 items-center '>
          <div className='sm:w-full p-6'>
            <h3 className='text-red-500 font-bold mt-6 '>Testimonials</h3>
            <h1 className='text-3xl sm:text-md font-bold mt-5 '>What Our Customers Say About Us</h1>
            <p className='mt-3 text-xl  sm:text-sm '>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
           
          </div> */}
        {/* <TestimonialSlider/> */}
          {/* </div>

        </div> */}

        

      {/* Culinary Journey -Sections */}
      <div className="bg-white p-10 md:p-20">
  <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between mx-5 md:mx-10">
    
    {/* Left Section */}
    <div className="w-full md:w-1/2 p-4 text-center md:text-left">
      <h3 className="text-red-500 font-bold mt-4">Our Story & Services</h3>
      <h1 className="text-2xl md:text-3xl font-bold mt-3">Our Culinary Journey And Services</h1>
      <p className="mt-3 text-base md:text-lg max-w-md mx-auto md:mx-0">
        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
      </p>
      <button className="bg-green-500 text-white px-6 py-3 rounded-3xl mt-5">
       <NavLink to="/menu"> Explore</NavLink>
      </button>
    </div>

    {/* Right Section (Image or Content) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 md:mt-0">
  <Card>
    <CardHeader className="bg-white">
      <CardTitle>
        <h2 className="text-green-600">Catering</h2>
      </CardTitle>
      <CardDescription>
        <p>Delight your guests with our flavors and presentation</p>
      </CardDescription>
    </CardHeader>
  </Card>

  <Card>
    <CardHeader className="bg-white">
      <CardTitle>
        <h2 className="text-green-600">Fast Delivery</h2>
      </CardTitle>
      <CardDescription>
        <p>Delight your guests with our flavors and presentation</p>
      </CardDescription>
    </CardHeader>
  </Card>

  <Card>
    <CardHeader className="bg-white">
      <CardTitle>
        <h2 className="text-green-600">Online Ordering</h2>
      </CardTitle>
      <CardDescription>
        <p>Explore menu & order with ease using our Online Ordering</p>
      </CardDescription>
    </CardHeader>
  </Card>

  <Card>
    <CardHeader className="bg-white">
      <CardTitle>
        <h2 className="text-green-600">Gift Cards</h2>
      </CardTitle>
      <CardDescription>
        <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
      </CardDescription>
    </CardHeader>
  </Card>
</div>


  </div>
</div>
  </>

  )
}

export default Home




