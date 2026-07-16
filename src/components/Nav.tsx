import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "stats", label: "数据" },
  { id: "blog", label: "博客" },
  { id: "stack", label: "技术栈" },
  { id: "contact", label: "联系" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-3.5">
        {/* 左：标识 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2.5"
          aria-label="返回顶部"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-ink text-white rounded-lg font-semibold text-sm group-hover:bg-accent transition-colors">
            {profile.csdnName.charAt(0)}
          </span>
          <span className="font-medium text-ink group-hover:text-accent transition-colors">
            {profile.csdnName}
          </span>
        </button>

        {/* 中：导航 */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="px-3 py-1.5 rounded-md text-sm text-ink-soft hover:text-ink hover:bg-bg-soft transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 右：CSDN 链接 */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={profile.csdnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-1.5 !px-3 !text-xs"
          >
            <span>CSDN</span>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8h12M14 8L8 2M14 8L8 14" />
            </svg>
          </a>
        </div>

        {/* 移动端按钮 */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
          aria-expanded={open}
        >
          <span className={cn("block w-5 h-px bg-ink transition-all", open && "rotate-45 translate-y-[5px]")} />
          <span className={cn("block w-5 h-px bg-ink transition-all", open && "opacity-0")} />
          <span className={cn("block w-5 h-px bg-ink transition-all", open && "-rotate-45 -translate-y-[4px]")} />
        </button>
      </div>

      {/* 移动端菜单 */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-bg/95 backdrop-blur-md",
          open ? "max-h-96 border-b border-border" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col py-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="py-3 text-left text-ink hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={profile.csdnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-accent"
          >
            CSDN 博客 →
          </a>
        </nav>
      </div>
    </header>
  );
}
