"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new Store to Manage"
      isOpen={useStoreModal.isOpen}
      onClose={useStoreModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
