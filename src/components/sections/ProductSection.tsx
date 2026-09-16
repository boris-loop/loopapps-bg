import { featuredProduct } from "../../data/site";
import { ProductCard } from "../common/ProductCard";

export function ProductSection() {
  return (
    <section className="section-shell scroll-mt-24" id="products" aria-labelledby="products-title">
      <div className="mb-7">
        <p className="section-label">{featuredProduct.label}</p>
        <h2 className="sr-only" id="products-title">{featuredProduct.name}</h2>
      </div>
      <div className="@container/product">
        <ProductCard product={featuredProduct} />
      </div>
    </section>
  );
}
