import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import Button from './ui/Button';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, profile, loading, isAdmin, signOut } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    // Admin bypass
    if (isAdmin) {
        return <>{children}</>;
    }

    // Check subscription
    const hasActivePlan =
        profile?.plan_type === 'premium' ||
        profile?.plan_type === 'advanced' ||
        profile?.subscription_status === 'active';

    if (!hasActivePlan) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Acesso Restrito</h1>
                <p className="text-muted mb-6 max-w-md">
                    Esta área é exclusiva para assinantes. Escolha um plano para acessar o painel.
                </p>
                <div className="flex gap-4">
                    <Button
                        variant="primary"
                        onClick={() => {
                            window.location.href = "/#planos";
                        }}
                    >
                        Ver Planos
                    </Button>
                    <Button
                        variant="outline"
                        onClick={signOut}
                    >
                        Sair
                    </Button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
