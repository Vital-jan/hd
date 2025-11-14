import img_logo from "@/assets/img/holydrivers_logo.png";
import img_home from "@/assets/img/home.png";

export default function Header({
  showHome = true,
  title = "Приватний автоінструктор",
  subtitle = "автоматична коробка передач",
  homeHref = "/",
  className = "",
}) {
  return (
    <header className={className}>
      <img
        src={img_logo} // поклади лого в public/img/
        alt="Логотип HolyDrivers"
        className="logo"
      />

      <h1>
        {title} <br />
        <span style={{ fontSize: "0.6em" }}>{subtitle}</span>
      </h1>

      {showHome && (
        <div className="home">
          <a href={homeHref}>
            <img
              src={img_home} // іконку теж у public/img/
              alt="На головну сторінку приватний автоінсруктор Теремки"
            />
            <span>На головну</span>
          </a>
        </div>
      )}
    </header>
  );
}
