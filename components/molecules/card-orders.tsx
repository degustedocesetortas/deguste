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

export function CardOrders() {
  const items = mockItems;
  const total = 100;

  return (
    <div className="border border-gray-300 rounded-custom bg-white p-4 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold ">Pedido #001</h2>
        <span>14/01/2024</span>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="truncate mr-2 text-lg">
              {item.name}{" "}
              <span className="text-gray-500">x{item.quantity}</span>
            </span>
            <span className="font-medium text-lg">
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
    </div>
  );
}
