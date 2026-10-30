
/* ================================================================
 * 数据：两个非遗项目
 * ================================================================ */
const IMG = {
  cover:"https://aka.doubaocdn.com/s/tbfOvwUP26",
  waterHero:"https://aka.doubaocdn.com/s/SJefwWf7rI",
  lushengHero:"https://aka.doubaocdn.com/s/jVWsDFmguw"
};

const PROJECTS = {
  water:{
    key:"water", name:"苗族水鼓舞", alias:"水鼓舞 · 水鼓节", vsub:"溪中踩鼓 · 祈愿丰收",
    hero:IMG.waterHero,
    tags:["贵州省黔东南州 · 剑河县","苗语称“zuk niel eb”（踩鼓于水）","民族原始舞蹈“活化石”"],
    info:[
      {k:"主要地区", v:"剑河县革东镇大稿午村"},
      {k:"苗语称谓", v:"zuk niel eb 踩鼓于水", say:true},
      {k:"传承历史", v:"600 余年"},
      {k:"非遗级别", v:"贵州省级非物质文化遗产"},
      {k:"掌鼓人", v:"大稿午村鼓藏头世代掌鼓"}
    ],
    whereToSee:"每年农历六月初六前后，剑河县城举办六月六仰阿莎文化节，万人水鼓舞是压轴；大稿午村也会在水鼓节当天公开踩鼓。想去现场，提前一天到剑河即可。",
    intro:[
      {
        tag:"口传故事", title:"水潭里的鼓声", type:"gold", img:"https://aka.doubaocdn.com/s/Rs02M9u4Ue", cap:"老人在溪边讲述祖上传下的故事",
        body:"老人们说：很久很久以前，大旱三年，寨老带着乡亲到村口的深潭边求雨。一位后生跳进潭里，水底传来闷闷的鼓声，天立刻落下雨来。从那以后，苗家人就把木鼓抬进水里，踩着鼓点敬天地——<b>鼓声传到哪里，雨水就跟到哪里</b>。"
      },
      {
        tag:"由来", title:"缘起 · 为了风调雨顺", type:"red", img:"https://aka.doubaocdn.com/s/Rs02M9u4Ue", cap:"水鼓节“起鼓”仪式，人们抬木鼓入水祭祀",
        body:"水鼓舞流传于<b>贵州省剑河县革东镇大稿午村</b>，是当地苗族在水中跳的一种传统舞蹈。传说早年久旱不雨，有人在水潭边挖井、祭祀后甘霖普降；也有人见潭中双龙相斗、大雨解旱。为感谢天地、祈求<b>风调雨顺与村寨平安</b>，苗族先民相沿成俗，每年在水稻灌浆的关键时节举行水鼓节。"
      },
      {
        tag:"历史", title:"六百年 · 一脉相承", type:"red", img:"https://aka.doubaocdn.com/s/mWTHyHODZ6", cap:"2009年，剑河苗族《水鼓舞》登上全国电视舞蹈大赛并摘得金奖",
        body:"水鼓舞由水鼓节世代相传，至今已有<b>600 余年</b>历史。从溪边祭祀祈雨的原始仪式，到万人齐舞的民族盛会，鼓声从未间断；剑河县将其列入县级非物质文化遗产保护名录，并晋级<b>贵州省级非物质文化遗产</b>。2009年，《水鼓舞》登上全国电视舞蹈大赛舞台并摘得金奖，让这朵“水中奇葩”惊艳全国。"
      },
      {
        tag:"特色", title:"特色 · 全国唯一的“水中之舞”", type:"indigo", img:"https://aka.doubaocdn.com/s/ile9j0xwtw", cap:"男子在溪中踩鼓、拊水掷泥，岸上女子飞歌助兴",
        body:"水鼓舞集<b>声、水、泥</b>于一体：舞者赤足立于溪中，踩鼓而舞、踏水溅花，动作豪迈奔放，被誉为民族原始舞蹈的“<b>活化石</b>”。每年农历六月初六前后，剑河举办“六月六”仰阿莎文化节，各族群众身着盛装围成一层层“<b>同心圆</b>”共跳万人水鼓舞，场面极为壮观。"
      },
      {
        tag:"传承", title:"传承 · 水与鼓里的贵州故事", type:"red", img:"https://aka.doubaocdn.com/s/KSo5YCLFul", cap:"稻浪、木鼓与祭品，寄托着五谷丰登的愿望",
        body:"水鼓舞承载着苗族的<b>水崇拜、鼓崇拜与稻作文化</b>：水是生命之源，鼓是祖先灵魂的安居之所，农历六月踩鼓正逢水稻灌浆，寄托着人们对丰收的期盼。它还是凝聚村寨、增进团结的公共仪式，2009年剑河苗族《水鼓舞》更登上全国电视舞蹈大赛并摘得金奖。"
      }
    ],
    quote:"“我们各族人民就像这水鼓一样，虽然形状不同、声音不同，但只要团结在一起，就能发出最响亮的声音。”",
    quoteFrom:"—— 剑河水鼓舞参与者",
    gallery:[
      {cat:"仪式", title:"起鼓 · 溪边祭祖", desc:"水鼓节分“起鼓—踩鼓—分散鼓”三段。起鼓当天，人们抬酒肉香纸到溪边祭祀，两名男子将木鼓抬入小溪中央，随后众人下河踩鼓。", img:"https://aka.doubaocdn.com/s/Rs02M9u4Ue"},
      {cat:"舞蹈", title:"踩鼓 · 水中狂欢", desc:"男子们赤足在溪中一边踩鼓一边拊水掷泥嬉戏，水花四溅；岸上盛装女子高唱飞歌助兴，是水鼓节最欢乐的画面。", img:"https://aka.doubaocdn.com/s/ile9j0xwtw"},
      {cat:"盛典", title:"同心圆 · 万人共舞", desc:"仰阿莎文化节上，各族群众以水鼓为中心围成层层同心圆，旋转、翻越、甩手，豪迈有力，如同给大地绽开七彩之花。", img:"https://aka.doubaocdn.com/s/aK3dsYD4AV"},
      {cat:"服饰", title:"银饰 · 盛装之美", desc:"踩鼓场上盛装妇女光彩照人：银冠、银项圈、银手镯层层叠叠，一步一趋间银铃叮咚，是水鼓节的另一道风景。", img:"https://aka.doubaocdn.com/s/YRpTWxlp6U"},
      {cat:"舞台", title:"金奖 · 舞上荧屏", desc:"2009年，剑河苗族《水鼓舞》在第五届CCTV电视舞蹈大赛中获得金奖，让这朵“水中奇葩”惊艳全国。", img:"https://aka.doubaocdn.com/s/mWTHyHODZ6"},
      {cat:"仪式", title:"祈愿 · 五谷丰登", desc:"水鼓节以绿头公水鸭为祭品，配糯米、香纸，在水边祭祀祖先，祈求上天降雨、水稻丰收，寄托朴素的农耕愿望。", img:"https://aka.doubaocdn.com/s/KSo5YCLFul"},
      {cat:"器物", title:"木鼓 · 寨老之宝", desc:"水鼓是整段原木掏空蒙上牛皮制成，鼓身刻着铜鼓纹。平时由鼓藏头珍藏，水鼓节才抬入水中，是连通祖先与天地的圣器。", img:"https://aka.doubaocdn.com/s/dT4XQeKNf3"},
      {cat:"器物", title:"银项圈 · 声入水花", desc:"三只银项圈层层叠戴，刻鱼鸟纹、垂小银铃。踩鼓入水时，银铃声与水声、鼓声和在一起，是苗家最重的嫁妆。", img:"https://aka.doubaocdn.com/s/0GtY7OxMRr"},
      {cat:"器物", title:"百褶裙 · 百褶如花", desc:"红裙百褶如扇，裙腰绣满牡丹与几何纹。苗家姑娘从小学打褶，一条百褶裙要缝上百褶，走起路来裙摆翻飞。", img:"https://aka.doubaocdn.com/s/sw9nEfu6sU"},
      {cat:"器物", title:"银冠 · 头顶星月", desc:"银冠由银片、银花、银角叠成，垂挂银铃流苏。每逢踩鼓，银冠一点头，铃声就像雨点落进水里。", img:"https://aka.doubaocdn.com/s/xx4mlqUdI9"}
    ],
    cats:["全部","仪式","舞蹈","盛典","服饰","舞台","器物"],
    quiz:[
      {q:"苗族水鼓舞主要流传在贵州哪里？", opts:["凯里市","剑河县革东镇大稿午村","雷山县","丹寨县"], ans:1, why:"水鼓舞是剑河县革东镇大稿午村独有的水中舞蹈，也是苗族水鼓节的核心内容。"},
      {q:"苗语“zuk niel eb”是什么意思？", opts:["吹笙于水","踩鼓于水","舞于田间","击鼓迎春"], ans:1, why:"“zuk niel”意为踩鼓，“eb”意为水，合起来就是“踩鼓于水”，道出了水鼓舞的名字来历。"},
      {q:"水鼓舞最初最主要的目的是什么？", opts:["庆祝丰收表演","祭祀祖先、祈求风调雨顺","青年择偶交友","迎接远方宾客"], ans:1, why:"水鼓舞最初是祭祀性舞蹈，苗家在水稻灌浆时节踩鼓祈雨，祈求风调雨顺与村寨平安。"},
      {q:"水鼓舞被誉为什么？", opts:["东方芭蕾","民族原始舞蹈的“活化石”","高原之魂","苗岭天籁"], ans:1, why:"它是我国目前发现最独特的一种原生态舞蹈——在水中跳的舞蹈，因此被专家学者誉为“活化石”。"},
      {q:"剑河每年农历何时举办仰阿莎文化节、万人齐跳水鼓舞？", opts:["正月初六前后","六月初六前后","九月初九前后","五月初五前后"], ans:1, why:"每年农历六月初六前后，剑河县举行“六月六”仰阿莎文化节，万人水鼓舞是标志性活动。"}
    ]
  },
  lusheng:{
    key:"lusheng", name:"苗族芦笙舞", alias:"踩芦笙 · 踩歌堂", vsub:"芦笙一响 · 万山应和",
    hero:IMG.lushengHero,
    tags:["流布于苗、侗、布依、水等民族地区","国家级非物质文化遗产","至少两千多年历史"],
    info:[
      {k:"别称", v:"踩芦笙 · 踩歌堂"},
      {k:"苗语称谓", v:"嘎东 · 芦笙", say:true},
      {k:"历史渊源", v:"两千余年（西汉乐舞俑）"},
      {k:"非遗级别", v:"国家级非物质文化遗产"},
      {k:"流布地区", v:"贵州、广西、湖南、云南等地"},
      {k:"掌笙人", v:"芦笙手世代相传"}
    ],
    whereToSee:"每年农历十月的苗年、十三年一度的鼓藏节，雷山西江千户苗寨、丹寨排莫等地都有盛大芦笙场；春节期间村村寨寨围圈踩芦笙，去了就能加入。",
    intro:[
      {
        tag:"口传故事", title:"竹子里的鸟兽声", type:"gold", img:"https://aka.doubaocdn.com/s/Z10qpOinp6", cap:"六管芦笙系着红绸，是苗家最古老的乐器",
        body:"老人们说：远古时候祖先靠打猎为生，一位聪明的后生砍来竹子，凿出簧片、插上竹管，一吹就像百鸟齐鸣。野兽听见声音围拢过来，祖先从此不再饿肚子。后来苗家人迁徙到哪里，就把芦笙带到哪里——<b>笙声一响，族人就知道家在何方</b>。"
      },
      {
        tag:"由来", title:"缘起 · 笙声里的祖先记忆", type:"red", img:"https://aka.doubaocdn.com/s/NBRXgxwsGf", cap:"六管芦笙系着红绸，是苗族青年形影不离的伙伴",
        body:"相传苗族祖先靠狩猎为生，一位心灵手巧的小伙子砍竹制笙，模仿鸟兽鸣叫与动作，吹跳起来诱捕猎物，从此芦笙成了苗家的“<b>生活必需</b>”。另说先民迁徙渡河时，人们吹起芦笙、燃起篝火召集族人，伴随笙乐起舞驱寒。从出土的<b>西汉铜芦笙乐舞俑</b>看，芦笙舞至少已有两千多年历史。"
      },
      {
        tag:"历史", title:"两千年 · 笙声不绝", type:"red", img:"https://aka.doubaocdn.com/s/Uqc62ZMU8V", cap:"芦笙手边吹边跳领舞，笙不离口、舞不离身",
        body:"从出土的<b>西汉铜芦笙乐舞俑</b>可见，芦笙舞至少已有<b>两千余年</b>历史。笙乐随苗族迁徙传遍苗岭山区，成为节庆、婚嫁、祭祀中不可缺少的礼乐；2006年，苗族芦笙舞列入<b>第一批国家级非物质文化遗产名录</b>，古老的笙声至今依然回响。"
      },
      {
        tag:"特色", title:"特色 · 围着圆圈踩起来", type:"indigo", img:"https://aka.doubaocdn.com/s/IC1txILHI4", cap:"芦笙场上男女老少围圈踩舞，银饰叮当",
        body:"芦笙舞有“<b>吹笙伴舞、吹笙领舞、自吹自舞</b>”等形式：芦笙手在队前或圈内边吹边舞，身着盛装的姑娘们随后踩着笙调，围成圆圈逆时针而行。走、移、跨、转、踢、勾、翻……动作或庄重肃穆，或明快洒脱。每逢年节集会，成百支芦笙、上千人层层环绕，场面蔚为壮观。"
      },
      {
        tag:"流派", title:"流派 · 一方水土一方舞", type:"red", img:"https://aka.doubaocdn.com/s/OFokHtb6tz", cap:"丹寨锦鸡舞——模拟锦鸡求偶步态的轻盈舞蹈",
        body:"芦笙舞在各地开枝散叶：丹寨<b>锦鸡舞</b>模拟锦鸡步态，妇女头插锦鸡银饰、裙摆翻飞；纳雍<b>滚山珠</b>集吹奏、舞蹈、杂技于一体，翻滚惊险；贵定<b>长衫龙</b>舞姿雄浑；关岭芦笙舞“武舞结合、笙棍交加”。2006年，苗族芦笙舞列入<b>第一批国家级非物质文化遗产名录</b>。"
      }
    ],
    quote:"“芦笙一响，脚板发痒。”苗家谚语里，笙与舞从来分不开。",
    quoteFrom:"—— 苗族民间流传的谚语",
    gallery:[
      {cat:"乐器", title:"芦笙 · 笙管传情", desc:"芦笙是苗族最古老的吹奏乐器，由笙斗、笙管与簧片组成，大的芦笙高达数米、声音低沉浑厚，是苗族音乐的“根”。", img:"https://aka.doubaocdn.com/s/NBRXgxwsGf"},
      {cat:"领舞", title:"领舞 · 边吹边跳", desc:"芦笙手吹笙领舞，身姿矫健、头帕飘飞，既是乐手也是舞者；技艺高超者还能在笙不离嘴时完成旋转、倒立等高难动作。", img:"https://aka.doubaocdn.com/s/Uqc62ZMU8V"},
      {cat:"节日", title:"芦笙场 · 万人踩舞", desc:"春节、苗年、吃新节等节日，村寨芦笙场人头攒动：男子吹笙、妇女踩舞、孩童嬉戏，芦笙声、银饰声交织成欢乐的乐章。", img:"https://aka.doubaocdn.com/s/IC1txILHI4"},
      {cat:"流派", title:"锦鸡舞 · 轻盈如雀", desc:"丹寨锦鸡舞流传于苗族“嘎闹”支系，妇女绾高髻、插锦鸡银饰、穿超短百褶裙，模拟锦鸡觅食求偶的步态，轻盈柔美。", img:"https://aka.doubaocdn.com/s/OFokHtb6tz"},
      {cat:"流派", title:"滚山珠 · 惊险绝技", desc:"纳雍滚山珠源于苗族迁徙中滚荆开路的传说，舞者吹着芦笙围绕水碗翻滚跳跃，刚健惊险，是芦笙舞中的“绝活”。", img:"https://aka.doubaocdn.com/s/gdFvYUBQJo"},
      {cat:"节日", title:"跳月 · 以舞传情", desc:"在跳花、跳月等节日，姑娘把绣花腰带系在心上人的芦笙上，牵带起舞；芦笙舞也是苗族青年男女表达爱情的方式。", img:"https://aka.doubaocdn.com/s/dIi3ndrC9k"},
      {cat:"器物", title:"芦笙 · 竹管成乐", desc:"六根长短不一的竹管插在木制笙斗上，每根管里藏一枚铜簧片。芦笙手一吹，簧片震动，声音低沉悠远，是苗家最古老的乐器。", img:"https://aka.doubaocdn.com/s/Z10qpOinp6"},
      {cat:"器物", title:"百鸟衣 · 锦鸡之羽", desc:"丹寨锦鸡舞的百鸟衣缀满彩色羽毛和银片，舞动时像锦鸡展翅。这是苗家姑娘最隆重的衣裳，只在盛大节日才穿上身。", img:"https://aka.doubaocdn.com/s/wWYOlnJELs"},
      {cat:"器物", title:"芦笙手 · 笙不离口", desc:"芦笙头戴刺绣头帕、项挂银圈，边吹边跳。好的芦笙手能在笙不离嘴时完成旋转、蹲跳，是芦笙场上最受尊敬的人。", img:"https://aka.doubaocdn.com/s/pqMhUINpjW"}
    ],
    cats:["全部","乐器","领舞","节日","流派","器物"],
    quiz:[
      {q:"“踩芦笙”是哪种舞蹈的别称？", opts:["苗族芦笙舞","木鼓舞","板凳舞","铜鼓舞"], ans:0, why:"芦笙舞又名“踩芦笙”“踩歌堂”，因用芦笙伴奏、自吹自舞而得名。"},
      {q:"据考古发现，芦笙舞的历史至少有多久？", opts:["约 200 年","约 2000 年","约 500 年","约 100 年"], ans:1, why:"从出土的西汉铜芦笙乐舞俑分析，芦笙舞至少已有两千多年的历史。"},
      {q:"踩芦笙时，男性主要担任什么角色？", opts:["在一旁唱歌","吹笙领舞","敲锣打鼓","只在场边观舞"], ans:1, why:"芦笙舞中芦笙手在队前或圈内吹笙领舞，女性盛装随后围圈踩舞。"},
      {q:"下列哪一项是苗族芦笙舞的代表流派？", opts:["锦鸡舞","水鼓舞","板凳舞","竹竿舞"], ans:0, why:"丹寨锦鸡舞、纳雍滚山珠、贵定长衫龙等都是苗族芦笙舞的代表舞种。"},
      {q:"苗族芦笙舞于哪一年列入国家级非物质文化遗产名录？", opts:["2006 年","2010 年","2014 年","2020 年"], ans:0, why:"2006年，苗族芦笙舞列入第一批国家级非物质文化遗产名录。"}
    ]
  }
};

