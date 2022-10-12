import { useState } from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const handler = async () => {
    const data = await fetch(`/api/notify-list?email=${email}`);

    if (data.status === 200) {
      window.alert("You have been added to the newsletter list");
    } else {
      window.alert("You have already been added to the newsletter list");
    }
  };

  return (
    <div className="Newsletter">
      <iframe
        title="Google maps to Shiv Nadar Institute of Eminence"
        width="100%"
        height="100%"
        className="Newsletter__container"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA1aSE37-L5EfmVW-p5IqPrVV7YkXxtWJs&q=Shiv+Nadar+University&center=28.5267345,77.5731743"
        allowFullScreen
      />
    </div>
  );
}
