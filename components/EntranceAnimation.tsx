import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EntranceAnimationProps {
    onComplete: () => void;
}

const EntranceAnimation: React.FC<EntranceAnimationProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for exit animation
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl md:text-5xl font-bold text-center px-4 tracking-tight"
                    >
                        <span className="text-[#757575]">Não deixe o cliente</span>{" "}
                        <span className="text-[#D32F2F]">comer no concorrente</span>
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EntranceAnimation;
