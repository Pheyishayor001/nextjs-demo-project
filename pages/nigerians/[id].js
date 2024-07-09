export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((nig) => {
    return {
      params: { id: nig.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      nigerian: data,
    },
  };
};

const Details = ({ nigerian }) => {
  return (
    <div>
      <h1>{nigerian.name}</h1>
      <p>{nigerian.email}</p>
      <p>{nigerian.website}</p>
      <p>{nigerian.address.city}</p>
    </div>
  );
};

export default Details;
