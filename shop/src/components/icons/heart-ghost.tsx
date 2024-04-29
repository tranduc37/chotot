export const HeartGhostIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.2}
        d="M14.5 5.875C14.5 10 8 13.5 8 13.5S1.5 10 1.5 5.875A3.375 3.375 0 014.875 2.5c1.412 0 2.621.77 3.125 2 .504-1.23 1.713-2 3.125-2A3.375 3.375 0 0114.5 5.875z"
        fill="currentColor"
      />
      <path
        d="M11.125 2C9.835 2 8.705 2.555 8 3.493 7.296 2.555 6.166 2 4.875 2A3.88 3.88 0 001 5.875c0 4.375 6.487 7.916 6.763 8.063a.5.5 0 00.474 0C8.513 13.79 15 10.25 15 5.874A3.88 3.88 0 0011.125 2zM8 12.925c-1.141-.665-6-3.694-6-7.05A2.879 2.879 0 014.875 3c1.216 0 2.236.647 2.662 1.688a.5.5 0 00.926 0C8.889 3.646 9.909 3 11.125 3A2.879 2.879 0 0114 5.875c0 3.35-4.86 6.384-6 7.05z"
        fill="currentColor"
      />
    </svg>
  );
};