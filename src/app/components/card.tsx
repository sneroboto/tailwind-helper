export default function Card({
  title,
  text,
  subtitle,
}: {
  title?: string;
  text?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white p-4">
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <h3 className="text-black">{subtitle}</h3>
      <p className="text-gray-500">{text}</p>
    </section>
  );
}
