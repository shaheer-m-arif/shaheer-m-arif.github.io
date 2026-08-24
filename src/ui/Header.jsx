export default function Header({ name, nav }) {
  return (
    <header>
      <span className="me">{name}</span>
      <nav>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
