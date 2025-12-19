import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Artisan Coffee',
    description: 'Premium blend with rich, smooth flavor and beautiful latte art',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjYwMzE2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Drinks'
  },
  {
    id: 2,
    name: 'Fresh Croissants',
    description: 'Buttery, flaky pastries baked fresh every morning',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1571157577110-493b325fdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwY3JvaXNzYW50c3xlbnwxfHx8fDE3NjYxMDYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Pastries'
  },
  {
    id: 3,
    name: 'Healthy Salad Bowl',
    description: 'Fresh greens, quinoa, and seasonal vegetables with house dressing',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1624340209404-4f479dd59708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc2FsYWQlMjBib3dsfGVufDF8fHx8MTc2NjAzMjI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Salads'
  },
  {
    id: 4,
    name: 'Gourmet Sandwich',
    description: 'Freshly made with premium ingredients and artisan bread',
    price: '$10.50',
    image: 'https://images.unsplash.com/photo-1763647814142-b1eb054d42f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGdvdXJtZXQlMjBmb29kfGVufDF8fHx8MTc2NjEwNjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sandwiches'
  },
  {
    id: 5,
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with poached eggs and microgreens',
    price: '$9.00',
    image: 'https://images.unsplash.com/photo-1609158087148-3bae840bcfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBhdm9jYWRvJTIwdG9hc3R8ZW58MXx8fHwxNzY2MDIyODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Breakfast'
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl text-gray-900">Our Menu</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of food and beverages, 
            crafted with passion and the finest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl text-gray-900">{item.name}</h3>
                  <span className="text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors duration-300"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
