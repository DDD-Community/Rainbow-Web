const PRIMARY_DEFAULT_COLOR = "#8C9097";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}
export default function ExclamationMark({
  width = 16,
  height = 16,
  fill = PRIMARY_DEFAULT_COLOR
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49992 1.33333C4.81802 1.33333 1.83325 4.3181 1.83325 8C1.83325 11.6819 4.81802 14.6667 8.49992 14.6667C12.1818 14.6667 15.1666 11.6819 15.1666 8C15.1666 4.3181 12.1818 1.33333 8.49992 1.33333ZM7.83325 8.66667C7.83325 9.03486 8.13173 9.33333 8.49992 9.33333C8.86811 9.33333 9.16659 9.03486 9.16659 8.66667L9.16659 4.66667C9.16659 4.29848 8.86811 4 8.49992 4C8.13173 4 7.83325 4.29848 7.83325 4.66667L7.83325 8.66667ZM8.49992 10C7.94763 10 7.49992 10.4477 7.49992 11C7.49992 11.5523 7.94763 12 8.49992 12C9.0522 12 9.49992 11.5523 9.49992 11C9.49992 10.4477 9.0522 10 8.49992 10Z"
        fill={fill}
      />
    </svg>
  );
}
