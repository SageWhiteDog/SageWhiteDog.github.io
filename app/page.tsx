'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const needs = [
  {
    label: '降低成本',
    title: '先找到最贵的重复工作',
    body: '梳理人力投入最高、重复最多的流程，判断哪些环节适合用 Agent、工作流或知识库重做。',
  },
  {
    label: '提升人效',
    title: '让 AI 进入每天的工作',
    body: '把企业知识、任务执行和团队协作连接起来，让员工不是“偶尔用 AI”，而是持续用 AI 完成工作。',
  },
  {
    label: '寻找增长',
    title: '建立新的内容与经营闭环',
    body: '用 AI 扩大内容产能、测试新渠道，并把发布后的数据重新变成下一轮经营判断。',
  },
  {
    label: '全面转型',
    title: '先画出企业 AI 改造地图',
    body: '从老板的经营目标出发，梳理部门、岗位、任务和系统，形成全公司看得懂、能执行的改造路线。',
  },
];

const approach = [
  {
    index: '01',
    title: '进入企业现场',
    body: '访谈老板、业务主管与一线员工。不从工具出发，先找到影响收入、利润与人效的真实问题。',
  },
  {
    index: '02',
    title: '看懂并重画业务',
    body: '把部门、岗位、任务与流转关系拆开，标记值得优先改造的节点，形成共同看得懂的实施路线。',
  },
  {
    index: '03',
    title: '把方案做成软件',
    body: '把模型、企业知识与现有系统接起来，完成产品、工作流、Agent 和真正可运行的软件。',
  },
  {
    index: '04',
    title: '推动员工真正采用',
    body: '与真实使用者一起验证、培训与迭代。交付不止于上线，而是进入每天发生的工作。',
  },
];

const clients = [
  { mark: '20亿', type: '跨境电商', title: '年营收约 20 亿元的跨境电商企业', note: '全公司 AI 转型与业务改造地图' },
  { mark: '1000+', type: '连锁美妆', title: '拥有 1000 多家线下门店的美妆品牌', note: '企业 AI 改造服务' },
  { mark: '多城市', type: '法律服务', title: '业务横跨多个城市的律师事务所', note: '企业知识库、AI 咨询与客户分流' },
  { mark: '医疗AI', type: '医疗科技', title: '业内领先的医疗企业与机构', note: '患者管理智能体与手术视频理解' },
];

