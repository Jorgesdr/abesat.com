'use client';

export default function BannerCookies() {
    return(
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
            <div className="grid  gap-2 grid-cols-[4fr_1fr]">
                <div className="text-center">
                    <p>Usamos cookies para ofrecer una mejor experiencia.Algunas cookies son necesarias para utilizar nuestros servicios y asegurarse de que funcionan correctamente.
                     Puedes obtener más información visitando nuestra <a href="/politica-privacidad" className="font-bold">Política de Cookies</a>.</p>
            
                </div>
                <div className="text-center">
                    <button className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors m-2 hover:cursor-pointer">Aceptar</button>
                    <button className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors m-2 hover:cursor-pointer">Rechazar</button>
                </div>
            </div>            
        </div>
    )

}