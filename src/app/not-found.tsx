import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        padding: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        style={{
          marginLeft: 2,
          fontWeight: "bold",
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
