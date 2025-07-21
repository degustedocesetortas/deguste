import { Pencil } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/db/supabase/server";

interface IUser {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  sub: string;
}

export default async function Perfil() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login?redirect=/perfil");
  }

  const defaultUser: IUser = {
    avatar_url: "",
    email: "",
    email_verified: false,
    full_name: "Usuário Desconhecido",
    iss: "",
    name: "",
    phone_verified: false,
    picture: "",
    provider_id: "",
    sub: "",
  };

  let user: IUser = defaultUser;

  if (data.user.user_metadata) {
    user = data.user.user_metadata as IUser;
  } else {
    const nomeAntesDoArroba = data.user.email!.split("@")[0];
    user = {
      ...defaultUser,
      email: data.user.email!,
      avatar_url:
        "https://ui-avatars.com/api/?name=Usuário+Desconhecido&background=random",
      full_name: nomeAntesDoArroba,
    };
  }
  // console.log(data);
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-2xl text-center sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
        Meu Perfil
      </h1>

      <div className="border border-primary/30 rounded-custom  bg-white p-5 mt-5  space-y-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="rounded-full">
            <Image
              src={
                "https://ui-avatars.com/api/?name=Usuário+Desconhecido&background=random"
              }
              alt={`Foto de ${user.full_name}`}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <h2 className="font-bold text-2xl">{user.full_name}</h2>
        </div>

        <div className="text-left space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl">Informações Pessoais</h3>
            <span className="text-primary flex items-center gap-2 cursor-pointer">
              <Pencil size={18} /> Editar
            </span>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Nome:</span> {user.full_name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
