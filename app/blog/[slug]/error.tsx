'use client';
import { useEffect } from 'react';


export default function Error({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    
    return (
        <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">¡Vaya! Algo salió mal.</h1>
        <p className="text-lg mb-8">Parece que hubo un error inesperado. Por favor, inténtalo de nuevo más tarde.</p>
        <button 
            onClick={() => reset()} 
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
            Volver a cargar
        </button>
        </div>
    );
    }