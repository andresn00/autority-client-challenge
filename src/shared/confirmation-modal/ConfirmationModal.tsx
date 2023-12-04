import { useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";

type Props = {
    isOpen: boolean,
    title: string,
    description: string,
    danger?: boolean,
    onClose: (value: boolean) => void,
}

const ConfirmationModal = ({ isOpen, title, description, danger = false, onClose }: Props) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);
    
    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            isModalOpen ? modalElement.showModal() : modalElement.close()
        }
    }, [isModalOpen]);

    const handleCloseModal = (value: boolean) => {
        onClose(value);
        setModalOpen(false);
    };

    return (
        <dialog ref={modalRef} className="p-4 rounded-lg">
            <p className="text-lg font-bold">{title}</p>
            <p className="mb-2">{description}</p>
            <div className="flex gap-2 justify-end">
                <Button onClick={() => handleCloseModal(false)} severity="plain">No</Button>
                <Button severity={danger ? 'danger' : 'primary'} onClick={() => handleCloseModal(true)}>Yes</Button>
            </div>
        </dialog>
    );
}

export default ConfirmationModal