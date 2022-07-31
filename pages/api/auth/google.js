import getTokens from "../../../utils/get-token-google";

export default async function GoogleOAuth(req, res) {
  const code = req.query.code;

  // get access data
  const { id_token, access_token } = await getTokens({
    code,
    clientId: "FILL_IT",
    clientSecret: "FILL_IT",
    redirectUri: `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "FILL_IT"
    }`,
  });

  //fetch data
  const user = await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
    {
      header: {
        Authorization: `Bearer ${id_token}`,
      },
    }
  )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  res.redirect("/");
}
