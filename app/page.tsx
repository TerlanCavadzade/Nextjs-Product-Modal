import classes from "./_styles/home.module.css";

import Image from "next/image";
import { getAllProducts } from "./_services/products";
import Pagination from "./_components/pagination";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const data = await getAllProducts(searchParams?.page);

  // 10 is product count per page
  const pageCount = Math.ceil(data.total / 10);

  return (
    <section>
      <div className="container">
        <ul className={classes.productList}>
          {data.products.map((product) => (
            <li key={product.id}>
              <Link scroll={false} href={`product/${product.id}`}>
                <div className={classes.productImg}>
                  <Image
                    width={800}
                    height={800}
                    priority
                    alt={product.title}
                    src={product.thumbnail}
                  />
                </div>
                <div>
                  <h2>{product.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Pagination pageCount={pageCount} />
      </div>
    </section>
  );
}
