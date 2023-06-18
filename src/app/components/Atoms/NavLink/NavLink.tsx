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
    <div className="flex w-full gap-4 border-b border-b-transparent pb-2 transition-colors hover:border-b-[#EDAE1D] lg:pl-2 lg:pr-4">
      {icon}
      <Link className={"hidden lg:block " + customize} href={href}>
        {text}
      </Link>
    </div>
  );
};

export default NavLink;
