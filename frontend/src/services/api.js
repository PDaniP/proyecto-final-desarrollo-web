const BASE = "/api";

async function handle(res) {
  if (!res.ok) {
    let msg = res.statusText;
    try {
      const j = await res.json();
      if (j.error) msg = j.error;
    } catch {
      /* ignore */
    }
    throw new Error(msg);
  }
  return res.json();
}

export function getMangas() {
  return fetch(`${BASE}/mangas`).then(handle);
}

export function createManga(data) {
  return fetch(`${BASE}/mangas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handle);
}

export function updateManga(id, data) {
  return fetch(`${BASE}/mangas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handle);
}

export function deleteManga(id) {
  return fetch(`${BASE}/mangas/${id}`, { method: "DELETE" }).then(handle);
}
