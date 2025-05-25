import { QuotesIcon } from "@phosphor-icons/react";

export default function FuneralQuote() {
  return (
    <div className="mt-6 px-4 py-3 border-l-4 border-primary-200 bg-primary-50 rounded-md text-primary-500 max-w-lg">
      <div className="flex items-start gap-3">
        <QuotesIcon size={24} className="text-primary-400 mt-1" />
        <p className="italic leading-relaxed">
          Partir c'est mourir un peu<br />
          mais s'en aller pour chercher Dieu,<br />
          c'est trouver la vie.
        </p>
      </div>
    </div>
  );
}
