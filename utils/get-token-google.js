export default async function getTokens({
  code,
  clientId,
  clientSecret,
  redirectUri,
}) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };
  return fetch(url, {
    method: "post",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}
