export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading reveal-up">
      <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" />{eyebrow}</p>
      <h2 className="section-title" id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
