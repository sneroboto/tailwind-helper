import Card from "./components/card";

export default function Home() {
  return (
    <main className="container py-8 bg-amber-600">
      <Card
        // subtitle="top subtitle"
        title="Padding"
        text="Controls the padding (space between an element's content and its border) in all directions or specific sides."
      />
      <Card subtitle="Available Classes" />
      <Card subtitle="Tailwind Versions" />
    </main>
  );
}
