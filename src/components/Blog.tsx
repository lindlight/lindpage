import { useState } from "react";
import { blogs } from "@/data/blogs";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { key: "all", label: "全部" },
  { key: "backend", label: "后端" },
  { key: "frontend", label: "前端" },
  { key: "java", label: "Java" },
  { key: "db", label: "数据库" },
  { key: "os", label: "操作系统" },
  { key: "linux", label: "Linux" },
  { key: "ai", label: "深度学习" },
  { key: "tool", label: "工具" },
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export function Blog() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? blogs : blogs.filter((b) => b.categoryKey === filter);

  return (
    <section id="blog" className="container py-20 lg:py-28 border-t border-border-soft">
      {/* 章节头 */}
      <Reveal className="mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="section-tag mb-4">recent posts</p>
            <h2 className="heading text-section-xl text-ink">
              最新文章
              <span className="text-ink-faint font-normal text-base ml-3">
                / {blogs.length} posts
              </span>
            </h2>
            <p className="mt-3 text-ink-soft max-w-2xl">
              来自 CSDN 博客「{profile.csdnName}」的最新 {blogs.length} 篇原创文章。
              点击卡片跳转至 CSDN 原文阅读。
            </p>
          </div>
          <a
            href={profile.csdnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm font-medium text-accent self-start lg:self-end"
          >
            查看全部 43 篇 →
          </a>
        </div>
      </Reveal>

      {/* 分类过滤 */}
      <Reveal delay={80} className="mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all",
                filter === cat.key
                  ? "bg-accent text-white border-accent"
                  : "bg-bg-soft text-ink-soft border-border-soft hover:border-ink-soft hover:text-ink"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* 文章列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((post, idx) => (
          <Reveal key={post.id} delay={Math.min(idx * 40, 240)}>
            <a
              href={post.csdnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block p-5 h-full"
            >
              {/* 卡片头 */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-ink-faint font-mono">
                    {post.number.padStart(2, "0")}
                  </span>
                  <span className="text-border">·</span>
                  <CategoryBadge categoryKey={post.categoryKey} label={post.category} />
                </div>
                <time className="text-xs text-ink-faint font-mono tabular-nums">
                  {formatDate(post.date)}
                </time>
              </div>

              {/* 标题 */}
              <h3 className="font-semibold text-base leading-[1.5] text-ink mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              {/* 摘要 */}
              <p className="text-sm text-ink-soft leading-[1.65] mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.625rem] px-1.5 py-0.5 bg-bg-soft border border-border-soft rounded font-mono text-ink-soft"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* 卡片底 */}
              <div className="flex items-center justify-between pt-3 border-t border-border-soft">
                <div className="flex items-center gap-3 text-xs text-ink-faint">
                  <span className="flex items-center gap-1">
                    <Eye /> {post.readStats.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart /> {post.readStats.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star /> {post.readStats.favorites}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-accent group-hover:gap-2 transition-all">
                  阅读
                  <ArrowRight />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card p-12 text-center text-ink-soft">
          暂无该分类的文章
        </div>
      )}
    </section>
  );
}

function CategoryBadge({ categoryKey, label }: { categoryKey: string; label: string }) {
  const styleMap: Record<string, string> = {
    backend: "bg-accent-soft text-accent border-accent/20",
    frontend: "bg-cyan/10 text-cyan border-cyan/20",
    java: "bg-orange/10 text-orange border-orange/20",
    db: "bg-purple/10 text-purple border-purple/20",
    os: "bg-pink/10 text-pink border-pink/20",
    linux: "bg-warn/10 text-warn border-warn/20",
    ai: "bg-cyan/10 text-cyan border-cyan/20",
    tool: "bg-bg-elevated text-ink-soft border-border-soft",
  };
  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded text-[0.625rem] font-medium border",
        styleMap[categoryKey] ?? "bg-bg-elevated text-ink-soft border-border-soft"
      )}
    >
      {label}
    </span>
  );
}

function Eye() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 2.5C4.5 2.5 1.5 8 1.5 8s3 5.5 6.5 5.5S14.5 8 14.5 8 11.5 2.5 8 2.5zm0 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-1.5a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}
function Heart() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 14s-5-3.5-5-7a3 3 0 015-2.2A3 3 0 0113 7c0 3.5-5 7-5 7z" />
    </svg>
  );
}
function Star() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2 4.5 5 .4-3.8 3.3 1.2 4.9L8 11.8 3.6 14.1l1.2-4.9L1 5.9l5-.4L8 1z" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8h12M14 8L8 2M14 8L8 14" />
    </svg>
  );
}
