import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

const CATEGORY_LABEL: Record<string, string> = {
  backend: "后端",
  frontend: "前端",
  db: "数据库",
  os: "操作系统/算法",
  devops: "运维/DevOps",
};

const CATEGORY_COLOR: Record<string, string> = {
  backend: "bg-accent",
  frontend: "bg-cyan",
  db: "bg-purple",
  os: "bg-pink",
  devops: "bg-warn",
};

export function About() {
  return (
    <section id="stats" className="container py-20 lg:py-28 border-t border-border-soft">
      {/* 章节头 */}
      <Reveal className="mb-12">
        <p className="section-tag mb-4">blog stats</p>
        <h2 className="heading text-section-xl text-ink">
          博客数据
          <span className="text-ink-faint font-normal text-base ml-3">/ csdn metrics</span>
        </h2>
        <p className="mt-3 text-ink-soft max-w-2xl">
          在 CSDN 持续创作 {profile.codeAge}，累计 {profile.stats.originals} 篇原创文章。
          以下是来自 CSDN 主页的真实统计数据。
        </p>
      </Reveal>

      {/* 数据指标网格 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
        {[
          { label: "总访问量", value: profile.stats.visits, icon: "eye", color: "text-accent" },
          { label: "原创文章", value: `${profile.stats.originals} 篇`, icon: "edit", color: "text-green" },
          { label: "粉丝数", value: profile.stats.fans, icon: "heart", color: "text-pink" },
          { label: "获赞数", value: profile.stats.likes, icon: "star", color: "text-warn" },
          { label: "收藏数", value: profile.stats.favorites, icon: "bookmark", color: "text-purple" },
          { label: "关注数", value: profile.stats.following, icon: "users", color: "text-cyan" },
          { label: "博客排名", value: `#${profile.stats.rank}`, icon: "trophy", color: "text-orange" },
          { label: "原力等级", value: `Lv.${profile.stats.forceLevel}`, icon: "bolt", color: "text-accent" },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={Math.min(i * 40, 280)}>
            <div className="card p-4 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-ink-faint font-medium">{stat.label}</span>
                <Icon name={stat.icon} className={stat.color} />
              </div>
              <p className="text-xl font-semibold text-ink tabular-nums">{stat.value}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 技术栈 + 专栏 双栏 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 技术栈 */}
        <Reveal>
          <div id="stack" className="card p-6 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-ink">技术栈</h3>
              <span className="text-xs text-ink-faint font-mono">{profile.stack.length} skills</span>
            </div>
            <div className="space-y-4">
              {profile.stack.map((s, i) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-ink">{s.name}</span>
                      <span className="text-[0.625rem] px-1.5 py-0.5 bg-bg-soft rounded text-ink-faint">
                        {CATEGORY_LABEL[s.category]}
                      </span>
                    </div>
                    <span className="text-xs text-ink-soft font-mono tabular-nums">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full origin-left animate-bar-grow ${CATEGORY_COLOR[s.category]}`}
                      style={{ width: `${s.level}%`, animationDelay: `${i * 80}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 专栏 */}
        <Reveal delay={100}>
          <div className="card p-6 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-ink">博客专栏</h3>
              <span className="text-xs text-ink-faint font-mono">
                共 {profile.columns.reduce((sum, c) => sum + c.count, 0)} 篇
              </span>
            </div>
            <ul className="space-y-1">
              {profile.columns.map((col) => (
                <li key={col.name}>
                  <a
                    href={col.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-3 py-2.5 -mx-3 rounded-lg hover:bg-bg-soft transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center bg-bg-elevated rounded text-xs">
                        <FolderIcon />
                      </span>
                      <span className="text-sm text-ink group-hover:text-accent transition-colors">
                        {col.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-ink-soft tabular-nums">{col.count} 篇</span>
                      <span className="text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all">→</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* 个人简介 */}
      <Reveal delay={150}>
        <div className="mt-6 card p-6 lg:p-8">
          <h3 className="font-semibold text-ink mb-4">关于我</h3>
          <p className="text-ink-soft leading-[1.8] max-w-3xl">
            {profile.bio} 2019 年加入 CSDN，主要专注 Java 后端（SpringBoot、MyBatis），
            同时学习 Vue3 前端、MySQL 数据库、Linux 运维与 408 操作系统课程。
            业余时间在洛谷与天梯赛刷算法题，并持续整理学习笔记发布在博客。
          </p>
          <p className="mt-4 text-ink-soft leading-[1.8] italic border-l-2 border-accent pl-4">
            {profile.motto}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    eye: <path d="M8 2.5C4.5 2.5 1.5 8 1.5 8s3 5.5 6.5 5.5S14.5 8 14.5 8 11.5 2.5 8 2.5zm0 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-1.5a2 2 0 100-4 2 2 0 000 4z" />,
    edit: <path d="M11.5 2.5l2 2L5 13l-2.5.5L3 11l8.5-8.5zM10 4l2 2M2 14h12" />,
    heart: <path d="M8 14s-5-3.5-5-7a3 3 0 015-2.2A3 3 0 0113 7c0 3.5-5 7-5 7z" />,
    star: <path d="M8 1l2 4.5 5 .4-3.8 3.3 1.2 4.9L8 11.8 3.6 14.1l1.2-4.9L1 5.9l5-.4L8 1z" />,
    bookmark: <path d="M3 2h10v12l-5-3-5 3V2z" />,
    users: <path d="M5 7a2 2 0 100-4 2 2 0 000 4zm0 1c-2 0-4 1-4 3v1h8v-1c0-2-2-3-4-3zm6-1a2 2 0 100-4 2 2 0 000 4zm0 1c-.5 0-1 .1-1.4.3 1 .6 1.4 1.5 1.4 2.7v1H15v-1c0-2-2-3-4-3z" />,
    trophy: <path d="M5 2h6v2h2v3a4 4 0 01-8 0V4h0V2zm0 2H3v2a2 2 0 002 2V4zm6 0v2a2 2 0 002-2V4h-2zM6 12h4v2H6v-2z" />,
    bolt: <path d="M8 1L3 9h4l-1 6 5-8H7l1-6z" />,
  };
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className={className}>
      {icons[name]}
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-ink-soft">
      <path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V4z" />
    </svg>
  );
}
