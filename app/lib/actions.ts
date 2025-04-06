'use server'

// TOdas estas funciones son de servidor
// y no se ejecutan en el cliente

import { z} from 'zod';
import postgres from 'postgres';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import {ContactForm} from './definitions';

const contactFormSchema = z.object({
    nombre: z.string().min(1, { message: 'El nombre es obligatorio' }),
    email: z.string().email({ message: 'El email no es válido' }),
    telefono: z.number().min(1, { message: 'El teléfono es obligatorio' }),
    asunto: z.string().min(1, { message: 'El asunto es obligatorio' }),
    mensaje: z.string().min(1, { message: 'El mensaje es obligatorio' }),
    
});


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function createContact(formData: FormData) {
const parsedData = contactFormSchema.parse({
    name: formData.get('nombre'),
    email: formData.get('email'),
    phone: formData.get('telefono'),
    subject: formData.get('asunto'),
    message: formData.get('mensaje'),
    
})

   
   
  await  sql`INSERT INTO contact_form (nombre, email, telefono, asunto, mensaje,status) 
    VALUES (${parsedData.nombre}, ${parsedData.email}, ${parsedData.telefono}, ${parsedData.asunto}, ${parsedData.mensaje},'no')`;

    revalidatePath('/contacto');
    redirect('/contacto');


} 
