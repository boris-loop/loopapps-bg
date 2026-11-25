const products = [
  {
    id: "field-brief",
    name: "Field Brief",
    category: "Automotive PR intelligence",
    tone: "brief",
    logo: "/assets/fieldbrief-wordmark.svg",
    url: "https://fieldbrief.news/",
    heading: "Understand the campaign behind the headlines.",
    description:
      "Source-linked case studies reconstructing notable automotive PR campaigns, with evidence and practitioner judgment.",
  },
  {
    id: "copyproof-title",
    name: "CopyProof",
    category: "Pharmaceutical document comparison",
    tone: "proof",
    logo: "/assets/copyproof-logo.webp",
    url: "https://copyproof.io/",
    heading: "Every detail. Every difference.",
    description:
      "Compare approved Word or PDF text with medicine labels, package leaflets and PDF artwork. Review the differences before signing off.",
  },
  {
    id: "carwashguide-title",
    name: "CarWashGuide",
    category: "U.S. car wash directory",
    tone: "wash",
    logo: "/assets/carwashguide-mark.svg",
    url: "https://carwashguide.org/",
    heading: "Know your wash before you go.",
    description:
      "Find local car washes by city. Compare wash methods, advertised prices and membership options where available, starting in Florida.",
  },
  {
    id: "room-for-mri-title",
    name: "Room for MRI",
    category: "U.S. MRI equipment directory",
    tone: "mri",
    logo: "/assets/room-for-mri-mark.webp",
    url: "https://roomformri.com/",
    heading: "Find the scanner that fits.",
    description:
      "Explore magnetic resonance imaging (MRI) equipment by location. Compare scanner openings, designs and table weight limits using provider-published information.",
  },
];

export function ProductSection() {
  return (
    <section
      className="family-products family-shell"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="mb-6">
        <h2 className="eyebrow" id="products-title">
          The product family
        </h2>
      </div>
      <div className="family-grid">
        {products.map((product) => (
          <article
            className={`family-card ${product.tone}`}
            key={product.id}
            aria-labelledby={product.id}
          >
            <div className="brand-stage" aria-hidden="true">
              <div className="brand-identity">
                <img
                  src={product.logo}
                  alt={product.tone === "brief" ? product.name : ""}
                  width={product.tone === "brief" ? 748 : 128}
                  height={product.tone === "brief" ? 152 : 128}
                />
                {product.tone !== "brief" && <span>{product.name}</span>}
              </div>
              <div className="product-art" aria-hidden="true">
                {product.tone === "brief" && (
                  <>
                    <i />
                    <i />
                    <i />
                    <span>
                      Evidence.
                      <br />
                      Sequence.
                      <br />
                      <em>Insight.</em>
                    </span>
                  </>
                )}
                {product.tone === "proof" && (
                  <img
                    className="copyproof-documents"
                    src="/assets/copyproof-documents.svg"
                    alt=""
                    width="360"
                    height="280"
                  />
                )}
                {product.tone === "wash" && (
                  <>
                    <i className="wash-orbit" />
                    <i className="wash-orbit" />
                    <img src={product.logo} alt="" width="64" height="64" />
                  </>
                )}
                {product.tone === "mri" && (
                  <>
                    <i className="scanner-ring" />
                    <i className="scanner-table" />
                  </>
                )}
              </div>
            </div>
            <div className="family-card-copy">
              <p className="product-category">{product.category}</p>
              <h3 id={product.id} tabIndex={-1}>
                {product.name}
              </h3>
              <p className="product-pitch">{product.heading}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-links">
                <a className="text-link" href={product.url}>
                  Visit {product.name}
                </a>
                {product.tone === "brief" && (
                  <a className="case-link" href="/products/field-brief">
                    View case studies
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
