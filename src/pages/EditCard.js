import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  /* TODO: Complete the EditCard page
    - display a form for editing a card (use the CardForm component to display the form)
    - handle form submission to call updateCard API
    - handle loading, busy, and error states
    - style as a form UI */

    
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);   // <-- define loading state
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

    const {id} = useParams();
    const navigate = useNavigate();

      useEffect(() => {
    async function fetchCard() {
      try {
        setLoading(true);
        const cards = await getCards();
        const found = cards.find((c) => String(c.id) === String(id));
        if (!found) {
          setError("Card not found");
        } else {
          setCard(found);
        }
      } catch (err) {
        setError("Failed to load card");
      } finally {
        setLoading(false);
      }
    }
    fetchCard();
  }, [id]);

  async function handleSubmit(updatedData) {
    try {
      setBusy(true);
      await updateCard(id, updatedData);
      navigate("/cards"); 
    } catch (err) {
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  }


 return 
    <main>
      <h1>Edit Card</h1>

      {loading && <p>Loading card...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && card && (
        <CardForm
          initialValues={card}
          onSubmit={handleSubmit}
          disabled={busy}
        />
      )}

      {busy && <p>Updating card...</p>}
    </main>

}

