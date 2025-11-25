import ProductCheckoutInfo from "./product-checkout-info";
import Prodcuts from "./products";

const ProductCheckoutComp = () => {
  return (
    <section className="w-[90%] m-auto grid grid-cols-[2fr_1.5fr] gap-5">
      <ProductCheckoutInfo />
      <Prodcuts />
    </section>
  );
};

export default ProductCheckoutComp;
