import React from 'react';
import { AlertTriangle, TrendingDown, Frown } from 'lucide-react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Frown size={32} className="text-primary" />,
      title: "Foto Escura & Amadora",
      description: "Fotos tiradas com celular e flash ruim passam impressão de falta de higiene e cuidado."
    },
    {
      icon: <TrendingDown size={32} className="text-primary" />,
      title: "Baixa Conversão",
      description: "O cliente clica, olha a foto feia e sai. Você paga pelo tráfego, mas não vende."
    },
    {
      icon: <AlertTriangle size={32} className="text-primary" />,
      title: "Concorrência Desleal",
      description: "Franquias grandes usam fotos de estúdio. Se você não usar, fica para trás."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-background relative" id="como-funciona">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            Seu cardápio está <span className="text-primary decoration-secondary decoration-wavy underline underline-offset-4">espantando</span> clientes?
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            No iFood, a foto é o garçom. Se a apresentação for ruim, o cliente nem pede o cardápio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >
              <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-text">{problem.title}</h3>
              <p className="text-muted leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 text-text">Veja a diferença real</h3>
            <p className="text-sm text-muted">Arraste a barra para comparar</p>
          </div>
          <BeforeAfterSlider
            beforeImage="/ruim.jpg"
            afterImage="/boa.png"
            className="border-4 border-surface shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;