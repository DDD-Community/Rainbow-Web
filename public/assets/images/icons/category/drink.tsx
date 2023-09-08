interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryDrinkIcon({ width = 16, height = 22 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.56836 7.57L9.54836 0.5" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
      <path
        d="M13.9201 6.74023H2.08008L2.75008 12.3402H13.2501L13.9201 6.74023Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M3.8282 21.5002H12.1682L12.5882 17.9102H3.4082L3.8282 21.5002Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M2.75 12.3398L3.41 17.9098H12.59L13.25 12.3398H2.75Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M14.6291 5.72998H1.36914V8.49998H14.6291V5.72998Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
