// 野居集团 · 全站内容数据
// 注意：以下文案部分为示例占位（联系方式、地址、部分作品与人名），
// 正式上线前请核对替换为真实信息。
import shanshangImg from '@/assets/works/shanshang.jpg'
import wujueImg from '@/assets/works/wujue.jpg'
import wumoImg from '@/assets/works/wumo.jpg'
import bookYeju from '@/assets/works/book-yeju.jpg'
import bookWangming from '@/assets/works/book-wangming.jpg'
import bookDuange from '@/assets/works/book-duange.jpg'
import bookMigong from '@/assets/works/book-migong.jpg'
import bookChengshi from '@/assets/works/book-chengshi.jpg'
import bookLieche from '@/assets/works/book-lieche.jpg'
import yizhiBeifenImg from '@/assets/works/yizhi-beifen.jpg'

export interface Division {
  slug: string
  name: string
  enName: string
  shortName: string
  tagline: string
  intro: string[]
  highlights: { title: string; desc: string }[]
  stats: { value: string; label: string }[]
  accent: string // tailwind gradient classes
  accentText: string
  icon: string // lucide icon name key
}

export const divisions: Division[] = [
  {
    slug: 'film',
    name: '野居东八区',
    enName: 'YEJU GMT+8',
    shortName: '东八区',
    tagline: 'IN STORY WE TRUST',
    intro: [
      '野居东八区是矩阵中的影视与文艺公司，由野居电影工作室升级而来。公司立足华南，建有覆盖编剧、导演、摄影、灯光、场务的全链路影视制作人才网络，业务包括影视内容创作与企业、品牌影像服务。',
      '前身野居电影工作室正式成立于 2023 年 2 月，位于广东深圳，分设编剧部、策划部、文学创意部三大部门。团队以系统科学的「野居拉片模式」培育编剧的剧本分析能力，并设有电影改编产品线，由蒙特雷国际研究院本地化专业出身的项目团队提供翻译、改编与跨国落地支持。',
      '团队纪录片作品曾入围威尼斯电影节终选，并获纽约电影节最佳纪录片；旗下编剧李尚由的剧本作品获派拉蒙投资。公司储备有三十余部原创剧本，同时在探索 AI 辅助创作与新型内容形态。',
    ],
    highlights: [
      { title: '影视内容创作', desc: '电影、剧集、纪录片的开发与制作，公司储备有三十余部原创剧本，持续孵化优质故事。' },
      { title: '品牌影像服务', desc: '为企业与品牌提供广告片、宣传片、纪录片等商业影像的策划与制作服务。' },
      { title: '全链路制作团队', desc: '覆盖编剧、导演、摄影、灯光、场务的完整人才网络，保障项目从剧本到成片的品质。' },
      { title: 'AI 辅助创作', desc: '探索 AI 辅助创作与新型内容形态，让技术为叙事赋能。' },
    ],
    stats: [
      { value: '30+', label: '原创剧本储备' },
      { value: '威尼斯', label: '电影节终选入围' },
      { value: '纽约', label: '电影节最佳纪录片' },
    ],
    accent: 'from-[#2b1a3a] to-[#4a2d61]',
    accentText: 'text-[#4a2d61]',
    icon: 'clapperboard',
  },
  {
    slug: 'agriculture',
    name: '野居丰登',
    enName: 'YEJU HARVEST',
    shortName: '丰登',
    tagline: '把丰收，酿成体面的馈赠',
    intro: [
      '野居丰登是矩阵中的精品农产与商务礼赠品牌，主营果品、茶叶与特色农产品的精品线供应，为商务会见场景提供礼品方案，并面向私域客户开展零售。',
      '品牌理念强调产地选择与礼品审美：把农产品当作体面、可讲述的礼物来做，而不是当作生鲜商品来卖。品牌视觉以茶枝与果实为母题，呼应「丰收」与「馈赠」两重含义。',
    ],
    highlights: [
      { title: '精品果品', desc: '严选产地与当季批次，主打果品精品线，颗颗可溯源、盒盒可讲述。' },
      { title: '甄选茶叶', desc: '深入核心茶区选品，从口粮茶到收藏级茶礼，覆盖不同会面场景。' },
      { title: '商务礼赠方案', desc: '为企业商务会见、节庆往来提供定制化礼品方案与批量供应服务。' },
      { title: '私域零售', desc: '面向私域客户开展精品零售，以产地故事与审美包装赢得长期信任。' },
    ],
    stats: [
      { value: '3', label: '大主营品类' },
      { value: '产地', label: '直采直供' },
      { value: '茶枝·果实', label: '品牌视觉母题' },
    ],
    accent: 'from-[#3a4a1d] to-[#5d7428]',
    accentText: 'text-[#4a5d20]',
    icon: 'sprout',
  },
  {
    slug: 'game',
    name: '野居幻屿',
    enName: 'YEJU MIRAGE ISLE',
    shortName: '幻屿',
    tagline: '一座虚幻却令人开心的岛屿',
    intro: [
      '野居幻屿是矩阵中以人工智能模型制作游戏的业务单元，方向是灵巧、轻松的互动体验——探索更轻盈的游戏创作方式，以及令人愉悦的互动世界。',
      '「幻屿」意为一座虚幻却令人开心的岛屿：延续「野居」品牌中「可进入、可停留的空间」意象，也对应游戏世界带来的轻松与快乐。',
    ],
    highlights: [
      { title: 'AI 游戏创作', desc: '以人工智能模型参与游戏制作，探索更轻盈、更高效的游戏创作方式。' },
      { title: '轻巧互动体验', desc: '方向是灵巧、轻松的互动体验，低门槛、即开即玩，让人随时随地获得快乐。' },
      { title: '愉悦游戏世界', desc: '打造令人愉悦的互动世界，一座可进入、可停留的「幻屿」。' },
      { title: '新型内容形态', desc: '延续「野居」的空间意象，探索 AI 与游戏、叙事结合的新型内容形态。' },
    ],
    stats: [
      { value: 'AI 原生', label: '模型驱动的游戏制作' },
      { value: '轻巧', label: '互动体验方向' },
      { value: '幻屿', label: '可进入、可停留的世界' },
    ],
    accent: 'from-[#123c4f] to-[#1e6076]',
    accentText: 'text-[#1e6076]',
    icon: 'gamepad-2',
  },
  {
    slug: 'education',
    name: '野居渡岸',
    enName: 'YEJU FERRY',
    shortName: '渡岸',
    tagline: '把每一个学生，渡到他的彼岸',
    intro: [
      '野居渡岸是矩阵中的超高端教育品牌，由野居体系内多支教育团队的最精锐力量组合而成。团队在升学教育领域深耕十年，服务覆盖国际课程、香港 DSE 与港澳升学等方向，面向高净值家庭提供定制化升学规划与陪伴式教育服务。',
      '「渡岸」取「摆渡人渡人上岸」之意：教育不是批量交付，而是把每一个学生渡到他的彼岸。',
    ],
    highlights: [
      { title: '国际课程', desc: '覆盖主流国际课程体系，匹配海外名校申请路径，一对一设计学习方案。' },
      { title: '香港 DSE', desc: '深耕香港中学文凭考试（DSE）备考体系，熟悉命题规律与升学通道。' },
      { title: '港澳升学', desc: '面向港澳地区名校的升学规划，打通申请、面试与适应期的全流程支持。' },
      { title: '定制化陪伴服务', desc: '面向高净值家庭的定制化升学规划与陪伴式教育服务，一人一案，全程同行。' },
    ],
    stats: [
      { value: '10年', label: '升学教育深耕' },
      { value: '3', label: '大服务方向' },
      { value: '摆渡人', label: '渡人上岸' },
    ],
    accent: 'from-[#232c3d] to-[#3d4f6e]',
    accentText: 'text-[#3d4f6e]',
    icon: 'graduation-cap',
  },
  {
    slug: 'capital',
    name: '野居资本',
    enName: 'YEJU CAPITAL',
    shortName: '资本',
    tagline: '以长期主义，陪伴有价值的成长',
    intro: [
      '野居资本是野居集团旗下的投资平台，专注于消费、农业科技与文化领域的早期及成长期投资机会。我们相信，真正有价值的品牌与事业，需要时间沉淀，也需要志同道合的伙伴。',
      '团队以研究驱动为核心，深入产业一线，与被投企业共同面对经营中的真实问题，提供资本之外的产业资源与品牌方法论支持。',
    ],
    highlights: [
      { title: '消费品牌', desc: '关注具有独特审美与文化表达的新消费品牌，从供应链到内容营销全链路赋能。' },
      { title: '农业科技', desc: '投资以科技提升农业生产效率与可持续性的创新企业，与野居丰登的产地布局形成协同。' },
      { title: '文化内容', desc: '布局影视、音乐与现场娱乐内容公司，联动野居东八区的制作与发行能力。' },
      { title: '公益创投', desc: '以商业化手段支持具有社会价值的企业，推动商业向善。' },
    ],
    stats: [
      { value: '20+', label: '被投企业' },
      { value: '3', label: '专注领域' },
      { value: '10年', label: '长期陪伴周期' },
    ],
    accent: 'from-[#0f2e23] to-[#1d4d3a]',
    accentText: 'text-[#1d4d3a]',
    icon: 'landmark',
  },
]

