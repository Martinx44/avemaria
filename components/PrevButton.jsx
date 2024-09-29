import { FaArrowLeft } from "react-icons/fa";
// import { Button } from '@/components/ui/button';

const PrevButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 bg-white hover:bg-gray-300 text-black font-bold px-4 rounded-md"
    >
      <FaArrowLeft size={16} />
      Back
    </button>
  );
};

export default PrevButton;