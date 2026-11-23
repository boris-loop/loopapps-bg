import { ProductCard } from "./ProductCard";

const logo = "/assets/copyproof-logo.webp";

const copyProof = {
  name: "CopyProof",
  tagline: "Document comparison for pharmaceutical labeling teams.",
  description:
    "Compare approved Word or PDF text with medicine labels, package leaflets and PDF artwork. Review the differences before signing off.",
  benefits: [
    { title: "Text comparison", description: "Find changes between approved text and the version under review." },
    { title: "Evidence in context", description: "See findings in the original documents and identify passages that need a manual check." },
    { title: "Review decisions", description: "Record the outcome alongside the comparison." },
  ],
  url: "https://copyproof.io/",
  buttonMark: logo,
};

export function CopyProofCard() {
  return (
    <ProductCard
      id="copyproof-title"
      product={copyProof}
      identity={
        <h3 className="m-0 flex items-center gap-3 text-2xl font-extrabold text-[#174b45]">
          <img className="size-12" src={logo} alt="" width="128" height="128" />
          CopyProof
        </h3>
      }
      visual={
        <div className="relative min-h-0 overflow-hidden bg-[#226140] @max-[53.75rem]/product:aspect-square">
          <img
            className="absolute inset-0 size-full object-cover"
            src="/assets/copyproof-brand-panel.webp"
            alt="CopyProof branding with the tagline Every detail. Every difference. and an illustration of two documents."
            width="1100"
            height="1107"
            loading="lazy"
          />
        </div>
      }
    />
  );
}
