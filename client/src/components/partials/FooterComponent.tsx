export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          Droits d'auteur &copy; { new Date().getFullYear() } par Nourdine Kientega | Tous droits
          réservés.
        </p>
      </div>
      <div className="scroll-to-top">
        <a href="#hero">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};
