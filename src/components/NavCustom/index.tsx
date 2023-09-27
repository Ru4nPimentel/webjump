import Link from "next/link";

type ListProps = {
  text: string;
  link: string;
};

type NavProps = React.ComponentProps<"nav"> & {
  list: ListProps[];
};

const NavCustom = ({ list, className, ...pros }: NavProps) => {
  return (
    <nav className={className} {...pros}>
      <ul>
        {list.map(({ text, link }, index) => {
          return (
            <li key={index}>
              <Link href={link}>
                <span>{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavCustom;
