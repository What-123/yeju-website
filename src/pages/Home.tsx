import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, Landmark, Sprout, Clapperboard, Gamepad2, GraduationCap } from 'lucide-react'
import { divisions, milestones } from '@/data/divisions'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  landmark: Landmark,
  sprout: Sprout,
  clapperboard: Clapperboard,
  'gamepad-2': Gamepad2,
  'graduation-cap': GraduationCap,
}

export default function Home() {
  return (
    <div>
      {/* 首屏 */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 15%, rgba(176,106,40,0.10), transparent 45%), radial-gradient(circle at 10% 85%, rgba(184,155,94,0.06), transparent 40%)',
          }}
        />
        {/* 竖排侧边小字 */}
        <span className="vert-label absolute bottom-24 right-8 hidden lg:block">
          Est. 2014 · 旷野有居，心怀丰登
        </span>
        <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-24">
          <p className="label-gold">Yeju Group · A House of Ventures</p>
          <h1 className="mt-8 max-w-[14ch] font-serif text-[clamp(44px,7vw,88px)] font-black leading-[1.15] tracking-wide">
            旷野有居
            <span className="mx-5 align-middle font-serif text-[0.45em] font-medium text-white/20">/</span>
            心怀丰登
          </h1>
          <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.9] text-[#e8e2d5]/65">
            野居集团是一家多元业务控股集团，旗下拥有野居东八区、野居丰登、野居幻屿、野居渡岸与野居资本五大板块——
            从影像、田野、幻屿到渡岸，我们以长期主义经营每一种事业。
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#b89b5e] px-8 py-3.5 text-[13px] tracking-[0.2em] text-[#0c0b09] transition-all hover:bg-[#e8c987]"
            >
              商务合作 <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#divisions"
              className="inline-flex items-center gap-2 border border-[#b89b5e]/40 px-8 py-3.5 text-[13px] tracking-[0.2em] transition-colors hover:border-[#e8c987] hover:text-[#e8c987]"
            >
              了解五大板块
            </a>
          </div>
        </div>
      </section>

      {/* 五大板块 */}
      <section id="divisions" className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-4xl font-bold tracking-wide">五大业务板块</h2>
          <span className="label-gold">Divisions</span>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5">
          {divisions.map((d, i) => {
            const Icon = iconMap[d.icon]
            return (
              <Link
                key={d.slug}
                to={`/${d.slug}`}
                className="group relative overflow-hidden border border-[#b89b5e]/20 bg-[#0c0b09] p-10 text-[#e8e2d5] transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b5e]/50"
              >
                <span className="absolute right-7 top-6 font-latin text-6xl italic text-[#b89b5e]/25">
                  0{i + 1}
                </span>
                <Icon className="h-7 w-7 text-[#b89b5e]" />
                <p className="mt-12 text-[10px] uppercase tracking-[0.35em] text-[#b89b5e]/70">
                  {d.enName}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-bold tracking-[0.15em]">{d.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#e8e2d5]/60">{d.tagline}</p>
                <span className="mt-7 inline-flex items-center gap-1 text-[13px] tracking-[0.2em] text-[#b89b5e]">
                  查看详情
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 集团沿革 */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-4xl font-bold tracking-wide">集团沿革</h2>
          <span className="label-gold">Milestones</span>
        </div>
        <div className="mt-10 border-l border-[#b89b5e]/20">
          {milestones.map((m) => (
            <div key={m.year} className="relative flex items-baseline gap-10 py-5 pl-10">
              <span className="absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full bg-[#b06a28]" />
              <span className="w-16 shrink-0 font-latin text-2xl italic text-[#e8c987]">{m.year}</span>
              <span className="text-[15px] text-[#e8e2d5]/65">{m.event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 理念 */}
      <section className="mt-24 bg-[#0c0b09] py-24 text-[#e8e2d5]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="label-gold-light">Philosophy · 野居信条</p>
          <p className="mt-8 max-w-3xl font-serif text-[clamp(26px,3.2vw,38px)] font-bold leading-[1.7] tracking-wide">
            「野」是未经修饰的真实，「居」是安放理想的所在。
            我们投资真实的事业，耕耘真实的土地，讲述真实的故事，回报真实的人间。
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-2 border border-[#b89b5e]/40 px-8 py-3.5 text-[13px] tracking-[0.2em] transition-colors hover:bg-[#b89b5e] hover:text-[#0c0b09]"
          >
            与野居同行 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
