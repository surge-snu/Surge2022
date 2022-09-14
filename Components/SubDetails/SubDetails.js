import "./SubDetails.scss";

export default function SubDetails(props) {
  return (
    <div className="subDetails">
      <p className="subDetails__title">{props.title}</p>
      <p className="subDetails__description">{props.description}</p>
    </div>
  );
}
