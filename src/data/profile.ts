/**
 * 个人资料数据 —— 来源：CSDN 博客 weixin_45887097
 */

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export interface Column {
  name: string;
  count: number;
  url: string;
}

export interface Profile {
  csdnId: string;
  csdnName: string;
  csdnUrl: string;
  avatar: string;
  codeAge: string;
  joinDate: string;
  location: string;
  bio: string;
  motto: string;
  stats: {
    visits: string;
    originals: number;
    fans: number;
    following: number;
    likes: number;
    favorites: number;
    rank: string;
    forceLevel: number;
  };
  stack: {
    name: string;
    level: number; // 0-100
    category: "backend" | "frontend" | "db" | "os" | "devops";
  }[];
  columns: Column[];
  socials: SocialLink[];
}

export const profile: Profile = {
  csdnId: "weixin_45887097",
  csdnName: "今心上",
  csdnUrl: "https://blog.csdn.net/weixin_45887097",
  avatar:
    "https://aka.doubaocdn.com/s/QBKz1wmy4m",
  codeAge: "7 年",
  joinDate: "2019-11-16",
  location: "浙江 · Zhejiang",
  bio: "Java 后端工程师 / 全栈学习者。专注 SpringBoot、Vue3、Linux、操作系统与算法题解。在 CSDN 持续输出技术笔记 7 年。",
  motto: "今心上，尽心上。",
  stats: {
    visits: "43,933",
    originals: 43,
    fans: 282,
    following: 112,
    likes: 512,
    favorites: 508,
    rank: "23,794",
    forceLevel: 3,
  },
  stack: [
    { name: "Java", level: 88, category: "backend" },
    { name: "SpringBoot", level: 82, category: "backend" },
    { name: "MyBatis", level: 78, category: "backend" },
    { name: "Vue3", level: 70, category: "frontend" },
    { name: "MySQL", level: 80, category: "db" },
    { name: "Linux", level: 75, category: "devops" },
    { name: "操作系统", level: 72, category: "os" },
    { name: "算法", level: 68, category: "os" },
  ],
  columns: [
    { name: "java web", count: 7, url: "https://blog.csdn.net/weixin_45887097/category_12775164.html" },
    { name: "408-操作系统", count: 2, url: "https://blog.csdn.net/weixin_45887097/category_13038807.html" },
    { name: "SQL", count: 3, url: "https://blog.csdn.net/weixin_45887097/category_12780410.html" },
    { name: "java se", count: 3, url: "https://blog.csdn.net/weixin_45887097/category_12792852.html" },
    { name: "linux", count: 6, url: "https://blog.csdn.net/weixin_45887097/category_12747965.html" },
    { name: "洛谷题解", count: 13, url: "https://blog.csdn.net/weixin_45887097/category_12582052.html" },
    { name: "天梯赛题解", count: 1, url: "https://blog.csdn.net/weixin_45887097/category_12597939.html" },
  ],
  socials: [
    { label: "CSDN 博客", handle: "@weixin_45887097", url: "https://blog.csdn.net/weixin_45887097" },
    { label: "GitHub", handle: "@weixin_45887097", url: "https://github.com" },
    { label: "洛谷", handle: "@今心上", url: "https://www.luogu.com.cn" },
  ],
};
