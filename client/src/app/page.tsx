import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hi</h1>
      <Link href="/users">
        <button>Users</button>
      </Link>
    </div>
  );
}
