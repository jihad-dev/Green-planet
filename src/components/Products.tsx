import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// const products = [
//   {
//     id: 1,
//     name: 'Monstera Deliciosa',
//     price: 49.99,
//     image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80',
//     category: 'Indoor Plants'
//   },
//   {
//     id: 2,
//     name: 'Snake Plant',
//     price: 34.99,
//     image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&q=80',
//     category: 'Air Purifying'
//   },
//   {
//     id: 3,
//     name: 'Peace Lily',
//     price: 29.99,
//     image: 'https://images.unsplash.com/photo-1593691528490-5d878b18b45a?auto=format&fit=crop&q=80',
//     category: 'Low Light Plants'
//   },
//   {
//     id: 4,
//     name: 'Fiddle Leaf Fig',
//     price: 59.99,
//     image: 'https://images.unsplash.com/photo-1597055181300-e3633a207517?auto=format&fit=crop&q=80',
//     category: 'Indoor Plants'
//   }
// ];
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80",
    "category": "Indoor Plants"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 34.99,
    image: "https://gardeningsg.nparks.gov.sg/images/Plants/snake_plant(4)_zara_chin.jpg",
    "category": "Air Purifying"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 29.99,
    image: "https://www.capegazette.com/sites/capegazette/files/2020/12/field/image/peace%20lily.jpg",
    "category": "Low Light Plants"
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 59.99,
    image: "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Kent-48-3265.048-WH_Fiddle-Leaf-Fig-Tree-14.jpg",
    "category": "Indoor Plants"
  },
  {
    id: 5,
    name: "Cactus",
    price: 19.99,
    image: "https://static-01.daraz.com.bd/p/cbaa137b52dac1f81921379e34b31ea7.jpg",
    "category": "Succulents"
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 39.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77wBI0nJ4MJCHZXeY9zlhE5HmawQCkZiA_1LSkEWlHcHFzvbgKpQYjEFEaq_KJE2SC5Q&usqp=CAU",
    "category": "Indoor Plants"
  },
  {
    id: 7,
    name: "Spider Plant",
    price: 24.99,
    image: "https://i0.wp.com/nainitalsucculents.com/wp-content/uploads/2022/05/image_7XR.webp?fit=1024%2C1024&ssl=1",
    "category": "Air Purifying"
  },
  {
    id: 8,
    name: "ZZ Plant",
    price: 44.99,
    image: "https://m.media-amazon.com/images/I/71AQt3yK4WL._AC_UF1000,1000_QL80_.jpg",
    category: "Low Light Plants"
  }
]
export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Plants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of beautiful, easy-to-care-for plants that will thrive in your home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              <div className="p-6">
                <span className="text-sm text-green-600 font-medium">{product.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}