const productLoop = [
  ['企业知识', '把内部文件、业务数据与优质外部资料，变成 AI 可以调用的知识资产。'],
  ['AI 执行', '员工通过智能助理获得答案，或让 Agent 直接完成具体任务。'],
  ['内容生成', '围绕电商业务生成图片、视频与营销内容。'],
  ['团队协作', '内容和任务在系统内共享、编辑并继续流转。'],
  ['多平台发布', '将确认后的内容分发到不同平台，减少重复劳动。'],
  ['数据反馈', '汇总各平台经营数据，形成下一轮判断。'],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {diagonal ? <path d="M5 19 19 5M8 5h11v11" /> : <path d="M4 12h15M14 6l6 6-6 6" />}
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNeed, setActiveNeed] = useState(3);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="返回首页">
          <span className="brand-mark">TK</span>
          <span className="brand-copy"><strong>谭凯宸 AI 工作室</strong><small>一人公司 · 企业 AI 改造</small></span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        ><span /><span /></button>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="主要导航">
          <a href="#business" onClick={closeMenu}>业务</a>
          <a href="#fde" onClick={closeMenu}>什么是 FDE</a>
          <a href="#clients" onClick={closeMenu}>服务客户</a>
          <a href="#case" onClick={closeMenu}>案例</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>合作沟通 <Arrow /></a>
        </nav>
      </header>

      <section className="hero company-hero" aria-labelledby="hero-title">
        <div className="hero-kicker hero-enter" style={{ '--delay': '0ms' } as React.CSSProperties}>
          <span>谭凯宸 AI 工作室 · 一人公司</span>
          <span>Enterprise AI Transformation</span>
        </div>
        <div className="hero-company">
          <div className="hero-company-copy hero-enter" style={{ '--delay': '80ms' } as React.CSSProperties}>
            <p className="company-label">企业 AI 改造 · AI 软件 · 员工采用</p>
            <h1 id="hero-title">帮企业把 AI，<br />做成真正的<br /><em>业务结果。</em></h1>
            <p className="hero-intro">这是一家由谭凯宸独立运营的企业 AI 一人公司。我进入真实业务，帮助企业降低成本、提升人效、寻找第二增长曲线，并把方案真正做成系统。</p>
          </div>

          <div className="hero-diagnostic hero-enter" style={{ '--delay': '170ms' } as React.CSSProperties}>
            <div className="diagnostic-head"><span>企业 AI 改造入口</span><strong>你的企业，现在最想解决什么？</strong></div>
            <div className="need-options" role="group" aria-label="选择企业当前目标">
              {needs.map((need, index) => (
                <button
                  type="button"
                  key={need.label}
                  className={activeNeed === index ? 'is-active' : ''}
                  aria-pressed={activeNeed === index}
                  onClick={() => setActiveNeed(index)}
                >{need.label}</button>
              ))}
            </div>
            <div className="diagnostic-result" aria-live="polite">
              <span>建议的改造起点</span>
              <h2>{needs[activeNeed].title}</h2>
              <p>{needs[activeNeed].body}</p>
            </div>
            <a href="#contact">带着一个真实问题，开始沟通 <Arrow /></a>
          </div>
        </div>
        <div className="hero-services hero-enter" style={{ '--delay': '230ms' } as React.CSSProperties}>
          <span>01 企业 AI 改造</span><span>02 企业级 AI 软件</span><span>03 员工 AI 培训</span>
        </div>
      </section>

      <section className="about-section founder-section" id="about">
        <figure className="portrait" data-reveal>
          <Image src="/portrait-original.jpg" alt="谭凯宸个人照片" fill sizes="(max-width: 760px) 100vw, 42vw" priority />
          <figcaption>谭凯宸 · Shanghai</figcaption>
        </figure>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">Founder / FDE</p>
          <h2 className="founder-name">谭凯宸</h2>
          <p className="founder-role">一个人完成从业务诊断、产品设计到软件交付的企业 AI 创业者。</p>
          <p className="about-intro">心理学训练让我理解人，产品与商业经验让我理解企业，AI 与工程能力让我把判断真正做成系统。</p>
          <blockquote className="founder-quote">我既能从老板的角度出发，也能体会一线员工的感受。</blockquote>
          <dl>
            <div><dt>教育</dt><dd>纽约大学硕士 · 心理学背景</dd></div>
            <div><dt>经历</dt><dd>企业 AI 咨询公司技术合伙人<br />AI 初创公司产品负责人兼合伙人</dd></div>
            <div><dt>实践</dt><dd>为年营收数亿元至数十亿元的企业提供 AI 改造服务</dd></div>
            <div><dt>教学</dt><dd>在上海多所高校与机构讲授 AI 课程</dd></div>
          </dl>
        </div>
      </section>

      <section className="business-section" id="business">
        <div className="business-heading" data-reveal>
          <p className="eyebrow light">我在做什么业务</p>
          <h2>帮企业完成 AI 改造，<br />让经营真正变好。</h2>
          <p>企业采用 AI，不是为了多买一个工具，而是为了降低成本、提升效率、找到新的增长机会，并让组织跟上正在发生的时代变化。</p>
        </div>
        <div className="outcome-grid" data-reveal>
          <article><span>01</span><h3>降本</h3><strong>把重复劳动交给 AI</strong><p>识别人力成本高、重复程度高的流程，用知识库、工作流和 Agent 重新设计。</p></article>
          <article><span>02</span><h3>增效</h3><strong>让员工更快完成工作</strong><p>把企业知识、数据、协作和任务执行连接起来，让 AI 进入真实岗位。</p></article>
          <article><span>03</span><h3>增长</h3><strong>寻找企业第二曲线</strong><p>扩大内容与产品创新能力，测试新渠道，让经营数据形成更快的反馈闭环。</p></article>
        </div>
        <div className="business-services" data-reveal>
          <div><span>核心服务 A</span><strong>企业 AI 改造</strong><p>从业务调研、改造地图到系统开发与员工采用，端到端交付。</p></div>
          <div><span>核心服务 B</span><strong>企业员工 AI 培训</strong><p>结合行业、岗位和真实流程，让员工形成可以持续使用的 AI 工作方式。</p></div>
        </div>
      </section>

      <section className="definition-section" id="fde">
        <div className="definition-index" data-reveal><span>FDE</span><span>正在扩张的新角色</span></div>
        <div className="definition-copy" data-reveal>
          <p className="eyebrow">什么是 FDE？</p>
          <h2>FDE，就是帮助企业进行 AI 改造的那个人。</h2>
          <p>FDE 既理解企业业务，也能把模型、企业数据和现有系统真正连接起来。从发现问题、设计方案、写出软件，到上线和员工采用，FDE 对最终业务结果负责。</p>
        </div>
        <div className="definition-proof" data-reveal>
          <p>国外头部 AI 公司正在高薪招聘，国内同类岗位也开始快速出现。</p>
          <div>
            <a href="https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/" target="_blank" rel="noreferrer"><span><strong>OpenAI</strong><small>$162K–$280K + 股权</small></span><Arrow diagonal /></a>
            <a href="https://www.anthropic.com/careers/jobs" target="_blank" rel="noreferrer"><span><strong>Anthropic</strong><small>美国、伦敦、巴黎等地招聘</small></span><Arrow diagonal /></a>
            <a href="https://www.linkedin.com/jobs/view/4330374800" target="_blank" rel="noreferrer"><span><strong>中国市场</strong><small>火山引擎等团队已设 FDE 岗位</small></span><Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <section className="clients-section" id="clients">
        <div className="clients-heading" data-reveal>
          <p className="eyebrow light">Client proof</p>
          <h2>这些企业已经为我的<br />AI 改造能力买单。</h2>
          <p>来自不同领域、拥有真实业务规模的企业选择采购我的服务，是比头衔更直接的能力证明。</p>
        </div>
        <div className="client-wall">
          {clients.map((client, index) => (
            <article key={client.type} data-reveal>
              <span className="client-index">0{index + 1}</span>
              <div className="client-mark">{client.mark}</div>
              <div><p>{client.type}</p><h3>{client.title}</h3><span>{client.note}</span></div>
            </article>
          ))}
        </div>
        <p className="clients-note">客户名称与敏感项目内容默认脱敏；展示范围遵循授权与保密边界。</p>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">FDE 做什么</p>
          <h2>从一个经营问题，<br />做到一套有人用的系统。</h2>
          <p className="section-summary">这不是只做咨询，也不是只写代码。FDE 从企业现场出发，一直负责到业务真正改变。</p>
        </div>
        <div className="approach-list">
          {approach.map((item) => (
            <article key={item.index} data-reveal>
              <span className="approach-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p className="approach-body">{item.body}</p>
              <span className="approach-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" id="case">
        <div className="case-heading" data-reveal>
          <div><p className="eyebrow light">真实案例 · 01</p><span>跨境电商企业 · 名称脱敏</span></div>
          <h2>企业 AI 改造的第一步，<br />不是写代码。</h2>
        </div>
        <div className="case-visual" data-reveal>
          <div className="case-statement">
            <p>一家年营收约 20 亿元的企业想推动全公司 AI 转型，却一直看不清应该从哪里开始。</p>
            <div className="case-big-number"><strong>20</strong><span>亿元<br />年营收约</span></div>
          </div>
          <div className="business-map" aria-label="脱敏的企业业务地图示意图">
            <span className="map-grid" aria-hidden="true" />
            <div className="map-node node-center"><small>企业目标</small><strong>AI 转型</strong></div>
            <div className="map-node node-one"><small>部门</small><strong>业务线</strong></div>
            <div className="map-node node-two"><small>一线</small><strong>岗位任务</strong></div>
            <div className="map-node node-three"><small>系统</small><strong>改造机会</strong></div>
            <div className="map-node node-four"><small>投入</small><strong>实施路线</strong></div>
            <svg className="map-lines" viewBox="0 0 800 560" preserveAspectRatio="none" aria-hidden="true"><path d="M400 280 C305 230 260 140 170 120 M400 280 C520 225 590 150 675 125 M400 280 C300 345 230 420 145 448 M400 280 C510 355 585 420 680 445" /></svg>
          </div>
        </div>
        <div className="case-outcome" data-reveal>
          <p className="outcome-lead">我与老板和业务主管深度访谈，把公司拆解为部门、业务线、岗位、人员、任务与流转关系。</p>
          <div className="outcome-metrics">
            <div><strong>10+</strong><span>企业已有程序员团队</span></div>
            <div><strong>1 天</strong><span>形成首版改造地图</span></div>
            <div><strong>2—3 级</strong><span>业务节点逐层展开</span></div>
          </div>
          <p className="outcome-note">最终形成可点击、可逐层展开的 AI 改造地图，让管理者第一次能从企业全局进入具体业务节点，看见改造机会、方式与大致投入。项目仍在推进，具体实施内容保密。</p>
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="product-heading" data-reveal>
          <p className="eyebrow">真实产品 · 02</p>
          <h2>我为电商企业，做了一套<br />完整的 AI 工作台。</h2>
          <p>它不是一个聊天机器人，也不是一张概念图，而是一套真正的软件：把企业知识、AI 执行、内容生产、团队协作、多平台发布和经营数据连接起来。产品已有客户使用，并在持续迭代。</p>
        </div>

        <div className="workspace-window" data-reveal>
          <div className="workspace-topbar"><div><i /><i /><i /></div><strong>企业 AI 工作台</strong><span>Live product</span></div>
          <aside>
            <div className="workspace-logo">知</div>
            {['开始工作', '企业知识库', 'AI 智能助理', '图片与视频', '团队协作', '多平台发布', '经营数据'].map((item, index) => <span className={index === 0 ? 'is-active' : ''} key={item}>{item}</span>)}
          </aside>
          <div className="workspace-main">
            <p>企业内容，不用从空白开始</p>
            <h3>告诉我结果，<br />剩下的交给 AI 工作台。</h3>
            <div className="workspace-prompt"><span>参考公司知识库，为新品完成本周内容方案并分配给团队</span><button type="button" aria-label="示意发送按钮">→</button></div>
            <div className="workspace-context"><span>已调用 12 份企业知识</span><span>已选择 3 个专家模板</span><span>计划发布 6 个平台</span></div>
          </div>
          <div className="workspace-side">
            <p>今日业务状态</p>
            <div><span>知识库</span><strong>2,480</strong><small>条可用知识</small></div>
            <div><span>内容任务</span><strong>18</strong><small>个正在流转</small></div>
            <div><span>发布渠道</span><strong>6</strong><small>个平台已连接</small></div>
          </div>
        </div>

        <div className="workspace-value" data-reveal>
          <strong>一个工作台，完成企业 AI 内容业务的完整闭环。</strong>
          <p>我主导完成用户调研、需求访谈、产品原型、前端与后端开发，并把多家电商企业的共同需求沉淀成可以复用和规模化销售的产品。</p>
        </div>

        <div className="product-features" data-reveal>
          {productLoop.map(([title, body], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
        <div className="product-proof" data-reveal><span>真实需求验证</span><span>已有客户使用</span><span>端到端独立完成</span><span>可复用、可规模化</span></div>
      </section>

      <section className="fit-section">
        <div className="fit-heading" data-reveal>
          <p className="eyebrow light">什么时候应该开始</p>
          <h2>企业有经营压力，<br />就是启动 AI 改造的信号。</h2>
        </div>
        <div className="fit-signals" data-reveal><span>收入增长遇到瓶颈</span><span>利润率持续下降</span><span>人力成本居高不下</span><span>重复工作过多</span><span>老板想做 AI，但不知道从哪里开始</span></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-main" data-reveal>
          <p className="eyebrow">从一个真实问题开始</p>
          <h2>我不先卖工具。<br />我们先把问题看清。</h2>
          <p>如果企业正面对增长、利润或人效压力，可以先预约一次 AI 改造初步沟通。项目范围与价格在调研后确定。</p>
          <a className="contact-link" href="#wechat">添加微信，预约沟通 <Arrow /></a>
        </div>
        <figure className="wechat" id="wechat" data-reveal>
          <div><Image src="/wechat-original.jpg" alt="谭凯宸微信二维码" fill sizes="280px" /></div>
          <figcaption><strong>扫码添加微信</strong><span>备注：企业 AI 改造</span></figcaption>
        </figure>
        <footer><span>© 2026 谭凯宸 AI 工作室</span><span>一人公司 · Enterprise AI</span><a href="#top">Back to top ↑</a></footer>
      </section>
    </main>
  );
}
