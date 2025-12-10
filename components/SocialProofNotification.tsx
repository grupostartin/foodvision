import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SocialProofNotification: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentNotification, setCurrentNotification] = useState({ name: '', plan: '' });

    const names = [
        "João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa",
        "Carlos Souza", "Juliana Lima", "Rafael Alves", "Fernanda Rocha",
        "Lucas Martins", "Camila Ferreira", "Bruno Ribeiro", "Beatriz Carvalho",
        "Gabriel Pereira", "Larissa Gomes", "Thiago Barbosa", "Amanda Dias",
        "Felipe Araújo", "Isabela Mendes", "Rodrigo Castro", "Letícia Cardoso",
        "Matheus Azevedo", "Patrícia Moreira", "Vinícius Teixeira", "Renata Pinto",
        "Diego Correia", "Mariana Freitas", "André Monteiro", "Cristina Nunes",
        "Gustavo Ramos", "Vanessa Campos", "Ricardo Borges", "Tatiana Duarte",
        "Marcelo Farias", "Aline Cavalcanti", "Fábio Nogueira", "Priscila Viana",
        "Leonardo Batista", "Daniela Melo", "Henrique Lopes", "Carolina Reis",
        "Paulo Moura", "Roberta Cunha", "Alexandre Pires", "Natália Barros",
        "Sérgio Macedo", "Adriana Soares", "Márcio Andrade", "Elaine Fonseca",
        "Leandro Vieira", "Simone Tavares", "Antônio Amaral", "Cláudia Coelho",
        "Eduardo Nascimento", "Mônica Rodrigues", "Renato Santana", "Viviane Cruz"
    ];

    const plans = ["Básico", "Avançado", "Master"];

    const getRandomNotification = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomPlan = plans[Math.floor(Math.random() * plans.length)];
        return { name: randomName, plan: randomPlan };
    };

    useEffect(() => {
        // Primeira notificação após 5 segundos
        const initialTimeout = setTimeout(() => {
            setCurrentNotification(getRandomNotification());
            setIsVisible(true);

            // Esconder após 5 segundos
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        }, 5000);

        // Notificações subsequentes a cada 9 segundos
        const interval = setInterval(() => {
            setCurrentNotification(getRandomNotification());
            setIsVisible(true);

            // Esconder após 5 segundos
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        }, 9000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -100, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 z-50 max-w-xs"
                >
                    <div className="bg-surface/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl p-4 flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-text font-semibold text-sm leading-tight">
                                {currentNotification.name}
                            </p>
                            <p className="text-muted text-xs mt-1">
                                acabou de adquirir o{' '}
                                <span className="text-primary font-semibold">
                                    Plano {currentNotification.plan}
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SocialProofNotification;
