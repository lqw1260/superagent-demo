# 寄件小站 · 演示仓

一个只有几十行的静态页，专门用来演示 Super-agent 的一次完整链路：

```
一句 @ 请求  →  Trigger / Thread  →  Eval（准入 + 研判）  →  Ticket + Mandate
            →  Assignment  →  worker Session（独立目录）  →  改一行 CSS  →  跑 check
            →  开 PR  →  回报  →  人在 PR 里评论  →  直通 worker  →  merge  →  再一句评论唤醒
```

## 怎么验证

```sh
node check.mjs
```

零依赖，只检查三件事：`--title-size` 用 rem、标题引用了这个变量、HTML 链到了样式表。