const DIY_SETS = [
  {name:"素雅便装", img:"https://aka.doubaocdn.com/s/RcyAQUpXFN", note:"平日劳作穿着的蓝靛染布衣，简洁素雅。苗绣悄悄藏在衣襟与袖口，是少女们最初的针线功夫。"},
  {name:"水鼓舞盛装", img:"https://aka.doubaocdn.com/s/uXYpUSZD5O", note:"黑色绣衣配大红百褶裙，银冠、银项圈叮当作响。踩鼓入水时，银饰与水花一起闪耀。"},
  {name:"芦笙舞盛装", img:"https://aka.doubaocdn.com/s/jxlDF4EsWi", note:"宝蓝对襟长衣与蜡染百褶裙，芦笙在手。姑娘们踩着笙调围圈起舞，蓝衣在风中翻飞。"},
  {name:"节日盛装", img:"https://aka.doubaocdn.com/s/4E0msdrIkc", note:"大红金线绣衣与五彩织锦长裙，银饰层层叠叠。逢年过节，整套盛装就是一个人最好的家底。"}
];

/* 部位级拼装数据：头饰 / 上衣 / 裙子 */
const DIY_PARTS = {
  hw:{ name:"头饰", key:"hw", items:[
    {key:"plain",  name:"素银簪", mark:"素雅便装", swatch:"#8a6a4a", desc:"一支素银簪绾住乌发，日常而清爽。"},
    {key:"water",  name:"银冠",   mark:"水鼓舞盛装", swatch:"#e8eef7", desc:"层层银花围成的银冠，是水鼓舞姑娘的标配头饰。"},
    {key:"lusheng",name:"银角",   mark:"芦笙舞盛装", swatch:"#dbe6f5", desc:"高耸的银角似水牛角，寄托苗家对力量与丰饶的向往。"},
    {key:"fest",   name:"华丽银冠", mark:"节日盛装", swatch:"#f3ecff", desc:"银片、银花、银铃层层叠叠，节日里最闪耀的头顶。"}
  ]},
  top:{ name:"上衣", key:"top", items:[
    {key:"plain",  name:"白绣衣",   mark:"素雅便装", swatch:"#f3ead9", desc:"蓝靛染布与白底绣花，素净耐穿，绣样藏在衣襟袖口。"},
    {key:"water",  name:"黑绣衣",   mark:"水鼓舞盛装", swatch:"#332d38", desc:"黑底配红绿绣花，沉稳又热烈，踩鼓入水也大方。"},
    {key:"lusheng",name:"宝蓝长衣", mark:"芦笙舞盛装", swatch:"#2e4c6e", desc:"宝蓝对襟长衣系绣带，吹笙起舞时衣袂翻飞。"},
    {key:"fest",   name:"金线绣衣", mark:"节日盛装", swatch:"#a63a2e", desc:"大红底金线绣花，喜庆华丽，节日里的压轴衣裳。"}
  ]},
  skirt:{ name:"裙子", key:"skirt", items:[
    {key:"plain",  name:"深蓝布裙",   mark:"素雅便装", swatch:"#3d587a", desc:"素净蓝裙，行走山间田埂都自在。"},
    {key:"water",  name:"大红百褶裙", mark:"水鼓舞盛装", swatch:"#b23a33", desc:"百褶如扇、红裙入水，与水花一起翻飞起舞。"},
    {key:"lusheng",name:"蜡染百褶裙", mark:"芦笙舞盛装", swatch:"#46618f", desc:"蓝白蜡染纹样，笙调一响就飞扬起来。"},
    {key:"fest",   name:"五彩织锦裙", mark:"节日盛装", swatch:"#a5523f", desc:"几何纹织锦五彩斑斓，一条裙子就是一幅绣卷。"}
  ]}
};
const DIY_MARK_NAME = { "素雅便装":"素雅便装", "水鼓舞盛装":"水鼓舞盛装", "芦笙舞盛装":"芦笙舞盛装", "节日盛装":"节日盛装" };

