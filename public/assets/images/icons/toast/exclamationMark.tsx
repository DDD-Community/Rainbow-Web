const PRIMARY_DEFAULT_COLOR = "#8C9097";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}
export default function ExclamationMarkIcon({
  width = 16,
  height = 16,
  fill = PRIMARY_DEFAULT_COLOR
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335ZM7.33301 8.66683C7.33301 9.03502 7.63148 9.3335 7.99967 9.3335C8.36786 9.3335 8.66634 9.03502 8.66634 8.66683L8.66634 4.66683C8.66634 4.29864 8.36787 4.00016 7.99968 4.00016C7.63148 4.00016 7.33301 4.29864 7.33301 4.66683L7.33301 8.66683ZM7.99967 10.0002C7.44739 10.0002 6.99967 10.4479 6.99967 11.0002C6.99967 11.5524 7.44739 12.0002 7.99967 12.0002C8.55196 12.0002 8.99967 11.5524 8.99967 11.0002C8.99967 10.4479 8.55196 10.0002 7.99967 10.0002Z"
        fill={fill}
      />
    </svg>
  );
}
