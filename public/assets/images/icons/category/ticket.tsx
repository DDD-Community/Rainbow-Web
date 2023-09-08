interface IconProps {
  width?: number;
  height?: number;
}
export default function CategoryTicketIcon({ width = 22, height = 22 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.55 6.45C14.56 5.46 14.56 3.86 15.55 2.87L13.68 1L1 13.68L2.87 15.55C3.86 14.56 5.46 14.56 6.45 15.55C7.44 16.54 7.44 18.14 6.45 19.13L8.32 21L21 8.32L19.13 6.45C18.14 7.44 16.54 7.44 15.55 6.45Z"
        fill="white"
        stroke="black"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M12.3893 12.3898L11.7393 14.4798L10.4693 12.6898L8.2793 12.7198L9.5893 10.9598L8.8893 8.88978L10.9593 9.58978L12.7193 8.27979L12.6893 10.4698L14.4793 11.7398L12.3893 12.3898Z"
        fill="black"
      />
    </svg>
  );
}
