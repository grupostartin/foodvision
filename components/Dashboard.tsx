import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { FileText, HelpCircle, LogOut, User, Download, Loader2 } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import AdminDashboard from './AdminDashboard';

interface FileObject {
    name: string;
    id: string;
    updated_at: string;
    created_at: string;
    last_accessed_at: string;
    metadata: Record<string, any>;
}

const Dashboard: React.FC = () => {
    const { user, profile, signOut, isAdmin } = useAuth();
    const [activeTab, setActiveTab] = useState<'files' | 'help'>('files');
    const [files, setFiles] = useState<FileObject[]>([]);
    const [loadingFiles, setLoadingFiles] = useState(false);

    useEffect(() => {
        if (user && !isAdmin && activeTab === 'files') {
            fetchUserFiles();
        }
    }, [user, isAdmin, activeTab]);

    const fetchUserFiles = async () => {
        if (!user) return;
        setLoadingFiles(true);
        try {
            const { data, error } = await supabase
                .storage
                .from('client_files')
                .list(user.id);

            if (error) throw error;
            setFiles(data || []);
        } catch (error) {
            console.error('Error fetching files:', error);
        } finally {
            setLoadingFiles(false);
        }
    };

    const handleDownload = async (fileName: string) => {
        if (!user) return;
        try {
            const { data, error } = await supabase
                .storage
                .from('client_files')
                .download(`${user.id}/${fileName}`);

            if (error) throw error;

            // Create download link
            const url = URL.createObjectURL(data);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading file:', error);
            alert('Erro ao baixar arquivo. Tente novamente.');
        }
    };

    if (isAdmin) {
        return <AdminDashboard />;
    }

    return (
        <div className="min-h-screen bg-background text-text flex flex-col">
            {/* Dashboard Header */}
            <header className="bg-surface border-b border-white/10 py-4">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="FoodVision Logo" className="h-10 w-auto" />
                        <span className="text-xl font-display font-bold border-l border-white/10 pl-3 ml-3">
                            Painel do Cliente
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-sm text-muted">
                            <User size={16} />
                            <span>{profile?.full_name || user?.email}</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={signOut}
                            className="flex items-center gap-2"
                        >
                            <LogOut size={16} />
                            <span className="hidden sm:inline">Sair</span>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex-grow container mx-auto px-4 md:px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('files')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'files'
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-muted hover:bg-white/5 hover:text-text'
                                    }`}
                            >
                                <FileText size={20} />
                                <span className="font-medium">Meus Arquivos</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('help')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'help'
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-muted hover:bg-white/5 hover:text-text'
                                    }`}
                            >
                                <HelpCircle size={20} />
                                <span className="font-medium">Ajuda</span>
                            </button>
                        </nav>

                        {/* Plan Info Card */}
                        <div className="mt-8 p-4 bg-surface border border-white/10 rounded-xl">
                            <h3 className="text-sm font-medium text-muted mb-2">Seu Plano</h3>
                            <div className="text-lg font-bold text-white capitalize">
                                {profile?.plan_type === 'premium' ? 'Avançado' : 'Básico'}
                            </div>
                            <div className="mt-2 text-xs text-muted">
                                Status: <span className="text-green-400 capitalize">{profile?.subscription_status || 'Ativo'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-surface border border-white/10 rounded-2xl p-6 min-h-[400px]"
                        >
                            {activeTab === 'files' && (
                                <div>
                                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                        <FileText className="text-primary" />
                                        Meus Arquivos
                                    </h2>

                                    {loadingFiles ? (
                                        <div className="flex justify-center py-12">
                                            <Loader2 className="animate-spin text-primary" size={32} />
                                        </div>
                                    ) : files.length === 0 ? (
                                        <div className="text-center py-12">
                                            <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <FileText size={32} className="text-muted" />
                                            </div>
                                            <h3 className="text-lg font-medium text-text mb-2">Nenhum arquivo encontrado</h3>
                                            <p className="text-muted max-w-md mx-auto">
                                                Seus arquivos e relatórios aparecerão aqui assim que forem gerados pela nossa equipe.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="grid gap-4">
                                            {files.map(file => (
                                                <div key={file.id} className="flex items-center justify-between p-4 bg-background rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-primary/10 p-3 rounded-lg">
                                                            <FileText size={24} className="text-primary" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-lg">{file.name}</div>
                                                            <div className="text-sm text-muted">
                                                                {new Date(file.created_at).toLocaleDateString()} • {(file.metadata?.size / 1024).toFixed(1)} KB
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDownload(file.name)}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <Download size={18} />
                                                        Baixar
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'help' && (
                                <div>
                                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                        <HelpCircle className="text-primary" />
                                        Central de Ajuda
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                            <h3 className="font-bold text-lg mb-2">Como acessar meus relatórios?</h3>
                                            <p className="text-muted">
                                                Os relatórios são atualizados mensalmente e ficam disponíveis na aba "Meus Arquivos". Você receberá uma notificação por e-mail sempre que um novo relatório estiver disponível.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                            <h3 className="font-bold text-lg mb-2">Preciso de suporte técnico</h3>
                                            <p className="text-muted mb-4">
                                                Nossa equipe de suporte está disponível de segunda a sexta, das 9h às 18h.
                                            </p>
                                            <Button variant="outline" size="sm">
                                                Abrir Chamado
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
