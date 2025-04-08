import FormEditContact from "@/app/components/FormEditContact";
import { fetchContactById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function EditPage(props:{params:Promise<{id:string}>}) {
    const params = await props.params;
    const  id  = params.id;
    const contact = await fetchContactById(id);
    if (! contact) {
        notFound();
    }
    return(
        <section className="py-4  text-white bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-3 text-center">Editar Contacto</h2>
                <div className="grid g-gray-100 dark:bg-gray-900">
                    <FormEditContact contact={contact}/>
                </div>  
            </div>
        </section>

    )
}