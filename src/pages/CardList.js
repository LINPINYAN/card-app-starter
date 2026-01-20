import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  /* TODO: Complete the CardList page
    - display a list of cards (use the Card component to display each card)
    - delete button calling handleDelete with the card object
    - handle loading, busy, and error states
    - style as a grid UI */

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const data = await getCards();
      setCards(data);
    } catch (error) {
      console.error("Failed to load cards", error);
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // TODO: implement GET /allcards
    load();
  }, []);

  async function handleDelete(card) {
    const confirmed = window.confirm(
    `Delete "${card.card_name}"? This cannot be undone.`
    );

    if (!confirmed) return;

    setBusy(true);
    setError("");
    try {
      // delete from backend
      const res = await deleteCard(card.id);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // remove from local state
      setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
    } catch (error) {
      console.error("Failed to delete card", error);
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  }

  return <main className="cardlist-container">
     <h1 className="cardlist-title">Your Card List 🗃️</h1>

      {/* Loading state */}
      {loading && <p className="status-text">Loading cards...</p>}

      {/* Error state */}
      {error && <p className="error-text">{error}</p>}

      {/* Empty state */}
      {!loading && cards.length === 0 && (
        <p className="status-text">No cards found. Add one to get started!</p>
      )}

      {/* Cards grid */}
      <div className="card-scroll-container">
        <div className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={handleDelete}
              busy={busy}
            />
          ))}
        </div>
      </div>
  </main>;
}

