import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const TermsOfService: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        variant="outline"
                        onClick={() => navigate('/')}
                        className="mb-8 flex items-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Voltar
                    </Button>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-text mb-4">
                        Termos de Uso
                    </h1>
                    <p className="text-muted mb-8">Última atualização: Dezembro de 2024</p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">1. Aceitação dos Termos</h2>
                            <p className="text-muted leading-relaxed">
                                Ao acessar e usar os serviços da FoodVision, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">2. Descrição dos Serviços</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                A FoodVision oferece serviços de fotografia profissional de alimentos, incluindo:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li>Fotografia profissional de pratos e produtos alimentícios</li>
                                <li>Edição e tratamento de imagens</li>
                                <li>Food styling digital</li>
                                <li>Consultoria de cardápio</li>
                                <li>Gestão de tráfego pago (plano Master)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">3. Planos e Pagamentos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Oferecemos três planos de serviço: Básico, Avançado e Master. Os valores e características de cada plano estão descritos em nossa página de preços.
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li>Os pagamentos são processados através da plataforma Cakto</li>
                                <li>Todos os preços estão em Reais (BRL)</li>
                                <li>O pagamento deve ser realizado antes da prestação do serviço</li>
                                <li>Não oferecemos reembolsos após o início da produção</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">4. Direitos Autorais e Propriedade Intelectual</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Todas as fotografias e materiais criados pela FoodVision são protegidos por direitos autorais. Ao contratar nossos serviços:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li>Você recebe licença de uso das imagens para fins comerciais do seu negócio</li>
                                <li>A FoodVision mantém os direitos autorais das imagens</li>
                                <li>É permitido o uso em redes sociais, cardápios digitais e impressos, e plataformas de delivery</li>
                                <li>É proibida a revenda ou sublicenciamento das imagens</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">5. Prazos de Entrega</h2>
                            <p className="text-muted leading-relaxed">
                                Os prazos de entrega variam conforme o plano contratado. Faremos todos os esforços para cumprir os prazos estabelecidos, mas não nos responsabilizamos por atrasos causados por fatores externos ao nosso controle.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">6. Cancelamento e Reembolso</h2>
                            <p className="text-muted leading-relaxed">
                                Cancelamentos podem ser feitos até 24 horas antes do início da produção com reembolso total. Após esse período, não oferecemos reembolsos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">7. Limitação de Responsabilidade</h2>
                            <p className="text-muted leading-relaxed">
                                A FoodVision não se responsabiliza por danos indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">8. Modificações dos Termos</h2>
                            <p className="text-muted leading-relaxed">
                                Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">9. Contato</h2>
                            <p className="text-muted leading-relaxed">
                                Para questões sobre estes Termos de Uso, entre em contato conosco através do WhatsApp: (31) 98278-1618
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