export interface Artist {
  name: string
  role: string
  desc: string
  works: string[]
  photo?: string
}

// 东八区 · 创作团队（资料来源：野居电影工作室官网 yejumovie.com）
export const artists: Artist[] = [
  {
    name: '刘伟源',
    role: '创始人 / 作家 · 编剧',
    desc: '2000 年生于深圳，毕业于香港中文大学（深圳）英语专业（国际文化传播方向）。2012 年起进行创意写作，小说、散文、诗歌、戏剧均有涉猎，已完成多部个人作品集出版，创作成文超百万字，现为出版社签约作家、豆瓣认证创作者。2021 年加入大地电影，2022 年独立完成首部院线剧本《意志备份》。',
    works: ['《意志备份》（编剧）', '「东方海岸」系列 IP', '「星海无归」系列 IP', '出版作品集《野居》《城市，人群与身影》等六部'],
  },
  {
    name: '李尚由',
    role: '编剧 / 创作质控核心',
    desc: '毕业于北卡罗来纳大学教堂山分校传媒学（主攻剧本创作与电影史研究）。获学院推荐赴好莱坞，于奥斯卡获奖制作人 Michael Samsburg（代表作《低俗小说》）旗下编剧团队实习——该资格每年仅一人获得，其为建院以来首位获此资格的非美籍学生。担任野居创作团队的质控核心，主持过超两百小时剧本会。',
    works: ['《芜》三部曲（制片人 / 编剧 / 副导演）', '纪录片《山上山下》（制片人）', '《露西斯星》《黄土之下》（开发中）'],
  },
  {
    name: '张宸睿',
    role: '编剧',
    desc: '2002 年生于湖南株洲，2023 年毕业于湖南铁路科技职业技术学院铁道机车系。2019 年起进行小说创作，作品以现实主义为基调，融入多种行文技法，形成独特的个人风格。作为野居最年轻的编剧，状态最佳时曾一周内完成六万字创作，潜力无穷。',
    works: ['出版作品集《列车飞奔》', '《野草飘零》策划（文学+影视双轨开发中）'],
  },
  {
    name: '张浩健',
    role: '',
    desc: '',
    works: [],
  },
  {
    name: '高书樵',
    role: '',
    desc: '',
    works: [],
  },
]

