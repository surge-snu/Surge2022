import TeamMember from "../TeamMember/TeamMember";
import "./TeamGrid.scss";
import react from "react";

export default function TeamGrid() {
  let names = [
    "AB Santosh",
    "Rishi Balamurgan",
    "Aryan Sethia",
    "Keshav Dubey",
    "Pratham Aggarwal",
    "Yathansh Raj Sharma",
    "AB Santosh",
    "Rishi Balamurgan",
    "Aryan Sethia",
    "Keshav Dubey",
    "Pratham Aggarwal",
    "Yathansh Raj Sharma",
  ];
  return (
    <div className="Grid">
      {names.map((name) => (
        <TeamMember name={name} />
      ))}
    </div>
  );
}