/* 男生角色：套装图 + 部位数据 */
const DIY_SETS_BOY = [
  {name:"素雅便装", img:"https://aka.doubaocdn.com/s/zHU0scYY7L", note:"平日劳作的蓝靛染布衣，简洁素雅，针脚里藏着苗族匠人的用心。"},
  {name:"水鼓舞盛装", img:"https://aka.doubaocdn.com/s/Mqy4ad46fl", note:"黑绣衣配深色裤装，银冠银项圈叮当作响，踩鼓入水时银光与水花一起闪耀。"},
  {name:"芦笙舞盛装", img:"https://aka.doubaocdn.com/s/UU5OCNsbpT", note:"宝蓝对襟长衣，芦笙在手，吹笙领舞时衣摆翻飞、笙声清亮。"},
  {name:"节日盛装", img:"https://aka.doubaocdn.com/s/riwwO4yyqP", note:"大红金线绣衣，银饰层层叠叠，节日里最隆重的行头。"}
];
const DIY_PARTS_BOY = {
  hw:{ name:"头饰", key:"hw", items:[
    {key:"plain",  name:"素银簪", mark:"素雅便装", swatch:"#8a6a4a", desc:"一支素银簪绾住短发，清爽利落。"},
    {key:"water",  name:"银冠",   mark:"水鼓舞盛装", swatch:"#e8eef7", desc:"银冠高戴，踩鼓时银光与水花相映。"},
    {key:"lusheng",name:"银角",   mark:"芦笙舞盛装", swatch:"#dbe6f5", desc:"银角似牛角，象征力量与丰收。"},
    {key:"fest",   name:"华丽银冠", mark:"节日盛装", swatch:"#f3ecff", desc:"节日里最隆重的银冠，层层银花闪耀。"}
  ]},
  top:{ name:"上衣", key:"top", items:[
    {key:"plain",  name:"白绣衣",   mark:"素雅便装", swatch:"#f3ead9", desc:"白底对襟绣花衣，日常也见精巧针脚。"},
    {key:"water",  name:"黑绣衣",   mark:"水鼓舞盛装", swatch:"#332d38", desc:"黑底彩绣立领衣，踩鼓下水仍利落。"},
    {key:"lusheng",name:"宝蓝长衣", mark:"芦笙舞盛装", swatch:"#2e4c6e", desc:"宝蓝对襟长衣，吹笙领舞时衣摆翻飞。"},
    {key:"fest",   name:"金线绣衣", mark:"节日盛装", swatch:"#a63a2e", desc:"大红金线绣衣，节庆场上的主角行头。"}
  ]},
  bottom:{ name:"下装", key:"bottom", items:[
    {key:"plain",  name:"深蓝布裤",   mark:"素雅便装", swatch:"#3d587a", desc:"素净蓝裤，行走山野都自在。"},
    {key:"water",  name:"黑布裤",   mark:"水鼓舞盛装", swatch:"#2f2a33", desc:"深色裤脚绣花边，踩水也不怕溅泥。"},
    {key:"lusheng",name:"蜡染蓝裤", mark:"芦笙舞盛装", swatch:"#46618f", desc:"蓝白蜡染纹样，舞步起落带起风声。"},
    {key:"fest",   name:"织锦花裤", mark:"节日盛装", swatch:"#a5523f", desc:"五彩织锦纹长裤，一条裤子一幅绣卷。"}
  ]}
};

/* ================================================================
 * 状态与路由
 * ================================================================ */
const state = { tab:"intro", cat:"全部", quizIdx:0, picked:null, score:0, answered:false, visited:{}, diy:{hw:"water", top:"water", skirt:"water"}, diyLast:"top", diyRole:"girl", diySet:"素雅便装" };
const app = document.getElementById("app");

function go(hash){
  if(location.hash === hash){ render(); return; }
  location.hash = hash;
}
function el(html){ const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }

const ICONS = {
  back:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  arrow:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  arrowL:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  quiz:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  seal:'<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="29" stroke="#fff" stroke-width="3"/><path d="M32 12l6 13 14 2-10 10 3 14-13-7-13 7 3-14-10-10 14-2z" fill="#fff"/></svg>',
  finalOrn:'<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="6" fill="#f0d9a8"/><path d="M32 8v14M32 42v14M8 32h14M42 32h14M15 15l10 10M39 39l10 10M49 15L39 25M25 39l-10 10" stroke="#f0d9a8" stroke-width="3" stroke-linecap="round"/></svg>'
};

/* ================================================================
 * 视图渲染
 * ================================================================ */
let lastKey = null;

