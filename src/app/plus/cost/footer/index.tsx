import { PrimaryButton } from "src/components/Common/Button";

interface FooterProps {
  isActive: boolean;
  onClick: () => void;
}
export default function Footer({ isActive = false, onClick = () => {} }: FooterProps) {
  return (
    <footer className="flex justify-end	px-4 py-3 mt-32">
      <PrimaryButton
        disabled={!isActive}
        color={isActive ? "default" : "disabled"}
        className="w-[78px] h-[46px]"
        onClick={onClick}
      >
        확인
      </PrimaryButton>
    </footer>
  );
}
