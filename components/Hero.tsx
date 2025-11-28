import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
              <Star className="text-secondary w-4 h-4 fill-current" />
              <span className="text-secondary text-sm font-bold uppercase tracking-wider">Líder em Conversão</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text leading-tight">
              Transforme Visitantes em Pedidos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fotos que Dão Fome.</span>
            </h1>

            <p className="text-lg text-muted max-w-lg leading-relaxed">
              Aumente suas vendas no iFood e Rappi em até <span className="font-bold text-white">30%</span> com nosso tratamento profissional de imagens e Food Styling Digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={20} />}
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Planos de Revitalização
              </Button>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-sm text-muted font-medium">
                Usado por <span className="text-white">+500 restaurantes</span>
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
              alt="Hambúrguer Gourmet Suculento"
              className="w-full h-auto object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-2 border border-white/5"
            />

            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-surface border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="bg-green-500/20 p-2 rounded-full">
                <ArrowRight className="text-green-500 rotate-[-45deg]" />
              </div>
              <div>
                <p className="text-xs text-muted">Aumento de Vendas</p>
                <p className="text-lg font-bold text-white">+32% este mês</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;