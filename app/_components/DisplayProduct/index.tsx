import classes from "./style.module.css";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  description: string;
  price: number;
};

const DisplayProduct = ({ img, description, price, title }: Props) => {
  return (
    <>
      <div className={classes.imgContainer}>
        <Image priority width={600} height={600} alt={title} src={img} />
      </div>
      <div className={classes.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </>
  );
};

export default DisplayProduct;
