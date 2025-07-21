import { CardOrders } from "@/components/molecules/card-orders";

export default function Pedidos() {
  return (
    <section className="max-w-4xl mx-auto ">
      <h1 className="text-2xl text-center sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
        Meus Pedidos
      </h1>

      <div>
        <CardOrders />
      </div>
    </section>
  );
}
