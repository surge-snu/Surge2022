export async function registerTeam(formData) {
  return fetch("/api/event/register-team", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
}
