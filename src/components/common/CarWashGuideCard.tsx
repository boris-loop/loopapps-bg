import { ProductCard } from "./ProductCard";

const logo = "/assets/carwashguide-mark.svg";

const carWashGuide = {
  name: "CarWashGuide",
  tagline: "Find the right car wash before you go.",
  description:
    "CarWashGuide is an independent U.S. car wash directory, starting in Florida. Browse local washes by city and compare wash methods, advertised prices, and membership options where available.",
  benefits: [
    { title: "Wash methods", description: "Filter for touchless, soft-touch, self-service, or hand washes." },
    { title: "Advertised prices", description: "Compare published prices and packages where operators list them." },
    { title: "Clear verification", description: "See when the available sources leave a wash method unconfirmed." },
  ],
  url: "https://carwashguide.org/",
  buttonMark: logo,
};

export function CarWashGuideCard() {
  return (
    <ProductCard
      id="carwashguide-title"
      product={carWashGuide}
      identity={
        <h3 className="m-0 flex items-center gap-3 text-2xl font-extrabold text-[#173f35]">
          <img className="size-12" src={logo} alt="" width="64" height="64" />
          CarWashGuide
        </h3>
      }
      visual={
        <div className="grid place-content-center justify-items-center gap-4 bg-[#173f35] bg-[radial-gradient(ellipse_at_top_left,#346b55,transparent_75%)] px-8 py-12 text-center text-[#f6f4d7] @max-[53.75rem]/product:min-h-64">
          <img
            className="size-[clamp(7rem,13vw,11rem)]"
            src={logo}
            alt=""
            width="64"
            height="64"
          />
          <p className="m-0 max-w-[15ch] text-[clamp(1.65rem,3.5vw,3rem)] font-bold leading-tight">
            Know your wash before you go.
          </p>
        </div>
      }
    />
  );
}
