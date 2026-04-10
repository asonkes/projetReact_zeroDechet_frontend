export const NavItem = (props) => {
  const { text, href, className = "" } = props;

  return (
    <li className={`p-3 ${className}`}>
      <a
        href={href}
        className={`font-borel text-xl text-primary-600 ${className}`}
      >
        {text}
      </a>
    </li>
  );
};
