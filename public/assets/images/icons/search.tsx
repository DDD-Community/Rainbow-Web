const PRIMARY_DEFAULT_COLOR = "#27262E";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}
export default function SearchIcon({
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
      <g clipPath="url(#clip0_520_3871)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L21.0061 19.5919L19.5919 21.0061L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_520_3871">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
