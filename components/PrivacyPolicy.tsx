import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const PrivacyPolicy: React.FC = () => {
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
                        Política de Privacidade
                    </h1>
                    <p className="text-muted mb-8">Última atualização: Dezembro de 2024</p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">1. Introdução</h2>
                            <p className="text-muted leading-relaxed">
                                A FoodVision está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">2. Informações que Coletamos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Coletamos as seguintes informações quando você usa nossos serviços:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li><strong>Informações de Cadastro:</strong> Nome, e-mail, telefone</li>
                                <li><strong>Informações de Pagamento:</strong> Processadas através da Cakto (não armazenamos dados de cartão)</li>
                                <li><strong>Informações de Uso:</strong> Páginas visitadas, tempo de navegação, cliques</li>
                                <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, sistema operacional</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">3. Como Usamos suas Informações</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Utilizamos suas informações para:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li>Processar e gerenciar seus pedidos</li>
                                <li>Comunicar sobre o status dos seus projetos</li>
                                <li>Enviar atualizações e ofertas (com seu consentimento)</li>
                                <li>Melhorar nossos serviços e experiência do usuário</li>
                                <li>Cumprir obrigações legais e regulatórias</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">4. Compartilhamento de Informações</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas com:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li><strong>Processadores de Pagamento:</strong> Cakto para processar transações</li>
                                <li><strong>Provedores de Serviços:</strong> Empresas que nos auxiliam na prestação de serviços</li>
                                <li><strong>Autoridades Legais:</strong> Quando exigido por lei</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">5. Armazenamento e Segurança</h2>
                            <p className="text-muted leading-relaxed">
                                Seus dados são armazenados em servidores seguros (Supabase) com criptografia. Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">6. Seus Direitos (LGPD)</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                De acordo com a LGPD, você tem direito a:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                                <li>Confirmar a existência de tratamento de dados</li>
                                <li>Acessar seus dados pessoais</li>
                                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                                <li>Revogar o consentimento</li>
                                <li>Solicitar a portabilidade dos dados</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">7. Cookies</h2>
                            <p className="text-muted leading-relaxed">
                                Utilizamos cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">8. Retenção de Dados</h2>
                            <p className="text-muted leading-relaxed">
                                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">9. Alterações nesta Política</h2>
                            <p className="text-muted leading-relaxed">
                                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas através do e-mail cadastrado ou por meio de aviso em nosso site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text mb-4">10. Contato</h2>
                            <p className="text-muted leading-relaxed">
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                            </p>
                            <p className="text-muted leading-relaxed mt-4">
                                <strong>WhatsApp:</strong> (31) 98278-1618<br />
                                <strong>E-mail:</strong> contato@foodvision.com.br
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
