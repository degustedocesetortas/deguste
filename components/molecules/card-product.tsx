import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants/icons";

const productStatus = {
  new: () => (
    <span className="bg-green-500 text-white rounded-lg px-2 text-sm py-1">
      NOVO
    </span>
  ),
  out: () => (
    <span className="bg-red-500 text-white rounded-lg px-2 text-sm py-1">
      ESGOTADO
    </span>
  ),
  default: () => null,
};

export function CardProduct({
  status,
}: {
  status?: keyof typeof productStatus;
}) {
  const StatusComponent = status
    ? productStatus[status]
    : productStatus.default;

  return (
    <div
      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-custom shadow-lg 
      `}
    >
      <div className="bg-gray-500 overflow-hidden relative">
        <div className="absolute top-3 left-2">{StatusComponent()}</div>
        <div>
          <Image
            src={"https://via.placeholder.com/300"}
            width={500}
            height={500}
            alt={"oi"}
            className={`w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 
            `}
          />
        </div>

        <div className="text-center translate-y-9 group-hover:-translate-y-3 duration-300 delay-150 transition-all">
          <Link
            href={"algo"}
            className="flex w-fit mx-auto bg-white rounded-full px-4 py-1 text-md cursor-pointer"
          >
            <button
              type="button"
              className="flex gap-3 items-center cursor-pointer"
            >
              {icons.default({ size: 16 }).eye} Ver Detalhes
            </button>
          </Link>
        </div>
      </div>

      <div className="p-5 space-y-10 relative z-20">
        <div className="space-y-3">
          <span className="bg-secondary rounded-full px-2 py-1 text-primary font-semibold text-[0.8rem] block w-fit">
            Brigadeiros
          </span>
          <h2 className="font-bold text-xl">Brigadeiro Gourmet</h2>
          <p className="text-gray-500">
            Delicioso brigadeiro artesanal feito com chocolate belga
          </p>

          <div className="space-x-3 flex items-center">
            <strong className="text-primary font-bold text-2xl">R$ 3.50</strong>
            <span className="text-gray-500 line-through">R$ 4.00</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-sm font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {icons.default({ size: 18 }).plus} Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