function render(){
  const h = location.hash.replace(/^#\/?/, "") || "cover";
  if(h === "cover") renderCover();
  else if(h === "home") renderHome();
  else if(h === "diy") renderDiy();
  else if(h === "final") renderFinal();
  else if(h.startsWith("item/")) renderItem(h.split("/")[1]);
  else renderCover();
  setTimeout(initReveal, 40);
}

/* 一次性出场：页面内容加载后全部弹出（保留动画与错峰延迟） */
function initReveal(){
  const items = document.querySelectorAll('.item-page .rv');
  if(!items.length) return;
  items.forEach(el=>{ if(!el.classList.contains("in")) el.classList.add("in"); });
}

function renderCover(){
  const chars = (txt, base, step) => txt.split("").filter(c=>c!==" ").map((c,i)=>`<span style="animation-delay:${(base+i*step).toFixed(2)}s">${c}</span>`).join("");
  app.innerHTML = `
    <section class="view active cover">
      <div class="bg">
        <video autoplay muted loop playsinline poster="${IMG.cover}" style="width:100%;height:100%;object-fit:cover">
          <source src="https://aka.doubaocdn.com/s/ZS9YHBNtVC" type="video/mp4">
        </video>
      </div>
      <div class="veil"></div>
      <div class="wrap">
        <span class="badge">社科普及 H5 · 网页类</span>
        <div class="vtext">
          <div class="v-main">${chars("水舞笙歌",4.5,0.4)}</div>
          <div class="v-sub">${chars("贵州苗族非遗舞蹈线上探索",6.2,0.09)}</div>
          <div class="v-hint">${chars("水鼓舞 · 踩芦笙",7.2,0.08)}</div>
          <div class="v-hint">${chars("两种跳进水与笙里的贵州故事",8.0,0.07)}</div>
        </div>
        <p class="foot"><b>普及社科知识 · 讲好贵州故事</b></p>
        <div class="actions">
          <button class="btn" onclick="go('#home')">开始探索</button>
        </div>
      </div>
    </section>`;
}

function renderHome(){
  const card = (p, i) => `
    <div class="pick-card" onclick="go('#item/${p.key}')">
      <div class="thumb" style="background-image:url('${p.hero}')"><span class="name">${p.name}</span></div>
      <div class="meta">
        <div class="one">${p.tags[0]}</div>
      </div>
    </div>`;
  app.innerHTML = `
    <section class="view active">
      <div class="topbar" style="position:static">
        <button class="back" onclick="go('#cover')">${ICONS.back}</button>
        <div class="t-title">走进贵州非遗舞蹈</div>
      </div>
      <div class="sect">
        <div class="eyebrow">SELECT · 选择项目</div>
        <h2>你想先走进哪一项？</h2>
        <p class="desc">点击进入：先读简介，再翻图鉴，最后参加互动问答挑战，看看你对贵州非遗了解多少。</p>
      </div>
      <div class="home-cards-wrap">
        <button class="hc-arrow left" onclick="slideCards(-1)" aria-label="上一张">${ICONS.arrowL}</button>
        <div class="home-cards-track" id="hcTrack" style="transform:translateX(0)">
          <div class="diy-entry" onclick="go('#diy')">
            <div class="diy-thumb" style="background-image:url('${DIY_SETS[1].img}')"></div>
            <div class="diy-body">
              <div class="diy-badge">先换装 · 服装DIY</div>
              <div class="diy-title">搭配一身苗族盛装</div>
              <div class="diy-sub">银冠、绣衣、百褶裙随你挑，换好装再去选择走进哪一项非遗舞蹈</div>
            </div>
          </div>
          ${card(PROJECTS.water)}
          ${card(PROJECTS.lusheng)}
        </div>
        <button class="hc-arrow right" onclick="slideCards(1)" aria-label="下一张">${ICONS.arrow}</button>
      </div>
      <div class="cards-scroll-tip">← 左右滑动或点箭头 · 查看更多 →</div>
      <div class="diamond-band"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="school-line">2026年推动青年大学生参与社科普及比赛活动<br>网页类赛道 · 社科普及H5</div>
    </section>`;
  setTimeout(autoHomeCards, 300);
}

function renderItem(key){
  const p = PROJECTS[key] || PROJECTS.water;
  if(lastKey !== key){
    lastKey = key;
    state.tab = "menu"; state.cat = "全部";
    state.quizIdx = 0; state.picked = null; state.answered = false; state.score = 0;
  }
  const tabMap = {intro:"走进它", gallery:"图鉴查询", quiz:"互动挑战"};
  const body = state.tab === "menu" ? itemMenu(p)
    : state.tab === "intro" ? itemIntro(p)
    : state.tab === "gallery" ? itemGallery(p)
    : state.tab === "play" ? itemPlay(p)
    : state.tab === "poster" ? itemPosterOnly(p)
    : itemQuizOnly(p);
  app.innerHTML = `
    <section class="view active item-page">
      <i class="petal" style="left:8%;animation-delay:0s"></i>
      <i class="petal" style="left:36%;animation-delay:2.8s;animation-duration:11s"></i>
      <i class="petal" style="left:62%;animation-delay:5.2s;animation-duration:9.5s"></i>
      <i class="petal" style="left:86%;animation-delay:1.6s;animation-duration:12s"></i>
      <div class="topbar">
        <button class="back" onclick="goBackItem()">${ICONS.back}</button>
        <div class="t-title">${p.name}</div>
        <div class="t-tag">社科普及</div>
      </div>
      <div class="item-hero">
        <div class="bg" style="background-image:url('${p.hero}')"></div>
        <div class="veil"></div>
        <div class="frame"><i></i><i></i><i></i><i></i></div>
        <div class="v-block">
          <div class="v-main">${[...p.name].map((c,i)=>`<span style="animation-delay:${i*.16}s">${c}</span>`).join("")}</div>
          <div class="v-sub">${p.vsub || p.alias}</div>
        </div>
        <div class="inner">
          <div class="tags">${p.tags.map((t,i)=>`<span class="tag" style="animation-delay:${.55+i*.16}s">${t}</span>`).join("")}</div>
        </div>
      </div>
      ${state.tab !== "menu" ? `<div class="mod-back"><button class="mod-back-btn" onclick="setTab('menu')">← 全部模块</button></div>` : ""}
      ${body}
    </section>`;
  setTimeout(stageLoad, 120);
  setTimeout(autoModScroll, 200);
}

/* ---- 模块选择：3D 立体轮播 ---- */
function modMods(p){
  // 每个项目按各自图库挑 5 张互不重复的封面
  if(p.key === "water"){
    return [
      {k:"intro",   name:"读懂它",   desc:"由来 · 历史 · 特色 · 流派，了解这项非遗", img:"https://aka.doubaocdn.com/s/Rs02M9u4Ue"},
      {k:"gallery", name:"非遗图鉴", desc:"仪式 · 舞蹈 · 服饰图片，点开看故事", img:"https://aka.doubaocdn.com/s/aK3dsYD4AV"},
      {k:"play",    name:"互动广场", desc:"双人对决 · AI语音陪练 · 踩节拍", img:p.hero},
      {k:"quiz",    name:"知识闯关", desc:"答题挑战，看看你能拿什么称号", img:"https://aka.doubaocdn.com/s/YRpTWxlp6U"},
      {k:"poster",  name:"我的名片", desc:"生成专属国风海报，点赞助力", img:"https://aka.doubaocdn.com/s/ile9j0xwtw"}
    ];
  }
  return [
    {k:"intro",   name:"读懂它",   desc:"由来 · 历史 · 特色 · 流派，了解这项非遗", img:"https://aka.doubaocdn.com/s/NBRXgxwsGf"},
    {k:"gallery", name:"非遗图鉴", desc:"仪式 · 舞蹈 · 服饰图片，点开看故事", img:"https://aka.doubaocdn.com/s/Uqc62ZMU8V"},
    {k:"play",    name:"互动广场", desc:"双人对决 · AI语音陪练 · 踩节拍", img:p.hero},
    {k:"quiz",    name:"知识闯关", desc:"答题挑战，看看你能拿什么称号", img:"https://aka.doubaocdn.com/s/OFokHtb6tz"},
    {k:"poster",  name:"我的名片", desc:"生成专属国风海报，点赞助力", img:"https://aka.doubaocdn.com/s/gdFvYUBQJo"}
  ];
}
let modFloat = 0;
function renderMod3d(){
  const p = PROJECTS[lastKey] || PROJECTS.water;
  const mods = modMods(p);
  const n = mods.length;
  mods.forEach((m, idx)=>{
    const el = document.getElementById('mod3d-'+idx);
    if(!el) return;
    let d = idx - modFloat;
    d = ((d + n/2) % n + n) % n - n/2;
    const ad = Math.abs(d);
    el.style.transform = 'translateX(' + (d*245) + 'px) translateZ(' + (ad*-190) + 'px) rotateY(' + (d*-34) + 'deg) scale(' + (1 - ad*0.13) + ')';
    el.style.opacity = ad > 2.2 ? 0 : (1 - ad*0.22);
    el.style.filter = 'saturate(' + (1.12 - ad*0.16) + ') brightness(' + (1.05 - ad*0.1) + ') blur(' + (ad*0.35) + 'px)';
    el.style.zIndex = 100 - Math.round(ad*10);
    el.style.pointerEvents = ad > 2.4 ? 'none' : 'auto';
  });
}
function stepMod(dir){
  const n = modMods(PROJECTS[lastKey]||PROJECTS.water).length;
  modFloat += dir;
  renderMod3d();
}
function itemMenu(p){
  const mods = modMods(p);
  return `
    <div class="sect" style="padding:18px 0 4px">
      <div class="eyebrow">MENU · 模块</div>
      <h2>沿水而行 · 择页而入</h2>
      <p class="desc">五项内容徐徐流转，停下时轻点正中一张，便可走入它的故事与玩法。</p>
    </div>
    <div class="mod-stage">
      ${mods.map((m,idx)=>`
        <div class="mod-card3d rv" id="mod3d-${idx}" onclick="setTab('${m.k}')">
          <div class="mod-thumb" style="background-image:url('${m.img}')"><span>${m.name}</span></div>
          <div class="mod-desc">${m.desc}</div>
        </div>`).join("")}
    </div>
    <div class="mod-hint">← 左右滑动或点卡片 · 查看更多 →</div>
    <div style="text-align:center;margin-top:14px"><button class="btn ghost" style="padding:10px 22px;font-size:14px" onclick="go('#final')">完成探索 · 查看我的手札</button></div>`;
}

function itemPlay(p){
  return `
    <div class="sect" style="padding:20px 0 6px">
      <div class="eyebrow">PLAY · 互动挑战</div>
      <h2>非遗互动广场</h2>
      <p class="desc">双人对决、AI 语音陪练、踩节拍……一起玩转非遗。</p>
    </div>
    <div id="badgesWrap">${badgesRow(p)}</div>
    <div class="stage3d-wrap rv">
      <canvas id="stage3d"></canvas>
      <div class="stage3d-tip">金色粒子随节拍起舞 · 踩鼓、答对都能引爆水面</div>
    </div>
    ${duoPanel(p)}
    <div id="voiceWrap">${voicePanel(p)}</div>
    ${rhythmPanel(p)}`;
}

function itemQuizOnly(p){
  const done = state.quizIdx >= p.quiz.length;
  return `
    <div class="sect" style="padding:20px 0 6px">
      <div class="eyebrow">QUIZ · 知识闯关</div>
      <h2>非遗知识闯关</h2>
      <p class="desc">共 ${p.quiz.length} 题，答对一题得 20 分，看看你能拿到什么称号。</p>
    </div>
    ${done ? quizResult(p) : quizCard(p)}`;
}

function itemPosterOnly(p){
  return `${posterPanel(p)}${likePanel(p)}`;
}

/* ---- 简介 ---- */
function itemIntro(p){
  const cards = p.intro.map((s,i)=>`
    <div class="sec-card chapter ${s.type==="indigo"?"alt":""} rv" style="animation-delay:${.14+i*.16}s">
      <div class="ctag">${s.tag}</div>
      <div class="ch-body">
        <h3><span class="dot"></span>${s.title}</h3>
        <p>${s.body}</p>
      </div>
      <div class="figure"><img src="${s.img}" alt="${s.title}" loading="lazy"></div>
      <div class="figcap">${s.cap}</div>
    </div>`).join("");
  return `
    <div class="info-grid">
      ${p.info.map((c,i)=>`<div class="info-cell rv" style="animation-delay:${i*.07}s"><div class="k">${c.k}</div><div class="v">${c.v}${c.say?`<button class="say-btn" onclick="speakMiao()" title="点我听苗语发音">ð 听</button>`:""}</div></div>`).join("")}
    </div>
    <div class="quote rv" style="animation-delay:.12s">${p.quote}<cite>${p.quoteFrom}</cite></div>
    ${cards}
    ${p.whereToSee?`<div class="where rv" style="animation-delay:.3s"><div class="w-eyebrow">WHERE TO SEE Â· å»åªç</div><p>${p.whereToSee}</p></div>`:""}
    <div class="refs"><b>资料来源：</b>中国非物质文化遗产网 · 中国非物质文化遗产数字博物馆、贵州省人民政府网、新华网贵州频道、剑河县人民政府网等（资料整理：创作团队）</div>`;
}

/* ---- 图鉴 ---- */
function itemGallery(p){
  const list = p.gallery.filter(g=> state.cat === "全部" || g.cat === state.cat);
  const chips = `<div class="chips">${p.cats.map((c,i)=>`<button class="chip rv ${state.cat===c?"on":""}" style="animation-delay:${i*.07}s" onclick="setCat('${c}')">${c}</button>`).join("")}</div>`;
  const grid = list.length
    ? `<div class="gallery">${list.map((g,i)=>`
        <div class="g-item rv" style="animation-delay:${i*.09}s" onclick="openModal(${p.key==="water"?0:1},${p.gallery.indexOf(g)})">
          <img src="${g.img}" alt="${g.title}" loading="lazy">
          <div class="cap">${g.title}</div>
        </div>`).join("")}</div>`
    : `<div class="g-empty">该分类暂无图片</div>`;
  return `
    <div class="sect" style="padding-bottom:14px">
      <div class="eyebrow">QUERY · 图鉴查询</div>
      <h2>非遗图鉴</h2>
      <p class="desc">点击分类筛选，点开图片查看细节与背后的故事。</p>
    </div>
    ${chips}
    ${grid}
    <div class="refs"><b>说明：</b>以上图片为创作团队绘制的国潮民族风插画，仅用于社科普及展示。</div>`;
}

function openModal(projIdx, imgIdx){
  const p = projIdx === 0 ? PROJECTS.water : PROJECTS.lusheng;
  const g = p.gallery[imgIdx];
  const m = document.getElementById("g-modal");
  m.innerHTML = `
    <div class="box">
      <img src="${g.img}" alt="${g.title}">
      <div class="body">
        <h4>${g.title}</h4>
        <p>${g.desc}</p>
      </div>
    </div>
    <button class="close" onclick="closeModal()">×</button>`;
  m.classList.add("open");
}
function closeModal(){ document.getElementById("g-modal").classList.remove("open"); }

/* ---- 互动问答 ---- */
function itemQuiz(p){
  const done = state.quizIdx >= p.quiz.length;
  return `
    <div class="quiz-wrap">
      <div class="sect" style="padding:20px 0 6px">
        <div class="eyebrow">PLAY · 互动挑战</div>
        <h2>非遗互动广场</h2>
        <p class="desc">双人对决、AI 语音陪练、踩节拍、知识问答……一起玩转非遗。</p>
      </div>
      <div id="badgesWrap">${badgesRow(p)}</div>
      <div class="stage3d-wrap rv">
        <canvas id="stage3d"></canvas>
        <div class="stage3d-tip">金色粒子随节拍起舞 · 踩鼓、答对都能引爆水面</div>
      </div>
      ${duoPanel(p)}
      <div id="voiceWrap">${voicePanel(p)}</div>
      ${rhythmPanel(p)}
      <div class="sect" style="padding:20px 0 6px">
        <div class="eyebrow">QUIZ · 知识闯关</div>
        <h2>非遗知识闯关</h2>
        <p class="desc">共 ${p.quiz.length} 题，答对一题得 20 分，看看你能拿到什么称号。</p>
      </div>
      ${done ? quizResult(p) : quizCard(p)}
      ${posterPanel(p)}
      ${likePanel(p)}
    </div>`;
}

/* ---- 印章收集 ---- */
function badgesRow(p){
  const key = p.key;
  const st = badgeState(key);
  const items = [
    {id:"quiz",   name:"知识闯关", ic:"文", desc:"答完全部题目"},
    {id:"voice",  name:"AI 陪练", ic:"AI", desc:"语音答对一题"},
    {id:"rhythm", name:"节拍挑战", ic:"鼓", desc:"完成一次踩节拍"},
    {id:"like",   name:"点赞助力", ic:"心", desc:"为非遗点个赞"}
  ];
  return `
    <div class="badges">
      ${items.map(b=>`
        <div class="badge ${st[b.id]?"on":""}">
          <div class="ic">${b.ic}</div>
          <div class="nm">${b.name}</div>
          <div class="st">${st[b.id]?"已点亮":"未点亮"}</div>
        </div>`).join("")}
    </div>`;
}
function badgeState(key){
  const r = {};
  ["quiz","voice","rhythm","like"].forEach(k=>{ r[k] = localStorage.getItem("badge_"+k+"_"+key)==="1"; });
  return r;
}
function setBadge(k, key){ localStorage.setItem("badge_"+k+"_"+key, "1"); }
function refreshBadges(key){
  const w = document.getElementById("badgesWrap");
  if(w) w.innerHTML = badgesRow(PROJECTS[key] || PROJECTS.water);
}

/* ---- 节拍挑战小游戏 ---- */
const RH = {beats:[], timer:null, run:false, idx:0, total:10, score:0, hits:0};
function rhythmPanel(p){
  const isWater = p.key === "water";
  return `
    <div class="rhythm rv" onclick="tapRhythm()">
      <div class="r-head">
        <div class="r-title">${isWater?"踩鼓节拍 · 跟鼓点踩起来":"芦笙节奏 · 跟笙点合拍"}</div>
        <div class="r-score" id="rScore">0 分</div>
      </div>
      <div class="r-track">
        <div class="r-line"></div>
        <div class="r-hint">${isWater?"鼓点":"笙点"}滚到金色刻度处，点一下！</div>
      </div>
      <div class="r-fb" id="rFb">共 ${RH.total} 拍 · 越准分越高</div>
      <div class="r-actions">
        <button class="btn indigo" onclick="event.stopPropagation();startRhythm('${p.key}')" id="rStartBtn">开始挑战</button>
      </div>
    </div>`;
}
function startRhythm(key){
  clearInterval(RH.timer);
  RH.beats = []; RH.run = true; RH.idx = 0; RH.score = 0; RH.hits = 0;
  const box = document.getElementById("rhythmBox");
  if(box){
    box.querySelectorAll(".beat").forEach(b=>b.remove());
  }
  const rTrack = document.querySelector(".rhythm .r-track");
  const sc = document.getElementById("rScore"); if(sc) sc.textContent = "0 分";
  const fb = document.getElementById("rFb"); if(fb) fb.textContent = "跟上节奏！";
  const btn = document.getElementById("rStartBtn");
  if(btn){ btn.textContent = "挑战中…"; btn.disabled = true; }
  RH.timer = setInterval(()=>{
    if(!RH.run){ clearInterval(RH.timer); return; }
    RH.idx++;
    const t0 = performance.now();
    RH.beats.push({t0, done:false});
    const beat = document.createElement("div");
    beat.className = "beat";
    if(rTrack) rTrack.appendChild(beat);
    if(RH.idx >= RH.total){
      clearInterval(RH.timer);
      setTimeout(()=>{ RH.run = false; finishRhythm(key); }, 2100);
    }
  }, 560);
}
function tapRhythm(){
  if(!RH.run) return;
  const now = performance.now();
  let best = null, bd = 1e9;
  RH.beats.forEach(b=>{
    if(b.done) return;
    const tHit = b.t0 + 2000;
    if(now < tHit - 420) return;
    const d = Math.abs(now - tHit);
    if(d < bd){ bd = d; best = b; }
  });
  if(!best){ flash("rFb", "别急，等它滚到金色刻度再点～"); return; }
  best.done = true;
  let txt, pts;
  if(bd < 120){ txt = "完美踩中！"; pts = 3; }
  else if(bd < 260){ txt = "踩得不错！"; pts = 2; }
  else if(bd < 420){ txt = "勉强踩上"; pts = 1; }
  else { txt = "漏拍啦"; pts = 0; }
  RH.score += pts; RH.hits++;
  if(window.waveBurst && pts > 0) waveBurst();
  const sc = document.getElementById("rScore"); if(sc) sc.textContent = RH.score + " 分";
  flash("rFb", txt);
}
function finishRhythm(key){
  const btn = document.getElementById("rStartBtn");
  if(btn){ btn.textContent = "再挑战一次"; btn.disabled = false; }
  const rank = RH.score >= 26 ? "踩鼓达人" : RH.score >= 20 ? "舞步高手" : RH.score >= 12 ? "节奏萌新" : "鼓点新手";
  flash("rFb", `挑战完成！${rank} · ${RH.score}/30 分，命中 ${RH.hits}/${RH.total} 拍`);
  setBadge("rhythm", key);
  refreshBadges(key);
}
function flash(id, txt){
  const el = document.getElementById(id);
  if(!el) return;
  el.textContent = txt;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
}

/* ---- 双人节奏对决 ---- */
let DUO = {beatsL:[],beatsR:[],timer:null,run:false,idx:0,total:10,scoreL:0,scoreR:0,hitsL:0,hitsR:0};
function duoPanel(p){
  const isWater = p.key === "water";
  return `
    <div class="duo rv">
      <div class="duo-head">
        <div class="duo-title">双人对决 · ${isWater?"鼓点PK":"笙点PK"}</div>
        <div class="duo-rule">玩家一按 A 或点左侧 · 玩家二按 L 或点右侧</div>
      </div>
      <div class="duo-arena" id="duoArena">
        <div class="duo-side duo-l" onclick="duoHit(0)">
          <div class="duo-label">玩家一</div>
          <div class="duo-score" id="duoSL">0</div>
          <div class="duo-track"><div class="r-line"></div></div>
        </div>
        <div class="duo-vs">VS</div>
        <div class="duo-side duo-r" onclick="duoHit(1)">
          <div class="duo-label">玩家二</div>
          <div class="duo-score" id="duoSR">0</div>
          <div class="duo-track"><div class="r-line"></div></div>
        </div>
      </div>
      <div class="duo-fb" id="duoFb">各 ${DUO.total} 拍，谁踩得准谁赢！</div>
      <div class="duo-actions">
        <button class="btn indigo" onclick="startDuo('${p.key}')" id="duoStart">开始对决</button>
      </div>
    </div>`;
}
function startDuo(key){
  clearInterval(DUO.timer);
  DUO = {beatsL:[],beatsR:[],timer:null,run:true,idx:0,total:10,scoreL:0,scoreR:0,hitsL:0,hitsR:0};
  const arena = document.getElementById("duoArena");
  if(arena) arena.querySelectorAll(".beat").forEach(b=>b.remove());
  const sl = document.getElementById("duoSL"); if(sl) sl.textContent = "0";
  const sr = document.getElementById("duoSR"); if(sr) sr.textContent = "0";
  const fb = document.getElementById("duoFb"); if(fb) fb.textContent = "跟上节奏！";
  const btn = document.getElementById("duoStart");
  if(btn){ btn.textContent = "对决中…"; btn.disabled = true; }
  DUO.timer = setInterval(()=>{
    if(!DUO.run){ clearInterval(DUO.timer); return; }
    DUO.idx++;
    const t0 = performance.now();
    DUO.beatsL.push({t0, done:false});
    DUO.beatsR.push({t0, done:false});
    const a = document.getElementById("duoArena");
    if(a){
      const tl = a.querySelector(".duo-l .duo-track"), tr = a.querySelector(".duo-r .duo-track");
      const bl = document.createElement("div"); bl.className = "beat duo-beat";
      const br = document.createElement("div"); br.className = "beat duo-beat";
      if(tl) tl.appendChild(bl);
      if(tr) tr.appendChild(br);
    }
    if(DUO.idx >= DUO.total){
      clearInterval(DUO.timer);
      setTimeout(()=>{ DUO.run = false; duoFinish(key); }, 2100);
    }
  }, 560);
}
function duoHit(player){
  if(!DUO.run) return;
  const now = performance.now();
  const beats = player === 0 ? DUO.beatsL : DUO.beatsR;
  let best = null, bd = 1e9;
  beats.forEach(b=>{
    if(b.done) return;
    const tHit = b.t0 + 2000;
    if(now < tHit - 420) return;
    const d = Math.abs(now - tHit);
    if(d < bd){ bd = d; best = b; }
  });
  if(!best){ duoFb("等鼓点滚过来～"); return; }
  best.done = true;
  let pts = 0;
  if(bd < 120){ pts = 3; duoFb(player===0?"玩家一 完美！":"玩家二 完美！"); }
  else if(bd < 260){ pts = 2; duoFb(player===0?"玩家一 不错！":"玩家二 不错！"); }
  else if(bd < 420){ pts = 1; duoFb(player===0?"玩家一 勉强踩上":"玩家二 勉强踩上"); }
  else { duoFb(player===0?"玩家一 漏拍啦":"玩家二 漏拍啦"); }
  if(player === 0){ DUO.scoreL += pts; DUO.hitsL++; const el = document.getElementById("duoSL"); if(el) el.textContent = DUO.scoreL; }
  else { DUO.scoreR += pts; DUO.hitsR++; const el = document.getElementById("duoSR"); if(el) el.textContent = DUO.scoreR; }
  if(window.waveBurst && pts > 0) waveBurst();
}
function duoFb(t){
  const el = document.getElementById("duoFb");
  if(!el) return;
  el.textContent = t;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
}
function duoFinish(key){
  const btn = document.getElementById("duoStart");
  if(btn){ btn.textContent = "再战一局"; btn.disabled = false; }
  const p = PROJECTS[key];
  let msg;
  if(DUO.scoreL > DUO.scoreR) msg = "玩家一 获胜！" + p.name + "踩鼓之王 · " + DUO.scoreL + ":" + DUO.scoreR;
  else if(DUO.scoreR > DUO.scoreL) msg = "玩家二 获胜！" + p.name + "踩鼓之王 · " + DUO.scoreR + ":" + DUO.scoreL;
  else msg = "势均力敌！平局 " + DUO.scoreL + ":" + DUO.scoreR + "，再来一局！";
  duoFb(msg);
}

/* ---- AI 语音陪练 ---- */
const VOICE_QA = {
  water:[
    {q:"苗族水鼓舞流传在贵州的哪个县？", opts:["凯里市","剑河县","雷山县","丹寨县"], ans:1, match:["剑河","剑和"], praise:"没错，就是剑河县革东镇大稿午村！", hint:"是剑河县，大稿午村是水鼓舞的故乡。"},
    {q:"苗语里“踩鼓于水”怎么说？", opts:["zuk niel eb","zuk gax","mel eb","zuk niel gax"], ans:0, match:["zuk niel eb","zuk nileb"], praise:"标准！zuk niel eb，踩鼓于水。", hint:"zuk niel eb，意思是踩鼓于水。"},
    {q:"水鼓舞被誉为舞蹈界的什么？", opts:["活化石","东方芭蕾","天籁之音","水中芭蕾"], ans:0, match:["活化石"], praise:"对，民族原始舞蹈的活化石！", hint:"答案是活化石。"}
  ],
  lusheng:[
    {q:"芦笙舞的别称是什么？", opts:["踩芦笙","板凳舞","铜鼓舞","木鼓舞"], ans:0, match:["踩芦笙","彩芦笙"], praise:"没错，也叫踩芦笙、踩歌堂。", hint:"别称是踩芦笙。"},
    {q:"芦笙舞至少有多少年历史？", opts:["两千年","五百年","一百年","八百年"], ans:0, match:["两千","2000"], praise:"厉害，从西汉乐舞俑算起两千多年！", hint:"至少两千多年。"},
    {q:"苗族芦笙舞是哪一年列入国家级非遗？", opts:["2006年","2010年","2015年","1999年"], ans:0, match:["2006","二零零六"], praise:"正确，2006年第一批国家级非遗！", hint:"2006年。"}
  ]
};
const VOICE = {idx:0, score:0, done:false};
function voicePanel(p){
  const qa = VOICE_QA[p.key];
  const over = VOICE.idx >= qa.length;
  if(over){
    const rank = VOICE.score >= 2 ? "苗语小达人" : VOICE.score >= 1 ? "非遗体验官" : "继续加油";
    return `
      <div class="voice rv">
        <div class="v-head"><div class="v-title">AI 语音陪练 · 和 AI 聊非遗</div><div class="v-score">答对 ${VOICE.score}/${qa.length}</div></div>
        <div class="v-bubble">陪练结束！你是「${rank}」。${VOICE.score===qa.length?"太厉害了，全部答对！":"再听 AI 读一遍，答对更多吧。"}</div>
        <div class="v-actions"><button class="btn plain" onclick="voiceReset()">再练一次</button></div>
      </div>`;
  }
  const q = qa[VOICE.idx];
  return `
    <div class="voice rv">
      <div class="v-head"><div class="v-title">AI 语音陪练 · 和 AI 聊非遗</div><div class="v-score">第 ${VOICE.idx+1}/${qa.length} 题</div></div>
      <div class="v-bubble">${q.q}</div>
      <div class="v-opts">
        ${q.opts.map((o,i)=>`<button class="v-opt" onclick="voicePick('${p.key}',${i})">${o}</button>`).join("")}
      </div>
      <div class="v-actions">
        ${(window.SpeechRecognition||window.webkitSpeechRecognition)?`<button class="btn indigo" onclick="voiceListen('${p.key}')" id="vMic">🎤 语音回答</button>`:""}
        <button class="btn plain" onclick="voiceSay('${q.q.replace(/'/g,"")}')">🔊 听 AI 读题</button>
      </div>
    </div>`;
}
function voiceSay(text){
  if(!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN"; u.rate = 0.95; u.pitch = 1.05;
  speechSynthesis.speak(u);
}
function voiceListen(key){
  const SRi = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SRi){ voiceSay("当前浏览器不支持语音识别，直接点击选项回答吧。"); return; }
  const rec = new SRi();
  rec.lang = "zh-CN"; rec.interimResults = false;
  const btn = document.getElementById("vMic");
  if(btn){ btn.textContent = "🎤 听你说…"; btn.disabled = true; }
  rec.onresult = e=>{
    const txt = e.results[0][0].transcript;
    checkVoiceAnswer(key, txt);
    if(btn){ btn.textContent = "🎤 语音回答"; btn.disabled = false; }
  };
  rec.onerror = ()=>{
    if(btn){ btn.textContent = "🎤 语音回答"; btn.disabled = false; }
    voiceSay("没听清，试试点击选项吧。");
  };
  rec.onend = ()=>{
    if(btn){ btn.textContent = "🎤 语音回答"; btn.disabled = false; }
  };
  rec.start();
}
function checkVoiceAnswer(key, txt){
  const q = VOICE_QA[key][VOICE.idx];
  const norm = s => (s||"").replace(/[\s，。！？、,.!?]/g,"").toLowerCase();
  const hit = q.match.some(k=> norm(txt).includes(norm(k)));
  if(hit){
    VOICE.score++;
    setBadge("voice", key);
    refreshBadges(key);
    if(window.waveBurst) waveBurst();
    voiceSay("回答正确！" + q.praise);
  } else {
    voiceSay("再想想，" + q.hint);
  }
  const opts = document.querySelectorAll(".v-opt");
  opts.forEach((b,j)=>{ b.classList.remove("ok","bad"); if(j===q.ans) b.classList.add("ok"); });
  setTimeout(()=>voiceNext(key), 2600);
}
function voicePick(key, i){
  const q = VOICE_QA[key][VOICE.idx];
  if(i === q.ans){
    VOICE.score++;
    setBadge("voice", key);
    refreshBadges(key);
    if(window.waveBurst) waveBurst();
    voiceSay("回答正确！" + q.praise);
  } else {
    voiceSay(q.hint);
  }
  const opts = document.querySelectorAll(".v-opt");
  opts.forEach((b,j)=>{ b.classList.remove("ok","bad"); if(j===q.ans) b.classList.add("ok"); if(j===i && j!==q.ans) b.classList.add("bad"); });
  setTimeout(()=>voiceNext(key), 2200);
}
function voiceNext(key){
  VOICE.idx++;
  const wrap = document.getElementById("voiceWrap");
  if(wrap) wrap.innerHTML = voicePanel(PROJECTS[key]);
}
function voiceReset(){
  VOICE.idx = 0; VOICE.score = 0; VOICE.done = false;
  const key = currentKey();
  const wrap = document.getElementById("voiceWrap");
  if(wrap) wrap.innerHTML = voicePanel(PROJECTS[key]);
}

/* ---- 3D 粒子水鼓舞台 ---- */
let STAGE = null;
function stageLoad(){
  if(STAGE) return;
  if(!document.getElementById("stage3d")) return;
  if(window.THREE){ stage3dInit(); return; }
  if(document.getElementById("threeJs")) return;
  const s = document.createElement("script");
  s.id = "threeJs";
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  s.onload = ()=>stage3dInit();
  document.head.appendChild(s);
}
function stage3dInit(){
  if(STAGE) return;
  const cvs = document.getElementById("stage3d");
  if(!cvs || !window.THREE) return;
  try{
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0b2e26, 7, 16);
    const cam = new THREE.PerspectiveCamera(50, cvs.clientWidth/cvs.clientHeight, 0.1, 100);
    cam.position.set(0, 2.3, 5.2); cam.lookAt(0, -0.2, 0);
    const wrap = cvs.parentElement;
    const w = (wrap && wrap.offsetWidth) || cvs.clientWidth || 300;
    const h = (wrap && wrap.offsetHeight) || cvs.clientHeight || 240;
    const ren = new THREE.WebGLRenderer({canvas: cvs, alpha: true});
    ren.setSize(w, h);
    ren.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    window.addEventListener("resize", ()=>{
      const ww = (wrap && wrap.offsetWidth) || cvs.clientWidth || 300;
      const hh = (wrap && wrap.offsetHeight) || cvs.clientHeight || 240;
      ren.setSize(ww, hh);
      cam.aspect = ww/hh;
      cam.updateProjectionMatrix();
    });
    const geo = new THREE.PlaneGeometry(9, 9, 34, 34);
    const mat = new THREE.MeshPhongMaterial({color: 0x1b6b55, transparent: true, opacity: .82, side: THREE.DoubleSide});
    const water = new THREE.Mesh(geo, mat);
    water.rotation.x = -Math.PI/2;
    water.position.y = -0.5;
    scene.add(water);
    const pos = geo.attributes.position;
    const vtx = pos.array;
    const N = 280;
    const pg = new THREE.BufferGeometry();
    const pa = new Float32Array(N*3);
    for(let i=0;i<N;i++){
      pa[i*3]   = (Math.random()-.5)*7.5;
      pa[i*3+1] = Math.random()*2.8 + .1;
      pa[i*3+2] = (Math.random()-.5)*7.5;
    }
    pg.setAttribute("position", new THREE.BufferAttribute(pa, 3));
    const pm = new THREE.PointsMaterial({color: 0xe9c46a, size: .1, transparent: true, opacity: .92});
    const pts = new THREE.Points(pg, pm);
    scene.add(pts);
    scene.add(new THREE.AmbientLight(0xffffff, .75));
    const dl = new THREE.DirectionalLight(0xffd9a0, .9);
    dl.position.set(2, 4, 3);
    scene.add(dl);
    const pp = pg.attributes.position.array;
    let amp = 0, t = 0;
    window.waveBurst = function(){ amp = 1; };
    (function loop(){
      requestAnimationFrame(loop);
      t += .016;
      amp = Math.max(0, amp - .022);
      for(let i=0;i<vtx.length;i+=3){
        vtx[i+2] = Math.sin(vtx[i]*2.2 + t*1.6)*(.09 + amp*.5) + Math.cos(vtx[i+1]*2.2 + t*1.3)*(.08 + amp*.4);
      }
      pos.needsUpdate = true;
      for(let i=0;i<pp.length;i+=3){
        pp[i+1] += amp*.07 + Math.sin(t*2 + i)*.0022;
        if(pp[i+1] > 3.4) pp[i+1] = .1;
      }
      pg.attributes.position.needsUpdate = true;
      ren.render(scene, cam);
    })();
    STAGE = 1;
  }catch(e){
    const tip = document.querySelector(".stage3d-tip");
    if(tip) tip.textContent = "3D 舞台加载失败（检查网络）";
  }
}

