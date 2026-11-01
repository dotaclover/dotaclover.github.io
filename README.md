# dotaclover.github.io

天才程序员顺哥的 GitHub Pages：根目录是个人主页，`demos/` 下是 8 个静态网站示例。

```text
/                        个人主页（一页简历 + 联系方式，链到服务页与示例站）
/demos/                  示例站索引
/demos/<slug>/           8 个示例站，slug：cafe bakery card service studio folio album stream
```

## 爬虫

- 根目录与 `demos/` 的索引页可以收录。
- 8 个示例站**不许收录**：每页带 `<meta name="robots" content="noindex">`，根 `robots.txt` 里 `Disallow: /demos/`。
  `robots.txt` 是从 clover-opc 那边发布时重写的，别手工改回 `Allow: /`——那样会把 8 个示例站一起放开。

## 怎么更新

产物不在这个仓库里手改，由 clover-opc 的 `scripts/publish_gh_pages.py` 生成：

```bash
# 在 clover-opc 仓库根执行
python scripts/publish_gh_pages.py           # 个人主页 → 根，8 个示例站 → demos/
python scripts/publish_gh_pages.py --demos   # 只重发示例站
python scripts/publish_gh_pages.py --root    # 只重发个人主页
```

脚本写完会自己断言域名换干净、`noindex` 还在、根 `robots.txt` 挡着 `/demos/`，全过再在这里提交推送。

## 本地预览

纯静态，无需构建。在项目目录运行：

```bash
python -m http.server 8080 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:8080/>，示例站是 <http://127.0.0.1:8080/demos/>。
