/**
 * 博客数据 —— 来源：CSDN 博客 weixin_45887097
 * 点击「阅读原文」会跳转到对应的 CSDN 文章页
 */

export interface BlogPost {
  id: string;
  number: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  categoryKey: string;
  readStats: {
    views: number;
    likes: number;
    comments: number;
    favorites: number;
  };
  csdnUrl: string;
  summary: string; // 文章要点
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    id: "162793869",
    number: "01",
    title: "关于安装李沐深度学习 d2l 包【2026.7 可用版】",
    excerpt:
      "本文提供了 2026 年 7 月可用的李沐深度学习 d2l 包安装指南。建议使用 Python 3.10.x 和 d2l 1.0.3 版本以避免兼容性问题。",
    date: "2026-07-11",
    category: "深度学习",
    categoryKey: "ai",
    readStats: { views: 255, likes: 8, comments: 1, favorites: 5 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/162793869",
    summary:
      "完整记录 conda 环境 + JupyterLab + d2l 1.0.3 + PyTorch CPU 版的安装步骤，含版本检查方法，新手可复现。",
    tags: ["Python", "conda", "PyTorch", "JupyterLab"],
  },
  {
    id: "158652929",
    number: "02",
    title: "Login_Vue3 项目（完全从 0 开始理解）",
    excerpt:
      "本文介绍了 Vue3 项目的基础结构和关键组件功能，包括 main.js 入口、App.vue 根组件和路由配置。",
    date: "2026-03-04",
    category: "前端",
    categoryKey: "frontend",
    readStats: { views: 456, likes: 9, comments: 1, favorites: 12 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/158652929",
    summary:
      "从 main.js 启动流程、App.vue 模板结构到 router/index.js 路由规则，再到 LoginView 与 HomeView 视图组件，详细拆解 Vue3 项目骨架。",
    tags: ["Vue3", "Router", "Pinia", "前端工程"],
  },
  {
    id: "158573322",
    number: "03",
    title: "springboot-login 全过程（含登录拦截、加密）",
    excerpt:
      "面向新手的全流程 login 教程，分层结构清晰：数据库表、common 层、config 层、自定义异常与全局异常处理。",
    date: "2026-03-02",
    category: "后端",
    categoryKey: "backend",
    readStats: { views: 620, likes: 11, comments: 0, favorites: 17 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/158573322",
    summary:
      "BCrypt 加密、JWT 预留、登录拦截器、全局异常处理一气呵成，SpringBoot 3.x + MyBatis 实战入门。",
    tags: ["SpringBoot", "MyBatis", "BCrypt", "JWT", "拦截器"],
  },
  {
    id: "158284298",
    number: "04",
    title: "关于 json 的理解测试！！",
    excerpt:
      "分析 Spring Controller 返回不同类型数据时的处理机制：对象走 Jackson 序列化，String 直接输出到响应体。",
    date: "2026-02-22",
    category: "后端",
    categoryKey: "backend",
    readStats: { views: 52, likes: 1, comments: 0, favorites: 0 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/158284298",
    summary:
      "通过对比测试展示 Spring 对 Java 对象与 String 的差异化处理策略，揭示底层序列化原理。",
    tags: ["Spring", "Jackson", "JSON", "序列化"],
  },
  {
    id: "158206574",
    number: "05",
    title: "spring 中的 @Autowired 到底是什么",
    excerpt:
      "@Autowired 注解用于从 Spring 容器获取对象实现依赖注入，体现 IOC 控制反转思想，便于切换实现类。",
    date: "2026-02-19",
    category: "后端",
    categoryKey: "backend",
    readStats: { views: 490, likes: 13, comments: 0, favorites: 6 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/158206574",
    summary:
      "对比 new 对象与 @Autowired 的差异：降低耦合、单例管理、便于切换 MySQL→Oracle 实现，配合 @Primary 注解。",
    tags: ["Spring", "@Autowired", "IOC", "DI"],
  },
  {
    id: "151046425",
    number: "06",
    title: "1.2 操作系统发展历程",
    excerpt:
      "操作系统发展经历了批处理、分时、实时等阶段，各阶段在资源管理、任务调度和人机交互方面不断演进。",
    date: "2025-08-31",
    category: "操作系统",
    categoryKey: "os",
    readStats: { views: 919, likes: 14, comments: 0, favorites: 6 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/151046425",
    summary:
      "批处理（单道/多道）→ 分时（时间片轮转）→ 实时（硬实时/软实时）→ 网络操作系统 → 分布式系统的完整脉络。",
    tags: ["408", "操作系统", "批处理", "分时", "实时"],
  },
  {
    id: "151045859",
    number: "07",
    title: "1.1 操作系统的基本概念",
    excerpt:
      "操作系统核心概念：用户接口、四大基本特征（并发、共享、虚拟、异步）、库函数与系统调用的区别。",
    date: "2025-08-31",
    category: "操作系统",
    categoryKey: "os",
    readStats: { views: 345, likes: 5, comments: 0, favorites: 4 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/151045859",
    summary:
      "并发 vs 并行、互斥共享 vs 同时共享、库函数 vs 系统调用，408 操作系统系列第一篇。",
    tags: ["408", "操作系统", "并发", "系统调用"],
  },
  {
    id: "143280445",
    number: "08",
    title: "SQL 多表设计",
    excerpt: "建立关系连接——SQL 多表设计的核心：一对多、多对多、外键约束与连接查询。",
    date: "2024-10-29",
    category: "数据库",
    categoryKey: "db",
    readStats: { views: 906, likes: 23, comments: 1, favorites: 9 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/143280445",
    summary:
      "讲解外键约束、级联操作、连接查询（内连、左外、右外、自连），结合实例演示多表设计实战。",
    tags: ["MySQL", "外键", "JOIN", "数据库设计"],
  },
  {
    id: "142679209",
    number: "09",
    title: "JavaSE 之泛型专题",
    excerpt:
      "泛型在编译阶段约束数据类型并自动检查；类型变量建议用大写字母 E/T/K/V，含泛型类、泛型接口、泛型方法。",
    date: "2024-10-02",
    category: "Java",
    categoryKey: "java",
    readStats: { views: 371, likes: 8, comments: 0, favorites: 4 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142679209",
    summary:
      "泛型定义、通配符、包装类与自动装箱拆箱、泛型方法与泛型接口，JavaSE 进阶专题。",
    tags: ["Java", "泛型", "包装类", "JavaSE"],
  },
  {
    id: "142621539",
    number: "10",
    title: "JavaSE 之异常专题",
    excerpt:
      "throws 将方法内部异常抛给调用者处理；throw 直接捕获并抛出异常。完整的 Java 异常处理体系。",
    date: "2024-09-28",
    category: "Java",
    categoryKey: "java",
    readStats: { views: 357, likes: 8, comments: 0, favorites: 2 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142621539",
    summary:
      "Error vs Exception、受检异常 vs 运行时异常、try-catch-finally、自定义异常，JavaSE 进阶专题。",
    tags: ["Java", "异常", "try-catch", "JavaSE"],
  },
  {
    id: "142571347",
    number: "11",
    title: "SQL 查询语句的顺序详解",
    excerpt:
      "SQL 引擎的实际执行顺序与书写顺序不同。FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT。",
    date: "2024-09-26",
    category: "数据库",
    categoryKey: "db",
    readStats: { views: 992, likes: 7, comments: 0, favorites: 3 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142571347",
    summary:
      "以 sales 表为例，按销售额降序取前 5，详解 SQL 执行顺序与书写顺序的差异。",
    tags: ["MySQL", "SELECT", "JOIN", "GROUP BY"],
  },
  {
    id: "142467333",
    number: "12",
    title: "Java 函数式编程",
    excerpt:
      "JDBC（Java DataBase Connectivity）：使用 Java 操作关系型数据库的一套 API；含 mysql 依赖与连接流程。",
    date: "2024-09-23",
    category: "Java",
    categoryKey: "java",
    readStats: { views: 794, likes: 22, comments: 0, favorites: 17 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142467333",
    summary:
      "Lambda 表达式、函数式接口、Stream API、方法引用，Java 8 函数式编程核心特性实战。",
    tags: ["Java", "Lambda", "Stream", "函数式"],
  },
  {
    id: "142417517",
    number: "13",
    title: "MyBatis",
    excerpt:
      "JDBC 入门到 MyBatis 持久层框架；mysql 依赖配置、核心配置、Mapper 接口与 XML 映射。",
    date: "2024-09-21",
    category: "后端",
    categoryKey: "backend",
    readStats: { views: 1331, likes: 16, comments: 0, favorites: 19 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142417517",
    summary:
      "从 JDBC 原生 API 到 MyBatis 的演进，SqlSession、Mapper 代理、动态 SQL、一对多关联查询。",
    tags: ["MyBatis", "JDBC", "Mapper", "持久层"],
  },
  {
    id: "142146979",
    number: "14",
    title: "Eclipse WEB 项目在 IDEA 中使用",
    excerpt:
      "给迷路的大学生：如何把 Eclipse 的 javaweb 项目正确迁移到 IDEA，解决路径与依赖问题。",
    date: "2024-09-11",
    category: "工具",
    categoryKey: "tool",
    readStats: { views: 2987, likes: 6, comments: 0, favorites: 32 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142146979",
    summary:
      "项目导入、Web 资源目录配置、Tomcat 部署、依赖修复，全流程解决 Eclipse→IDEA 迁移问题。",
    tags: ["IDEA", "Eclipse", "JavaWeb", "Tomcat"],
  },
  {
    id: "142066868",
    number: "15",
    title: "SQL 基础语句",
    excerpt:
      "查询（desc / show create）、使用（use）、创建（database / table）、约束（约束是作用于表中字段上的规则）。",
    date: "2024-09-09",
    category: "数据库",
    categoryKey: "db",
    readStats: { views: 1870, likes: 16, comments: 2, favorites: 6 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/142066868",
    summary:
      "DDL / DML / DQL / DCL 语句大全，约束类型（主键、唯一、非空、默认、外键、自增），SQL 入门必读。",
    tags: ["MySQL", "DDL", "DML", "约束"],
  },
  {
    id: "141870415",
    number: "16",
    title: "SpringBoot Web 请求响应",
    excerpt: "请求 / 响应 / 分层解耦：Controller-Service-Dao 三层架构在 SpringBoot 中的落地。",
    date: "2024-09-03",
    category: "后端",
    categoryKey: "backend",
    readStats: { views: 1148, likes: 26, comments: 0, favorites: 13 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/141870415",
    summary:
      "@RestController、@RequestMapping、@RequestParam、@RequestBody、@ResponseBody，分层解耦实战。",
    tags: ["SpringBoot", "RESTful", "MVC", "分层"],
  },
  {
    id: "141368502",
    number: "17",
    title: "linux 服务之 iSCSI (centos7.6)",
    excerpt:
      "DAS / NAS / SAN 三种存储架构对比；iSCSI 服务端与客户端配置、target 与 initiator 实战。",
    date: "2024-08-20",
    category: "Linux",
    categoryKey: "linux",
    readStats: { views: 1856, likes: 18, comments: 0, favorites: 13 },
    csdnUrl: "https://blog.csdn.net/weixin_45887097/article/details/141368502",
    summary:
      "DAS（直连）/ NAS（网络共享文件夹）/ SAN（共享设备），iSCSI target 配置与 initiator 挂载全流程。",
    tags: ["Linux", "CentOS", "iSCSI", "SAN", "存储"],
  },
];
