import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';

const Pricing: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [pendingCheckoutUrl, setPendingCheckoutUrl] = useState<string | null>(null);

  const handlePlanSelect = async (url?: string) => {
    if (!url) {
      const phoneNumber = '5531982781618';
      const message = encodeURIComponent('Olá, vim do site FoodVision.');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      return;
    }

    // Verificar se usuário está logado
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user) {
      // Usuário logado -> Redirecionar com email
      const checkoutUrl = new URL(url);
      checkoutUrl.searchParams.set('email', session.user.email || '');
      // Pode adicionar outros metadados se o Cakto suportar (ex: customer_id)
      window.open(checkoutUrl.toString(), '_blank');
    } else {
      // Usuário não logado -> Abrir modal
      setPendingCheckoutUrl(url);
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = (user: any) => {
    setIsAuthModalOpen(false);
    
    if (pendingCheckoutUrl) {
      // Redirecionar para checkout após login/cadastro
      const checkoutUrl = new URL(pendingCheckoutUrl);
      checkoutUrl.searchParams.set('email', user.email || '');
      window.open(checkoutUrl.toString(), '_blank');
      setPendingCheckoutUrl(null);
    }
  };

  const plans = [
    {
      name: "Básico",
      price: "R$ 97",
      features: ["10 Fotos Profissionais", "Edição de Cor & Luz", "Entrega em 72h", "Formato iFood/Rappi"],
      highlight: false,
      checkoutUrl: "https://pay.cakto.com.br/caiv3po_669621"
    },
    {
      name: "Avançado",
      price: "R$ 247",
      features: ["30 Fotos Profissionais", "Food Styling Digital Avançado", "Capa Premium para iFood", "Entrega Prioritária (48h)", "Consultoria de Cardápio"],
      highlight: true,
      checkoutUrl: "https://pay.cakto.com.br/3fi3885_669632"
    },
    {
      name: "Franquia",
      price: "Sob Consulta",
      features: ["50+ Fotos", "Gestão de Múltiplos Cardápios", "Padronização Visual", "Suporte Dedicado"],
      highlight: false,
      checkoutUrl: "" // Sob consulta
    }
  ];

  return (
    <section className="py-20 bg-background relative" id="planos">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            Investimento que volta no <span className="text-primary">primeiro mês</span>
          </h2>
          <p className="text-muted">Escolha o pacote ideal para o tamanho da sua fome de crescer.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-surface rounded-2xl p-8 border ${plan.highlight ? 'border-secondary shadow-[0_0_30px_rgba(249,115,22,0.15)] scale-105 z-10' : 'border-white/5 shadow-lg'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                  Mais Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
              <div className="text-4xl font-display font-bold text-primary mb-6">{plan.price}</div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full mt-auto"
                onClick={() => handlePlanSelect(plan.checkoutUrl)}
              >
                {plan.checkoutUrl ? 'Comprar Agora' : 'Falar com Consultor'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
        checkoutUrl={pendingCheckoutUrl || undefined}
      />
    </section>
  );
};

export default Pricing;