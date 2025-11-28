import React from 'react';
import { Zap, Camera, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-white" />,
      title: "Iluminação Gourmet",
      description: "Corrigimos sombras duras e realçamos as cores naturais dos ingredientes para máxima apetência.",
      color: "bg-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Edição de Apetite",
      description: "Realce de texturas: o brilho do molho, a crocância da fritura, o vapor da massa.",
      color: "bg-primary"
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Entrega Flash 48h",
      description: "Não perca vendas. Entregamos seu cardápio renovado em até 48 horas úteis.",
      color: "bg-secondary"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "ROI Imediato",
      description: "Investimento que se paga nos primeiros dias com o aumento natural da conversão.",
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden relative" id="beneficios">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-6">
                O Efeito <span className="text-primary">FoodVision</span>
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Nossa tecnologia de pós-processamento digital utiliza princípios da neurociência visual para despertar a fome subconsciente. Não é apenas uma foto bonita; é uma ferramenta de vendas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex flex-col space-y-3 p-4 rounded-xl hover:bg-surface/50 transition-colors duration-300"
                  >
                    <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-lg text-text">{feature.title}</h4>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="relative z-10"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10 rounded-3xl pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" 
                  alt="Prato Saudável Vibrante" 
                  className="rounded-3xl shadow-2xl w-full border border-white/5"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-8 -right-4 md:-right-8 bg-surface border border-white/10 p-4 rounded-xl shadow-2xl max-w-xs animate-bounce-slow z-20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-500/20 p-1 rounded-full">
                      <CheckCircle size={16} className="text-green-500" />
                    </div>
                    <span className="font-bold text-sm text-white">Pronto para iFood</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[90%]"></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted">Qualidade</span>
                    <span className="text-xs font-bold text-green-500">98/100</span>
                  </div>
                </motion.div>
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;