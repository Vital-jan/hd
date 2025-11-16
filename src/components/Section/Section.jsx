export default function Section({
  id = "",
  className = "",
  title = "",
  html = null,
}) {
  return (
    <>
      <section id={id} className={`section ${className}`}>
        <h2 className="section-title">{title}</h2>
        {html}
      </section>
    </>
  );
}
