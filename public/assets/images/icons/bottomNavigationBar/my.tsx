const INACTIVE_COLOR = "#BEC3CC";
const ACTIVE_COLOR = "#27262E";

interface IconProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}
export default function MyIcon({ width = 26, height = 26, isActive = false }: IconProps) {
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
        d="M13.5 14.0833C16.6112 14.0833 19.1334 11.5612 19.1334 8.45001C19.1334 5.33881 16.6112 2.81668 13.5 2.81668C10.3888 2.81668 7.8667 5.33881 7.8667 8.45001C7.8667 11.5612 10.3888 14.0833 13.5 14.0833Z"
        fill={fillColor}
      />
      <path
        d="M13.5001 16.25C9.28813 16.25 3.9668 19.0927 3.9668 23.1833H23.0335C23.0335 19.0927 17.7121 16.25 13.5001 16.25Z"
        fill={fillColor}
      />
    </svg>
  );
}
