import "./boxSkills.scss";

export default function BoxSkills({ title, children }) {
  return (
    <div className="boxSkills">
      <h2>{title}</h2>
      <div className="iconSkills">{children}</div>
    </div>
  );
}
