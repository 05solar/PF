type FooterProps = {
  name: string;
  login: string;
};

export function Footer({ name, login }: FooterProps) {
  return (
    <footer className="footer">
      © 2026 {name} · Built with live GitHub data · @{login}
    </footer>
  );
}
