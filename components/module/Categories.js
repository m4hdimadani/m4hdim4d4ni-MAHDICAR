import styles from "./Categories.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/Sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/Suv">
        <div>
          <p>SUV</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/Hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/Sport">
        <div>
          <p>Sport cars</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
