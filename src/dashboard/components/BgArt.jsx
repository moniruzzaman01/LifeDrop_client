export default function BgArt() {
  return (
    <>
      <div className="absolute top-0 right-0 size-45 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-55 rounded-full bg-red-700/10 blur-3xl" />
      <div className="absolute top-1/3 -left-32 size-65 rounded-full bg-red-600/10 blur-3xl" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 800 600"
        fill="none"
      >
        <path
          d="M50 300 C200 100, 400 500, 750 200"
          stroke="red"
          strokeWidth="1.2"
        />
        <path
          d="M100 500 C250 350, 450 150, 700 400"
          stroke="red"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}
