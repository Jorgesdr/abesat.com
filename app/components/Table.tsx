import { UpdateContact,DeleteContact } from "../components/Buttons";
import { fetchAllContacts } from "../lib/data";

export default async function Table() {
    const contacts = await fetchAllContacts();  

    const formatPhoneNumber = (phone:string) => {
            return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
        };
    return(
        <table className="w-full mt-6 border-1  ">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="p-3 text-center">Nombre</th>
                        <th className="p-3 text-center">Email</th>
                        <th className="p-3 text-center">Teléfono</th>
                        <th className="p-3 text-center">Asunto</th>
                        <th className="p-3 text-center">Mensaje</th>
                        <th className="p-3 text-center">Estado</th>
                        <th className="p-3 text-center">Accion</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-500 text-center">
                    {contacts.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="p-3 text-center text-gray-400">No hay contactos disponibles</td>
                        </tr>
                    ) : null}
                    {contacts.map((contact:any) => (
                        <tr key={contact.id} className="border-b hover:bg-gray-700 transition-colors">
                        <td className="p-3">{contact.nombre}</td>
                        <td className="p-3">
                            {contact.email ? (
                                <a 
                                    href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.asunto)}&body=${encodeURIComponent(contact.mensaje)}`}
                                    className="text-white hover:underline hover:text-gray-300"
                                >
                                    {contact.email}
                                </a>
                            ) : (
                                <span className="text-gray-400">No disponible</span>
                            )}
                        </td>
                        <td className="p-3">
                            <a 
                                href={`tel:+34${contact.telefono}`}
                                className="text-white hover:underline hover:text-gray-300"
                            >
                                {
                                //formatPhoneNumber(contact.phone)
                                }
                                {(contact.telefono).replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}
                            </a>
                        </td>
                        <td className="p-3">{contact.asunto}</td>
                        <td className="p-3 max-w-xs truncate">{contact.mensaje}</td>
                        <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                                contact.status === "no" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                            }`}>
                                {contact.status === "no" ? "No atendido" : "Atendido"}
                            </span>
                        </td>
                        <td className="p-3">
                            <div className="flex justify-center ">
                                <UpdateContact id={contact.id}/>
                                <DeleteContact  id={contact.id}/>
                            </div>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
    )
}