/* ---- 国风海报生成 ---- */
function posterPanel(p){
  return `
    <div class="poster-box rv">
      <div class="p-title">国风海报 · 生成专属非遗名片</div>
      <input class="p-input" id="pName" maxlength="8" placeholder="输入昵称（8 字内）">
      <button class="btn indigo" onclick="makePoster('${p.key}')">🎨 生成国风海报</button>
      <div class="p-canvas-wrap" id="pCanvasWrap"></div>
    </div>`;
}
function myTitle(key){
  const lit = ["quiz","voice","rhythm","like"].filter(k=>localStorage.getItem("badge_"+k+"_"+key)==="1").length;
  if(lit >= 4) return "非遗大使";
  if(lit >= 2) return "非遗体验官";
  if(lit >= 1) return "非遗新朋友";
  return "非遗探索者";
}
function makePoster(key){
  const p = PROJECTS[key];
  const name = (document.getElementById("pName") ? document.getElementById("pName").value : "").trim() || "非遗体验官";
  const cvs = document.createElement("canvas");
  cvs.width = 900; cvs.height = 1300;
  const ctx = cvs.getContext("2d");
  const W = 900, H = 1300;
  const SERIF = "'Noto Serif SC','Songti SC','STSong','SimSun',serif";

  // ---- 宣纸底 ----
  const bg = ctx.createLinearGradient(0,0,0,H);
  bg.addColorStop(0,"#faf3df"); bg.addColorStop(.55,"#f3e6c4"); bg.addColorStop(1,"#e8d2a4");
  ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
  for(let k=0;k<2600;k++){
    ctx.fillStyle = "rgba(120,95,50," + (Math.random()*.06) + ")";
    ctx.fillRect(Math.random()*W, Math.random()*H, 1.3, 1.3);
  }

  // ---- 远山剪影（底部两层）----
  function mountain(baseY, color, amp, seed){
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.moveTo(0,H);
    for(let x=0;x<=W;x+=8){
      const y = baseY - Math.abs(Math.sin(x*.006+seed)*amp) - Math.abs(Math.sin(x*.017+seed*2)*amp*.4);
      ctx.lineTo(x,y);
    }
    ctx.lineTo(W,H); ctx.closePath(); ctx.fill();
  }
  mountain(1230, "rgba(70,110,95,.18)", 90, 1.7);
  mountain(1260, "rgba(45,80,70,.22)", 60, 4.2);

  // ---- 双层边框 + 四角回纹 ----
  ctx.strokeStyle = "#8a6b3f"; ctx.lineWidth = 5; ctx.strokeRect(30,30,W-60,H-60);
  ctx.strokeStyle = "#c9a86a"; ctx.lineWidth = 1.5; ctx.strokeRect(46,46,W-92,H-92);
  ctx.strokeStyle = "#a63a2e"; ctx.lineWidth = 6;
  [[30,30,1,1],[W-30,30,-1,1],[30,H-30,1,-1],[W-30,H-30,-1,-1]].forEach(c=>{
    ctx.beginPath();
    ctx.moveTo(c[0]+c[2]*34, c[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(c[0], c[1]+c[3]*34);
    ctx.stroke();
  });

  // ---- 顶部眉题 ----
  ctx.textAlign = "center";
  ctx.fillStyle = "#7a5f34"; ctx.font = "600 26px " + SERIF;
  ctx.fillText("贵 州 苗 族 非 遗 舞 蹈", W/2, 108);
  ctx.strokeStyle = "#b8894a"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(W/2-90,126); ctx.lineTo(W/2+90,126); ctx.stroke();

  // ---- 中央大圆章 ----
  const cx = W/2, cy = 520, R = 225;
  ctx.save();
  ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2);
  ctx.fillStyle = "rgba(255,250,235,.55)"; ctx.fill();
  ctx.strokeStyle = "#a63a2e"; ctx.lineWidth = 7; ctx.stroke();
  ctx.strokeStyle = "#c9a86a"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx,cy,R-16,0,Math.PI*2); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,R+10,0,Math.PI*2); ctx.stroke();

  ctx.fillStyle = "#8a3b2f";
  ctx.font = "700 30px " + SERIF;
  ctx.fillText("贵 州 · 剑 河", cx, cy-96);
  ctx.font = "900 96px " + SERIF;
  ctx.fillText(p.name, cx, cy+12);
  ctx.font = "700 28px " + SERIF;
  ctx.fillStyle = "#7a5f34";
  ctx.fillText("· 水 舞 笙 歌 ·", cx, cy+82);
  ctx.restore();

  // ---- 圆章两侧云纹 ----
  function cloud(x, y, flip){
    ctx.strokeStyle = "#b8894a"; ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(x, y, 14, Math.PI*.5, Math.PI*1.5);
    ctx.arc(x+18, y-10, 12, Math.PI, Math.PI*2);
    ctx.arc(x+36, y, 14, Math.PI*1.5, Math.PI*.5);
    ctx.stroke();
  }
  cloud(150, 780, false); cloud(724, 780, true);

  // ---- 四枚方形印章 ----
  const badges = [["文","知识闯关"],["AI","语音陪练"],["鼓","节拍挑战"],["心","点赞助力"]];
  const lit = ["quiz","voice","rhythm","like"].map(k=>localStorage.getItem("badge_"+k+"_"+key)==="1");
  const sealY = 880, sq = 74;
  badges.forEach((b,i)=>{
    const sx = W/2 - 255 + i*170;
    ctx.save();
    const on = lit[i];
    ctx.strokeStyle = on ? "#2e6b57" : "#b7a67f"; ctx.lineWidth = 3.5;
    ctx.strokeRect(sx-sq/2, sealY-sq/2, sq, sq);
    ctx.fillStyle = on ? "#2e6b57" : "#a89a76";
    ctx.font = "900 38px " + SERIF; ctx.textAlign = "center";
    ctx.fillText(b[0], sx, sealY+13);
    ctx.font = "600 21px " + SERIF;
    ctx.fillText(b[1], sx, sealY+66);
    ctx.restore();
  });

  // ---- 称号（左右装饰线）----
  const title = myTitle(key);
  ctx.strokeStyle = "#2e6b57"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W/2-190, 1018); ctx.lineTo(W/2-120, 1018); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W/2+120, 1018); ctx.lineTo(W/2+190, 1018); ctx.stroke();
  ctx.fillStyle = "#2e6b57"; ctx.textAlign = "center";
  ctx.font = "900 56px " + SERIF;
  ctx.fillText("「" + title + "」", W/2, 1032);

  // ---- 昵称细框 ----
  ctx.strokeStyle = "#8a6b3f"; ctx.lineWidth = 1.5;
  const nw = Math.min(420, 120 + name.length*34);
  ctx.strokeRect(W/2-nw/2, 1062, nw, 52);
  ctx.fillStyle = "#5a4a2a"; ctx.font = "700 30px " + SERIF;
  ctx.fillText(name, W/2, 1098);

  // ---- 底部水纹 ----
  ctx.strokeStyle = "#4a7c66"; ctx.lineWidth = 2.5;
  for(let k=0;k<3;k++){
    ctx.beginPath();
    for(let x=80; x<=W-80; x+=6){
      const yy = 1180 + k*22 + Math.sin(x*.035 + k*1.8)*8;
      if(x===80) ctx.moveTo(x,yy); else ctx.lineTo(x,yy);
    }
    ctx.stroke();
  }

  // ---- 左下小红章 ----
  ctx.save();
  ctx.fillStyle = "#a63a2e";
  ctx.fillRect(70, 1218, 44, 44);
  ctx.strokeStyle = "#f8efd8"; ctx.lineWidth = 2;
  ctx.strokeRect(75, 1223, 34, 34);
  ctx.fillStyle = "#f8efd8"; ctx.font = "900 20px " + SERIF; ctx.textAlign="center";
  ctx.fillText("非遗", 92, 1247);
  ctx.restore();

  ctx.fillStyle = "#7a5f34"; ctx.font = "600 24px " + SERIF; ctx.textAlign="center";
  ctx.fillText("扫码体验 · 水舞笙歌 H5", W/2+60, 1250);

  const url = cvs.toDataURL("image/png");
  const wrap = document.getElementById("pCanvasWrap");
  if(!wrap) return;
  wrap.innerHTML = '<img class="p-preview" src="' + url + '" alt="我的非遗名片">';
  const dl = document.createElement("a");
  dl.href = url; dl.download = "非遗名片-" + p.name + ".png";
  dl.className = "btn gold p-dl"; dl.textContent = "⬇ 下载海报";
  wrap.appendChild(dl);
  wrap.scrollIntoView({behavior:"smooth", block:"center"});
}

