/**
 * API Service (Create React App)
 *
 * 1) Create `.env` at project root
 * 2) Set: REACT_APP_API_URL=https://YOUR-BACKEND.onrender.com
 * 3) Restart `npm start`
 */
const API_URL = process.env.REACT_APP_API_URL || "";

/**
 * TODO: If your backend routes differ, update the paths here.
 * Required endpoints:
 * - GET    /allcards
 * - POST   /addcard
 * - PUT    /updatecard/:id
 * - DELETE /deletecard/:id
 */

function authHeader() {
    const token = localStorage.getItem("token");

    return token
        ? { Authorization: `Bearer ${token}` }
        : {};
}

export function login(credentials) {
    return fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
}

export async function getCards() {
  // GET /allcards (provided as reference)
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addCard(card) {
  // TODO: implement POST /addcard
  const res = await fetch(`${API_URL}/addcard`,{
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(),},
    body: JSON.stringify(card),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function updateCard(id, card) {
  console.log("Sending update to API:", id, card);
  const res = await fetch(`${API_URL}/updatecard/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  console.log("Response status:", res.status);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function deleteCard(id) {
  // TODO: implement DELETE /deletecard/:id
  return fetch(`${API_URL}/deletecard/${id}`,{
    method: "DELETE"
  });
}
