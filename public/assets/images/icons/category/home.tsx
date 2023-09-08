interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryHomeIcon({ width = 18, height = 18 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 17.3899H0.5V6.56986L9 0.609863L17.5 6.56986V17.3899Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M11.4898 10.8799H6.50977V17.3899H11.4898V10.8799Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
