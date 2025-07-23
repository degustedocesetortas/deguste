import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants/icons";

const mockItems = [
  {
    id: "1",
    name: "Brigadeiro Gourmet",
    image: "/images/brigadeiro.jpg",
    price: 4.5,
    quantity: 3,
  },
  {
    id: "2",
    name: "Beijinho Tradicional",
    image: "/images/beijinho.jpg",
    price: 4.0,
    quantity: 2,
  },
];

export default function Carrinho() {
  const items = mockItems;
  const total = 100;

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-8 sm:py-12 px-4">
        {
          icons.store({
            className: "h-16 sm:h-24 w-16 sm:w-24 text-gray-300 mx-auto mb-4",
          }).bag
        }
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Seu carrinho está vazio
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Adicione alguns doces deliciosos ao seu carrinho!
        </p>
        <Link href="/">
          <button
            type="button"
            className="bg-primary hover:bg-primary/70 px-3 py-2 rounded-lg text-white cursor-pointer"
          >
            Continuar Comprando
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-2xl  sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
        Meu Carrinho
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-custom border border-gray-200"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mx-auto sm:mx-0"
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <button
                      type="button"
                      className="h-8 w-8 sm:h-10 sm:w-10 border rounded-md border-gray-200 cursor-pointer hover:bg-gray-100"
                    >
                      {
                        icons.default({
                          className: "h-3 w-3 sm:h-4 sm:w-4 mx-auto",
                        }).minus
                      }
                    </button>

                    <input
                      type="number"
                      value={item.quantity}
                      className="w-12 sm:w-16 text-center text-sm border rounded-md border-gray-200"
                      min="0"
                    />

                    <button
                      type="button"
                      className="h-8 w-8 sm:h-10 sm:w-10 border rounded-md border-gray-200 cursor-pointer hover:bg-gray-100"
                    >
                      {
                        icons.default({
                          className: "h-3 w-3 sm:h-4 sm:w-4 mx-auto",
                        }).plus
                      }
                    </button>
                  </div>

                  <button
                    type="button"
                    className="text-red-500 cursor-pointer hover:text-red-700 h-8 w-8 sm:h-10 sm:w-10 hover:bg-gray-100 rounded-md"
                  >
                    {
                      icons.default({
                        className: "h-3 w-3 sm:h-4 sm:w-4 mx-auto",
                      }).trash
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              className="w-full sm:w-auto bg-transparent border border-gray-300 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              Limpar Carrinho
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto border border-gray-300 p-2 rounded-md cursor-pointer hover:bg-gray-100 "
            >
              <button
                type="button"
                className="w-full bg-transparent cursor-pointer"
              >
                Continuar Comprando
              </button>
            </Link>
          </div>
        </div>

        <div className="order-first lg:order-last bg-white rounded-custom border border-gray-200 h-fit p-5">
          <div className="sticky top-24">
            <div>
              <div className="text-lg sm:text-xl">
                <span className="font-bold block mb-5">Resumo do Pedido</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="truncate mr-2">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-gray-200" />

              <div className="flex justify-between font-bold text-base sm:text-lg">
                <span>Total:</span>
                <span className="text-primary">R$ {total.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="w-full bg-primary hover:bg-primary/90 rounded-lg  py-3 cursor-pointer text-white"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
