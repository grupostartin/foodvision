import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Dono da Pizzaria Bella Napoli",
      text: "Minhas vendas dobraram na primeira semana após atualizar o cardápio. O investimento se pagou em 2 dias.",
      image: "https://i.pravatar.cc/100?img=11"
    },
    {
      name: "Fernanda Costa",
      role: "Gerente do Burger King (Franquia)",
      text: "A qualidade visual ficou incrível. As fotos passam exatamente a suculência dos nossos burgers. Recomendo demais!",
      image: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Carlos Mendes",
      role: "Sushi House Delivery",
      text: "Estava perdendo clientes para concorrentes com fotos melhores. A FoodVision salvou meu negócio.",
      image: "https://i.pravatar.cc/100?img=3"
    }
  ];

  const stats = [
    { label: "Restaurantes Atendidos", value: "+500" },
    { label: "Aumento Médio em Vendas", value: "32%" },
    { label: "Fotos Otimizadas", value: "10k+" },
  ];

  return (
    <section className="py-20 bg-background" id="depoimentos">
      {/* Red Strip with Stats */}
      <div className="bg-primary py-12 mb-16 transform -skew-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 transform skew-y-2 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
             {stats.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
               >
                 <p className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</p>
                 <p className="text-white/80 font-medium uppercase tracking-wide">{stat.label}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text">
            Quem experimenta, <span className="text-primary">vende mais</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-surface p-8 rounded-2xl relative border border-white/5 shadow-lg hover:border-primary/50 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />
              <p className="text-muted mb-6 italic relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                <div>
                  <h5 className="font-bold text-text">{testimonial.name}</h5>
                  <p className="text-xs text-muted uppercase">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;