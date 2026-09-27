import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { Landmark, Sprout, Clapperboard, Gamepad2, GraduationCap, ArrowUpRight } from 'lucide-react'
import { divisions } from '@/data/divisions'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  landmark: Landmark,
  sprout: Sprout,
  clapperboard: Clapperboard,
  'gamepad-2': Gamepad2,
  'graduation-cap': GraduationCap,
}

const navLinks = [
  { to: '/', label: '首页' },
  ...divisions.map((d) => ({ to: `/${d.slug}`, label: d.name })),
  { to: '/contact', label: '联系我们' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0c0b09] text-[#e8e2d5] antialiased">
      <ScrollToTop />
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 border-b border-[#b89b5e]/15 bg-[#0c0b09]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-baseline gap-2.5">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#f5f2ec]">野居</span>
            <span className="h-3 w-px bg-[#b89b5e]/60" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89b5e]/70">
              Yeju Group
            </span>
          </Link>
          <nav className="flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.15em] transition-colors ${
                    isActive
                      ? 'font-medium text-[#b89b5e]'
                      : 'text-[#f5f2ec]/55 hover:text-[#f5f2ec]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* 页脚 */}
      <footer className="mt-24 border-t border-[#b06a28]/25 bg-[#0c0b09] text-[#e8e2d5]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-3xl font-bold tracking-[0.25em]">野居</span>
                <span className="h-3.5 w-px bg-[#b89b5e]/60" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#b89b5e]/70">
                  Yeju Group
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#e8e2d5]/55">
                以影像、田野、幻屿与渡岸，构筑一处安放理想生活的「野居」。五大板块彼此滋养，共同生长。
              </p>
            </div>
            <div className="col-span-4">
              <p className="label-gold-light">业务板块 · Divisions</p>
              <ul className="mt-4 space-y-3">
                {divisions.map((d) => {
                  const Icon = iconMap[d.icon]
                  return (
                    <li key={d.slug}>
                      <Link
                        to={`/${d.slug}`}
                        className="group flex items-center gap-2 text-sm text-[#e8e2d5]/70 transition-colors hover:text-[#e8e2d5]"
                      >
                        <Icon className="h-4 w-4 opacity-60" />
                        {d.name}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="col-span-3">
              <p className="label-gold-light">联系 · Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-[#e8e2d5]/70">
                <li>contact@yeju.example.com</li>
                <li>+86 010 0000 0000</li>
                <li>北京市朝阳区（示例地址）</li>
                <li>
                  <Link to="/contact" className="underline underline-offset-4 hover:text-[#e8e2d5]">
                    填写合作意向表单 →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-[#b89b5e]/15 pt-6 text-xs text-[#e8e2d5]/35">
            <span>© 2026 野居集团 YEJU GROUP · 保留所有权利</span>
            <span className="tracking-[0.3em]">旷野有居 · 心怀丰登</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
