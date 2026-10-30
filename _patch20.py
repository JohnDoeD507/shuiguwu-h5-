# -*- coding: utf-8 -*-
p = r'C:\Users\wmj\Doubao\chats\2026-10-08\new-chat\miao-fei-yi-h5\index.html'
src = open(p, encoding='utf-8').read()
ok = True
def rep(old, new, tag):
    global src, ok
    n = src.count(old)
    print(tag, ':', n)
    if n != 1:
        ok = False
        return
    src = src.replace(old, new)

# 1) 卡片动画改为滚动触发：默认隐藏，进入视口加 .in 才播放
rep('''.item-page .info-cell,.item-page .sec-card,.item-page .quote,.item-page .g-item,.item-page .chip,.item-page .q-card,.item-page .q-opt,.item-page .quiz-head{animation:cardUp 1.05s cubic-bezier(.16,.85,.24,1.15) both}
@keyframes cardUp{from{opacity:0;transform:translateY(40px) scale(.93)}to{opacity:1;transform:none}}''',
'''.item-page .info-cell,.item-page .sec-card,.item-page .quote,.item-page .g-item,.item-page .chip,.item-page .q-card,.item-page .q-opt,.item-page .quiz-head{opacity:0;transform:translateY(26px);will-change:transform,opacity}
.item-page .info-cell.in,.item-page .sec-card.in,.item-page .quote.in,.item-page .g-item.in,.item-page .chip.in,.item-page .q-card.in,.item-page .q-opt.in,.item-page .quiz-head.in{opacity:1;transform:none;animation:cardUp 1.05s cubic-bezier(.16,.85,.24,1.15) both}
@keyframes cardUp{from{opacity:0;transform:translateY(40px) scale(.93)}to{opacity:1;transform:none}}''', 'cardUp scroll')

# 2) 文字级动画同样改为父级 .in 后触发
rep('''.item-page .info-cell .k{animation:labelIn .8s cubic-bezier(.2,.8,.25,1) both;animation-delay:.42s}
.item-page .info-cell .v{animation:valIn .95s cubic-bezier(.18,.9,.26,1.16) both;animation-delay:.64s}
.item-page .sec-card h3{animation:labelIn .85s cubic-bezier(.2,.8,.25,1) both;animation-delay:.3s}
.item-page .sec-card p{animation:valIn 1s cubic-bezier(.18,.9,.26,1.12) both;animation-delay:.5s}
.item-page .sec-card .figure{animation:figIn 1s cubic-bezier(.18,.9,.26,1.1) both;animation-delay:.78s}
.item-page .sec-card .figcap{animation:valIn .8s ease both;animation-delay:1s}
.item-page .g-item .cap{animation:capIn .7s cubic-bezier(.2,.8,.25,1) both;animation-delay:.5s}
.item-page .q-card .q{animation:valIn 1s cubic-bezier(.18,.9,.26,1.12) both;animation-delay:.35s}
.item-page .quiz-head .pn{animation:labelIn .7s ease both;animation-delay:.22s}''',
'''.item-page .info-cell .k{opacity:0}
.item-page .info-cell.in .k{animation:labelIn .8s cubic-bezier(.2,.8,.25,1) both;animation-delay:.42s}
.item-page .info-cell .v{opacity:0}
.item-page .info-cell.in .v{animation:valIn .95s cubic-bezier(.18,.9,.26,1.16) both;animation-delay:.64s}
.item-page .sec-card h3{opacity:0}
.item-page .sec-card.in h3{animation:labelIn .85s cubic-bezier(.2,.8,.25,1) both;animation-delay:.3s}
.item-page .sec-card p{opacity:0}
.item-page .sec-card.in p{animation:valIn 1s cubic-bezier(.18,.9,.26,1.12) both;animation-delay:.5s}
.item-page .sec-card .figure{opacity:0;transform:scale(.94)}
.item-page .sec-card.in .figure{animation:figIn 1s cubic-bezier(.18,.9,.26,1.1) both;animation-delay:.78s}
.item-page .sec-card .figcap{opacity:0}
.item-page .sec-card.in .figcap{animation:valIn .8s ease both;animation-delay:1s}
.item-page .g-item .cap{opacity:0}
.item-page .g-item.in .cap{animation:capIn .7s cubic-bezier(.2,.8,.25,1) both;animation-delay:.5s}
.item-page .q-card .q{opacity:0}
.item-page .q-card.in .q{animation:valIn 1s cubic-bezier(.18,.9,.26,1.12) both;animation-delay:.35s}
.item-page .quiz-head .pn{opacity:0}
.item-page .quiz-head.in .pn{animation:labelIn .7s ease both;animation-delay:.22s}''', 'text scroll')