// 东八区 · 影视作品（资料来源：野居电影工作室官网 yejumovie.com）
export interface Film {
  title: string
  year: string
  type: string
  note: string
  status: 'completed' | 'development'
  image?: string
}

export const films: Film[] = [
  {
    title: '《山上山下》',
    year: '2020',
    type: '纪录短片 · 28 分钟',
    note: '入围威尼斯电影节终选名单，获纽约电影节最佳纪录片；受甘肃省宕昌县宣传委邀请拍摄，记录脱贫攻坚中的家庭故事',
    status: 'completed',
    image: shanshangImg,
  },
  {
    title: '《芜绝》',
    year: '2019',
    type: '先锋微电影 ·《芜》三部曲之二',
    note: '法国新浪潮风格，讲述一个男人在核战末日后重拾希望；获 Freedom&Unity 电影节最佳短片奖',
    status: 'completed',
    image: wujueImg,
  },
  {
    title: '《芜没》',
    year: '2019',
    type: '先锋微电影 ·《芜》三部曲之一',
    note: '黑色幽默叙事，讲述一头牛的前世今生；入围 Indie 电影节短片竞赛单元，被评为「近十年最新颖的电影题材」',
    status: 'completed',
    image: wumoImg,
  },
  {
    title: '《烟芜》',
    year: '2019',
    type: '先锋微电影 ·《芜》三部曲之三',
    note: '戏剧电影风格，讲述三个青年在谷仓里与一头牛发生的趣事',
    status: 'completed',
  },
  {
    title: '《日月》',
    year: '2022',
    type: '微电影 · 33 分钟',
    note: '受北卡罗来纳州华人学者协会邀请拍摄，关注校园心理健康',
    status: 'completed',
  },
  {
    title: '《意志备份》',
    year: '2023',
    type: '科幻长片 · 120 分钟',
    note: '北京电影局备案立项；入围 2023 年中国金鸡百花电影节创投科幻片主单元复评',
    status: 'completed',
    image: yizhiBeifenImg,
  },
  {
    title: '《露西斯星》（Lucis）',
    year: '开发中',
    type: '英文科幻长片 · 120 分钟',
    note: '对标《银翼杀手》，已获得好莱坞方面投资',
    status: 'development',
  },
  {
    title: '《黄土之下》（Under the Yellow Earth）',
    year: '暂停开发',
    type: '英文现实主义剧集 · 20 集',
    note: '讲述上世纪中国山西一座国营煤矿的权斗故事，首集剧本曾受 Netflix 关注',
    status: 'development',
  },
  {
    title: '《离子盐》',
    year: '开发中',
    type: '中文科幻长片 · 120 分钟',
    note: '在宏大的未来世界中寻求人文视角，已完成故事梗概与人物小传',
    status: 'development',
  },
  {
    title: '《野草飘零》',
    year: '开发中',
    type: '文学+影视双轨开发',
    note: '张宸睿策划，同名原著小说初稿已基本完成',
    status: 'development',
  },
]

