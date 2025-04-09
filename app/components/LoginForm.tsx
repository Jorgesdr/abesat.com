'use client';

import { useActionState } from "react"
import { authenticate } from "../lib/actions"
import { useSearchParams } from "next/navigation"


export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
    return(
        <form action={formAction} className="space-y-5"  id="login-form" >
            <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 m-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">
                    Iniciar Sesión
                </h1>
                <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email *</label>                 
            <div className="mb-4">
              <input
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                placeholder="Introduce email"  
              />
              </div>
          </div>
          <div >
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="password"
            >
              Contraseña *
            </label>
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                id="password"
                type="password"
                name="password"
                placeholder="Introduce password"
                required
                minLength={6}
              />              
            </div>
          </div>
        <div className="mb-4 grid ">
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <button 
                aria-disabled={isPending}
                type="submit" 
                className="bg-gray-50 dark:border-white border-2 hover:bg-gray-300 hover:cursor-pointer hover:text-blue dark:bg-gray-500 dark:hover:bg-gray-600 dark:text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
                {isPending ? 'Verificando...' : 'Iniciar Sesión'}
            </button>            
            {errorMessage && (                         
              <p className="text-sm text-red-500">{errorMessage}</p>
            
          )}
        </div>
        </div>
        
        </form>
    )
}