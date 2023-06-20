"use client";
import Link from "next/link";

interface INavLink {
  text?: string;
  href: string;
  icon: JSX.Element;
  customize?: string;
}

const NavLink: React.FC<INavLink> = (props: INavLink) => {
  const { text, href, icon, customize } = props;
  return (
    <div className="w-full border-b border-b-transparent pb-2 transition-colors hover:border-b-[#EDAE1D] xl:pl-2 xl:pr-4">
      <Link
        className={"hidden items-center gap-4 md:flex " + customize}
        href={href}
      >
        {icon}
        <div className="hidden xl:block">{text}</div>
      </Link>
    </div>
  );
};

export default NavLink;
