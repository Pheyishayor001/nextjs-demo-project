import Head from "next/head";
import styles from "../../styles/Nigerians.module.css";
import Link from "next/link";

// getStaticProps isused to fetch data.
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      nigerians: data,
    },
  };
};

const Nigerians = ({ nigerians }) => {
  console.log(nigerians);
  return (
    <>
      <Head>
        <title>Nigerian List | Some Nigerians</title>
        <meta name="keywords" content="nigerians" />
      </Head>
      <div>
        <h1>All Nigerians are fun to be with</h1>
        {nigerians.map((nigerian) => (
          <Link
            href={`/nigerians/${nigerian.id}`}
            className={styles.single}
            key={nigerian.id}
          >
            <h3>{nigerian.name} </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Nigerians;
