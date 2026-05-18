"use client";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

const DeleteAlert = ({ facility }) => {
    const { _id, facilityName } = facility;

    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        });

        const data = await res.json();

        if (data.deletedCount > 0) {
            toast.success(`${facilityName} deleted successfully!`);
            window.location.reload();
        } else {
            toast.error("Failed to delete facility.");
        }

    };

    return (
        <AlertDialog>
            <AlertDialog.Trigger>
                <button className="text-red-500 hover:text-red-700 text-xs font-medium border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                    <RiDeleteBinLine className="h-4 w-4" />
                </button>
            </AlertDialog.Trigger>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete This Facility</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete <strong>{facilityName}</strong>? This action cannot be undone and will permanently remove this travel package from the system.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteAlert;