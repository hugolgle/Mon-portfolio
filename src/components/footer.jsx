import "./footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="networks">
        <a
          href="https://github.com/hugolgle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p>© {year} Hugo L, Tous droits réservés.</p>
    </footer>
  );
}
