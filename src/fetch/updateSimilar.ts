export async function updateSimilar(
  similarID: number,
  status: number,
  similar: string
) {
  await fetch("http://localhost:3000/api/similars", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
      similarID,
      similar,
    }),
  });
}
