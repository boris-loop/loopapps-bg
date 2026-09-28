import type { ProductCase } from "../../types/site";

interface CaseTileProps {
  productCase: ProductCase;
}

export function CaseTile({ productCase }: CaseTileProps) {
  const { imageCredit: credit } = productCase;

  return (
    <figure className="@container/tile relative min-h-0 min-w-0">
      <a
        className="product-case group/case relative block size-full min-h-0 min-w-0 overflow-hidden bg-ink @max-[53.75rem]/product:grid @max-[53.75rem]/product:grid-rows-[auto_1fr] @max-[53.75rem]/product:rounded-md @max-[53.75rem]/product:border @max-[53.75rem]/product:border-control @max-[53.75rem]/product:bg-white @max-[53.75rem]/product:text-navy @max-[53.75rem]/product:no-underline"
        href={productCase.href}
        aria-label={`View the ${productCase.title} case on Field Brief`}
      >
        <img
          className="block size-full object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover/case:scale-[1.035] group-focus-visible/case:scale-[1.02] motion-reduce:transform-none @max-[53.75rem]/product:h-auto @max-[53.75rem]/product:aspect-[4/3]"
          src={productCase.image}
          alt={productCase.imageAlt}
          width={productCase.width}
          height={productCase.height}
          loading="lazy"
        />
        <span className="absolute inset-x-3 bottom-9 translate-y-2 rounded-control bg-navy/95 px-3 py-2 text-xs font-extrabold leading-tight text-white opacity-0 shadow-control motion-safe:transition motion-safe:duration-200 group-hover/case:translate-y-0 group-hover/case:opacity-100 group-focus-visible/case:translate-y-0 group-focus-visible/case:opacity-100 @max-[53.75rem]/product:static @max-[53.75rem]/product:flex @max-[53.75rem]/product:min-h-12 @max-[53.75rem]/product:translate-y-0 @max-[53.75rem]/product:items-center @max-[53.75rem]/product:rounded-none @max-[53.75rem]/product:bg-white @max-[53.75rem]/product:px-2.5 @max-[53.75rem]/product:py-2 @max-[53.75rem]/product:text-navy @max-[53.75rem]/product:opacity-100 @max-[53.75rem]/product:shadow-none">
          {productCase.title}
        </span>
      </a>
      {/* Outside the link: nested links are invalid, and CC BY-SA needs this credit visible beside the photo.
          On the stacked card layout the title sits under the photo, so pin the credit to the 4:3 photo's bottom edge instead. */}
      <figcaption className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent px-2.5 pt-4 pb-1.5 @max-[53.75rem]/product:bottom-auto @max-[53.75rem]/product:top-[75cqw] @max-[53.75rem]/product:-translate-y-full text-right text-[0.6875rem] leading-tight text-white/90 [&_a]:inline-block [&_a]:py-1 [&_a]:text-inherit [&_a]:underline [&_a]:decoration-white/40 [&_a]:underline-offset-2 [&_a:hover]:decoration-white pointer-events-none [&_a]:pointer-events-auto">
        Photo: <a href={credit.sourceUrl} rel="noopener" target="_blank">{credit.author}</a>,{" "}
        <a href={credit.licenseUrl} rel="license noopener" target="_blank">{credit.license}</a>
      </figcaption>
    </figure>
  );
}
