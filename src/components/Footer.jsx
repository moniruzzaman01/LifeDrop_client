import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} BloodDonate. All rights reserved (
        <Link
          target="_blank"
          to="https://github.com/moniruzzaman01"
          className=" hover:text-primary transition"
        >
          Moniruzzaman
        </Link>
        )
      </div>
    </footer>
  );
}
