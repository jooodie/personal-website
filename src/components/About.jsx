const techStack = ['React', 'Tailwind', 'Docker', 'PyTorch', 'Git']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 animate-fade-in">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
          About Me
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          關於我
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-stone-600 sm:text-lg">
          <p>
            我是朱詠翎，一位從競技羽球選手轉型為 AI 演算法工程師的開發者。
            球場上無數次對決與復原的歷程，鍛鍊出超強抗壓性，以及面對難題絕不妥協的執著。
          </p>
          <p>
            退役後，我把同樣的節奏感與紀律帶進程式與演算法的世界——從模型訓練、系統部署到前端呈現，
            我習慣先釐清問題本質，再以可驗證的方式一步步推進。
          </p>
          <p>
            對我來說，寫程式就像比賽：每一次迭代都是一拍，目標是在壓力下仍能穩定出手、持續進步。
          </p>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium text-stone-500">技術標籤牆</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                style={{ animationDelay: `${index * 80}ms` }}
                className="animate-slide-up rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-amber-50/40 p-6">
            <p className="text-sm leading-relaxed text-stone-600">
              「比賽教會我：結果來自每一次專注的練習。寫 code 也是一樣——
              把複雜問題拆解，然後一拍一拍打回去。」
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
