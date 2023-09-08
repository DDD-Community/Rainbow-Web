interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryDailyNecessityIcon({ width = 20, height = 20 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.30078 8.93998L10.0208 1.72998L16.7408 8.93998"
        stroke="black"
        strokeMiterlimit="10"
      />
      <path
        d="M2.03125 10.23H17.9712L16.3812 19.27H3.62125L2.03125 10.23Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M18.7705 7.58008H1.23047V11.6801H18.7705V7.58008Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path d="M6.25977 13.27V17.53" stroke="black" strokeWidth="0.75" strokeMiterlimit="10" />
      <path d="M8.76953 13.27V17.53" stroke="black" strokeWidth="0.75" strokeMiterlimit="10" />
      <path d="M11.2695 13.27V17.53" stroke="black" strokeWidth="0.75" strokeMiterlimit="10" />
      <path d="M13.7812 13.27V17.53" stroke="black" strokeWidth="0.75" strokeMiterlimit="10" />
    </svg>
  );
}
