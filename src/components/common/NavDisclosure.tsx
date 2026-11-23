import { useDetailsDismiss } from "../../hooks/useDetailsDismiss";
import type { NavItem } from "../../types/site";

interface NavDisclosureProps {
  item: NavItem;
  mobile?: boolean;
  onNavigate?: () => void;
}

export function NavDisclosure({ item, mobile, onNavigate }: NavDisclosureProps) {
  const { detailsRef, summaryRef, close, onBlur, onKeyDown } = useDetailsDismiss();

  return (
    <details
      className="group/products relative"
      ref={detailsRef}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <summary
        ref={summaryRef}
        className={`flex min-h-11 cursor-pointer list-none items-center gap-2 hover:text-red-dark [&::-webkit-details-marker]:hidden ${mobile ? "rounded-md px-3 hover:bg-control-hover" : ""}`}
      >
        {item.label}
        <span aria-hidden="true" className="mt-[-0.2rem] size-1.5 rotate-45 border-r border-b group-open/products:mt-[0.2rem] group-open/products:rotate-[225deg]" />
      </summary>
      <ul className={mobile
        ? "m-0 list-none border-l border-line p-0 ml-3"
        : "absolute right-0 m-0 min-w-44 list-none rounded-lg border border-line bg-white p-2 shadow-lg max-[53.75rem]:right-auto max-[53.75rem]:left-0"}
      >
        {item.children?.map((child) => (
          <li key={child.href}>
            <a
              className="flex min-h-11 items-center rounded-md px-3 no-underline hover:bg-control-hover hover:text-red-dark"
              href={child.href}
              onClick={() => {
                const target = child.href.startsWith("#") ? document.getElementById(child.href.slice(1)) : null;
                close();
                onNavigate?.();
                target?.focus({ preventScroll: true });
              }}
            >
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
