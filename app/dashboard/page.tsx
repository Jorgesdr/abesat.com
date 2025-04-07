import { UpdateContact,DeleteContact } from "../components/Buttons";




export default function DashboardPage() {
    const contact = {
        name: "Miguel Angel",
        email: "miguelangel@abesat.com", // Añadí un email de ejemplo
        phone: "696369030",
        subject: "Accidente de tráfico",
        message: "Hola, tengo un accidente de tráfico y necesito ayuda",
        status: "no",
    };

    // Función para formatear el número de teléfono
    const formatPhoneNumber = (phone:string) => {
        return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    };

    return (
        <div className="w-full container mx-auto p-4">
            <h3 className="text-center mt-4 text-2xl font-bold text-white">Contactos</h3>
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
                    <tr className="border-b hover:bg-gray-700 transition-colors">
                        <td className="p-3">{contact.name}</td>
                        <td className="p-3">
                            {contact.email ? (
                                <a 
                                    href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}&body=${encodeURIComponent(contact.message)}`}
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
                                href={`tel:+34${contact.phone}`}
                                className="text-white hover:underline hover:text-gray-300"
                            >
                                {formatPhoneNumber(contact.phone)}
                            </a>
                        </td>
                        <td className="p-3">{contact.subject}</td>
                        <td className="p-3 max-w-xs truncate">{contact.message}</td>
                        <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                                contact.status === "no" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                            }`}>
                                {contact.status === "no" ? "No atendido" : "Atendido"}
                            </span>
                        </td>
                        <td className="p-3">
                            <div className="flex justify-center ">
                                <UpdateContact />
                                <DeleteContact />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}