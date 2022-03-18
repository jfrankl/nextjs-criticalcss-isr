export async function getStaticProps() {
  const res = await fetch("https://dog-api.kinduff.com/api/facts");

  const { facts } = await res.json();

  return {
    props: {
      facts,
    },
    revalidate: 3,
  };
}

export default function Isr({ facts }) {
  return (
    <main>
      <h1>Dog facts</h1>
      <p>{facts}</p>
    </main>
  );
}