# 3) 模板加 rv 标记
rep('''${p.info.map((c,i)=>`<div class="info-cell" style="animation-delay:${i*.07}s"><div class="k">${c.k}</div><div class="v">${c.v}</div></div>`).join("")}''',
'''${p.info.map((c,i)=>`<div class="info-cell rv" style="animation-delay:${i*.07}s"><div class="k">${c.k}</div><div class="v">${c.v}</div></div>`).join("")}''', 'info rv')
rep('''    <div class="sec-card ${s.type==="indigo"?"alt":""}" style="animation-delay:${.14+i*.14}s">''',
'''    <div class="sec-card ${s.type==="indigo"?"alt":""} rv" style="animation-delay:${.14+i*.14}s">''', 'sec rv')
rep('''    <div class="quote" style="animation-delay:.12s">${p.quote}<cite>${p.quoteFrom}</cite></div>''',
'''    <div class="quote rv" style="animation-delay:.12s">${p.quote}<cite>${p.quoteFrom}</cite></div>''', 'quote rv')
rep('''${p.cats.map((c,i)=>`<button class="chip ${state.cat===c?"on":""}" style="animation-delay:${i*.07}s" onclick="setCat('${c}')">${c}</button>`).join("")}''',
'''${p.cats.map((c,i)=>`<button class="chip rv ${state.cat===c?"on":""}" style="animation-delay:${i*.07}s" onclick="setCat('${c}')">${c}</button>`).join("")}''', 'chip rv')
rep('''        <div class="g-item" style="animation-delay:${i*.09}s" onclick="openModal(${p.key==="water"?0:1},${p.gallery.indexOf(g)})">''',
'''        <div class="g-item rv" style="animation-delay:${i*.09}s" onclick="openModal(${p.key==="water"?0:1},${p.gallery.indexOf(g)})">''', 'g rv')
rep('''    <div class="quiz-head" style="animation-delay:.06s">''',
'''    <div class="quiz-head rv" style="animation-delay:.06s">''', 'quizhead rv')
rep('''    <div class="q-card" style="animation-delay:.1s">''',
'''    <div class="q-card rv" style="animation-delay:.1s">''', 'qcard rv')
rep('''    return `<button class="q-opt ${cls}" style="animation-delay:${.16+i*.08}s" ${state.answered?"disabled":""} onclick="pick(${i})">''',
'''    return `<button class="q-opt rv ${cls}" style="animation-delay:${.16+i*.08}s" ${state.answered?"disabled":""} onclick="pick(${i})">''', 'qopt rv')

# 4) render 统一调用 initReveal + 定义观察器
rep('''function render(){
  const h = location.hash.replace(/^#\\/?/, "") || "cover";
  if(h === "cover") return renderCover();
  if(h === "home") return renderHome();
  if(h === "diy") return renderDiy();
  if(h === "final") return renderFinal();
  if(h.startsWith("item/")) return renderItem(h.split("/"));
  return renderCover();
}''',
'''function render(){
  const h = location.hash.replace(/^#\\/?/, "") || "cover";
  if(h === "cover") renderCover();
  else if(h === "home") renderHome();
  else if(h === "diy") renderDiy();
  else if(h === "final") renderFinal();
  else if(h.startsWith("item/")) renderItem(h.split("/"));
  else renderCover();
  setTimeout(initReveal, 40);
}

/* 滚动触发出场：内容进入视口才播放 */
function initReveal(){
  const items = document.querySelectorAll('.item-page .rv');
  if(!items.length) return;
  if(!("IntersectionObserver" in window)){
    items.forEach(el=>el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  },{threshold:.16, rootMargin:"0px 0px -6% 0px"});
  items.forEach(el=>io.observe(el));
}''', 'render+reveal')

if ok:
    open(p, 'w', encoding='utf-8').write(src)
    print('ALL REPLACED, saved')
else:
    print('SOME MISS, NOT SAVED')
