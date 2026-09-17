import type { Product } from "../../types/site";
import { CaseTile } from "./CaseTile";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="grid grid-cols-[minmax(18rem,0.72fr)_minmax(0,1fr)] overflow-hidden rounded-panel border border-line border-t-[0.3125rem] border-t-red bg-white [grid-template-areas:'identity_visual'_'copy_visual'_'button_visual'] @max-[53.75rem]/product:grid-cols-1 @max-[53.75rem]/product:[grid-template-areas:'identity'_'visual'_'copy'_'button']"
      aria-labelledby="products-title"
    >
      <div className="[grid-area:identity] px-[clamp(1.75rem,4vw,3.5rem)] pt-[clamp(2rem,4vw,3.5rem)] @max-[32.5rem]/product:px-[1.375rem] @max-[32.5rem]/product:pt-7">
        <img className="block h-auto w-[min(100%,21rem)]" src={product.wordmark.src} alt="" width={product.wordmark.width} height={product.wordmark.height} />
        <p className="mt-7 mb-0 max-w-[22ch] text-[clamp(1.3rem,2vw,1.7rem)] font-bold leading-[1.18] text-navy">
          {product.tagline}
        </p>
      </div>

      <div className="[grid-area:copy] px-[clamp(1.75rem,4vw,3.5rem)] pt-7 @max-[32.5rem]/product:px-[1.375rem] @max-[32.5rem]/product:pt-[1.375rem]">
        <p className="mb-0 max-w-[60ch] text-[clamp(1.04rem,1.5vw,1.18rem)] leading-[1.55] text-copy">
          {product.description}
        </p>
        <ul className="mt-7 grid list-none gap-4 p-0">
          {product.benefits.map((benefit) => (
            <li className="grid gap-1" key={benefit.title}>
              <strong className="text-[0.96rem] font-bold text-navy">{benefit.title}</strong>
              <span className="max-w-[50ch] text-[0.9rem] leading-[1.45] text-muted">{benefit.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        className="group/button mx-[clamp(1.75rem,4vw,3.5rem)] mt-7 mb-[clamp(2rem,4vw,3.5rem)] inline-flex min-h-[2.875rem] items-center justify-center gap-2.5 self-end justify-self-stretch rounded-control border border-control bg-white py-2 pr-3.5 pl-2 font-extrabold leading-none text-control-ink no-underline motion-safe:transition motion-safe:duration-200 hover:-translate-y-px hover:border-control-strong hover:bg-control-hover hover:shadow-control active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none [grid-area:button] @max-[32.5rem]/product:m-[1.375rem]"
        href={product.url}
      >
        <img className="size-8 shrink-0 rounded-control motion-safe:transition-transform group-hover/button:scale-105" src={product.buttonMark} alt="" width="112" height="112" />
        <span>{product.name}</span>
      </a>

      <div className="grid min-h-[32rem] grid-cols-2 grid-rows-3 gap-1 overflow-hidden bg-ink [grid-area:visual] @max-[53.75rem]/product:min-h-0 @max-[53.75rem]/product:grid-rows-3 @max-[53.75rem]/product:gap-2.5 @max-[53.75rem]/product:bg-gallery @max-[53.75rem]/product:p-3">
        {product.cases.map((productCase) => (
          <CaseTile productCase={productCase} key={productCase.title} />
        ))}
      </div>
    </article>
  );
}
