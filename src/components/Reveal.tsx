import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
}

/**
 * 滚动揭示容器：进入视口时添加 is-visible 类
 * 配合 index.css 中的 .reveal 类使用
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
