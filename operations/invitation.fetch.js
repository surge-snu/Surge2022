export async function sendInvitationOps(data) {
  return fetch("/api/events/invitation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}

export async function fetchInvitationsOps(email) {
  return fetch("/api/events/fetch-invitations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then((res) => {
    return res.json();
  });
}

export async function updateInvitationOps(data) {
  return fetch("/api/events/update-invitation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}
