import { Heart } from "phosphor-react";

export default function Footer() {
  return (
    <footer className=" py-4 w-full">
      <div className="container mx-auto text-center">
        <small>&copy; 2025 En mémoire de papa tano - Merci pour votre générosité</small>
        <small className="flex items-center justify-center gap-2">
          <span>Fait avec</span>
          <Heart
            size={24}
            weight="fill"
            className="text-error-500 fill-error-500"
          />
          <span>
            par <a href="https://www.didicode.com/">Didicode</a>
          </span>
        </small>
      </div>
    </footer>
  );
}
