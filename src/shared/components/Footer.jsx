import { HeartIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 padd-y mar-t w-full mx-auto text-center bg-primary-50 border-t border-primary-200">
        <small>&copy; 2025 En mémoire de papa Takam Robert - Merci pour votre générosité</small>
        <small className="flex items-center justify-center gap-1">
          <span>Fait avec</span>
          <HeartIcon
            size={18}
            weight="fill"
            className="text-error-500 fill-error-500"
          />par{" "}
          <span className="text-secondary-500 hover:text-secondary-900 hover:no-underline underline">
            <a href="https://www.didicode.com/">Didicode</a>
          </span>
        </small>
    </footer>
  );
}
