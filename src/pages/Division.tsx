import { Link, Navigate, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, Film, Video, Sparkles, MonitorPlay } from 'lucide-react'
import { divisions, artists, films, books, products, eduSteps, capitalBeliefs, isleConcepts } from '@/data/divisions'
import gmt8Logo from '@/assets/yeju-gmt8-logo.png'
import FilmIntro from '@/components/FilmIntro'

export default function Division() {
  const { slug } = useParams<{ slug: string }>()
  const division = divisions.find((d) => d.slug === slug)

  if (!division) return <Navigate to="/" replace />

  const idx = divisions.findIndex((d) => d.slug === slug)
  const next = divisions[(idx + 1) % divisions.length]

  return (
    <div>
      {/* 东八区开场动画（每个标签页会话播放一次） */}
      {division.slug === 'film' && <FilmIntro />}
      {/* 板块横幅 */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${division.accent} text-white`}>
        {/* 竖排侧边小字 */}
        <span className="absolute bottom-10 right-8 hidden text-[11px] uppercase tracking-[0.3em] text-white/35 [writing-mode:vertical-rl] lg:block">
          {division.slug === 'film' ? 'In Story We Trust · Since GMT+8' : `${division.enName} · Yeju Group`}
        </span>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] tracking-[0.15em] text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> 返回首页
          </Link>
          <div className="mt-12 flex items-end justify-between gap-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#e8c987]">
                {division.enName}
              </p>
              <h1 className="float-text-light mt-4 font-serif text-6xl font-black tracking-[0.1em]">
                {division.slug === 'film' ? (
                  <span className="cine-wrap relative inline-block pr-4">
                    {division.name}
                    <Film
                      className="cine-icon h-5 w-5 text-[#ffd166]"
                      style={{ left: '-2.4rem', top: '-0.4rem', animationDelay: '0s' }}
                    />
                    <Video
                      className="cine-icon h-6 w-6 text-white/85"
                      style={{ right: '-2.2rem', top: '-0.8rem', animationDelay: '0.5s' }}
                    />
                    <Sparkles
                      className="cine-icon h-4 w-4 text-[#ffd166]"
                      style={{ left: '-1.8rem', bottom: '-0.6rem', animationDelay: '1s' }}
                    />
                    <MonitorPlay
                      className="cine-icon h-5 w-5 text-white/85"
                      style={{ right: '-2.6rem', bottom: '-0.4rem', animationDelay: '1.5s' }}
                    />
                  </span>
                ) : (
                  division.name
                )}
              </h1>
              {division.slug === 'film' && (
                <p className="mt-3 text-[11px] tracking-[0.45em] text-white/50">
                  野居传媒与影视事业部
                </p>
              )}
              <p
                className={`mt-6 max-w-2xl text-lg leading-9 tracking-[0.15em] text-white/75 ${
                  division.slug === 'film' ? 'float-text-gold' : 'float-text-light'
                }`}
              >
                {division.tagline}
              </p>
            </div>
            {division.slug === 'film' && (
              <img
                src={gmt8Logo}
                alt="野居东八区 标志"
                className="hidden w-60 shrink-0 rounded-md shadow-2xl ring-1 ring-white/15 md:block"
              />
            )}
          </div>
        </div>
      </section>

      {/* 介绍 */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <h2 className="float-text font-serif text-3xl font-bold tracking-wide">
              关于{division.shortName}
            </h2>
            {division.intro.map((p, i) => (
              <p key={i} className="mt-5 leading-8 text-[#211c14]/70">
                {p}
              </p>
            ))}
          </div>
          <div className="col-span-4">
            <div className="border border-[#211c14]/12 bg-[#fbf7ee] p-9">
              <p className={`float-text font-serif text-5xl font-bold ${division.accentText}`}>
                {division.stats[0].value}
              </p>
              <p className="mt-1 text-sm text-[#211c14]/50">{division.stats[0].label}</p>
              <div className="my-6 border-t border-[#211c14]/10" />
              <div className="grid grid-cols-2 gap-6">
                {division.stats.slice(1).map((s) => (
                  <div key={s.label}>
                    <p className={`float-text font-serif text-2xl font-bold ${division.accentText}`}>
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-[#211c14]/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 业务亮点 */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <h2 className="float-text font-serif text-3xl font-bold tracking-wide">核心业务</h2>
        <div className="mt-6 grid grid-cols-2 gap-5">
          {division.highlights.map((h) => {
            const dark = division.slug === 'film'
            return (
              <div
                key={h.title}
                className={
                  dark
                    ? 'border border-[#b89b5e]/25 bg-[#0c0b09] p-8 transition-shadow hover:shadow-lg'
                    : 'border border-[#211c14]/12 bg-[#fbf7ee] p-8 transition-shadow hover:shadow-lg'
                }
              >
                <h3
                  className={`float-text font-serif text-xl font-bold ${
                    dark ? 'text-[#e8c987]' : division.accentText
                  }`}
                >
                  {h.title}
                </h3>
                <p className={`mt-3 text-sm leading-7 ${dark ? 'text-[#e8e2d5]/65' : 'text-[#211c14]/65'}`}>
                  {h.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 东八区专属：影视作品 + 文学出版 + 创作团队 */}
      {division.slug === 'film' && (
        <>
          <section className="mx-auto max-w-6xl px-6 pt-16">
            <div className="flex items-end justify-between">
              <h2 className="float-text font-serif text-3xl font-bold tracking-wide">影视作品</h2>
              <span className="label-gold">Works</span>
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#211c14]/45">
              影展与完成作品
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-5">
              {films
                .filter((f) => f.status === 'completed')
                .map((f) => (
                  <div
                    key={f.title}
                    className="group overflow-hidden border border-[#211c14]/12 bg-white transition-shadow hover:shadow-lg"
                  >
                    {f.image ? (
                      <div className="overflow-hidden">
                        <img
                          src={f.image}
                          alt={f.title}
                          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-[#2b1a3a] to-[#4a2d61]">
                        <span className="font-serif text-4xl font-bold text-white/25">
                          {f.title.replace(/[《》]/g, '')}
                        </span>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="float-text font-serif text-xl font-bold">{f.title}</h4>
                        <span className="shrink-0 text-xs text-[#211c14]/45">
                          {f.year} · {f.type}
                        </span>
                      </div>
                      <p className="mt-2.5 text-sm leading-6 text-[#211c14]/65">{f.note}</p>
                    </div>
                  </div>
                ))}
            </div>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-[#211c14]/45">
              开发中项目
            </h3>
            <div className="mt-3 divide-y divide-[#211c14]/10 border-y border-[#211c14]/10">
              {films
                .filter((f) => f.status === 'development')
                .map((f) => (
                  <div key={f.title} className="grid grid-cols-12 items-baseline gap-4 py-5">
                    <span className="float-text col-span-3 font-serif text-xl font-bold">
                      {f.title}
                    </span>
                    <span className="col-span-2 text-sm text-[#211c14]/50">{f.year}</span>
                    <span className="col-span-2 text-sm text-[#211c14]/50">{f.type}</span>
                    <span className="col-span-5 text-sm leading-6 text-[#211c14]/65">{f.note}</span>
                  </div>
                ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pt-16">
            <div className="flex items-end justify-between">
              <h2 className="float-text font-serif text-3xl font-bold tracking-wide">文学与出版</h2>
              <span className="label-gold">Books</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {books.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-6 border border-[#211c14]/12 bg-[#fbf7ee] p-6 transition-shadow hover:shadow-lg"
                >
                  {b.image ? (
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-24 shrink-0 self-start border border-[#211c14]/10 object-cover shadow-sm"
                    />
                  ) : (
                    <div className="flex w-24 shrink-0 items-center justify-center self-start border border-[#211c14]/10 bg-gradient-to-br from-[#2b1a3a] to-[#4a2d61] py-16">
                      <span className="px-2 text-center font-serif text-lg font-bold leading-6 text-white/70">
                        {b.title.replace(/[《》]/g, '')}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="float-text font-serif text-lg font-bold">{b.title}</h3>
                    <p className="mt-1 text-xs text-[#211c14]/45">
                      {b.author} · {b.year}
                    </p>
                    <p className="mt-2.5 text-sm leading-6 text-[#211c14]/60">{b.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pt-16">
            <div className="flex items-end justify-between">
              <h2 className="float-text font-serif text-3xl font-bold tracking-wide">创作团队</h2>
              <span className="label-gold">Team</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {artists.map((a) => (
                <div
                  key={a.name}
                  className="flex gap-6 border border-[#b89b5e]/25 bg-[#0c0b09] p-8 transition-shadow hover:shadow-lg"
                >
                  {/* 头像占位：首字印章风 */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-gradient-to-br from-[#2b1a3a] to-[#4a2d61] font-serif text-3xl font-bold text-[#e8c987] ring-1 ring-[#b89b5e]/30">
                    {a.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="float-text font-serif text-xl font-bold text-[#e8c987]">{a.name}</h3>
                      {a.role && (
                        <span className="text-xs tracking-widest text-white/40">{a.role}</span>
                      )}
                    </div>
                    {a.desc && (
                      <p className="mt-2 text-sm leading-6 text-[#e8e2d5]/65">{a.desc}</p>
                    )}
                    {a.works.length > 0 && (
                      <p className="mt-3 text-xs text-white/40">
                        代表作：{a.works.join('、')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* 丰登专属：产品与服务系列 */}
      {division.slug === 'agriculture' && (
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="flex items-end justify-between">
            <h2 className="float-text font-serif text-3xl font-bold tracking-wide">产品与服务系列</h2>
            <span className="label-gold">Collection</span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-5">
            {products.map((p) => (
              <div
                key={p.title}
                className="border border-[#211c14]/12 bg-[#fbf7ee] p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="float-text font-serif text-xl font-bold">{p.title}</h3>
                  <span
                    className={`px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white ${p.chip}`}
                  >
                    {p.en}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#211c14]/65">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-[#5d7428] pl-4 text-sm leading-7 text-[#211c14]/55">
            品牌视觉以茶枝与果实为母题，呼应「丰收」与「馈赠」——把农产品当作体面、可讲述的礼物来做。
          </p>
        </section>
      )}

      {/* 幻屿专属：岛屿意象 */}
      {division.slug === 'game' && (
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="flex items-end justify-between">
            <h2 className="float-text font-serif text-3xl font-bold tracking-wide">幻屿意象</h2>
            <span className="label-gold">Concept</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-5">
            {isleConcepts.map((c) => (
              <div
                key={c.title}
                className={`bg-gradient-to-br ${c.gradient} p-8 text-white transition-transform duration-300 hover:-translate-y-1`}
              >
                <span className="font-serif text-5xl font-bold text-white/25">{c.title}</span>
                <p className="mt-8 text-sm leading-7 text-white/80">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-[#1e6076] pl-4 text-sm leading-7 text-[#211c14]/55">
            以人工智能模型制作游戏，探索更轻盈的游戏创作方式，以及令人愉悦的互动世界。
          </p>
        </section>
      )}

      {/* 渡岸专属：服务流程 */}
      {division.slug === 'education' && (
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="flex items-end justify-between">
            <h2 className="float-text font-serif text-3xl font-bold tracking-wide">服务流程</h2>
            <span className="label-gold">Process</span>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-5">
            {eduSteps.map((s) => (
              <div
                key={s.no}
                className="border border-[#211c14]/12 bg-[#fbf7ee] p-8 transition-shadow hover:shadow-lg"
              >
                <span className={`font-serif text-3xl font-bold ${division.accentText}`}>{s.no}</span>
                <h3 className="float-text mt-4 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[#211c14]/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 资本专属：投资理念 */}
      {division.slug === 'capital' && (
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="flex items-end justify-between">
            <h2 className="float-text font-serif text-3xl font-bold tracking-wide">投资理念</h2>
            <span className="label-gold">Philosophy</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-5">
            {capitalBeliefs.map((b) => (
              <div
                key={b.title}
                className="border border-[#211c14]/12 bg-[#fbf7ee] p-9 transition-shadow hover:shadow-lg"
              >
                <h3 className={`float-text font-serif text-xl font-bold ${division.accentText}`}>
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#211c14]/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 底部导航：下一个板块 */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Link
          to={`/${next.slug}`}
          className="group flex items-center justify-between border border-[#211c14]/15 bg-white px-8 py-6 transition-shadow hover:shadow-lg"
        >
          <div>
            <p className="label-gold">下一个板块 · Next</p>
            <p className="float-text mt-1 font-serif text-2xl font-bold">{next.name}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-[#211c14]/40 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#211c14] px-7 py-3 text-sm tracking-widest text-[#f6f1e8] transition-opacity hover:opacity-85"
          >
            与{division.shortName}洽谈合作 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
