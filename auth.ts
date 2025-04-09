import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import type {User} from '@/app/lib/definitions'

const users = {
  email: process.env.AUTH_SECRET_EMAIL,
  password: process.env.NEXT_PUBLIC_AUTH_SECRET_PASSWORD,
};
console.log("AUTH_SECRET_PASSWORD",process.env.AUTH_SECRET_EMAIL)
console.log(process.env.AUTH_SECRET_PASSWORD)
console.log(process.env.NEXT_PUBLIC_PASSWORD);
/* const users = {
  email: 'miguelangel@abesat.es',
  password: '$2b$10$azA9BdvdCu.cgyhjacCRBubMB45gYW//p37qNqxAk5CG4ho9b3nAi',
}; */
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // 2. Validación con Zod
        const parsedCredentials = z
          .object({ 
            email: z.string().email(), 
            password: z.string().min(6) 
          })
          .safeParse(credentials);

       if (parsedCredentials.success) {
         const { email, password } = parsedCredentials.data;
         const user = users.email === email ? users : null;
         if (!user) return null;
         const passwordsMatch = bcrypt.compare(password, users.password ?? '');
          if(await passwordsMatch){
            return user
          }
        }
             
        return null;
      },
    }),
  ],
});
