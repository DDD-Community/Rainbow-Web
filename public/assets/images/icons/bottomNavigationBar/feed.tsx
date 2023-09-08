const INACTIVE_COLOR = "#BEC3CC";
const ACTIVE_COLOR = "#27262E";

interface IconProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}
export default function FeedIcon({ width = 26, height = 26, isActive = false }: IconProps) {
  const fillColor = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6336 3.46667H6.03359C4.59493 3.46667 3.43359 4.62801 3.43359 6.06667V16.484C3.43359 17.9227 4.59493 19.084 6.03359 19.084H19.4843L24.2336 22.5333V6.06667C24.2336 4.62801 23.0723 3.46667 21.6336 3.46667ZM14.8476 14.2307H7.76693V12.4973H14.8476V14.2307ZM19.9003 9.97534H7.76693V8.24201H19.9003V9.97534Z"
        fill={fillColor}
      />
    </svg>
  );
}
