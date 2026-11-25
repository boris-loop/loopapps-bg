import type { ProductCase } from "../../types/site";

interface CaseTileProps {
  productCase: ProductCase;
}

export function CaseTile({ productCase }: CaseTileProps) {
  const { imageCredit: credit } = productCase;

  return (
    <figure className="campaign-case">
      <a
        className="campaign-case-link"
        href={productCase.href}
        aria-label={`Read the ${productCase.title} case on Field Brief`}
      >
        <img
          src={productCase.image}
          alt={productCase.imageAlt}
          width={productCase.width}
          height={productCase.height}
          loading="lazy"
        />
        <div className="campaign-case-copy">
          <h3>{productCase.title}</h3>
          <span>Read case study</span>
        </div>
      </a>
      {/* Keep attribution visible beside each photo, outside the case link. */}
      <figcaption>
        Photo:{" "}
        <a href={credit.sourceUrl} rel="noopener" target="_blank">
          {credit.author}
        </a>
        ,{" "}
        <a href={credit.licenseUrl} rel="license noopener" target="_blank">
          {credit.license}
        </a>
      </figcaption>
    </figure>
  );
}
