import FacilityCard from "@/Components/Facilities/FacilityCard";

const AllFacilities = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`);
    const facilities = await res.json();

    return (
        <div className="w-11/12 mx-auto my-9 space-y-4">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="font-serif text-3xl text-gray-900">All Facilities</h1>
                <p className="text-xs text-gray-500 mb-5">
                    {facilities.length} facili{facilities.length !== 1 ? "ties" : "ty"} ready to book.
                </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {
                    facilities.map(facility =>
                        <FacilityCard key={facility._id} facility={facility} />)
                }
            </div>
        </div>
    );
};

export default AllFacilities;