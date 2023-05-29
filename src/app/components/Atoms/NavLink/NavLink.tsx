"use client";
"use client";
import Link from "next/link";

interface INavLink {
  text: string;
  href: string;
  icon: JSX.Element;
}

const NavLink: React.FC<INavLink> = (props: INavLink) => {
  const { text, href, icon } = props;
  return (
    <div className="flex items-center gap-4">
      {icon} <Link href={href}>{text}</Link>
    </div>
  );
};

export default NavLink;
