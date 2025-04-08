import Skeleton from "./Skeleton";

interface Column {
  key: string;
  width?: string;
  isButtonGroup?: boolean;
}

interface SkeletonTableProps {
  columns: Column[];
  rows?: number;
}

const SkeletonTable = ({ columns, rows = 5 }: SkeletonTableProps) => {
  return (
    <div className="w-full mt-6 border-1 rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-sm"
                style={{ width: column.width }}
              >
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200 bg-white">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} aria-label="Fila cargando">
              {columns.map((column) => (
                <td
                  
                  key={column.key}
                  className="px-4 py-3 text-sm"
                  style={{ width: column.width }}
                >
                  <div className="flex justify-center items-center">
                    {column.isButtonGroup ? (
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-8 rounded-full" isButton />
                        <Skeleton className="h-8 w-8 rounded-full" isButton />
                      </div>
                    ) : (
                      <Skeleton className="h-4 w-2/3" />
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;