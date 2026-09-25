import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react'
import { divisions } from '@/data/divisions'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  topic: string
  message: string
}

const initial: FormState = { name: '', company: '', email: '', phone: '', topic: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const validate = () => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = '请填写您的姓名'
    if (!form.email.trim()) errs.email = '请填写邮箱地址'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = '邮箱格式不正确'
    if (!form.message.trim()) errs.message = '请填写留言内容'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    // 纯静态站点：此处仅为前端演示，正式环境可对接邮件服务或后端 API
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const inputCls = (k: keyof FormState) =>
    `w-full border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#b06a28] ${
      errors[k] ? 'border-red-400' : 'border-[#211c14]/20'
    }`

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#1d4d3a]" />
        <h1 className="mt-6 font-serif text-3xl font-bold tracking-wide">提交成功</h1>
        <p className="mt-4 leading-8 text-[#211c14]/65">
          感谢您的留言，{form.name}。我们已收到您的意向{form.topic ? `（${form.topic}）` : ''}，
          通常会在 2 个工作日内通过邮件与您联系。
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setForm(initial)
              setSubmitted(false)
            }}
            className="border border-[#211c14]/25 px-6 py-3 text-sm tracking-widest transition-colors hover:border-[#211c14]"
          >
            再写一条
          </button>
          <Link
            to="/"
            className="bg-[#211c14] px-6 py-3 text-[13px] tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#b06a28]"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-[#211c14]/50 transition-colors hover:text-[#211c14]"
      >
        <ArrowLeft className="h-4 w-4" /> 返回首页
      </Link>
      <div className="mt-8 grid grid-cols-12 gap-12">
        <div className="col-span-4">
          <h1 className="font-serif text-5xl font-bold tracking-wide">联系我们</h1>
          <p className="mt-5 leading-8 text-[#211c14]/65">
            无论您是希望与野居的某个板块开展合作、洽谈投资，还是媒体采访与公益协作，
            都欢迎通过右侧表单留下您的信息。
          </p>
          <div className="mt-10 space-y-5 border-t border-[#211c14]/10 pt-8 text-sm">
            <div>
              <p className="label-gold">邮箱</p>
              <p className="mt-1">contact@yeju.example.com</p>
            </div>
            <div>
              <p className="label-gold">电话</p>
              <p className="mt-1">+86 010 0000 0000</p>
            </div>
            <div>
              <p className="label-gold">地址</p>
              <p className="mt-1">北京市朝阳区（示例地址）</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="col-span-8 border border-[#211c14]/12 bg-[#fbf7ee] p-10" noValidate>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="mb-2 block text-sm">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input className={inputCls('name')} value={form.name} onChange={set('name')} placeholder="您的称呼" />
              {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm">公司 / 机构</label>
              <input className={inputCls('company')} value={form.company} onChange={set('company')} placeholder="选填" />
            </div>
            <div>
              <label className="mb-2 block text-sm">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <input className={inputCls('email')} value={form.email} onChange={set('email')} placeholder="name@example.com" />
              {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm">电话</label>
              <input className={inputCls('phone')} value={form.phone} onChange={set('phone')} placeholder="选填" />
            </div>
            <div className="col-span-2">
              <label className="mb-2 block text-sm">意向板块</label>
              <select className={inputCls('topic')} value={form.topic} onChange={set('topic')}>
                <option value="">请选择（选填）</option>
                {divisions.map((d) => (
                  <option key={d.slug} value={d.name}>
                    {d.name}
                  </option>
                ))}
                <option value="集团综合事务">集团综合事务</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="mb-2 block text-sm">
                留言内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                className={`${inputCls('message')} resize-none`}
                value={form.message}
                onChange={set('message')}
                placeholder="请简单介绍您的合作意向或需求…"
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 bg-[#211c14] px-8 py-3 text-[13px] tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#b06a28]"
          >
            <Send className="h-4 w-4" /> 提交留言
          </button>
          <p className="mt-4 text-xs text-[#211c14]/40">
            提交即表示您同意我们就本次咨询与您联系。我们承诺不将您的信息用于其他用途。
          </p>
        </form>
      </div>
    </div>
  )
}
