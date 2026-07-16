import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="container py-20 lg:py-28 border-t border-border-soft">
      <Reveal className="mb-10">
        <p className="section-tag mb-4">contact</p>
        <h2 className="heading text-section-xl text-ink">
          联系方式
          <span className="text-ink-faint font-normal text-base ml-3">/ get in touch</span>
        </h2>
        <p className="mt-3 text-ink-soft max-w-2xl">
          欢迎通过以下方式与我交流，无论是技术讨论、合作邀约还是学习问题。
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 主要 CTA - CSDN */}
        <Reveal>
          <a
            href={profile.csdnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card group block p-6 lg:p-8 h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-ink-faint font-medium">主要阵地</span>
              <span className="flex items-center gap-1.5 text-xs text-green">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                活跃中
              </span>
            </div>
            <p className="text-xs text-ink-faint font-mono mb-2">CSDN 博客主页</p>
            <p className="text-3xl font-semibold text-ink group-hover:text-accent transition-colors mb-3">
              {profile.csdnName}
            </p>
            <p className="text-ink-soft leading-[1.7] mb-5">
              {profile.stats.originals} 篇原创文章 · {profile.stats.visits} 次访问 ·
              {profile.stats.fans} 位粉丝 · 持续更新中
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <span className="font-mono">blog.csdn.net/{profile.csdnId}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M2 8h12M14 8L8 2M14 8L8 14" />
              </svg>
            </div>
          </a>
        </Reveal>

        {/* 其他链接 */}
        <Reveal delay={100}>
          <div className="card p-6 lg:p-8 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-ink">其他平台</h3>
              <span className="text-xs text-ink-faint font-mono">{profile.socials.length} links</span>
            </div>
            <ul className="space-y-1">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-3 py-3 -mx-3 rounded-lg hover:bg-bg-soft transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center bg-bg-elevated rounded-lg text-ink-soft group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                        <ExternalIcon />
                      </span>
                      <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                        {s.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-ink-soft font-mono">{s.handle}</span>
                      <span className="text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all">→</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-border-soft">
              <p className="text-sm text-ink-soft italic">
                "{profile.motto}"
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 3h3v3M13 3l-6 6M11 9v3a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h3" />
    </svg>
  );
}
