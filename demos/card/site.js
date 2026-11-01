/* 站点资料：这是本模板唯一要改的文件。
   改完保存，刷新页面正文就变了，不用重新构建。
   site 块（title / description / ogImage / url）是 SEO 资料，重烤后会写进 index.html 的 <head>。

   重烤命令（在 engine/ 目录下执行，把 <站点目录> 换成这个文件夹的路径）：
       node build.mjs --site <站点目录>
*/
window.SITE = {
  "lang": "zh-CN",
  "layout": "card",
  "contactBar": true,
  "site": {
    "title": "林小满｜自由摄影师 · 人像与婚礼跟拍",
    "description": "示例内容。独立摄影师，接人像、婚礼跟拍和品牌短片。可约影棚也可上门拍，档期提前两周约，先聊需求再报价。",
    "url": "https://dotaclover.github.io/demos/card/",
    "favicon": "./images/favicon.svg",
    "faviconIco": "./images/favicon.ico",
    "appleTouchIcon": "./images/apple-touch-icon.png",
    "ogImage": "./images/work-01.jpg"
  },
  "theme": {
    "primary": "#0f5e52",
    "primaryDark": "#0a3f37",
    "accent": "#e8a33d"
  },
  "brand": {
    "name": "林小满",
    "mark": "小满",
    "role": "自由摄影师 · 广州",
    "avatar": "./images/avatar.jpg"
  },
  "business": {
    "type": "ProfessionalService",
    "locality": "广州",
    "openingHours": "Mo-Su 10:00-20:00"
  },
  "card": {
    "kicker": "GUANGZHOU · PORTFOLIO",
    "tags": [
      "人像约拍",
      "婚礼跟拍",
      "品牌短片",
      "照片精修"
    ],
    "worksTitle": "最近拍的一些",
    "worksNote": "影棚日常、人像和婚礼跟拍。以下是演示素材，不是客户案例。",
    "works": [
      {
        "src": "./images/work-01.jpg",
        "alt": "相机与镜头放在木桌上"
      },
      {
        "src": "./images/work-02.jpg",
        "alt": "调试三脚架的准备工作"
      },
      {
        "src": "./images/work-03.jpg",
        "alt": "影棚里的柔光箱"
      },
      {
        "src": "./images/work-04.jpg",
        "alt": "反光板把光打到白背景上"
      },
      {
        "src": "./images/work-05.jpg",
        "alt": "走廊上摆好的椅子和白花"
      },
      {
        "src": "./images/work-06.jpg",
        "alt": "窗台上的胶卷和镜头"
      },
      {
        "src": "./images/work-07.jpg",
        "alt": "挂在衣柜上的婚纱"
      },
      {
        "src": "./images/work-08.jpg",
        "alt": "桌上摊开的笔记本与笔"
      },
      {
        "src": "./images/work-09.jpg",
        "alt": "门边的相机包"
      }
    ]
  },
  "hero": {
    "title": "接得住活动，也拍得住日常",
    "lead": "独立摄影师，接人像、婚礼跟拍和品牌短片。约拍前先聊清楚要什么、成片什么时候要，档期提前两周约。"
  },
  "about": {
    "title": "关于我",
    "paragraphs": [
      "拍人像七年，从证件照到婚礼跟拍。最常被夸的是「你拍的照片像本人」，不是把脸修成另一个人。",
      "常驻广州，可以约影棚，也可以带上灯上门。外地客户走远程沟通，成片先给预览再定稿。",
      "只接能拍好的活：光线不行、时间不够、要的效果超出成片能力的，我会直说。"
    ]
  },
  "contact": {
    "phone": "13800000000",
    "wechat": "demo_photography",
    "wechatQr": "./images/wechat-qr.png",
    "area": "广州可上门",
    "hours": "微信沟通，时间不限，看到就回"
  },
  "contactSection": {
    "booking": false
  }
};
