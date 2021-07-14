import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

const index = ({ items }) => {
  console.log(items);
  return (
    <>
      <body>
        <div className={styles.container}>
          <h1>Agents List</h1>

          {items.map((item) => {
            return (
              <Link
                href={{
                  pathname: `/agents/${item.uuid}`,
                  query: { item: JSON.stringify(item) },
                }}
              >
                <div className={styles.card}>
                    <img src={item.displayIcon} height="50px" width="50px"></img>
                  <h3 key={item.uuid}>{item.displayName}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </body>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  const data = await res.json();

  return {
    props: { items: data.data },
  };
};

export default index;