/* ---- 点赞助力 ---- */
function likePanel(p){
  const n = parseInt(localStorage.getItem("likes_"+p.key)||"0",10)||0;
  return `
    <div class="like-box rv">
      <div class="like-t">如果喜欢${p.name}，为它点个赞鼓鼓劲吧！</div>
      <button class="like-btn" id="likeBtn" onclick="like('${p.key}')">
        <span class="heart">♥</span>
        <span>点赞 <b id="likeNum">${n}</b></span>
      </button>
    </div>`;
}
function like(key){
  const k = "likes_"+key;
  let n = parseInt(localStorage.getItem(k)||"0",10)||0; n++;
  localStorage.setItem(k, String(n));
  setBadge("like", key);
  const el = document.getElementById("likeNum"); if(el) el.textContent = n;
  const b = document.getElementById("likeBtn");
  if(b){ b.classList.remove("burst"); void b.offsetWidth; b.classList.add("burst"); }
  refreshBadges(key);
}

function quizCard(p){
  const q = p.quiz[state.quizIdx];
  const progress = (state.quizIdx / p.quiz.length) * 100;
  const marks = ["A","B","C","D"];
  const opts = q.opts.map((o,i)=>{
    let cls = "";
    if(state.answered && i === q.ans) cls = "correct";
    if(state.answered && i === state.picked && i !== q.ans) cls = "wrong";
    return `<button class="q-opt rv ${cls}" style="animation-delay:${.16+i*.08}s" ${state.answered?"disabled":""} onclick="pick(${i})"><span class="letter">${marks[i]}</span><span>${o}</span></button>`;
  }).join("");
  const fb = state.answered
    ? `<div class="q-fb show ${state.picked===q.ans?"ok":"bad"}"><b>${state.picked===q.ans?"回答正确！":"再想想，正确答案是 " + marks[q.ans]}</b>${q.why}</div>`
    : "";
  return `
    <div class="quiz-head rv" style="animation-delay:.06s">
      <div class="pn">第 ${state.quizIdx+1} / ${p.quiz.length} 题</div>
      <div class="pbar"><i style="width:${progress}%"></i></div>
      <div class="pn">${state.score} 分</div>
    </div>
    <div class="q-card rv" style="animation-delay:.1s">
      <div class="q">${q.q}</div>
      <div class="q-opts">${opts}</div>
      ${fb}
      ${state.answered ? `<button class="btn indigo block" style="margin-top:18px" onclick="nextQ()">${state.quizIdx===p.quiz.length-1?"查看成绩":"下一题"}${ICONS.arrow.replace("<svg","<svg style='width:16px'")}</button>` : ""}
    </div>`;
}

