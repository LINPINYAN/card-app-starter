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

  return <form onSubmit={handleSubmit}>
  <label className="form-label" htmlFor="card_name">Card Name</label>
  <input
    className="form-input"
    type="text"
    id="card_name"
    name="card_name"
    value={values.card_name}
    onChange={handleChange}
    disabled={busy}
  />

  <label className="form-label" htmlFor="card_pic">Card Picture URL</label>
  <input
    className="form-input"
    type="url"
    id="card_pic"
    name="card_pic"
    value={values.card_pic}
    onChange={handleChange}
    disabled={busy}
  />

  <button className="form-submit-btn" type="submit" disabled={busy}>
    {submitText}
  </button>
</form>
}
