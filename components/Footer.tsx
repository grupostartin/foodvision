import React from 'react';
import Button from './ui/Button';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5">
      {/* Pre-footer CTA */}
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-6">
            Não deixe seu cliente comer no <span className="text-primary">concorrente</span>.
          </h2>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero vender mais
          </Button>
        </motion.div>
      </div>

      <div className="bg-black/40 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary">
              Food<span className="text-secondary">Vision</span>
            </span>
          </div>

          <div className="flex space-x-6 text-muted text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-sm text-muted hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-sm text-muted hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-sm text-muted hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all">
              <Linkedin size={20} />
            </a>
          </div>

        </div>
        <div className="text-center mt-8 text-white/20 text-xs">
          © 2024 FoodVision. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;