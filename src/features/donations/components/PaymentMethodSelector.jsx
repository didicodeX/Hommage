export default function PaymentMethodSelector({ method, setMethod, setProvider }) {
  return (
    <div className="space-y-2">
      <label>Méthode de paiement :</label>
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="input"
      >
        <option value="card">Carte bancaire (Stripe)</option>
        <option value="mobile_money">Mobile Money (OM / MTN)</option>
      </select>

      {method === "mobile_money" && (
        <select
          onChange={(e) => setProvider(e.target.value)}
          className="input"
        >
          <option value="ORANGE">Orange Money</option>
          <option value="MTN">MTN MoMo</option>
        </select>
      )}
    </div>
  );
}
