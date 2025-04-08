import { PencilIcon,  TrashIcon } from '@heroicons/react/24/outline';
import { deleteContact,updateContact } from '@/app/lib/actions';
import Link from 'next/link';

export  function UpdateContact({id}:{id:string}) {    
    return (        
        <Link href={`/dashboard/${id}/edit`} className="text-blue-600 hover:text-blue-800 hover:cursor-pointer hover:bg-white rounded-full p-2">
            <PencilIcon className='w-6 '/>
        </Link>
       
    );
}
export  function DeleteContact({id}:{id:string}) {
    const deleteContactId =deleteContact.bind(null,id);
    return (
        <form action={deleteContactId}>
            <button type='submit' className="text-red-600 hover:text-red-800 hover:cursor-pointer hover:bg-white rounded-full p-2">
                <TrashIcon className='w-6'/>
            </button>
        </form>
    );
}
