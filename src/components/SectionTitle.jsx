export default function SectionTitle({ title, icon: Icon }) {
  return (
    <h1 className="capitalize text-2xl font-semibold tracking-wide flex items-baseline gap-4">
      {title} <Icon className="h-5 w-5" />
    </h1>
  );
}
