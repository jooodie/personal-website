import ImageCarousel from './ImageCarousel'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-28"
    >
      <div className="grid animate-slide-up items-center gap-12 lg:grid-cols-[1.1fr_auto] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
            Digital Portfolio
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Yung-Ling Chu
            <span className="mt-2 block text-gradient">朱詠翎</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-slate-700 sm:text-xl">
            AI Algorithm Engineer &amp; Former Athlete
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
            帶著運動員的強韌心態，在程式碼與演算法的世界裡全力揮拍。
          </p>

          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors duration-300 hover:text-teal-700"
            >
              向下探索
              <span className="inline-block animate-bounce">↓</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ImageCarousel />
        </div>
      </div>
    </section>
  )
}
