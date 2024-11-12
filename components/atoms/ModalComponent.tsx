// components/atoms/ModalComponent.tsx
import { motion } from "framer-motion";
import LaunchListWidget from "../atoms/LaunchListWidget";

interface ModalComponentProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 w-[90%] max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <LaunchListWidget />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModalComponent;
