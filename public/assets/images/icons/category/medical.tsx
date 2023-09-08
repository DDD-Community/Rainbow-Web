interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryMedicalIcon({ width = 18, height = 18 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 5.44H12.56V0.5H5.44V5.44H0.5V12.56H5.44V17.5H12.56V12.56H17.5V5.44Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
