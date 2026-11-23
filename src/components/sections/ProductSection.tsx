import { featuredProduct } from "../../data/site";
import { CarWashGuideCard } from "../common/CarWashGuideCard";
import { CaseTile } from "../common/CaseTile";
import { CopyProofCard } from "../common/CopyProofCard";
import { ProductCard } from "../common/ProductCard";

export function ProductSection() {
  return (
    <section className="section-shell scroll-mt-24" id="products" aria-labelledby="products-title">
      <div className="mb-7">
        <h2 className="section-label" id="products-title">{featuredProduct.label}</h2>
      </div>
      <div className="@container/product grid gap-7">
        <ProductCard
          product={featuredProduct}
          identity={
            <img
              className="block h-auto w-[min(100%,21rem)]"
              src={featuredProduct.wordmark.src}
              alt=""
              width={featuredProduct.wordmark.width}
              height={featuredProduct.wordmark.height}
            />
          }
          visual={
            <div className="grid min-h-[32rem] grid-cols-2 grid-rows-3 gap-1 overflow-hidden bg-ink @max-[53.75rem]/product:min-h-0 @max-[53.75rem]/product:grid-rows-3 @max-[53.75rem]/product:gap-2.5 @max-[53.75rem]/product:bg-gallery @max-[53.75rem]/product:p-3">
              {featuredProduct.cases.map((productCase) => (
                <CaseTile productCase={productCase} key={productCase.title} />
              ))}
            </div>
          }
        />
        <CopyProofCard />
        <CarWashGuideCard />
      </div>
    </section>
  );
}
