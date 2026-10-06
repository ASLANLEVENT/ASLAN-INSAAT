/* ============ BURAYI DÜZENLEYİN: telefon, adres, referanslar ============ */
/* Projeleri, Hakkımızda metnini ve rakamları data.js dosyasından düzenleyin. */
const FIRMA={telefon:"0535 983 63 24",whatsapp:"905359836324",harita:"",haritaSorgu:"Balat, Istanbul",adres:{tr:"Balat, İstanbul",en:"Balat, Istanbul",ar:"بالات، إسطنبول"}};
const LOGO="";/* gerçek logo gelince buraya eklenecek */
const REFERANSLAR=["[Müşteri / Kurum 1]","[Müşteri / Kurum 2]","[Müşteri / Kurum 3]"];
const YORUMLAR=[{metin:"[Müşteri yorumu buraya gelecek.]",isim:"[İsim Soyisim]",proje:"[Proje adı]"}];
/* ============================================================ */
const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const lnk=u=>/^https?:\/\//i.test(u||"")?u:"";
const DB=SITE_DATA;let PROJELER=DB.projeler;
DB.hakkinda=DB.hakkinda||{ad:{tr:""},unvan:{tr:""},paragraflar:[],soz:{tr:""},foto:""};DB.sayilar=DB.sayilar||{};const HAKKINDA=DB.hakkinda;
PROJELER.forEach(p=>{p.fotolar=(p.fotolar||[]).filter(u=>typeof u==="string"&&u&&!/^\s*javascript:/i.test(u));p.harita=lnk(p.harita);p.video=lnk(p.video)});
const D=[["Siteye Gir","Enter Site","الدخول إلى الموقع"],["Önceki","Previous","السابق"],["Sonraki","Next","التالي"],["Fotoğraf","Photo","صورة"],["Ziyaretçi Girişi","Visitor Entry","دخول الزوار"],["Admin Girişi","Admin Login","دخول المشرف"],["İstanbul'un kalbinde 35 yıllık tecrübe.","35 years of experience in the heart of Istanbul.","خبرة 35 عامًا في قلب إسطنبول."],["Kontrol ediliyor…","Checking…","جارٍ التحقق…"],["Admin girişi sadece site sahibine açıktır. Bu sayfayı claude.ai hesabınızla giriş yaparak açın.","Admin login is only for the site owner. Open this page while signed in to your claude.ai account.","دخول المشرف مخصص لمالك الموقع فقط. افتح هذه الصفحة بعد تسجيل الدخول بحساب claude.ai."],["Devam ediyor","Ongoing","قيد التنفيذ"],["Projeler yakında eklenecek.","Projects will be added soon.","سيتم إضافة المشاريع قريبًا."],["Restorasyon","Restoration","ترميم المباني التاريخية"],["Diğer","Other","أخرى"],["Ana Sayfa","Home","الرئيسية"],["Yol tarifi al","Get directions","احصل على الاتجاهات"],["Yukarı çık","Back to top","العودة للأعلى"],["Ara","Call","اتصل"],["Menü","Menu","القائمة"],["WhatsApp","WhatsApp","واتساب"],["İstanbul'da çalıştığımız bölgeler","Where we work in Istanbul","المناطق التي نعمل فيها في إسطنبول"],["Taksim","Taksim","تقسيم"],["Beyoğlu","Beyoğlu","بي أوغلو"],["Beşiktaş","Beşiktaş","بشكتاش"],["Nişantaşı","Nişantaşı","نيشانتاشي"],["Balat","Balat","بالات"],["Hakkımızda", "About Us", "من نحن"], ["Hizmetler", "Services", "خدماتنا"], ["Projeler", "Projects", "المشاريع"], ["Çalışma Şeklimiz", "How We Work", "طريقة عملنا"], ["Referanslar", "References", "عملاؤنا"], ["İletişim", "Contact", "اتصل بنا"], ["Sağlam temel, zamanında teslim.", "Solid foundations, delivered on time.", "أساس متين، وتسليم في الموعد."], ["35 yıllık tecrübe, güçlü bir ekip. Taksim'den Balat'a İstanbul'un en özel semtlerinde, işinizi baştan sona tek elden ve söz verdiğimiz tarihte teslim ediyoruz.", "35 years of experience and a strong team. From Taksim to Balat, in Istanbul's most distinctive neighborhoods, we deliver your project from start to finish, on the date we promise.", "خبرة 35 عامًا وفريق قوي. من تقسيم إلى بالات، في أرقى أحياء إسطنبول، ننفّذ مشروعك من البداية إلى النهاية وفي الموعد الذي نعد به."], ["Projelerimizi inceleyin", "View our projects", "تصفّح مشاريعنا"], ["Teklif isteyin", "Request a quote", "اطلب عرض سعر"], ["yıllık tecrübe", "years of experience", "سنوات خبرة"], ["tamamlanan proje", "completed projects", "مشروع منجز"], ["mutlu müşteri", "happy clients", "عميل راضٍ"], ["kişilik ekip", "team members", "فرد في الفريق"], ["Yaptığımız işler", "What We Do", "أعمالنا"], ["İnşaatın A'dan Z'ye her aşamasını üstleniyoruz. İster anahtar teslim, ister yalnızca ihtiyaç duyduğunuz kısım için çalışıyoruz.", "We take on every stage of construction, from A to Z. Turnkey, or just the part you need.", "نتولّى كل مراحل البناء من الألف إلى الياء، بنظام تسليم المفتاح أو للجزء الذي تحتاجه فقط."], ["Konut inşaatı", "Residential construction", "البناء السكني"], ["Müstakil ev, villa ve apartman projeleri.", "Detached houses, villas and apartment buildings.", "منازل مستقلة وفلل وعمارات سكنية."], ["Ticari yapılar", "Commercial buildings", "المباني التجارية"], ["Dükkân, ofis, depo ve atölye binaları.", "Shops, offices, warehouses and workshops.", "محلات ومكاتب ومخازن وورش."], ["Tadilat ve yenileme", "Renovation and refurbishment", "الترميم والتجديد"], ["Mevcut binanın iç ve dış yenilenmesi.", "Interior and exterior renovation of existing buildings.", "تجديد داخلي وخارجي للمباني القائمة."], ["Kaba ve ince işler", "Structural and finishing work", "الهيكل والتشطيبات"], ["Betonarme, duvar, sıva, boya, seramik.", "Reinforced concrete, masonry, plaster, paint, tiling.", "خرسانة مسلحة وبناء وبياض ودهان وسيراميك."], ["Çevre düzenleme", "Landscaping and site work", "تنسيق المواقع"], ["Bahçe duvarı, zemin kaplama, yol ve otopark.", "Garden walls, paving, roads and parking.", "أسوار حدائق وتبليط وطرق ومواقف سيارات."], ["Proje ve keşif", "Planning and site survey", "التخطيط والمعاينة"], ["Yerinde keşif, metraj ve yazılı fiyat teklifi.", "On-site survey, quantities and a written quote.", "معاينة في الموقع وحصر الكميات وعرض سعر مكتوب."], ["Tamamladığımız işlerden örnekler. Ayrıntıları görmek için bir projeye tıklayın.", "Examples of completed work. Click a project to see details.", "نماذج من أعمالنا المنجزة. اضغط على أي مشروع لرؤية التفاصيل."], ["Çalışma şeklimiz", "How we work", "طريقة عملنا"], ["İşe başlamadan önce ne olacağını bilirsiniz.", "You know what to expect before work begins.", "تعرف ما سيحدث قبل بدء العمل."], ["Keşif ve görüşme", "Survey and meeting", "المعاينة والاجتماع"], ["Arsayı veya binayı yerinde görür, ihtiyacınızı dinleriz.", "We see the plot or building in person and listen to your needs.", "نعاين الأرض أو المبنى في موقعه ونستمع إلى احتياجك."], ["Yazılı teklif", "Written quote", "عرض سعر مكتوب"], ["Malzeme, süre ve fiyat kalem kalem yazılı verilir.", "Materials, schedule and price are given in writing, item by item.", "المواد والمدة والسعر مكتوبة بند بند."], ["Uygulama", "Construction", "التنفيذ"], ["Düzenli şantiye kontrolü, ilerleme fotoğraflarıyla bilgilendirme.", "Regular site inspections, with progress updates and photos.", "متابعة منتظمة للموقع وإطلاعك على التقدم بالصور."], ["Teslim ve garanti", "Handover and warranty", "التسليم والضمان"], ["Eksiksiz teslim, sonrasında da ulaşabileceğiniz bir muhatap.", "Complete handover, and someone you can reach afterwards.", "تسليم كامل، وشخص يمكنك التواصل معه بعد ذلك."], ["Birlikte çalıştığımız kişi ve kurumlar.", "People and organizations we have worked with.", "أشخاص وجهات عملنا معها."], ["Projeniz için ücretsiz keşif ve fiyat teklifi alın.", "Get a free survey and quote for your project.", "احصل على معاينة وعرض سعر مجاني لمشروعك."], ["Telefon", "Phone", "الهاتف"], ["E-posta", "Email", "البريد الإلكتروني"], ["Adres", "Address", "العنوان"], ["Çalışma saatleri", "Working hours", "ساعات العمل"], ["Pazartesi–Cumartesi 08:00–18:00", "Monday–Saturday 08:00–18:00", "الاثنين–السبت 08:00–18:00"], ["WhatsApp ile gönder", "Send via WhatsApp", "أرسل عبر واتساب"], ["Adınız soyadınız", "Your full name", "الاسم الكامل"], ["Telefon numaranız", "Your phone number", "رقم هاتفك"], ["Ne yaptırmak istiyorsunuz? Konum ve yaklaşık metrekare yazarsanız daha hızlı dönüş yaparız.", "What would you like built? Add the location and approximate area for a faster reply.", "ماذا تريد أن نبني؟ اذكر الموقع والمساحة التقريبية لنردّ عليك أسرع."], ["Ad soyad", "Full name", "الاسم"], ["Mesaj", "Message", "الرسالة"], ["Dil", "Language", "اللغة"], ["Kapat", "Close", "إغلاق"], ["ASLAN İNŞAAT. Tüm hakları saklıdır.", "ASLAN İNŞAAT. All rights reserved.", "أصلان للإنشاءات. جميع الحقوق محفوظة."], ["Babanızın fotoğrafı buraya eklenecek", "Father's photo will be added here", "ستُضاف صورة الوالد هنا"], ["Haritada gör", "View on map", "عرض على الخريطة"], ["Videoyu izle", "Watch video", "شاهد الفيديو"], ["Bu kategoride proje yok.", "No projects in this category.", "لا توجد مشاريع في هذه الفئة."], ["Tümü", "All", "الكل"], ["Konut", "Residential", "سكني"], ["Ticari", "Commercial", "تجاري"], ["Tadilat", "Renovation", "ترميم"]];const L={en:{},ar:{}};D.forEach(r=>{L.en[r[0]]=r[1];L.ar[r[0]]=r[2]});
let lang="tr";const g=v=>v&&typeof v==="object"?(v[lang]||v.tr||""):v;const T=x=>lang==="tr"?x:((L[lang]||{})[x]||x);
function statik(){$("#fabC").href="tel:+"+FIRMA.whatsapp;
$("#fabW").href="https://wa.me/"+FIRMA.whatsapp+"?text="+encodeURIComponent({tr:"Merhaba, web sitenizden ulaşıyorum.",en:"Hello, I'm contacting you from your website.",ar:"مرحبًا، أتواصل معكم من موقعكم."}[lang]);$("#cPhone").innerHTML=`<a href="${$("#fabW").href}" target="_blank" rel="noopener">${FIRMA.telefon}</a>`;$("#cMail").innerHTML=`<a href="https://wa.me/${FIRMA.whatsapp}" target="_blank" rel="noopener">${FIRMA.telefon}</a>`;$("#cAddr").innerHTML=esc(g(FIRMA.adres))+`<br><a class="dir" href="${FIRMA.harita||"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(FIRMA.haritaSorgu)}" target="_blank" rel="noopener">${T("Yol tarifi al")}</a>`;
$("#yr").textContent=new Date().getFullYear();
$("#aFig").innerHTML=HAKKINDA.foto?`<img src="${HAKKINDA.foto}" alt="${esc(g(HAKKINDA.ad))}">`:`<div class="ph">Babanızın fotoğrafı buraya eklenecek</div>`;
$("#aAd").textContent=g(HAKKINDA.ad);$("#aRol").textContent=g(HAKKINDA.unvan);
$("#aMetin").innerHTML=HAKKINDA.paragraflar.map(t=>`<p>${esc(g(t))}</p>`).join("");
$("#aSoz").textContent=g(HAKKINDA.soz);$("#aSoz").hidden=!g(HAKKINDA.soz);
$("#stats").innerHTML=[["yil","yıllık tecrübe"],["proje","tamamlanan proje"],["musteri","mutlu müşteri"],["ekip","kişilik ekip"]].filter(([k])=>DB.sayilar[k]).map(([k,l])=>`<div><b>${esc(DB.sayilar[k])}</b>${l}</div>`).join("");
$("#refs").innerHTML=REFERANSLAR.map(r=>`<li>${esc(g(r))}</li>`).join("");
$("#quotes").innerHTML=YORUMLAR.map(q=>`<div class="quote"><p>${esc(g(q.metin))}</p><small>${esc(g(q.isim))}, ${esc(g(q.proje))}</small></div>`).join("");
}
let aktif="Tümü";
function filtreler(){const k=["Tümü",...new Set(PROJELER.map(p=>p.kategori))];
$("#filters").innerHTML=k.map(x=>`<button class="chip" aria-pressed="${x===aktif}" data-k="${esc(x)}">${esc(T(x))}</button>`).join("");
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{aktif=b.dataset.k;filtreler();liste()})}
function liste(){const l=PROJELER.map((p,i)=>({p,i})).filter(o=>aktif==="Tümü"||o.p.kategori===aktif);
$("#plist").innerHTML=l.map(({p,i})=>{const bg=p.fotolar[0]?` style="background-image:url('${p.fotolar[0]}')"`:"";
return `<button class="card" data-i="${i}"><div class="cover"${bg}><span>${esc(T(p.kategori))}</span>${p.durum==="devam"?`<span class="dv">${T("Devam ediyor")}</span>`:""}</div><div class="body"><h3>${esc(g(p.ad))}</h3><small>${esc(g(p.konum))} · ${esc(p.yil)}</small></div></button>`}).join("")||`<p>${T(PROJELER.length?"Bu kategoride proje yok.":"Projeler yakında eklenecek.")}</p>`;
document.querySelectorAll(".card").forEach(c=>c.onclick=()=>ac(+c.dataset.i))}
function ac(i){const p=PROJELER[i];PCUR=p;
const harita=p.harita?` · <a href="${esc(p.harita)}" target="_blank" rel="noopener">${T("Haritada gör")}</a>`:"";
$("#dbody").innerHTML=`<button class="x" aria-label="${T("Kapat")}" onclick="dlg.close()">×</button><h2>${esc(g(p.ad))}</h2><p class="meta">${esc(g(p.konum))} · ${esc(p.yil)}${p.m2?" · "+esc(p.m2)+" m²":""} · ${esc(T(p.kategori))}${p.durum==="devam"?" · "+T("Devam ediyor"):""}${harita}</p><p>${esc(g(p.aciklama))}</p>`
+(p.fotolar.length?`<div class="gal">${p.fotolar.map((f,n)=>`<img data-n="${n}" src="${f}" alt="${esc(g(p.ad))}" loading="lazy">`).join("")}</div>`:"")
+(p.video?`<a class="btn" href="${esc(p.video)}" target="_blank" rel="noopener">${T("Videoyu izle")}</a>`:"");
$("#dlg").showModal()}
$("#dlg").addEventListener("click",e=>{if(e.target.id==="dlg")e.target.close()});
$("#f").onsubmit=e=>{e.preventDefault();const a=$("#fn").value,t=$("#fp").value,x=$("#fm").value;const m={tr:`Merhaba, ben ${a}. Telefon: ${t}. ${x}`,en:`Hello, my name is ${a}. Phone: ${t}. ${x}`,ar:`مرحبًا، أنا ${a}. هاتفي: ${t}. ${x}`}[lang];
window.open(`https://wa.me/${FIRMA.whatsapp}?text=${encodeURIComponent(m)}`,"_blank","noopener")};
function uygula(){
document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
if($("#dlg").open)$("#dlg").close();
statik();filtreler();liste();
const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
while(n=w.nextNode()){if(n.parentNode.closest("script,#dlg,#adm"))continue;n._o=n._o??n.nodeValue;const k=n._o.trim();if(k&&L.en[k])n.nodeValue=n._o.replace(k,T(k))}
document.querySelectorAll("[placeholder],[aria-label]").forEach(e=>["placeholder","aria-label"].forEach(a=>{if(!e.hasAttribute(a))return;e["_"+a]=e["_"+a]??e.getAttribute(a);e.setAttribute(a,T(e["_"+a]))}));
document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===lang));
try{localStorage.setItem("lang",lang)}catch(e){}}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{lang=b.dataset.l;uygula()});
try{const sv=localStorage.getItem("lang");if(sv&&L[sv])lang=sv}catch(e){}
const mb=$("#mb"),nv=$("#nv");
const kapat=()=>{nv.classList.remove("open");mb.setAttribute("aria-expanded","false")};
mb.onclick=e=>{e.stopPropagation();mb.setAttribute("aria-expanded",nv.classList.toggle("open"))};
nv.querySelectorAll("a").forEach(a=>a.onclick=kapat);
document.addEventListener("click",e=>{if(!e.target.closest("nav,#mb"))kapat()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")kapat()});
if(LOGO)$("#lm").innerHTML=`<img src="${LOGO}" alt="ASLAN İNŞAAT">`;
const up=$("#up"),rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
addEventListener("scroll",()=>up.classList.toggle("show",scrollY>500),{passive:true});
up.onclick=()=>scrollTo({top:0,behavior:rm?"auto":"smooth"});
const ls=[...nv.querySelectorAll("a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(x=>io.observe(x));

const gate=$("#gate"),lock=o=>document.documentElement.style.overflow=o?"hidden":"";
lock(true);
const gir=k=>{try{sessionStorage.setItem("giris",k)}catch(e){}gate.classList.add("out");lock(false)};
$("#gV").onclick=()=>gir("v");
let PCUR=null,LBN=0;const lbs=$("#lb");
const lbShow=n=>{const a=PCUR.fotolar;LBN=(n+a.length)%a.length;$("#lbi").src=a[LBN];$("#lbc").textContent=(LBN+1)+" / "+a.length};
$("#dbody").addEventListener("click",e=>{const im=e.target.closest(".gal img");if(im&&PCUR){lbShow(+im.dataset.n);lbs.showModal()}});
$("#lbP").onclick=()=>lbShow(LBN-1);$("#lbN").onclick=()=>lbShow(LBN+1);lbs.querySelector(".x").onclick=()=>lbs.close();
lbs.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")lbShow(LBN-1);if(e.key==="ArrowRight")lbShow(LBN+1)});
let tx=0;lbs.addEventListener("touchstart",e=>{tx=e.changedTouches[0].clientX},{passive:true});
lbs.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)lbShow(LBN+(d<0?1:-1))},{passive:true});
lbs.addEventListener("click",e=>{if(e.target===lbs)lbs.close()});
let g0=null;try{g0=sessionStorage.getItem("giris")}catch(e){}
if(g0){gate.classList.add("out");lock(false)}
uygula();