// 东八区 · 文学与出版（资料来源：野居电影工作室官网 yejumovie.com）
export const books: { title: string; author: string; year: string; note: string; image?: string }[] = [
  { title: '《列车飞奔》', author: '张宸睿', year: '2023', note: '首部个人作品集', image: bookLieche },
  { title: '《远空》', author: '刘伟源', year: '2023', note: '散文诗歌集 · 11 万字' },
  { title: '《城市，人群与身影》', author: '刘伟源', year: '2023', note: '短篇小说集 · 14.8 万字，「东方海岸」系列首部成熟作品', image: bookChengshi },
  { title: '《在迷宫中》', author: '刘伟源', year: '2022', note: '短篇小说集 · 10.3 万字，「东方海岸」「银河先遣队」世界线首次出现', image: bookMigong },
  { title: '《短歌》', author: '刘伟源', year: '2021', note: '散文诗歌集 · 7.1 万字', image: bookDuange },
  { title: '《亡命》', author: '刘伟源', year: '2020', note: '短篇小说集 · 13 万字', image: bookWangming },
  { title: '《野居》', author: '刘伟源', year: '2019', note: '个人处女作，豆瓣评分 9.8', image: bookYeju },
]

// 集团时间线（示例）
export const milestones: { year: string; event: string }[] = [
  { year: '2014', event: '野居资本成立，开始早期投资业务' },
  { year: '2016', event: '野居丰登品牌创立，起步精品农产业务' },
  { year: '2019', event: '野居电影工作室创立，后升级为野居东八区' },
  { year: '2024', event: '集团完成品牌整合，五大板块协同运营' },
]

// 丰登 · 产品与服务系列（示例占位，待真实产品线替换）
export const products: { title: string; en: string; desc: string; chip: string }[] = [
  {
    title: '精品果品系列',
    en: 'ORCHARD',
    desc: '当季产地直采的果品精品线，颗颗可溯源，以审美包装呈现「丰收」的体面。',
    chip: 'bg-[#5d7428]',
  },
  {
    title: '甄选茶叶系列',
    en: 'TEA',
    desc: '深入核心茶区选品，从口粮茶到收藏级茶礼，覆盖不同会面场景与预算。',
    chip: 'bg-[#3a4a1d]',
  },
  {
    title: '特色农产品系列',
    en: 'HARVEST',
    desc: '地域风物与手作工艺的集合，每一份都可讲述产地与人情的故事。',
    chip: 'bg-[#8a6a2f]',
  },
  {
    title: '商务礼盒定制',
    en: 'GIFTING',
    desc: '为企业商务会见、节庆往来提供定制礼盒方案，批量供应、按需组合。',
    chip: 'bg-[#1c1b18]',
  },
]

// 渡岸 · 服务流程（示例，流程节点可调整）
export const eduSteps: { no: string; title: string; desc: string }[] = [
  { no: '01', title: '深度面谈与评估', desc: '了解学生学业基础、兴趣方向与家庭期望，建立专属档案。' },
  { no: '02', title: '定制升学规划', desc: '一人一案，匹配国际课程 / DSE / 港澳升学路径，明确时间线。' },
  { no: '03', title: '陪伴式教学', desc: '精锐师资全程跟进，定期复盘调整，过程透明可见。' },
  { no: '04', title: '申请与落地陪伴', desc: '从申请递交、面试辅导到入学适应，渡人直至上岸。' },
]

// 资本 · 投资理念（示例）
export const capitalBeliefs: { title: string; desc: string }[] = [
  { title: '长期主义', desc: '不以短期回报为标尺，陪伴企业穿越周期，与时间为友。' },
  { title: '研究驱动', desc: '深入产业一线，用扎实研究代替跟风押注，先懂行业再投企业。' },
  { title: '产业协同', desc: '联动野居集团各板块的产地、内容与教育生态，为被投企业注入真实资源。' },
]

// 幻屿 · 岛屿意象（品牌概念视觉占位）
export const isleConcepts: { title: string; desc: string; gradient: string }[] = [
  { title: '岛', desc: '一座可进入、可停留的空间——延续「野居」的品牌意象。', gradient: 'from-[#123c4f] to-[#1e6076]' },
  { title: '光', desc: '虚幻却令人开心：轻盈、明亮、没有负担的快乐。', gradient: 'from-[#1e6076] to-[#3a8ba3]' },
  { title: '玩', desc: '灵巧、轻松的互动体验，即开即玩，随时随地。', gradient: 'from-[#0f2e3d] to-[#123c4f]' },
]
