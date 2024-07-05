import Link from "next/link";
import classes from "./style.module.css";
const Pagination = ({ pageCount }: { pageCount: number }) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <ul className={classes.paginationContainer}>
      {pages.map((page) => (
        <li key={page}>
          <Link href={`?page=${page}`}>{page}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
