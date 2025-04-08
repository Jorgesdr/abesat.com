'use server'

// TOdas estas funciones son de servidor
// y no se ejecutan en el cliente

import { z} from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {ContactForm} from './definitions';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const contactFormSchema = z.object({
    id: z.string(),
    nombre: z.string({
    invalid_type_error: 'Please ponga un nombre.',
  }).min(1, { message: 'El nombre es obligatorio' }),
    email: z.string().email({ message: 'El email no es válido' }),
    telefono: z.string().min(1, { message: 'El teléfono es obligatorio' }),
    asunto: z.string().min(1, { message: 'El asunto es obligatorio' }),
    mensaje: z.string().min(1, { message: 'El mensaje es obligatorio' }),
    status:z.enum(['no', 'si']),
});

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

const CreateContact=contactFormSchema.omit({id:true,status:true});
const UpdateContact=contactFormSchema.omit({id:true,mensaje:true,asunto:true});



export async function createContact( prevState: State, 
  formData: FormData): Promise<State> {

    
    const validate = CreateContact.safeParse({
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    asunto: formData.get('asunto'),
    mensaje: formData.get('mensaje'),  
    status:formData.get('status')  
    })

    if (!validate.success) {
        console.log('Validation Errors:', validate.error.format());
        return { 
          errors: Object.fromEntries(
            Object.entries(validate.error.format()).map(([key, value]) => [
              key, 
              Array.isArray(value) ? value : value?._errors || []
            ])
          ) 
        };
    }

    const{nombre,email,telefono,asunto,mensaje}=validate.data;
    
    try {

        await  sql`INSERT INTO contact_form (nombre, email, telefono, asunto, mensaje, status) 
          VALUES (${nombre}, ${email}, ${telefono}, ${asunto}, ${mensaje},'no')`;

        return {
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    };   
        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch create contact data.');
        
    }


    //revalidatePath('/contacto');
    //redirect('/contacto?success=true');


} 

export async function updateContact(id: string, prevState:State ,formData: FormData) {

    const validate = UpdateContact.safeParse({
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        asunto: formData.get('asunto'),
        mensaje: formData.get('mensaje'),
        status: formData.get('status')
    })

    if (!validate.success) {
        console.log('Validation Errors:', validate.error.format());
        return { 
          errors: Object.fromEntries(
            Object.entries(validate.error.format()).map(([key, value]) => [
              key, 
              Array.isArray(value) ? value : value?._errors || []
            ])
          ) 
        };
    }

     const{nombre,email,telefono,status}=validate.data;
     
    
    try {
        await sql`UPDATE contact_form SET id=${id}, nombre = ${nombre}, email = ${email}, telefono = ${telefono}, status = ${status} WHERE id = ${id}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch update contact data.');
        
    }

    revalidatePath('/dashboard');
    redirect('/dashboard');
}

export async function deleteContact(id: string) {
    //throw new Error('Failed to Delete Contact');
    try {
      await sql`DELETE FROM contact_form WHERE id = ${id}`;
      revalidatePath('/dashboard');
      
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch delete contact data.');
      
    }
}