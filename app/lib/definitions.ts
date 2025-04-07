export type ContactForm = {
  nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    mensaje: string;
}

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  categories: string[];
  image: string;
  content: string;
};