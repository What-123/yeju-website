import { useEffect, useMemo, useState } from 'react'
import yejuCalligraphy from '@/assets/yeju-calligraphy-white.png'

/**
 * 野居东八区 · 开场动画
 * 分镜：城市夜空 → 云层汇聚 → 「野」字破云而出 → 沉入黑夜 → 落款「东八区电影工作室」
 * 每个浏览器会话（标签页）只播放一次；可随时点击跳过。
 */

type Phase = 'sky' | 'gather' | 'reveal' | 'dark' | 'subtitle' | 'exit' | 'gone'

const TIMINGS: [Phase, number][] = [
  ['sky', 0],
  ['gather', 2600],
  ['reveal', 4800],
  ['dark', 6400],
  ['subtitle', 7800],
  ['exit', 9300],
  ['gone', 10200],
]

/** 确定性伪随机（保证每次渲染天际线一致） */
function makeRand(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

interface Building {
  x: number
  w: number
  h: number
  windows: { x: number; y: number; delay: number; warm: boolean }[]
}

function buildSkyline(): Building[] {
  const rand = makeRand(20260923)
  const list: Building[] = []
  let x = -20
  while (x < 1480) {
    const w = 26 + rand() * 58
    const centerBoost = 1 - Math.abs(x - 720) / 900
    const h = 70 + rand() * 170 + centerBoost * 90
    const windows: Building['windows'] = []
    const cols = Math.max(1, Math.floor(w / 15))
    const rows = Math.max(2, Math.floor(h / 20))
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (rand() < 0.28) {
          windows.push({
            x: 5 + c * 15,
            y: 8 + r * 20,
            delay: rand() * 5,
            warm: rand() < 0.72,
          })
        }
      }
    }
    list.push({ x, w, h, windows })
    x += w + 2 + rand() * 14
  }
  return list
}

