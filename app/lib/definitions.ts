export type ContactForm = {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    mensaje: string;
    status: string;
    id: string;
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