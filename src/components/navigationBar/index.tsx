import React from "react";
import { IconXMark, IconBack } from "public/assets/images/icons";

interface NavigationBarProps {
  title: string;
  isBackButton?: boolean;
  isCloseButton?: boolean;
  onClickBackButton?: () => void;
  onClickCloseButton?: () => void;
}
export default function NavigationBar({
  title = "",
  isBackButton = false,
  isCloseButton = false,
  onClickBackButton = () => {},
  onClickCloseButton = () => {}
}: NavigationBarProps) {
  return (
    <header className="flex justify-between items-center">
      <BackButton isShowButton={isBackButton} onClickButton={onClickBackButton} />

      <HeaderTitle title={title} />

      <CloseButton isShowButton={isCloseButton} onClickButton={onClickCloseButton} />
    </header>
  );
}

interface ButtonAreaProps {
  children?: React.ReactNode;
  isShowButton?: boolean;
  onClickButton?: () => void;
}

function BackButton({
  isShowButton = false,
  onClickButton = () => {}
}: {
  isShowButton?: boolean;
  onClickButton?: () => void;
}) {
  return (
    <ButtonArea isShowButton={isShowButton} onClickButton={onClickButton}>
      <IconBack alt="back icon" />
    </ButtonArea>
  );
}

function HeaderTitle({ title }: { title: string }) {
  return <span className="sb-16-600 text-gray-600">{title}</span>;
}

function CloseButton({
  isShowButton = false,
  onClickButton = () => {}
}: {
  isShowButton?: boolean;
  onClickButton?: () => void;
}) {
  return (
    <ButtonArea isShowButton={isShowButton} onClickButton={onClickButton}>
      <IconXMark alt="close icon" onClick={onClickButton} />
    </ButtonArea>
  );
}

function ButtonArea({ children, isShowButton = false, onClickButton = () => {} }: ButtonAreaProps) {
  return (
    <button
      type="button"
      className={`min-w-[24px] ${isShowButton ? "" : "invisible"}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}
