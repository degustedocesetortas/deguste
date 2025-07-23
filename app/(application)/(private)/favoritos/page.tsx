import { CardProduct } from "@/components/molecules/card-product";
import { FiltersHome } from "@/components/organism/filters-home";
import { icons } from "@/constants/icons";
import { cn } from "@/lib/utils";

export default function Favoritos() {
  return (
    <section className="space-y-10 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl  sm:text-3xl font-bold text-primary">
            Meus Favoritos
          </h1>
          <span className="text-gray-600/80">5 produtos salvos</span>
        </div>

        <div className="flex gap-3 items-center">
          {[
            {
              id: 1,
              text: "Adicionar Disponíveis ao Carrinho",
              icon: icons.store({ size: 18 }).cart,
              className:
                "bg-primary text-white hover:bg-pink-500 border-transparent",
            },
            {
              id: 2,
              text: "Limpar Favoritos",
              icon: icons.default({ size: 18 }).trash,
            },
          ].map((button) => (
            <button
              key={button.id}
              type="button"
              className={cn(
                "flex items-center gap-4 text-sm border rounded-md border-gray-300 px-3 py-2 hover:bg-gray-100 cursor-pointer",

                button.className
              )}
            >
              {button.icon} {button.text}
            </button>
          ))}
        </div>
      </div>

      <div>
        <FiltersHome />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <CardProduct status="new" />
        <CardProduct status="new" />
        <CardProduct status="new" />
        <CardProduct />
        <CardProduct />
        <CardProduct status="out" />
      </div>
    </section>
  );
}