export default function FilmIntro() {
  const [phase, setPhase] = useState<Phase>('sky')
  const [enabled] = useState<boolean>(() => {
    if (new URLSearchParams(window.location.search).get('intro') === 'off') return false
    return sessionStorage.getItem('yeju-film-intro') !== 'seen'
  })
  // 调试钩子：?intro=reveal / dark / subtitle 可直接定格到某一阶段（静态，无过渡）
  const introParam = useMemo(() => {
    const v = new URLSearchParams(window.location.search).get('intro')
    return ['gather', 'reveal', 'dark', 'subtitle'].includes(v || '') ? (v as Phase) : null
  }, [])
  const staticFrame = introParam !== null
  const skyline = useMemo(buildSkyline, [])

  useEffect(() => {
    if (!enabled || staticFrame) return
    document.body.style.overflow = 'hidden'
    const timers = TIMINGS.map(([p, t]) => window.setTimeout(() => setPhase(p), t))
    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [enabled, staticFrame])

  useEffect(() => {
    if (staticFrame) {
      setPhase(introParam)
      return
    }
    if (phase === 'gone') {
      sessionStorage.setItem('yeju-film-intro', 'seen')
      document.body.style.overflow = ''
    }
  }, [phase, staticFrame, introParam])

  if (!enabled || phase === 'gone') return null

  const skip = () => setPhase('exit')

  return (
    <div
      className={`fi-overlay fi-${phase} ${staticFrame ? 'fi-static' : ''}`}
      role="button"
      aria-label="跳过开场动画"
      onClick={skip}
    >
      <style>{`
        .fi-overlay {
          position: fixed; inset: 0; z-index: 9999;
          overflow: hidden; cursor: pointer;
          font-family: "Inter", "PingFang SC", sans-serif;
          opacity: 1; transition: opacity 0.9s ease;
        }
        /* 定格调试：关闭一切过渡与循环动画 */
        .fi-static, .fi-static * { transition: none !important; animation: none !important; }
        .fi-overlay.fi-exit, .fi-overlay.fi-gone { opacity: 0; pointer-events: none; }

        /* —— 夜空 —— */
        .fi-sky {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 90% 55% at 68% 28%, rgba(214,150,170,0.20), transparent 60%),
            linear-gradient(180deg, #141033 0%, #251b4d 38%, #3a2560 68%, #241a44 100%);
          transition: background 2.4s ease, opacity 2s ease;
        }
        .fi-reveal .fi-sky {
          background:
            radial-gradient(ellipse 90% 55% at 68% 28%, rgba(190,130,160,0.10), transparent 60%),
            linear-gradient(180deg, #0e0b26 0%, #191238 45%, #221747 75%, #140f2c 100%);
        }
        .fi-dark .fi-sky, .fi-subtitle .fi-sky, .fi-exit .fi-sky {
          background: #050508;
        }

        /* —— 星星 —— */
        .fi-star { position: absolute; width: 2px; height: 2px; border-radius: 50%;
          background: #fff; opacity: .5; animation: fi-twinkle 3.6s ease-in-out infinite; }
        @keyframes fi-twinkle { 0%,100% { opacity: .12 } 50% { opacity: .75 } }

        /* —— 云层 —— */
        .fi-clouds { position: absolute; inset: 0; transition: opacity 2.2s ease; }
        .fi-gather .fi-clouds, .fi-reveal .fi-clouds, .fi-dark .fi-clouds,
        .fi-subtitle .fi-clouds, .fi-exit .fi-clouds { opacity: 0; }
        .fi-cloud { position: absolute; border-radius: 50%; filter: blur(38px); }
        .fi-c1 { width: 46vw; height: 15vw; left: -12vw; top: 16vh;
          background: radial-gradient(ellipse, rgba(216,168,196,0.5), transparent 70%);
          animation: fi-drift-a 26s linear infinite; }
        .fi-c2 { width: 38vw; height: 12vw; left: 30vw; top: 8vh;
          background: radial-gradient(ellipse, rgba(168,140,214,0.45), transparent 70%);
          animation: fi-drift-b 34s linear infinite; }
        .fi-c3 { width: 52vw; height: 16vw; left: 55vw; top: 24vh;
          background: radial-gradient(ellipse, rgba(226,178,190,0.42), transparent 70%);
          animation: fi-drift-a 40s linear infinite reverse; }
        .fi-c4 { width: 30vw; height: 10vw; left: 8vw; top: 34vh;
          background: radial-gradient(ellipse, rgba(150,128,208,0.4), transparent 70%);
          animation: fi-drift-b 30s linear infinite reverse; }
        .fi-c5 { width: 60vw; height: 14vw; left: -8vw; top: 44vh;
          background: radial-gradient(ellipse, rgba(200,150,190,0.28), transparent 70%);
          animation: fi-drift-a 48s linear infinite; }
        @keyframes fi-drift-a { from { transform: translateX(-8vw) } to { transform: translateX(12vw) } }
        @keyframes fi-drift-b { from { transform: translateX(10vw) } to { transform: translateX(-10vw) } }

        /* —— 汇聚中的中心云团 —— */
        .fi-vortex {
          position: absolute; left: 50%; top: 44%; width: 60vmin; height: 42vmin;
          transform: translate(-50%, -50%) scale(0.2); opacity: 0;
          border-radius: 50%; filter: blur(30px);
          background: radial-gradient(ellipse, rgba(222,196,228,0.85), rgba(170,140,210,0.4) 55%, transparent 75%);
          transition: transform 2.4s cubic-bezier(.4,0,.2,1), opacity 2.2s ease;
        }
        .fi-gather .fi-vortex { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        .fi-reveal .fi-vortex { transform: translate(-50%, -50%) scale(1.35); opacity: 0.55; }
        .fi-dark .fi-vortex, .fi-subtitle .fi-vortex, .fi-exit .fi-vortex { opacity: 0; }

        /* —— 城市天际线 —— */
        .fi-city { position: absolute; left: 0; right: 0; bottom: 0; height: 46vh; transition: opacity 2.4s ease; }
        .fi-reveal .fi-city { opacity: .55 }
        .fi-dark .fi-city, .fi-subtitle .fi-city, .fi-exit .fi-city { opacity: 0 }
        .fi-city svg { width: 100%; height: 100%; display: block; }
        .fi-bldg { fill: #0a0817; }
        .fi-win { animation: fi-twinkle 4.2s ease-in-out infinite; }

        /* —— 「野」字 —— */
        .fi-char-wrap {
          position: absolute; left: 50%; top: 44%;
          transform: translate(-50%, -50%) scale(0.92);
          opacity: 0; filter: blur(22px);
          transition: opacity 2.4s ease, filter 2.4s ease, transform 2.4s ease;
        }
        .fi-reveal .fi-char-wrap { opacity: .95; filter: blur(7px); }
        .fi-dark .fi-char-wrap, .fi-subtitle .fi-char-wrap {
          opacity: 1; filter: blur(0); transform: translate(-50%, -50%) scale(1);
        }
        .fi-char-img {
          display: block; height: 50vmin; width: auto;
          user-select: none; -webkit-user-drag: none;
          filter: drop-shadow(0 0 42px rgba(255, 255, 255, 0.14));
        }
        /* 字后余雾 */
        .fi-mist {
          position: absolute; left: 50%; top: 44%; width: 74vmin; height: 40vmin;
          transform: translate(-50%, -50%); border-radius: 50%; filter: blur(46px);
          background: radial-gradient(ellipse, rgba(210,200,225,0.16), transparent 70%);
          opacity: 0; transition: opacity 2.4s ease;
        }
        .fi-dark .fi-mist, .fi-subtitle .fi-mist { opacity: 1; animation: fi-mist-drift 9s ease-in-out infinite alternate; }
        @keyframes fi-mist-drift { from { transform: translate(-54%, -50%) } to { transform: translate(-46%, -52%) } }

        /* —— 落款 —— */
        .fi-sign {
          position: absolute; left: 50%; top: 75%;
          transform: translateX(-50%);
          font-family: "Noto Serif SC", serif; font-weight: 500;
          font-size: 17px; letter-spacing: 0.65em; text-indent: 0.65em;
          color: rgba(244,241,234,0.85); white-space: nowrap;
          opacity: 0; filter: blur(6px);
          transition: opacity 1.8s ease, filter 1.8s ease, letter-spacing 1.8s ease;
        }
        .fi-subtitle .fi-sign, .fi-exit .fi-sign {
          opacity: 1; filter: blur(0); letter-spacing: 0.45em; text-indent: 0.45em;
        }

        /* —— 角落小字与跳过 —— */
        .fi-corner {
          position: absolute; top: 28px; left: 32px;
          font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
          color: rgba(255,255,255,0.35); transition: color 1.5s;
        }
        .fi-dark .fi-corner, .fi-subtitle .fi-corner { color: rgba(184,155,94,0.6); }
        .fi-skip {
          position: absolute; bottom: 34px; left: 50%; transform: translateX(-50%);
          font-size: 11px; letter-spacing: 0.3em; color: rgba(255,255,255,0.4);
          padding: 8px 18px; border: 1px solid rgba(255,255,255,0.14); border-radius: 999px;
          background: rgba(0,0,0,0.15); backdrop-filter: blur(4px);
          transition: color .3s, border-color .3s; animation: fi-skip-in 1s ease .8s both;
        }
        .fi-skip:hover { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.4); }
        @keyframes fi-skip-in { from { opacity: 0 } to { opacity: 1 } }

        @media (prefers-reduced-motion: reduce) {
          .fi-star, .fi-win, .fi-cloud, .fi-mist { animation: none !important; }
        }
      `}</style>

      {/* 夜空与星 */}
      <div className="fi-sky" />
      {[
        [8, 12], [18, 30], [30, 8], [44, 20], [57, 10], [66, 26], [78, 14],
        [88, 32], [94, 10], [13, 44], [50, 38], [72, 42], [84, 50], [26, 26],
      ].map(([left, top], i) => (
        <span
          key={i}
          className="fi-star"
          style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${i * 0.47}s` }}
        />
      ))}

      {/* 流云 */}
      <div className="fi-clouds">
        <div className="fi-cloud fi-c1" />
        <div className="fi-cloud fi-c2" />
        <div className="fi-cloud fi-c3" />
        <div className="fi-cloud fi-c4" />
        <div className="fi-cloud fi-c5" />
      </div>

      {/* 汇聚云团 */}
      <div className="fi-vortex" />

      {/* 城市天际线 */}
      <div className="fi-city">
        <svg viewBox="0 0 1440 460" preserveAspectRatio="xMidYMax slice" aria-hidden>
          {skyline.map((b, i) => (
            <g key={i}>
              <rect className="fi-bldg" x={b.x} y={460 - b.h} width={b.w} height={b.h} />
              {b.windows.map((win, j) => (
                <rect
                  key={j}
                  className="fi-win"
                  x={b.x + win.x}
                  y={460 - b.h + win.y}
                  width="3.5"
                  height="4.5"
                  fill={win.warm ? '#ffd9a0' : '#aec4ff'}
                  style={{ animationDelay: `${win.delay}s` }}
                />
              ))}
            </g>
          ))}
          {/* 城底雾霭 */}
          <rect x="0" y="430" width="1440" height="30" fill="url(#fiFog)" />
          <defs>
            <linearGradient id="fiFog" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a2560" stopOpacity="0" />
              <stop offset="100%" stopColor="#120d26" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 余雾 · 野字 · 落款 */}
      <div className="fi-mist" />
      <div className="fi-char-wrap" aria-hidden>
        <img src={yejuCalligraphy} alt="" className="fi-char-img" draggable={false} />
      </div>
      <p className="fi-sign">东八区电影工作室</p>

      <span className="fi-corner">Yeju · GMT+8 — In Story We Trust</span>
      <span className="fi-skip">点击跳过 ›</span>
    </div>
  )
}
