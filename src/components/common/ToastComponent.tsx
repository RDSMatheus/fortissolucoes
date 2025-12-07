import { Toast, ToastToggle } from "flowbite-react";
import type { Dispatch, SetStateAction } from "react";
import { BiError } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";

const ToastComponent = ({
  showToast,
  toastSuccess,
  setShowToast,
  message,
  errorMessage,
}: {
  showToast: boolean;
  toastSuccess: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
  message: string;
  errorMessage: string;
}) => {
  return (
    <div>
      {showToast && (
        <Toast className="fixed bottom-2 right-2 animate-fade-in">
          {toastSuccess ? (
            <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
          ) : (
            <BiError className="h-5 w-5 text-red-600" />
          )}
          <div className="pl-4 text-sm font-normal">
            {toastSuccess ? message : errorMessage}
          </div>
          <ToastToggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
    </div>
  );
};

export default ToastComponent;
