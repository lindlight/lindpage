import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* 左：版权 */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center bg-ink text-white rounded-lg font-semibold text-sm">
              {profile.csdnName.charAt(0)}
            </span>
            <div>
              <p className="font-medium text-ink text-sm">{profile.csdnName}</p>
              <p className="text-xs text-ink-faint font-mono">
                © {year} · {profile.location} · 码龄 {profile.codeAge}
              </p>
            </div>
          </div>

          {/* 中：技术栈 */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
            <span className="font-mono">Built with</span>
            <span className="px-2 py-0.5 bg-bg-soft border border-border-soft rounded font-mono">React</span>
            <span className="px-2 py-0.5 bg-bg-soft border border-border-soft rounded font-mono">Vite</span>
            <span className="px-2 py-0.5 bg-bg-soft border border-border-soft rounded font-mono">Tailwind</span>
          </div>

          {/* 右：CSDN 链接 */}
          <a
            href={profile.csdnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-accent font-medium"
          >
            访问 CSDN 博客 →
          </a>
        </div>

        <p className="mt-6 pt-6 border-t border-border-soft text-center text-xs text-ink-faint italic">
          {profile.motto}
        </p>
      </div>
    </footer>
  );
}
