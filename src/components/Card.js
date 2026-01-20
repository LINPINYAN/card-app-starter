import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  return (
    <div className="card">
      <img
        src={card.card_pic}
        alt={card.card_name}
        className="card-image"
      />

      <div className="card-body">
        <div className="card-header">
          <h2 className="card-title">{card.card_name}</h2>

          {/* Edit icon button */}
          <Link to={`/cards/${card.id}/edit`} className="card-edit-icon" title="Edit">
            ✏️
          </Link>
        </div>

        <p className="card-id">ID: {card.id}</p>

        <div className="card-actions">
          <button
            className="card-delete-btn"
            onClick={() => onDelete(card)}
            disabled={busy}
          >
            {busy ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
