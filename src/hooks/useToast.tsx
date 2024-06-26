import { ToastOptions, toast } from "react-toastify";

type CustomToast = (message: string, options?: ToastOptions) => void;

function useToast() {
  const customToast: CustomToast = (message, options) => {
    toast(message, {
      type: "success",
      ...options,
    });
  };

  const dismiss = () => {
    toast.dismiss();
  };

  return {
    customToast,
    dismiss,
  };
}

export { useToast };
