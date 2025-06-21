const options = [
  { value: "paypal", label: "PayPal", icon: "/paypal.svg" },
  { value: "card", label: "Carte", icon: "/card.svg" },
  { value: "orange_money", label: "Orange Money", icon: "/orange.svg" },
  { value: "mtn_money", label: "MTN MoMo", icon: "/mtn.svg" },
];

export default function PaymentOption({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onSelect(opt.value)}
          className={`flex flex-col items-center border p-3 rounded-lg ${
            selected === opt.value ? "border-black" : "border-gray-200"
          }`}
        >
          <img src={opt.icon} alt={opt.label} className="h-6 mb-1" />
          <span className="text-sm">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
