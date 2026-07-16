import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* 背景装饰 */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full opacity-[0.15] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(9, 105, 218, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[32rem] h-[32rem] rounded-full opacity-[0.1] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(130, 80, 223, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-8 items-center">
          {/* 左：个人介绍 */}
          <div className="col-span-12 lg:col-span-7">
            {/* 状态标签 */}
            <div
              className="flex items-center gap-3 mb-8 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green/10 border border-green/30 rounded-full text-xs font-medium text-green">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                接受合作与交流
              </span>
              <span className="font-mono text-xs text-ink-faint">
                {profile.location} · 码龄 {profile.codeAge}
              </span>
            </div>

            {/* 姓名 */}
            <h1
              className="heading text-hero text-ink mb-4 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              你好，我是
              <span className="block mt-1">
                {profile.csdnName}
                <span className="text-accent">.</span>
              </span>
            </h1>

            {/* 身份 */}
            <p
              className="text-xl lg:text-2xl text-ink-soft font-medium mb-6 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Java 后端工程师 · 全栈学习者
            </p>

            {/* 一句话介绍 */}
            <p
              className="text-lg leading-[1.7] text-ink-soft max-w-2xl mb-8 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              {profile.bio} 在 CSDN 持续输出技术笔记 {profile.codeAge}，
              <span className="text-ink font-medium">{profile.stats.originals} 篇原创</span>，
              累计访问 <span className="text-ink font-medium">{profile.stats.visits}</span> 次。
            </p>

            {/* 座右铭 */}
            <blockquote
              className="border-l-2 border-accent pl-4 italic text-ink-soft mb-8 max-w-xl animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {profile.motto}
            </blockquote>

            {/* 行动按钮 */}
            <div
              className="flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={profile.csdnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>访问 CSDN 博客</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 8h12M14 8L8 2M14 8L8 14" />
                </svg>
              </a>
              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                <span>浏览博客</span>
              </a>
            </div>

            {/* 技术栈标签 */}
            <div
              className="mt-10 flex flex-wrap items-center gap-2 animate-fade-up"
              style={{ animationDelay: "480ms" }}
            >
              <span className="font-mono text-xs text-ink-faint mr-2">技术栈 →</span>
              {profile.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-1 bg-bg-soft border border-border-soft rounded-md font-mono text-xs text-ink-soft hover:border-accent hover:text-accent transition-colors"
                >
                  {tech.name}
                </span>
              ))}
              <span className="font-mono text-xs text-ink-faint">+{profile.stack.length - 6}</span>
            </div>
          </div>

          {/* 右：头像 + 数据卡 */}
          <aside
            className="col-span-12 lg:col-span-5 lg:pl-8 animate-fade-up"
            style={{ animationDelay: "560ms" }}
          >
            <div className="card p-6 lg:p-8">
              {/* 头像 + 名字 */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-soft">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.csdnName}
                    className="h-16 w-16 rounded-full border-2 border-accent/30 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-green border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-lg">{profile.csdnName}</p>
                  <p className="text-sm text-ink-soft font-mono">@{profile.csdnId}</p>
                </div>
              </div>

              {/* 数据网格 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatItem label="原创文章" value={profile.stats.originals} unit="篇" />
                <StatItem label="总访问" value={profile.stats.visits} unit="次" />
                <StatItem label="粉丝" value={profile.stats.fans} unit="人" />
                <StatItem label="获赞" value={profile.stats.likes} unit="次" />
              </div>

              {/* 加入时间 */}
              <div className="flex items-center justify-between pt-4 border-t border-border-soft text-xs">
                <span className="text-ink-faint font-mono">
                  加入 CSDN
                </span>
                <span className="text-ink-soft font-mono">{profile.joinDate}</span>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs">
                <span className="text-ink-faint font-mono">
                  博客排名
                </span>
                <span className="text-ink-soft font-mono">#{profile.stats.rank}</span>
              </div>

              {/* CSDN 链接 */}
              <a
                href={profile.csdnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-accent-soft border border-accent/30 rounded-lg text-accent hover:bg-accent hover:text-white transition-colors text-sm font-medium"
              >
                <span>访问 CSDN 主页</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 8h12M14 8L8 2M14 8L8 14" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value, unit }: { label: string; value: string | number; unit: string }) {
  return (
    <div>
      <p className="font-mono text-[0.6875rem] tracking-wider uppercase text-ink-faint mb-1">
        {label}
      </p>
      <p className="text-2xl font-semibold text-ink tabular-nums">
        {value}
        <span className="text-xs text-ink-faint font-normal ml-1">{unit}</span>
      </p>
    </div>
  );
}
