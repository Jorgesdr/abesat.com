import { PencilIcon,  TrashIcon } from '@heroicons/react/24/outline';

export  function UpdateContact() {
    return (
        <button className="text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:bg-white rounded-full p-2">
            <PencilIcon className='w-6 '/>
        </button>
    );
}
export  function DeleteContact() {
    return (
        <button className="text-red-600 hover:text-red-800 hover:cursor-pointer hover:bg-white rounded-full p-2">
            <TrashIcon className='w-6'/>
        </button>
    );
}
