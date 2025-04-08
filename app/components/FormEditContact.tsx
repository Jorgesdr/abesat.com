'use client'

import Link from "next/link"
import {ContactForm} from "../lib/definitions"
import {updateContact, State} from "../lib/actions"
import { useActionState } from "react"

export default function FormEditContact({contact}: {contact: ContactForm}) {
    const initialState:State={message:null,errors:{}}  
    const updateContactId=updateContact.bind(null,contact.id)    
    const [state,formAction] = useActionState(updateContactId,initialState)

    
    return(
        <form action={formAction}>
            <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 m-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Editar Contacto</h2>
                <input type="hidden" name="id" value={contact.id} />
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-white font-bold">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="w-full border rounded p-2" defaultValue={contact.nombre} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold">Email:</label>
                    <input type="email" id="email" name="email" className="w-full border rounded p-2" defaultValue={contact.email} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefono" className="block text-white font-bold">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" className="w-full border rounded p-2" defaultValue={contact.telefono} required />
                </div>  
                <div className="mb-4">
                    <label htmlFor="status" className={`${
                                contact.status === "no" ? " text-red-700 font-bold" : " text-green-800 font-bold"
                            }`}>Estado:</label>
                    <select id="status" name="status" className="w-full border rounded p-2" defaultValue={contact.status} required>
                        <option value="no" className="bg-red-100 text-red-800">No atendido</option>
                        <option value="si" className="bg-green-100 text-green-800">Atendido</option>
                    </select>
                </div>   
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-center justify-center">
                    <Link href="/dashboard" className="text-blue-500 hover:underline ">Volver </Link>
                
                    <button type='submit' className='bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded hover:cursor-pointer'>Actualizar</button>
                </div>         
            </div>
        
        </form>
    )
}