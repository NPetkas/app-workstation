import Nav from "./Nav";

// header and nav import
export default function Header() {
  return (
    <div className="header">
      <aside>WORKSTATION </aside>
      <div className="logo">
        <a href="https://ibb.co/y8pp0Rg">
          <img
            src="https://i.postimg.cc/Fs08q6GT/kisspng-computer-icons-workstation-download-font-macbook-5ad5a371f04397-9483203415239504499841.png"
            alt="img"
            border="0"
          />
        </a>
      </div>
      <Nav />
    </div>
  );
}
