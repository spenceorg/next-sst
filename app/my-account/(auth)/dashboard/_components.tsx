export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0.5rem",
      }}
    >
      {children}
    </section>
  );
};

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow: "1px 1px 5px black",
        background: "white",
        padding: "1rem",
      }}
    >
      <div style={{ color: "orange", fontSize: "18px" }}>
        <strong>{title}</strong>
      </div>
      <p style={{ color: "black", fontSize: "14px" }}>{description}</p>
    </div>
  );
};
