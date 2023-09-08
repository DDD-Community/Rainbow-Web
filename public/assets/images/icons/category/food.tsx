interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryFoodIcon({ width = 16, height = 22 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.61094 21.0001H3.21094L3.57094 8.8501H5.24094L5.61094 21.0001Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M11.8198 20.9999H9.33984L9.71984 1.16992H11.4398L11.8198 20.9999Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M15.3402 20.9999H12.8702L12.4902 1.16992H14.2102L15.3402 20.9999Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M8.16016 6.72C8.16016 9.3 6.48016 10.33 4.41016 10.33C2.34016 10.33 0.660156 9.3 0.660156 6.72C0.660156 4.14 2.34016 1 4.41016 1C6.48016 1 8.16016 4.15 8.16016 6.72Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
