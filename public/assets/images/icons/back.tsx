const PRIMARY_DEFAULT_COLOR = "#27262E";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}
export default function BackIcon({
  width = 24,
  height = 24,
  fill = PRIMARY_DEFAULT_COLOR
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_520_3867)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.82703 12.9996L12.414 18.5864L11.0003 20L3 12L11.0003 4L12.414 5.41365L6.82703 11.0004L21 11.0004V12.9996L6.82703 12.9996Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_520_3867">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
