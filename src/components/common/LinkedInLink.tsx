interface LinkedInLinkProps {
  href: string;
  className?: string;
}

export function LinkedInLink({ href, className = "" }: LinkedInLinkProps) {
  return (
    <a
      className={`group/link inline-flex w-fit items-center justify-center gap-2 rounded-control border border-control bg-white px-[0.6875rem] py-[0.4375rem] pl-2 font-extrabold leading-none text-control-ink no-underline motion-safe:transition motion-safe:duration-200 hover:-translate-y-px hover:border-control-strong hover:bg-control-hover hover:shadow-control active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none ${className}`}
      href={href}
    >
      <span className="grid size-6 shrink-0 place-items-center rounded bg-[#0a66c2] pt-0.5 font-sans text-[0.8rem] font-extrabold text-white motion-safe:transition-transform group-hover/link:scale-105" aria-hidden="true">
        in
      </span>
      <span>LinkedIn</span>
    </a>
  );
}
