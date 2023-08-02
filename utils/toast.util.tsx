import Image from "next/image";
import { toast } from "react-toastify";
import {
  IconWhiteChecked,
  IconPrimaryChecked,
  IconExclamationMark
} from "assets/images/icons/toast";

const DEFAULT_COMMON_TOAST_OPTIONS = {
  autoClose: 3000,
  closeButton: false
};

type ToastOptions = {
  [key: string]: string | number | undefined | null;
};

export const showPrimaryToast = (text: string, options: ToastOptions = {}) => {
  toast(text, {
    icon: <Image src={IconWhiteChecked} alt="white checked icon" />,
    className: "primary-toast",
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};

export const showAlertToast = (text: string, options: ToastOptions = {}) => {
  toast(text, {
    icon: <Image src={IconWhiteChecked} alt="white checked icon" />,
    className: "alert-toast",
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};

export const showSecondaryToast = (text: string, options: ToastOptions = {}) => {
  toast(text, {
    icon: <Image src={IconPrimaryChecked} alt="primary checked icon" />,
    className: "secondary-toast",
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};

export const showInfomationToast = (text: string, options: ToastOptions = {}) => {
  toast(text, {
    icon: <Image src={IconExclamationMark} alt="Exclamation Mark Icon" />,
    className: "infomation-toast",
    ...DEFAULT_COMMON_TOAST_OPTIONS,
    ...options
  });
};