function quizResult(p){
  setBadge("quiz", p.key);
  setTimeout(()=>refreshBadges(p.key), 60);
  const rank = state.score === 100 ? "非遗守护者"
    : state.score >= 80 ? "非遗传承者"
    : state.score >= 60 ? "非遗体验官"
    : "非遗萌新";
  return `
    <div class="result">
      <div class="seal">${ICONS.seal}</div>
      <h3>${rank}</h3>
      <p class="score">得分 <b>${state.score}</b> / ${p.quiz.length*20}</p>
      <span class="rank">${p.name} · 知识闯关完成</span>
      <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
        <button class="btn block" onclick="resetQuiz()">再挑战一次</button>
        <button class="btn plain block" onclick="go('#final')">完成探索 · 返回总结</button>
      </div>
    </div>`;
}

/* ---- 服装DIY：整套换装（四套盛装任选） ---- */
function renderDiy(){
  const isBoy = state.diyRole === "boy";
  const SETS = isBoy ? DIY_SETS_BOY : DIY_SETS;
  const cur = state.diySet || "素雅便装";
  const idx = Math.max(0, SETS.findIndex(s=>s.name===cur));
  const suit = SETS[idx];
  app.innerHTML = `
    <section class="view active">
      <div class="topbar">
        <button class="back" onclick="go('#home')">${ICONS.back}</button>
        <div class="t-title">苗族盛装 DIY</div>
        <div class="t-tag">整套换装</div>
      </div>
      <div class="diy-role">
        <span>角色</span>
        <button type="button" class="role-chip ${!isBoy?"on":""}" onclick="setRole('girl')">少女</button>
        <button type="button" class="role-chip ${isBoy?"on":""}" onclick="setRole('boy')">少年</button>
      </div>
      <div class="sect" style="padding-bottom:0">
        <div class="eyebrow">FULL SET · 整套换装</div>
        <h2>给${isBoy?"少年":"少女"}挑一套苗族盛装</h2>
        <p class="desc">四套盛装各有来头，点一下整套上身，看看哪套最适合 TA。</p>
      </div>
      <div class="diy-stage">
        <img class="diy-fig" src="${suit.img}" alt="${suit.name}">
        <div class="diy-badge2">当前套装 · ${suit.name}</div>
      </div>
      <div class="diy-sets">
        ${SETS.map((s,i)=>`
          <button type="button" class="diy-set-card ${s.name===suit.name?"on":""}" onclick="setDiySet('${s.name}')">
            <span class="diy-set-thumb" style="background-image:url('${s.img}')"></span>
            <span class="diy-set-info"><b>${s.name}</b><i>${s.note||""}</i></span>
            <span class="diy-set-check">✓</span>
          </button>`).join("")}
      </div>
      <div class="diy-note">
        ${suit.note || ""}<br>
        <span class="suit">当前套装：${suit.name}，跳起舞来一定好看！</span>
      </div>
      <div class="diy-actions">
        <button class="btn block" onclick="go('#home')">完成搭配 · 去选择项目</button>
        <button class="btn plain block" onclick="randomDiy()">随机来一身</button>
      </div>
    </section>`;
}
function setRole(r){ state.diyRole = r; render(); }
function setDiySet(name){ state.diySet = name; render(); }
function randomDiy(){
  const SETS = state.diyRole === "boy" ? DIY_SETS_BOY : DIY_SETS;
  state.diySet = SETS[Math.floor(Math.random()*SETS.length)].name;
  render();
}

