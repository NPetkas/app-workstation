import Nav from "./Nav";

// header and nav import
export default function Header() {
  return (
    <div className="header">
      <aside>WORKSTATION </aside>
      <div className="logo">
        <a href="https://ibb.co/y8pp0Rg">
          <img
            src="https://i.ibb.co/LCrrSP9/kisspng-computer-icons-workstation-download-font-macbook-5ad5a371f04397-9483203415239504499841.jpg"
            alt="kisspng-computer-icons-workstation-download-font-macbook-5ad5a371f04397-9483203415239504499841"
            border="0"
          />
        </a>
      </div>
      <Nav />
    </div>
  );
}
