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

  // 核心业务板块（东八区排在作品与艺术家之后，其余板块保持原位）
  const businessSection = (
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
                  : 'border border-[#b89b5e]/20 bg-[#131109] p-8 transition-shadow hover:shadow-lg'
              }
            >
              <h3
                className={`float-text font-serif text-xl font-bold ${
                  dark ? 'text-[#e8c987]' : 'text-[#e8c987]'
                }`}
              >
                {h.title}
              </h3>
              <p className={`mt-3 text-sm leading-7 ${dark ? 'text-[#e8e2d5]/65' : 'text-[#e8e2d5]/65'}`}>
                {h.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )

  return (
    <div>
      {/* 东八区开场动画（每个标签页会话播放一次） */}
      {division.slug === 'film' && <FilmIntro />}
      {/* 板块横幅 */}
      <section className="relative overflow-hidden bg-[#0c0b09] text-[#e8e2d5]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 60% at 78% 18%, rgba(184,155,94,0.12), transparent 60%), radial-gradient(ellipse 50% 45% at 12% 88%, rgba(184,155,94,0.06), transparent 60%)',
          }}
        />
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
            {division.slug === 'film' && (
              <>
                <p className="float-text mt-5 font-serif text-xl leading-9 tracking-[0.12em] text-[#e8c987]">
                  「在电影艺术的旷野中，寻找灵魂与故事的寄居地」
                </p>
                <div className="mt-4 flex gap-3">
                  {['审美力', '原创性'].map((k) => (
                    <span
                      key={k}
                      className="border border-[#b89b5e]/40 px-3 py-1 text-[11px] tracking-[0.3em] text-[#e8c987]"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </>
            )}
            {division.intro.map((p, i) => (
              <p key={i} className="mt-5 leading-8 text-[#e8e2d5]/70">
                {p}
              </p>
            ))}
          </div>
          <div className="col-span-4">
            <div className="border border-[#b89b5e]/20 bg-[#131109] p-9">
              <p className={`float-text font-serif text-5xl font-bold text-[#e8c987]`}>
                {division.stats[0].value}
              </p>
              <p className="mt-1 text-sm text-[#e8e2d5]/50">{division.stats[0].label}</p>
              <div className="my-6 border-t border-[#b89b5e]/15" />
              <div className="grid grid-cols-2 gap-6">
                {division.stats.slice(1).map((s) => (
                  <div key={s.label}>
                    <p className={`float-text font-serif text-2xl font-bold text-[#e8c987]`}>
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-[#e8e2d5]/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 业务亮点（非东八区板块保持原位） */}
      {division.slug !== 'film' && businessSection}

      {/* 东八区专属：影视作品 + 文学出版 + 创作团队 */}
      {division.slug === 'film' && (
        <>
          <section className="mx-auto max-w-6xl px-6 pt-16">
            <div className="flex items-end justify-between">
              <h2 className="float-text font-serif text-3xl font-bold tracking-wide">影视作品</h2>
              <span className="label-gold">Works</span>
            </div>

            {(() => {
              const [featured, ...rest] = films.filter((f) => f.status === 'completed')
              return (
                <>
                  {/* 首映特写：聚光灯式大图 */}
                  {featured && (
                    <div className="group relative mt-8 overflow-hidden border border-[#b89b5e]/30 transition-shadow duration-500 hover:shadow-[0_0_70px_rgba(184,155,94,0.15)]">
                      {featured.image ? (
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="aspect-[21/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex aspect-[21/9] w-full items-center justify-center bg-gradient-to-br from-[#16140f] to-[#2a2620]">
                          <span className="font-serif text-6xl font-bold text-[#b89b5e]/30">
                            {featured.title.replace(/[《》]/g, '')}
                          </span>
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-[#0c0b09]/55 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-9">
                        <span className="label-gold-light">影展与完成作品 · Featured</span>
                        <h3 className="float-text mt-3 font-serif text-4xl font-black tracking-[0.1em] text-[#e8c987]">
                          {featured.title}
                        </h3>
                        <p className="mt-1.5 text-xs tracking-[0.3em] text-white/50">
                          {featured.year} · {featured.type}
                        </p>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#e8e2d5]/75">
                          {featured.note}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 其余完成作品：双列画廊 */}
                  {rest.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-5">
                      {rest.map((f) => (
                        <div
                          key={f.title}
                          className="group overflow-hidden border border-[#b89b5e]/20 bg-[#131109] transition-all duration-300 hover:border-[#b89b5e]/45 hover:shadow-[0_0_50px_rgba(184,155,94,0.12)]"
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
                            <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-[#16140f] to-[#2a2620]">
                              <span className="font-serif text-4xl font-bold text-[#b89b5e]/30">
                                {f.title.replace(/[《》]/g, '')}
                              </span>
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex items-baseline justify-between gap-3">
                              <h4 className="float-text font-serif text-xl font-bold text-[#e8c987]">{f.title}</h4>
                              <span className="shrink-0 text-xs text-[#e8e2d5]/45">
                                {f.year} · {f.type}
                              </span>
                            </div>
                            <p className="mt-2.5 text-sm leading-6 text-[#e8e2d5]/65">{f.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )
            })()}

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-[#e8e2d5]/45">
              开发中项目 · In Development
            </h3>
            <div className="mt-3 divide-y divide-[#b89b5e]/15 border-y border-[#b89b5e]/15">
              {films
                .filter((f) => f.status === 'development')
                .map((f, i) => (
                  <div
                    key={f.title}
                    className="grid grid-cols-12 items-baseline gap-4 px-3 py-5 transition-colors hover:bg-[#b89b5e]/5"
                  >
                    <span className="font-latin col-span-1 text-sm italic text-[#b89b5e]/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="float-text col-span-3 font-serif text-xl font-bold">
                      {f.title}
                    </span>
                    <span className="col-span-2 text-sm text-[#e8e2d5]/50">{f.year}</span>
                    <span className="col-span-2 text-sm text-[#e8e2d5]/50">{f.type}</span>
                    <span className="col-span-4 text-sm leading-6 text-[#e8e2d5]/65">{f.note}</span>
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
                  className="flex gap-6 border border-[#b89b5e]/20 bg-[#131109] p-6 transition-shadow hover:shadow-lg"
                >
                  {b.image ? (
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-24 shrink-0 self-start border border-[#b89b5e]/15 object-cover shadow-sm"
                    />
                  ) : (
                    <div className="flex w-24 shrink-0 items-center justify-center self-start border border-[#b89b5e]/15 bg-gradient-to-br from-[#16140f] to-[#2a2620] py-16">
                      <span className="px-2 text-center font-serif text-lg font-bold leading-6 text-white/70">
                        {b.title.replace(/[《》]/g, '')}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="float-text font-serif text-lg font-bold">{b.title}</h3>
                    <p className="mt-1 text-xs text-[#e8e2d5]/45">
                      {b.author} · {b.year}
                    </p>
                    <p className="mt-2.5 text-sm leading-6 text-[#e8e2d5]/60">{b.note}</p>
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
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-gradient-to-br from-[#16140f] to-[#2a2620] font-serif text-3xl font-bold text-[#e8c987] ring-1 ring-[#b89b5e]/30">
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

          {/* 业务其次：核心业务置于作品与艺术家之后 */}
          {businessSection}
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
                className="border border-[#b89b5e]/20 bg-[#131109] p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="float-text font-serif text-xl font-bold">{p.title}</h3>
                  <span
                    className="bg-[#0c0b09] px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-[#b89b5e]"
                  >
                    {p.en}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#e8e2d5]/65">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-[#5d7428] pl-4 text-sm leading-7 text-[#e8e2d5]/55">
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
                className="border border-[#b89b5e]/20 bg-[#0c0b09] p-8 text-[#e8e2d5] transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b5e]/50"
              >
                <span className="font-serif text-5xl font-bold text-[#b89b5e]/30">{c.title}</span>
                <p className="mt-8 text-sm leading-7 text-[#e8e2d5]/65">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-[#1e6076] pl-4 text-sm leading-7 text-[#e8e2d5]/55">
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
                className="border border-[#b89b5e]/20 bg-[#131109] p-8 transition-shadow hover:shadow-lg"
              >
                <span className={`font-serif text-3xl font-bold text-[#e8c987]`}>{s.no}</span>
                <h3 className="float-text mt-4 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[#e8e2d5]/65">{s.desc}</p>
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
                className="border border-[#b89b5e]/20 bg-[#131109] p-9 transition-shadow hover:shadow-lg"
              >
                <h3 className={`float-text font-serif text-xl font-bold text-[#e8c987]`}>
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#e8e2d5]/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 底部导航：下一个板块 */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Link
          to={`/${next.slug}`}
          className="group flex items-center justify-between border border-[#b89b5e]/25 bg-[#131109] px-8 py-6 transition-shadow hover:shadow-lg"
        >
          <div>
            <p className="label-gold">下一个板块 · Next</p>
            <p className="float-text mt-1 font-serif text-2xl font-bold">{next.name}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-[#e8e2d5]/40 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#b89b5e] px-7 py-3 text-[13px] tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e8c987]"
          >
            与{division.shortName}洽谈合作 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
