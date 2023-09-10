import { toast } from "react-toastify";

import IconExclamationMark from "@/public/assets/images/icons/toast/exclamationMark";
import IconPrimaryChecked from "@/public/assets/images/icons/toast/primary-checked";
import IconWhiteChecked from "@/public/assets/images/icons/toast/white-checked";

const DEFAULT_COMMON_TOAST_OPTIONS = {
  autoClose: 3000,
  closeButton: false
};

type ToastOptions = {
  [key: string]: string | number | undefined | null;
};

export const showPrimaryToast = (text: string, useFull?: boolean, options?: ToastOptions) => {
  toast(text, {
    icon: <IconWhiteChecked />,
    className: `primary-toast ${useFull ? "w-[343px]" : ""}`,
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};

export const showAlertToast = (text: string, useFull?: boolean, options?: ToastOptions) => {
  toast(text, {
    icon: <IconWhiteChecked />,
    className: `alert-toast ${useFull ? "w-[343px]" : ""}`,
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};

export const showSecondaryToast = (text: string, useFull?: boolean, options?: ToastOptions) => {
  toast(text, {
    icon: <IconPrimaryChecked />,
    className: `secondary-toast ${useFull ? "w-[343px]" : ""}`,
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};

export const showInfomationToast = (text: string, useFull?: boolean, options?: ToastOptions) => {
  toast(text, {
    icon: <IconExclamationMark />,
    className: `infomation-toast ${useFull ? "w-[343px]" : ""}`,
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};