/* ---- 总结页 ---- */
function renderFinal(){
  const v = state.visited || {};
  const badges = [
    {k:"intro", name:"读懂它"}, {k:"gallery", name:"非遗图鉴"},
    {k:"play",  name:"互动广场"}, {k:"quiz",    name:"知识闯关"},
    {k:"poster",name:"我的名片"}
  ];
  const score = state.score || 0;
  const title = score >= 80 ? "青年非遗传承人" : score >= 60 ? "文化体验官" : score >= 40 ? "初探访客" : "初遇路人";
  app.innerHTML = `
    <section class="view active final">
      <div class="orn">${ICONS.finalOrn}</div>
      <div class="final-seal">${title}</div>
      <h2>你的非遗手札</h2>
      <p>这一程你走过了 ${Object.keys(v).length} / 5 个模块，答题得分 ${score} 分。</p>
      <div class="final-badges">
        ${badges.map(b=>`<span class="fb ${v[b.k]?'on':'off'}">${b.name}</span>`).join("")}
      </div>
      <p class="final-desc">水鼓舞踏出的水花里，藏着苗家对风调雨顺的期盼；<br>芦笙吹响的旋律里，回响着两千年的民族记忆。</p>
      <div class="line"></div>
      <div class="slogan">讲好贵州故事 · 传承中华优秀传统文化</div>
      <div class="school">社科普及创作团队<br>2026年推动青年大学生参与社科普及比赛活动 · 网页类赛道</div>
      <div class="actions">
        <button class="btn" onclick="go('#home')">再选一项探索</button>
        <button class="btn ghost" onclick="go('#cover')">回到封面</button>
      </div>
    </section>`;
}

/* 首页横排卡片：JS 滑动（箭头按钮 + 手指/鼠标拖动），不依赖浏览器原生横向滚动 */
let hcIndex = 0, hcMoved = false;
function hcStep(){
  const t = document.getElementById('hcTrack');
  if(!t || !t.children[0]) return 360;
  return t.children[0].getBoundingClientRect().width + 14;
}
function slideCards(dir){
  const t = document.getElementById('hcTrack');
  const wrap = document.querySelector('.home-cards-wrap');
  if(!t || !wrap) return;
  const step = hcStep();
  const max = Math.max(0, Math.ceil((t.scrollWidth - wrap.clientWidth) / step));
  hcIndex = Math.min(Math.max(0, hcIndex + dir), max);
  t.style.transition = 'transform .35s cubic-bezier(.2,.8,.25,1)';
  t.style.transform = 'translateX(' + (-hcIndex * step) + 'px)';
}
let __homeTimer = null;
function autoHomeCards(){
  clearInterval(__homeTimer);
  let paused = false;
  const wrap = document.querySelector('.home-cards-wrap');
  if(!wrap) return;
  wrap.addEventListener('touchstart', ()=>paused=true, {passive:true});
  wrap.addEventListener('touchend', ()=>setTimeout(()=>paused=false, 3000));
  wrap.addEventListener('mousedown', ()=>paused=true);
  window.addEventListener('mouseup', ()=>setTimeout(()=>paused=false, 3000));
  __homeTimer = setInterval(()=>{
    if(paused) return;
    const t = document.getElementById('hcTrack');
    if(!t) return;
    const step = hcStep();
    const max = Math.max(0, Math.ceil((t.scrollWidth - wrap.clientWidth) / step));
    if(hcIndex >= max) hcIndex = 0; else hcIndex++;
    t.style.transition = 'transform .6s cubic-bezier(.2,.8,.25,1)';
    t.style.transform = 'translateX(' + (-hcIndex * step) + 'px)';
  }, 3500);
}
(function(){
  const readX = t => { const m = (t.style.transform||'').match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : 0; };
  document.addEventListener('pointerdown', e => {
    const wrap = e.target.closest('.home-cards-wrap');
    if(!wrap) return;
    const t = document.getElementById('hcTrack');
    if(!t) return;
    const startX = e.clientX, startY = e.clientY;
    const base = readX(t);
    hcMoved = false;
    const move = ev => {
      const dx = ev.clientX - startX, dy = ev.clientY - startY;
      if(!hcMoved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy) * 1.2) hcMoved = true;
      if(hcMoved){ ev.preventDefault(); t.style.transition = 'none'; t.style.transform = 'translateX(' + (base + dx) + 'px)'; }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointercancel', up);
      if(!hcMoved) return;
      const cur = readX(t);
      const step = hcStep();
      const max = Math.max(0, Math.ceil((t.scrollWidth - wrap.clientWidth) / step));
      hcIndex = Math.min(Math.max(0, Math.round(-cur / step)), max);
      t.style.transition = 'transform .3s cubic-bezier(.2,.8,.25,1)';
      t.style.transform = 'translateX(' + (-hcIndex * step) + 'px)';
      void 0;
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
    document.addEventListener('pointercancel', up);
  });
})();

/* ================================================================
 * 背景音乐
 * ================================================================ */
(function(){
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("bgmBtn");
  bgm.volume = 0.2;
  let bgmStarted = false;
  bgm.addEventListener("play", ()=>{ bgmStarted = true; btn.classList.add("on"); btn.classList.remove("off"); });
  bgm.addEventListener("pause", ()=>{ btn.classList.remove("on"); btn.classList.add("off"); });
  const tryPlay = () => { if(!bgmStarted && bgm.paused){ bgm.play().catch(()=>{}); } };
  /* 进入页面第一时间自动播放 */
  tryPlay();
  /* 若被浏览器拦截：首次任意有效交互（触摸/点击/按键，不限按钮）立即响起，成功后不再尝试 */
  const kick = (e) => {
    if(e && e.target && e.target.closest && e.target.closest("#bgmBtn")) return;
    tryPlay();
  };
  ["pointerdown","touchstart","mousedown","keydown"].forEach(ev => document.addEventListener(ev, kick));
})();
function toggleBgm(){
  const bgm = document.getElementById("bgm");
  if(bgm.paused){ bgm.play().catch(()=>{}); } else { bgm.pause(); }
}

/* 横排卡片：桌面鼠标拖拽滑动（触摸设备走原生滑动） */
document.addEventListener('pointerdown', e => {
  if(e.pointerType !== 'mouse') return;
  const sc = e.target.closest('.home-cards');
  if(!sc) return;
  let lastX = e.clientX, moved = false;
  const move = ev => {
    const dx = ev.clientX - lastX;
    lastX = ev.clientX;
    if(!moved && Math.abs(dx) > 5) moved = true;
    if(moved){ sc.scrollLeft -= dx; }
  };
  const up = () => {
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', up);
  };
  document.addEventListener('pointermove', move);
  document.addEventListener('pointerup', up);
});

/* ================================================================
 * 交互
 * ================================================================ */
function speakMiao(){
  try{
    const u = new SpeechSynthesisUtterance("zu kien li ei");
    u.lang = "en-US"; u.rate = 0.75; u.pitch = 1.1;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }catch(e){}
}
function setTab(t){ state.tab = t; state.visited[t] = true; render(); window.scrollTo(0,0); }
function goBackItem(){ if(state.tab && state.tab !== "menu"){ setTab("menu"); } else { go("#home"); } }
let __modTmr = null;
function autoModScroll(){
  cancelAnimationFrame(__modTmr||0);
  let paused = false;
  const stage = document.querySelector('.mod-stage');
  if(!stage) return;
  modFloat = 0;
  renderMod3d();
  stage.addEventListener('touchstart', ()=>paused=true, {passive:true});
  stage.addEventListener('touchend', ()=>setTimeout(()=>paused=false, 2500));
  stage.addEventListener('mousedown', ()=>paused=true);
  window.addEventListener('mouseup', ()=>setTimeout(()=>paused=false, 2500));
  (function tick(){
    if(!paused){
      modFloat += 0.0035;
      renderMod3d();
    }
    __modTmr = requestAnimationFrame(tick);
  })();
}

/* ---- 答题交互 ---- */
function pick(i){
  if(state.answered) return;
  const p = PROJECTS[lastKey] || PROJECTS.water;
  const q = p.quiz[state.quizIdx];
  state.picked = i; state.answered = true;
  if(i === q.ans) state.score += 20;
  render();
}
function nextQ(){
  state.quizIdx++; state.picked = null; state.answered = false;
  render();
}

/* ---- 启动 ---- */
window.addEventListener('hashchange', render);
render();
setTimeout(function(){ var l=document.getElementById('loader'); if(l) l.classList.add('done'); }, 3800);
