'use client'

import { createContact } from '../lib/actions';
import { useActionState, useEffect } from 'react';

export type State = {
  errors?: {
    nombre?: string[];
    email?: string[];
    telefono?: string[];
    asunto?: string[];
    mensaje?: string[];
    status?: string[];

  };
  message?: string | null;
  success?: boolean;
};

export default function FormContact() {
const [state, formAction] = useActionState<State, FormData>(createContact, {
  message: null,
  errors: {},
  success: false
  });

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
    }
  }, [state.success]);

return (
  <>  
  {state.message && (
        <div 
          className={`p-4 rounded-lg ${
            state.success 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}
          role="alert"
        >
          {state.message}
        </div>
      )}
    <form action={formAction} className="space-y-6"  id="contact-form" >
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-gray-700 dark:text-gray-300 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-gray-700 dark:text-gray-300 mb-2">Asunto *</label>
                  <select 
                    id="asunto" 
                    name="asunto" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="accidente">Accidente de tráfico</option>
                    <option value="indemnizacion">Reclamación de indemnización</option>
                    <option value="consulta">Consulta legal</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje *</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows={5} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacidad" 
                    name="privacidad" 
                    required 
                    className="mr-2"
                  />
                  <label htmlFor="privacidad" className="text-gray-700 dark:text-gray-300 text-sm">
                    He leído y acepto la <a href="/politica-privacidad" className="text-primary-600 dark:text-primary-400 hover:underline">Política de Privacidad</a> *
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="bg-primary-600 border-white border-2 hover:bg-gray-100 hover:cursor-pointer hover:text-blue dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-semibold w-full transition-colors"
                >
                  {state.success ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
                </button>
              </form>
        </>
    )
}