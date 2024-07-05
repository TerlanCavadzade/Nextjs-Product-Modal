import DisplayProduct from "@/app/_components/DisplayProduct";
import Modal from "@/app/_components/Modal";
import { getProductById } from "@/app/_services/products";

const Product = async ({ params }: { params: { id: string } }) => {
  const data = await getProductById(params.id);

  return (
    // <section>
    <Modal>
      <DisplayProduct
        description={data.description}
        img={data.thumbnail}
        price={data.price}
        title={data.title}
      />
    </Modal>
    // </section>
  );
};

export default Product;
