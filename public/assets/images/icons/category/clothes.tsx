interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryClothesIcon({ width = 16, height = 20 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7505 6.77L22.6705 4.63C20.9405 2.86 18.8005 1.62 16.4805 1C16.1405 2.66 14.7105 3.9 12.9905 3.9C11.2705 3.9 9.84047 2.65 9.50047 1C7.18047 1.63 5.04047 2.86 3.31047 4.63L1.23047 6.77L5.06047 10.7L7.09047 9L6.08047 19H19.8905L18.8805 9L20.9105 10.7L24.7405 6.77H24.7505Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
