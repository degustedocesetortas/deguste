import Link from "next/link";
import type { ReactElement } from "react";
import { logout } from "@/app/(auth)/actions";
import { icons } from "@/constants/icons";
import { links } from "@/constants/nav";
import type { ILinks } from "@/constants/type";
import { createClient } from "@/utils/db/supabase/server";
import { ActiveLink } from "../atom/active-link";

interface IAction {
  href: string;
  title: string;
  icon: ReactElement<any, any>;
}

const actions: IAction[] = [
  {
    icon: icons.default({ size: 20 }).user,
    href: "/perfil",
    title: "perfil",
  },
  {
    icon: icons.store({ size: 20 }).cart,
    href: "carrinho",
    title: "carrinho",
  },
];

export async function NavBar() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className=" bg-white w-full py-5 shadow-sm border-b border-pink-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="min-w-24">
          <Link href={"/"}>Deguste</Link>
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            {links.map((link: ILinks) => (
              <li key={link.key}>
                <ActiveLink href={link.href}>{link.name}</ActiveLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          {actions.map((action) => (
            <Link
              key={action.title}
              className=" h-full w-full flex items-center p-2  hover:bg-gray-300 rounded-md"
              href={action.href}
            >
              <button type="button">{action.icon}</button>
            </Link>
          ))}

          <form className="flex items-center">
            {data.user ? (
              <button
                type="submit"
                formAction={logout}
                className="hover:bg-gray-300 rounded-md p-2 cursor-pointer"
              >
                {
                  icons.default({
                    size: 20,
                  }).logout
                }
              </button>
            ) : (
              <Link href={"/login"}>
                <button type="button">Login</button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
