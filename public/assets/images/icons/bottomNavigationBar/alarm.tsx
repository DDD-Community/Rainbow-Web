const INACTIVE_COLOR = "#BEC3CC";
const ACTIVE_COLOR = "#27262E";

interface IconProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}
export default function AlarmIcon({ width = 26, height = 26, isActive = false }: IconProps) {
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
        d="M9.43115 20.5053C9.72582 22.4293 11.3812 23.7727 13.1665 23.7727C14.9518 23.7727 16.6072 22.4207 16.9018 20.5053H9.43115Z"
        fill={fillColor}
      />
      <path
        d="M22.6996 18.7633L20.9403 15.0713L20.7063 10.4433C20.4896 6.22266 17.1183 2.97266 13.1749 2.97266C9.2316 2.97266 5.8516 6.22266 5.63493 10.452L5.40093 15.08L3.6416 18.772H13.1489C13.1489 18.772 13.1663 18.772 13.1749 18.772C13.1836 18.772 13.1923 18.772 13.2009 18.772H22.7083L22.6996 18.7633Z"
        fill={fillColor}
      />
    </svg>
  );
}
