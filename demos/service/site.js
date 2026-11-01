/* 站点资料：这是本模板唯一要改的文件。
   改完保存，刷新页面正文就变了，不用重新构建。
   site 块（title / description / ogImage / url）是 SEO 资料，重烤后会写进 index.html 的 <head>。

   重烤命令（在 engine/ 目录下执行，把 <站点目录> 换成这个文件夹的路径）：
       node build.mjs --site <站点目录>
*/
window.SITE = {
  "lang": "zh-CN",
  "contactBar": true,
  "site": {
    "title": "周听雨｜钢琴课 · 一对一教学与陪练",
    "description": "示例内容。钢琴教师，做成人零基础与考级冲刺，也接曲目陪练。试课 30 分钟，先看看老师教得对不对自己的胃口，再定后面的课。",
    "url": "https://dotaclover.github.io/demos/service/",
    "ogImage": "./images/og.jpg",
    "favicon": "./images/favicon.svg",
    "faviconIco": "./images/favicon.ico",
    "appleTouchIcon": "./images/apple-touch-icon.png"
  },
  "theme": {
    "primary": "#5a4b9a",
    "primaryDark": "#332b62",
    "accent": "#e5a63b"
  },
  "brand": {
    "name": "周听雨",
    "mark": "听雨",
    "role": "钢琴教师 · 广州天河"
  },
  "business": {
    "type": "ProfessionalService",
    "locality": "广州",
    "openingHours": "Mo-Su 10:00-21:00"
  },
  "nav": [
    {
      "label": "常见卡点",
      "href": "#pains"
    },
    {
      "label": "能上什么课",
      "href": "#services"
    },
    {
      "label": "怎么开始",
      "href": "#process"
    },
    {
      "label": "常见问题",
      "href": "#faq"
    },
    {
      "label": "联系我",
      "href": "#contact"
    }
  ],
  "topbarCta": {
    "label": "约一次试课",
    "href": "#contact"
  },
  "hero": {
    "kicker": "钢琴教学 · 成人零基础 · 考级陪练",
    "title": "把一首曲子\n练成能弹的样子",
    "lead": "教琴七年，成人零基础和考级冲刺都带过。上课前先听你说一遍现在卡在哪，课上只解决卡住的那一段，不按教材进度硬推。",
    "primaryCta": {
      "label": "看课程与价格",
      "href": "#services"
    },
    "secondaryCta": {
      "label": "怎么开始",
      "href": "#process"
    },
    "badges": [
      {
        "text": "试课 30 分钟",
        "icon": "check"
      },
      {
        "text": "按你的曲子教",
        "icon": "check"
      },
      {
        "text": "琴房自带",
        "icon": "check"
      },
      {
        "text": "不接考级包过",
        "icon": "cross"
      }
    ]
  },
  "stats": [
    {
      "value": "7",
      "unit": "年",
      "label": "教琴时间"
    },
    {
      "value": "30",
      "unit": "分钟",
      "label": "试课时长"
    }
  ],
  "pains": {
    "eyebrow": "WHAT GETS STUCK",
    "title": "练琴卡住，通常卡在这三处",
    "items": [
      "自学了半年，谱子能看懂，手就是跟不上，一节五级的曲子弹得断断续续。",
      "不知道该练什么，教材买了几本，一本弹两页就放下了，越放越不想打开琴盖。",
      "换过几个老师，每个老师教法不一样，前一节学的东西到下一节全要重来。"
    ]
  },
  "services": {
    "eyebrow": "WHAT I TEACH",
    "title": "能上什么课、怎么收费",
    "note": "按次收费，不卖课包。上课前说清楚要达到什么，上了几节算几节。",
    "groups": [
      {
        "title": "一对一 · 按你的进度",
        "note": "每节 50 分钟，琴房在天河，地铁口步行 5 分钟",
        "items": [
          {
            "icon": "music",
            "name": "成人零基础",
            "price": "¥200 / 节",
            "tag": "先试课",
            "desc": "从认谱和手型开始，不预设你有音乐基础。前三节解决「能不能连续弹完一段」，之后按你想弹的曲子走。"
          },
          {
            "icon": "code",
            "name": "考级冲刺",
            "price": "¥260 / 节",
            "tag": "需提前 4 周",
            "desc": "按考级评分标准拆练习曲，先把技术难点单拎出来练，再串完整首。考级报名与评委打分我不保证，只保证练到位。"
          },
          {
            "icon": "pulse",
            "name": "曲目陪练",
            "price": "¥180 / 节",
            "tag": "不限级别",
            "desc": "你已经有曲子了，只想把某一段练顺，或者把一首自己的曲子改编成能弹的版本。上课前发我谱子，我先看一遍。"
          }
        ]
      }
    ]
  },
  "why": {
    "eyebrow": "HOW I TEACH",
    "title": "先说清三条",
    "cards": [
      {
        "icon": "search",
        "title": "先听你说，再定计划",
        "desc": "第一节课我不发新教材。先听你现在卡在哪、想弹什么、手型有没有问题，然后才排后面的内容。"
      },
      {
        "icon": "shield",
        "title": "教方法，不卖焦虑",
        "desc": "不承诺几节课考过几级，也不拿别人家孩子的进度吓唬你。练成什么样取决于每天练多久，这话我每次都会说。"
      },
      {
        "icon": "code",
        "title": "进度写下来",
        "desc": "每节课结束给一段文字：这节练了什么、下节要做什么、家里练哪几遍。你能自己看，不用每次问我。"
      }
    ],
    "rulesTitle": "这几件事先说在前面",
    "rules": [
      "成人零基础需要每天自己练 30 分钟以上，只上课不练，我不会接。",
      "考级包过、比赛保录、一个月速成这类承诺我不做，教学不是魔术。",
      "临时取消的课提前 4 小时说，改期两次以上我只能换老师。"
    ]
  },
  "process": {
    "eyebrow": "HOW TO START",
    "title": "怎么开始",
    "note": "先试一节，试完不合适就不继续，没人劝你。",
    "steps": [
      {
        "title": "发三句话",
        "desc": "你现在学到哪、想弹什么曲子、每周能练几天。"
      },
      {
        "title": "约一次试课",
        "desc": "30 分钟，我听一下你的程度，说清之后能教到什么程度。"
      },
      {
        "title": "定接下来怎么上",
        "desc": "按次约课，不买课包。想停随时停，提前一天说就行。"
      }
    ]
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "常被问到的",
    "items": [
      {
        "q": "完全没学过琴，能上吗？",
        "a": "能，成人零基础是最常见的。第一节课从手型和认谱开始，前三节的目标就是能连续弹完一小段。"
      },
      {
        "q": "需要自己有琴吗？",
        "a": "来上课用琴房的琴就行。家里有琴最好，没有也不影响上课，只是练琴得在我这儿或者另租琴房。"
      },
      {
        "q": "一节课多少钱，能便宜点吗？",
        "a": "200 元一节，50 分钟。按次算，上几节付几节。买课包我不做——怕的是您还没学就跟人上了几十节，那对两边都不好。"
      },
      {
        "q": "能保证考过吗？",
        "a": "不能。我只保证按评分标准把技术难点练到位，剩下的取决于你自己练的时间和考场发挥。"
      }
    ]
  },
  "contact": {
    "phone": "13800000000",
    "wechat": "demo_piano_teacher",
    "wechatQr": "./images/wechat-qr.png",
    "area": "广州天河，地铁口步行 5 分钟",
    "hours": "微信沟通，时间不限，看到就回"
  },
  "contactSection": {
    "eyebrow": "CONTACT",
    "title": "先约一次试课",
    "note": "把现在学到哪、想弹什么发我，我先回一句能不能教。",
    "booking": true,
    "services": [
      "成人零基础",
      "考级冲刺",
      "曲目陪练"
    ],
    "promiseTitle": "加微信之后",
    "promise": [
      "先看你现在的情况再回，能不能教、练到什么程度，一段话说清",
      "试课 30 分钟，试完不合适不勉强",
      "按次收费，上几节付几节，不推课包"
    ],
    "prepTitle": "开口前准备好这四样",
    "prep": [
      "现在学到哪一级，或者完全没学过",
      "想弹的曲子或者考级级别",
      "每周能练几次、每次多久",
      "想上门还是来琴房"
    ]
  },
  "gallery": {
    "eyebrow": "THE ROOM",
    "title": "琴房的样子",
    "note": "上课的地方，天河一栋老楼里，地铁口步行五分钟。以下是演示素材，不是真实场地。",
    "layout": "masonry",
    "items": [
      {
        "src": "./images/work-01.jpg",
        "alt": "琴键特写",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-02.jpg",
        "alt": "靠窗的立式钢琴",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-03.jpg",
        "alt": "琴盖上的节拍器",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-04.jpg",
        "alt": "琴谱架上的乐谱",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-05.jpg",
        "alt": "空琴房的木凳",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-06.jpg",
        "alt": "一摞练习册",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-07.jpg",
        "alt": "琴旁的小圆桌",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-08.jpg",
        "alt": "凳子上的活页本",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/work-09.jpg",
        "alt": "窗台上的盆栽",
        "w": 1271,
        "h": 711
      },
      {
        "src": "./images/vertical-01.jpg",
        "alt": "窗前的大三角钢琴",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-02.jpg",
        "alt": "翻动的乐谱",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-03.jpg",
        "alt": "指尖停在键上",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-04.jpg",
        "alt": "逆光里的节拍器",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-05.jpg",
        "alt": "低角度的琴凳",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-06.jpg",
        "alt": "立在凳上的活页本",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-07.jpg",
        "alt": "琴盖上的一杯水",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-08.jpg",
        "alt": "钢琴旁的绿植",
        "w": 720,
        "h": 1267
      },
      {
        "src": "./images/vertical-09.jpg",
        "alt": "通向琴房的走廊",
        "w": 720,
        "h": 1267
      }
    ]
  }
};
