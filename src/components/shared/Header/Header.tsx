import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <section className="header__wrap">
        <p className="header__txt header__txt--logo">
          Empty Homes Action Group
        </p>
        <p className="header__txt header__txt--platform">
          Data & Information Platform
        </p>
      </section>
    </header>
  );
}
