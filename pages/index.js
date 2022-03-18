export default function Home({ facts }) {
  return (
    <main className="main">
      <h1>Dog facts</h1>
      <ul>
        <li><a href="/isr/">Incremental Static Regeneration</a></li>
        <li><a href="/ssg/">Static Site Generation</a></li>
      </ul>
    </main>
  );
}
