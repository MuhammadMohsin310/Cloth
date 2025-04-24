import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductDesc = () => {
  const [color, setColor] = useState('Black');
  const [inStock, setInStock] = useState(true);

  return (
    <>
    <div className='bg-white p-10 '>
    <div className=" max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <div>
        <img src="./men-sample.jpg" alt="Aukey TWS Earbuds" className="rounded-lg h-100 w-full border border-3 border-gray-300" />
        <div className="flex space-x-2 mt-2 ">
          <img src="./children-sample.jpg" alt="Thumb" className="w-14 h-14 rounded-md" />
          <img src="./women.jpg" alt="Thumb" className="w-14 h-14 rounded-md" />
          <img src="./women-1.jpg" alt="Thumb" className="w-14 h-14 rounded-md" />
          <img src="./featured1.jpg" alt="Thumb" className="w-14 h-14 rounded-md" />
          <img src="./featured2.jpg" alt="Thumb" className="w-14 h-14 rounded-md" />
        </div>
      </div>

      <Card className='bg-transparent shadow-none'>
        <CardContent className="space-y-4 pt-4">
          <div>
            <h2 className="text-2xl font-semibold" >Summer Outdoor Sunscreen Quick-Drying Jacket</h2>
            <div className="flex items-center text-yellow-500 space-x-1 text-sm">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600 ">4.7 | 16 Reviews</span>
            </div>
          </div>

          <div className="text-red-600 text-xl font-bold text-orange-600">Rs 3,299 <span className="text-sm line-through text-gray-500 ml-2">Rs 4,400</span> <span className="text-green-600 text-sm ml-1">25% OFF</span></div>

          <div>
            <h3 className="font-semibold mb-1">Colors</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 border rounded-md ${color === 'Black' ? 'bg-black text-white' : ''}`}
                onClick={() => setColor('Black')}
              >
                Black
              </button>
              <button
                className={`px-3 py-1 border rounded-md text-gray-400 cursor-not-allowed`}
                disabled
              >
                White (Sold Out)
              </button>
            </div>
          </div>

          <div>
            <p className="text-green-700 font-medium">{inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>

          <div className="border p-3 rounded-md bg-gray-50">
            <p className="font-semibold">Add Gift Wrap</p>
            <p className="text-sm text-gray-600">Cost: Rs 199</p>
            <p className="text-sm text-gray-600">Make it Memorable - Add Gift Wrapping!</p>
          </div>

          <div className=" flex space-x-4">
            <Button className='bg-red-600 text-white'>Add to Cart</Button>
            <Button variant="outline">Check Out</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
    </>
  );
};

export default ProductDesc;


