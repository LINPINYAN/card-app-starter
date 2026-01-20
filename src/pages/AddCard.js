import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  /* TODO: Complete the AddCard page
    - display a form for adding a new card (use the CardForm component to display the form)
    - handle form submission to call addCard API
    - handle busy and error states
    - style as a form UI */

  const navigate = useNavigate();

  const [card, setCard] = useState({ card_name: "", card_pic: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(newCard) {
    try {
      setBusy(true);
      setError(null);
      await addCard(newCard);
      navigate("/");
    } catch (err) {
      setError("Failed to add card");
    } finally {
      setBusy(false);
    }
  }


  return <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Add New Card</h1>

      <CardForm
        values={card}
        onChange={setCard}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
}
