import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go()
      //   redirect the user to the home page.
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooooops...</h1>
      <h2>This page cannot be found</h2>

      <p>
        Go back to the <Link href="/"> Homepage </Link>
      </p>
    </div>
  );
};

export default NotFound;
