import Image from "next/image";
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
      <BackButton
        imageSrc={IconBack}
        isShowButton={isBackButton}
        onClickButton={onClickBackButton}
      />

      <HeaderTitle title={title} />

      <CloseButton
        imageSrc={IconXMark}
        isShowButton={isCloseButton}
        onClickButton={onClickCloseButton}
      />
    </header>
  );
}

interface ButtonAreaProps {
  imageSrc: string;
  isShowButton: boolean;
  onClickButton: () => void;
}

function BackButton({
  imageSrc = "",
  isShowButton = false,
  onClickButton = () => {}
}: ButtonAreaProps) {
  return (
    <ButtonArea imageSrc={imageSrc} isShowButton={isShowButton} onClickButton={onClickButton} />
  );
}

function HeaderTitle({ title }: { title: string }) {
  return <span className="sb-16-600 text-gray-600">{title}</span>;
}

function CloseButton({
  imageSrc = "",
  isShowButton = false,
  onClickButton = () => {}
}: ButtonAreaProps) {
  return (
    <ButtonArea imageSrc={imageSrc} isShowButton={isShowButton} onClickButton={onClickButton} />
  );
}

function ButtonArea({
  imageSrc = "",
  isShowButton = false,
  onClickButton = () => {}
}: ButtonAreaProps) {
  return (
    <div className="min-w-[24px]">
      {isShowButton && (
        <Image
          src={imageSrc}
          className="cursor-pointer"
          onClick={onClickButton}
          alt="Back Button"
        />
      )}
    </div>
  );
}
