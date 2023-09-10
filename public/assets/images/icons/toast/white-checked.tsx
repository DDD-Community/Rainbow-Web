const PRIMARY_DEFAULT_COLOR = "white";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}
export default function WhiteCheckedIcon({
  width = 18,
  height = 18,
  fill = PRIMARY_DEFAULT_COLOR
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"
        fill={fill}
      />
    </svg>
  );
}
