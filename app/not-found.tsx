import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" flex items-center justify-center min-h-screen">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-white overflow-hidden mb-8">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-8xl sm:text-9xl md:text-[12rem] font-bold mb-4 text-pink-200 opacity-90">
              404
            </div>

            <div className="text-6xl sm:text-7xl mb-6">🍰😢</div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ops! Esta página sumiu como um doce!
            </h1>

            <p className="text-base sm:text-lg text-pink-100 mb-8">
              Parece que a página que você está procurando não existe ou foi
              movida. Que tal voltar para nossa deliciosa vitrine?
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🔍 Página não encontrada
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🏠 Volte ao início
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="bg-white text-pink-600 hover:text-pink-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                🏠 Voltar ao Início
              </Link>

              <Link
                href="/"
                className="bg-pink-700 hover:bg-pink-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border-2 border-white/30"
              >
                🍯 Ver Produtos
              </Link>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-rose-300/30 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
