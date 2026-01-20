export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  /* TODO: Complete the CardForm component 
  - display form inputs for card_name and card_pic
  - display error message
  - display submit button 
  - handle form submission 
  - style as a form UI */
  function handleChange(e) {
    const { name, value } = e.target;
    onChange({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return <form
  onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#fafafa",
      }}>

        <label>
        Card Name
        <input
          type="text"
          name="card_name"
          value={values.card_name || ""}
          onChange={handleChange}
          disabled={busy}
          style={{ width: "100%", padding: "0.5rem" }}
          required
        />
      </label>

      <label>
        Card Picture URL
        <input
          type="text"
          name="card_pic"
          value={values.card_pic || ""}
          onChange={handleChange}
          disabled={busy}
          style={{ width: "100%", padding: "0.5rem" }}
          required
        />
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        type="submit"
        disabled={busy}
        style={{
          padding: "0.75rem",
          backgroundColor: busy ? "#aaa" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: busy ? "not-allowed" : "pointer",
        }}
      >
        {busy ? "Submitting..." : submitText || "Submit"}
      </button>
      
  </form>;
}
