import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isOpenState, activeTypeState } from "src/recoil/footerNavBar.atoms";
import { FooterNavBarActiveTypes } from "@/types";

interface useFooterNavBarProps {
  open?: boolean;
  type?: FooterNavBarActiveTypes;
}

export default function useFooterNavBar({ open = false, type = "main" }: useFooterNavBarProps) {
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  // eslint-disable-next-line
  const [activeType, setActiveType] = useRecoilState<FooterNavBarActiveTypes>(activeTypeState);

  useEffect(() => {
    setIsOpen(open);
    setActiveType(type);
  }, []);
}
