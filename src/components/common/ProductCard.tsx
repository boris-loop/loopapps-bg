import type { ReactNode } from "react";
import type { Product } from "../../types/site";

interface ProductCardProps {
  product: Pick<Product, "name" | "tagline" | "description" | "benefits" | "url" | "buttonMark">;
  identity: ReactNode;
  visual: ReactNode;
  id?: string;
}

export function ProductCard({ product, identity, visual, id }: ProductCardProps) {
  return (
    <article
      className="grid scroll-mt-28 grid-cols-[minmax(18rem,0.72fr)_minmax(0,1fr)] overflow-hidden rounded-panel border border-line border-t-[0.3125rem] border-t-red bg-white [grid-template-areas:'identity_visual'_'copy_visual'_'button_visual'] @max-[53.75rem]/product:grid-cols-1 @max-[53.75rem]/product:[grid-template-areas:'identity'_'visual'_'copy'_'button']"
      id={id}
      tabIndex={id ? -1 : undefined}
      aria-label={product.name}
    >
      <div className="[grid-area:identity] px-[clamp(1.75rem,4vw,3.5rem)] pt-[clamp(2rem,4vw,3.5rem)] @max-[32.5rem]/product:px-[1.375rem] @max-[32.5rem]/product:pt-7">
        {identity}
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

      <div className="grid min-w-0 [grid-area:visual]">{visual}</div>
    </article>
  );
}
