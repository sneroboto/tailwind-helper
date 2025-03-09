export default function Card({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-purple-500 p-4 border border-purple-800">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{text}</p>
    </section>
  );
}
