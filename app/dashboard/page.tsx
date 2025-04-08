

import Skeleton from "../components/Skeleton";
import SkeletonTable from "../components/SkeletonTable";
import Table from "../components/Table";
import { Suspense } from "react";


export default async function DashboardPage() {
     
    const tableColumns = [
        { key: "nombre", width: "11%" },
        { key: "email", width: "21%" },
        { key: "email", width: "15%" },
        { key: "email", width: "13%" },
        { key: "email", width: "12%" },
        { key: "email", width: "14%" },
        { key: "acciones", width: "14%", isButtonGroup: true },
    ];
    
    return (
        <div className="w-full container mx-auto p-4">
            <h3 className="text-center mt-4 text-2xl font-bold text-white">Contactos</h3>            
            <Suspense fallback={<SkeletonTable columns={tableColumns} />}>
                <Table />
            </Suspense>
        </div>
    )
}