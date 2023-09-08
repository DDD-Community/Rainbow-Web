interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryHandHeartIcon({ width = "100%", height = 20 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1395 1.4C11.9395 0.2 9.97953 0.2 8.77953 1.4C7.57953 0.2 5.61953 0.2 4.41953 1.4C3.21953 2.6 3.21953 4.56 4.41953 5.76L8.77953 10.12L13.1395 5.76C14.3395 4.56 14.3395 2.6 13.1395 1.4Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M13.0695 14.9099L12.0295 12.6299L9.30953 12.8599C8.52953 12.5399 6.44953 11.9699 3.26953 13.0399L5.15953 18.6499H11.5595L16.6595 16.0799C17.1595 15.8299 17.3995 15.2399 17.2195 14.7099C17.0195 14.1199 16.3795 13.7999 15.7895 13.9999L13.0695 14.9099Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M9.30078 12.8601L12.5008 12.5801C13.0508 12.5301 13.5708 12.8701 13.7508 13.4001C13.9608 14.0301 13.6208 14.7201 12.9908 14.9301L10.3308 15.8201"
        fill="white"
      />
      <path
        d="M9.30078 12.8601L12.5008 12.5801C13.0508 12.5301 13.5708 12.8701 13.7508 13.4001C13.9608 14.0301 13.6208 14.7201 12.9908 14.9301L10.3308 15.8201"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M3.26102 13.0362L0.720703 13.8901L2.60698 19.5016L5.1473 18.6477L3.26102 13.0362Z"
        fill="black"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
    </svg>
  );
}