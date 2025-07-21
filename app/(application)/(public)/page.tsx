import { CardProduct } from "@/components/molecules/card-product";
import { FiltersHome } from "@/components/organism/filters-home";

export default async function Home() {
  return (
    <section className=" space-y-10">
      <div className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Bem-vindo à <span className="text-pink-200">Deguste!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-pink-100">
            Os melhores doces artesanais para adoçar seu dia ✨
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              🍰 Feitos com amor
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              🚚 Entrega rápida
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              ⭐ Mais de 500 avaliações
            </div>
          </div>
        </div>
        {/* <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-rose-300/30 rounded-full blur-2xl"></div> */}
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
