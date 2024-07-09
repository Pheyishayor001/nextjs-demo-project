import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Nigerians</h1>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/nigerians">Nigerian Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
