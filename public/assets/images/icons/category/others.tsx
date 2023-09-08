interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryOthersIcon({ width = 18, height = 6 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.35977 4.8499C3.38149 4.8499 4.20977 4.02163 4.20977 2.9999C4.20977 1.97818 3.38149 1.1499 2.35977 1.1499C1.33804 1.1499 0.509766 1.97818 0.509766 2.9999C0.509766 4.02163 1.33804 4.8499 2.35977 4.8499Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M9.00039 4.8499C10.0221 4.8499 10.8504 4.02163 10.8504 2.9999C10.8504 1.97818 10.0221 1.1499 9.00039 1.1499C7.97866 1.1499 7.15039 1.97818 7.15039 2.9999C7.15039 4.02163 7.97866 4.8499 9.00039 4.8499Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M15.6391 4.8499C16.6608 4.8499 17.4891 4.02163 17.4891 2.9999C17.4891 1.97818 16.6608 1.1499 15.6391 1.1499C14.6173 1.1499 13.7891 1.97818 13.7891 2.9999C13.7891 4.02163 14.6173 4.8499 15.6391 4.8499Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}