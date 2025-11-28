import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { Users, FileText, Upload, Trash2, Search, Loader2 } from 'lucide-react';
import Button from './ui/Button';

interface Profile {
    id: string;
    email: string;
    full_name: string;
}

interface FileObject {
    name: string;
    id: string;
    updated_at: string;
    created_at: string;
    last_accessed_at: string;
    metadata: Record<string, any>;
}

const AdminDashboard: React.FC = () => {
    const { signOut } = useAuth();
    const [clients, setClients] = useState<Profile[]>([]);
    const [selectedClient, setSelectedClient] = useState<Profile | null>(null);
    const [files, setFiles] = useState<FileObject[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchClients();
    }, []);

    useEffect(() => {
        if (selectedClient) {
            fetchFiles(selectedClient.id);
        } else {
            setFiles([]);
        }
    }, [selectedClient]);

    const fetchClients = async () => {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('id, email, full_name');

            if (error) throw error;
            setClients(data || []);
        } catch (error) {
            console.error('Error fetching clients:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchFiles = async (userId: string) => {
        try {
            const { data, error } = await supabase
                .storage
                .from('client_files')
                .list(userId);

            if (error) throw error;
            setFiles(data || []);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0 || !selectedClient) return;

        const file = event.target.files[0];
        setUploading(true);

        try {
            const { error } = await supabase
                .storage
                .from('client_files')
                .upload(`${selectedClient.id}/${file.name}`, file, {
                    upsert: true
                });

            if (error) throw error;

            await fetchFiles(selectedClient.id);
            alert('Arquivo enviado com sucesso!');
        } catch (error: any) {
            console.error('Error uploading file:', error);
            alert('Erro ao enviar arquivo: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleDeleteFile = async (fileName: string) => {
        if (!selectedClient || !window.confirm('Tem certeza que deseja excluir este arquivo?')) return;

        try {
            const { error } = await supabase
                .storage
                .from('client_files')
                .remove([`${selectedClient.id}/${fileName}`]);

            if (error) throw error;

            await fetchFiles(selectedClient.id);
        } catch (error) {
            console.error('Error deleting file:', error);
            alert('Erro ao excluir arquivo');
        }
    };

    const filteredClients = clients.filter(client =>
        client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-text flex flex-col">
            <header className="bg-surface border-b border-white/10 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                        <span className="text-xl font-display font-bold border-l border-white/10 pl-3 ml-3">
                            Administração
                        </span>
                    </div>
                    <Button variant="outline" size="sm" onClick={signOut}>Sair</Button>
                </div>
            </header>

            <div className="flex-grow container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Client List */}
                    <div className="md:col-span-1 bg-surface border border-white/10 rounded-xl p-4 h-[calc(100vh-200px)] flex flex-col">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Users size={20} className="text-primary" />
                            Clientes
                        </h2>

                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                            <input
                                type="text"
                                placeholder="Buscar cliente..."
                                className="w-full bg-background border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-primary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex-grow overflow-y-auto space-y-2">
                            {loading ? (
                                <div className="flex justify-center p-4"><Loader2 className="animate-spin" /></div>
                            ) : (
                                filteredClients.map(client => (
                                    <button
                                        key={client.id}
                                        onClick={() => setSelectedClient(client)}
                                        className={`w-full text-left p-3 rounded-lg transition-colors ${selectedClient?.id === client.id
                                                ? 'bg-primary/20 border border-primary/30'
                                                : 'hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="font-medium truncate">{client.full_name || 'Sem nome'}</div>
                                        <div className="text-xs text-muted truncate">{client.email}</div>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>

                    {/* File Management */}
                    <div className="md:col-span-2 bg-surface border border-white/10 rounded-xl p-6 h-[calc(100vh-200px)] flex flex-col">
                        {selectedClient ? (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <FileText className="text-primary" />
                                            Arquivos de {selectedClient.full_name}
                                        </h2>
                                        <p className="text-sm text-muted">{selectedClient.email}</p>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            onChange={handleFileUpload}
                                            disabled={uploading}
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className={`flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary-dark transition-colors ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {uploading ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
                                            Enviar Arquivo
                                        </label>
                                    </div>
                                </div>

                                <div className="flex-grow overflow-y-auto">
                                    {files.length === 0 ? (
                                        <div className="text-center py-12 text-muted">
                                            Nenhum arquivo encontrado para este cliente.
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {files.map(file => (
                                                <div key={file.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-white/5 p-2 rounded">
                                                            <FileText size={20} className="text-primary" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium">{file.name}</div>
                                                            <div className="text-xs text-muted">
                                                                {new Date(file.created_at).toLocaleDateString()} • {(file.metadata?.size / 1024).toFixed(1)} KB
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleDeleteFile(file.name)}
                                                            className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors"
                                                            title="Excluir"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-muted">
                                <Users size={48} className="mb-4 opacity-20" />
                                <p>Selecione um cliente para gerenciar seus arquivos</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
