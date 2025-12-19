import { motion } from 'motion/react';
import { Coffee, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'We source the finest ingredients and coffee beans from around the world.'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'Everything is prepared fresh daily with attention to detail and care.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjYwMzE2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee Art"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-amber-600 text-white p-6 rounded-xl shadow-xl"
            >
              <p className="text-4xl mb-1">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              About <span className="text-amber-600">Café Bounab</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 2014, Café Bounab has been serving our community with exceptional 
              food and beverages in a warm, welcoming atmosphere. Our passion for quality 
              and customer satisfaction drives everything we do.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              From our signature coffee blends to our freshly prepared meals, every item 
              on our menu is crafted with care and attention to detail. We believe in 
              creating memorable experiences, one cup at a time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
