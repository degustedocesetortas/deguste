import { icons } from "@/constants/icons";
import { mockItems } from "@/constants/utils";
import { cn } from "@/lib/utils";
import { StatusBadge } from "../atom/status-badge";

export const badgeStatus = {
  delivered: <StatusBadge label="Entregue" />,
  preparing: <StatusBadge label="Preparando" icon="preparing" />,
  pending: <StatusBadge label="Pendente" icon="pending" />,
};

export function CardOrders() {
  const items = mockItems;
  const total = 100;
  const status = "pending";

  return (
    <div className="border border-gray-200 hover:shadow-lg rounded-custom bg-white px-4 py-6 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <h2 className="text-xl ">Pedido #001</h2>
          {badgeStatus[status]}
        </div>
        <span className="text-gray-600 text-sm">14/01/2024 às 14:45</span>
      </div>

      <div className="flex gap-3 mt-7 flex-wrap">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm bg-gray-100 w-fit rounded-md p-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gray-200" />
              <div className="space-x-2">
                <span className="truncate text-[0.9rem] ">{item.name} </span>
                <span className="text-gray-500 text-xs">x{item.quantity}</span>
              </div>
            </div>

            {/* <span className="font-medium text-lg">
              R$ {(item.price * item.quantity).toFixed(2)}
            </span> */}
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      <div className="flex justify-between items-start font-bold text-base sm:text-lg">
        <div>
          <span className="flex items-center gap-2 text-sm font-extralight text-gray-500">
            {icons.store({ size: 16 }).credit}
            PIX
          </span>
          <span className="flex items-center gap-2 text-sm font-extralight text-gray-500">
            {icons.store({ size: 16 }).credit}
            PIX
          </span>
          <span className="flex items-center gap-2 text-sm font-extralight text-gray-500">
            {icons.store({ size: 16 }).credit}
            PIX
          </span>
        </div>
        <div className="flex flex-col items-end">
          {/* <span>Total:</span> */}
          <span className="text-primary text-xl">R$ {total.toFixed(2)}</span>
          <span className="font-extralight text-sm">{items.length} itens</span>
        </div>
      </div>

      <div className="flex gap-3 ">
        {[
          {
            id: 1,
            text: "Ver Detalhes",
          },
          {
            id: 2,
            text: "Pedir Novamente",
            className:
              "bg-primary text-white hover:bg-pink-500 border-transparent",
          },
        ].map((button) => (
          <button
            key={button.id}
            type="button"
            className={cn(
              "border border-gray-300 rounded-md w-full py-2 text-[0.9rem] cursor-pointer hover:bg-gray-100",
              button.className
            )}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
}
