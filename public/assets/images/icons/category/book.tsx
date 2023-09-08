interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryBookIcon({ width = 20, height = 15 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.78027H0.5V14.5103H10H19.5V1.78027H10Z"
        fill="black"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M10.0009 0.490234H1.46094V13.2202H10.0009V0.490234Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M18.54 0.490234H10V13.2202H18.54V0.490234Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
