export default function BgArt() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none min-h-screen ">
      <div className="absolute -top-20 -right-20 size-80 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-red-700/10 blur-3xl" />
      <div className="absolute top-1/3 -left-40 size-112 rounded-full bg-red-600/10 blur-3xl" />
      <svg
        className="absolute inset-0 w-full h-full "
        viewBox="0 0 1000 700"
        fill="none"
      >
        <path
          className="opacity-[0.15]"
          d="M50 350 C200 150, 450 600, 950 300"
          stroke="rgb(220 38 38)"
          strokeWidth="1.2"
        />
        <path
          className="opacity-[0.12]"
          d="M150 600 C300 400, 500 200, 800 500"
          stroke="rgb(185 28 28)"
          strokeWidth="0.8"
        />
        <path
          className="opacity-[0.1]"
          d="M500 120
             C460 200, 400 260, 400 330
             C400 410, 460 460, 500 460
             C540 460, 600 410, 600 330
             C600 260, 540 200, 500 120 Z"
          stroke="rgb(220 38 38)"
          fill="rgb(220 38 38)"
        />
      </svg>
    </div>
  );
}
