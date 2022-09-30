import "../styles/routes/Contact.scss";

export default function Contact() {
    const contact = [
        {
            "image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "name": "Santhosh",
            "position": "Web Development Lead",
        },
        {
            "image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "name": "Santhosh",
            "position": "Web Development Lead",
        },
        {
            "image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "name": "Santhosh",
            "position": "Web Development Lead",
        },
        {
            "image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "name": "Santhosh",
            "position": "Web Development Lead",
        }
    ];
    return (
        <div className="ContactPage__container">
            <div className="ContactPage__container--top">
                <h1 className="ContactPage__container--top__title">
                    GET IN <span>TOUCH</span> WITH US FOR <span>MORE</span> INFORMATION
                </h1>
                <p className="ContactPage__container--top__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="ContactPage__container--tabs">
                <div className="ContactPage__container--tabs__active">
                    CORE
                </div>
                <div className="ContactPage__container--tabs__unactive">
                    POC
                </div>
            </div>
            <div className="ContactPage__container--contact">
                {contact.map((item, index) => (
                    <div className="ContactPage__container--contact__card" key={index}>
                        <div className="ContactPage__container--contact__card--top">
                            <img src={item['image']} />
                            <div className="ContactPage__container--contact__card--top__details">
                                <h3 className="ContactPage__container--contact__card--top__details--name">{item['name']}</h3>
                                <p className="ContactPage__container--contact__card--top__details--position">{item['position']}</p>
                            </div>
                        </div>
                        <div className="ContactPage__container--contact__card--bottom">
                            <div className="ContactPage__container--contact__card--bottom__call">Place a call -{'>'}</div>
                            <div className="ContactPage__container--contact__card--bottom__mail">Mail -{'>'}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}