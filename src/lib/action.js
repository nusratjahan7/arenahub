import { toast } from "sonner";

export const updateFacility = async (id, formData, tokenData) => {

    const updateFacility = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(updateFacility)
    })
    const data = await res.json();

    if (data) {
        toast.success('Facility Updated Successfully');
        window.location.reload();
    }

}