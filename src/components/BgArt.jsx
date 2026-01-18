export default function BgArt() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none ">
      <div className="absolute -top-20 -right-20 size-80 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute top-1/3 -left-40 size-112 rounded-full bg-red-600/10 blur-3xl" />
      <svg
        className="absolute inset-0 w-full h-full "
        viewBox="0 -100 1000 800"
        fill="none"
      >
        <path
          d="M-150 300 
     L200 300 
     L240 260 
     L260 340 
     L280 280 
     L320 300 
     L700 300"
          stroke="rgb(220 38 38)"
          strokeWidth="1"
          opacity="0.15"
          fill="none"
          transform="translate(240 80)"
        />
        <defs>
          <radialGradient id="bloodFade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgb(220 38 38)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(220 38 38)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M500 120
       C460 200, 400 260, 400 330
       C400 410, 460 460, 500 460
       C540 460, 600 410, 600 330
       C600 260, 540 200, 500 120 Z"
          fill="url(#bloodFade)"
          transform="translate(0 -20)"
        />
      </svg>
    </div>
  );
}
