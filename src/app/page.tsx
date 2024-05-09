import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Link href={"/Todolist"} target="_blank">
          <button
            style={{
              margin: "2.5px",
              width: "100%",
              padding: "10px 0",
              height: "40px",
            }}
          >
            Test 1 : Todolist
          </button>
        </Link>
        <Link href={"/api/department"} target="_blank">
          <button
            style={{
              margin: "2.5px",
              width: "100%",
              padding: "10px 0",
              height: "40px",
            }}
          >
            Test 2 : api department
          </button>
        </Link>
      </div>
    </main>
  );
}
