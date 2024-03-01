import Head from "next/head";
import Link from "next/link";
import { signOut } from "next-auth/client"

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>INDEX</h1>
      <ul>
        <li>
          <Link href="/auth/signup">
            <a>signup</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/signin">
            <a>singin</a>
          </Link>
        </li>
        <li>
          <Link href="/post">
            <a>posts</a>
          </Link>
        </li>
        <li>
          <button onClick={signOut}>Signout</button>
        </li>
      </ul>
    </div>
  );
}
