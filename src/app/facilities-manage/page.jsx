import DeleteAlert from "@/Components/DeleteAlert";
import EditModal from "@/Components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const ManageFacility = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;
    const token = await auth.api.getToken({
        headers: await headers()
    });
    const facilityRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility?userId=${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    });
    const facilities = await facilityRes.json();

    return (
        <div className="w-11/12 max-w-5xl mx-auto my-10 space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Facilities</h1>
                <p className="text-sm text-gray-500 mt-1">Overview of your listed facilities.</p>
            </div>

            {facilities.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                    <p className="text-gray-500">You have not listed any facility yet.</p>
                </div>
            ) : (
                <div className="rounded-2xl border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                {['Facility', 'Price', 'Status', 'Action'].map((h) => (
                                    <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3.5">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {facilities.map((facility) => (
                                <tr key={facility._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            {facility.imageUrl && (
                                                <Image
                                                    src={facility.imageUrl}
                                                    alt={facility.facilityName}
                                                    width={400}
                                                    height={400}
                                                    className="w-10 h-10 rounded-lg object-cover shrink-0"
                                                />
                                            )}
                                            <div className="flex flex-col gap-0.5">
                                                <span className="font-medium text-gray-800">{facility.facilityName}</span>
                                                <p className="text-xs text-gray-400 mt-0.5">{facility.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-gray-600">${facility.price}</td>
                                    <td className="px-5 py-4">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 flex gap-2">
                                        <EditModal facility={facility} />
                                        <DeleteAlert facility={facility} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageFacility;