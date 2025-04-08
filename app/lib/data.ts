import postgres from 'postgres';
import {ContactForm} from './definitions';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchAllContacts() {
    try {
        //await new Promise((resolve) => setTimeout(resolve, 3000));
        const getUser = await sql<ContactForm[]>`SELECT * FROM contact_form`;
        
        return getUser;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
        
    }
}

export async function fetchContactById(id: string) {
    try {
        const getUser = await sql<ContactForm[]>`SELECT * FROM contact_form WHERE id = ${id}`;
        
        return getUser[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
        
    }
}
