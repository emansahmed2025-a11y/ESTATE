/* ============================================================
   MENASSAT — Real Estate Valuation | script.js
   i18n · renders · interactions · animations
   ============================================================ */
"use strict";

/* ---------- Helpers ---------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = window.matchMedia("(pointer: fine)").matches;

/* ============================================================
   1) i18n — static UI strings
   ============================================================ */
const I18N = {
ar: {
  "misc.skip":"تخطَّ إلى المحتوى",
  "brand.name":"منصات","brand.tag":"للتقييم العقاري · REAL ESTATE VALUATION",
  "nav.home":"الرئيسية","nav.about":"من نحن","nav.vision":"رؤيتنا","nav.mission":"رسالتنا",
  "nav.values":"قيمنا","nav.services":"خدماتنا","nav.process":"مراحل التقييم",
  "nav.achievements":"إنجازاتنا","nav.certs":"شهاداتنا","nav.partners":"شركاؤنا",
  "nav.clients":"عملاؤنا","nav.contact":"تواصل معنا",
  "hero.kicker":"صنّاع القيمة..",
  "hero.title":"الدقة التي تصنع <span class='hl'>قيمة العقار</span>",
  "hero.desc":"متخصصون في تقديم خدمات التقييم العقاري بمهنية ودقة عالية، معتمدين على معايير تقييم معترف بها محليًا وعالميًا، وتحليل شامل للعقار يشمل الموقع والحالة والقيمة السوقية.",
  "hero.cta1":"اطلب تقييم عقاري","hero.cta2":"اكتشف منصات",
  "chip.lic":"ترخيص مزاولة مهنة التقييم — 13044",
  "chip.fellow":"زمالة الهيئة السعودية للمقيمين المعتمدين",
  "chip.rics":"عضوية MRICS — RICS",
  "hero.doc":"تقرير تقييم عقاري","hero.docVal":"القيمة السوقية",
  "hero.floatNote":"معايير معتمدة محليًا وعالميًا","hero.scroll":"اكتشف المزيد",
  "about.eyebrow":"من نحن","about.title":"من نحن؟",
  "about.text":"نحن متخصصون في تقديم خدمات التقييم العقاري بمهنية ودقة عالية، معتمدين على معايير تقييم معترف بها محليًا وعالميًا حيث نعمل على تحليل شامل للعقار يشمل الموقع، الحالة، والقيمة السوقية لضمان تقديم تقارير دقيقة تدعم قرارات العملاء في البيع، الشراء، التمويل أو الاستثمار.",
  "about.f1":"معايير تقييم معترف بها محليًا وعالميًا",
  "about.f2":"تحليل شامل: الموقع، الحالة، والقيمة السوقية",
  "about.f3":"تقارير دقيقة تدعم قرارات البيع والشراء والتمويل والاستثمار",
  "about.badge":"تقارير تُودع في منصة «قيمة»",
  "goal.eyebrow":"هدفنا","goal.title":"قيمة مضافة.. وخدمة موثوقة",
  "goal.text":"تقديم قيمة مضافة وخدمة موثوقة تلبي احتياجاتك العقارية.","goal.ghost":"هدفنا",
  "vm.vEyebrow":"رؤيتنا","vm.vTitle":"رؤيتنا",
  "vm.vText":"أن نصبح رواد التقييم العقاري بالمملكة العربية السعودية ومنطقة الخليج العربي.",
  "vm.mEyebrow":"رسالتنا","vm.mTitle":"رسالتنا",
  "vm.mText":"تقديم خدمات تقييم عقاري بمعايير عالمية تعتمد على الابتكار وأخلاقيات العمل والدقة، مع الالتزام بالمهنية التامة.",
  "values.eyebrow":"قيمنا","values.title":"قيم تحكم كل تقرير نصدره",
  "stats.eyebrow":"خبرتنا بالأرقام","stats.label":"ساعات الخبرة",
  "ceo.eyebrow":"كلمة إدارة","ceo.title":"رسالة الرئيس التنفيذي",
  "ceo.name":"خالد بن شاكر المبيض","ceo.name2":"خالد بن شاكر المبيض",
  "ceo.role":"الرئيس التنفيذي","ceo.role2":"الرئيس التنفيذي — منصات للتقييم العقاري",
  "ceo.text":"في «منصات»، نؤمن أن التقييم العقاري ليس مجرد رقم، بل قرار. لذلك نلتزم بتقديم خدمات تقييم عقاري بمعايير معترف بها محليًا وعالميًا، تعتمد على الدقة وأخلاقيات العمل والابتكار، لنقدّم لعملائنا قيمة مضافة وخدمة موثوقة تدعم قراراتهم في البيع والشراء والتمويل والاستثمار بثقة واطمئنان.",
  "certs.eyebrow":"اعتماداتنا","certs.title":"اعتماداتنا وشهاداتنا",
  "certs.note":"تُدرج صور الشهادات الرسمية من مجلد assets/certificates/",
  "process.eyebrow":"منهجية العمل","process.title":"مراحل عملية التقييم",
  "process.lead":"رحلة التقييم في «منصات» تمر باثنتي عشرة مرحلة مدروسة، من أول تواصل حتى تسليم التقرير النهائي.",
  "process.hint":"اضغط على أي مرحلة لعرض تفاصيلها",
  "methods.eyebrow":"خدماتنا","methods.title":"طرق تقييم العقارات",
  "instant.title":"التقييم العقاري الفوري",
  "instant.text":"تتوفر خدمة التقييم العقاري بشكل فوري وسريع مقابل رسوم إضافية، تلبيةً لاحتياجات العملاء المستعجلة.",
  "instant.btn":"أحتاج تقييمًا عاجلًا",
  "ach.eyebrow":"مسيرتنا","ach.title":"أبرز إنجازاتنا","ach.cap":"نموذج من أعمالنا",
  "partners.eyebrow":"ثقة متبادلة","partners.title":"شركاؤنا","partners.ph":"شعار شريك",
  "partners.note":"أماكن جاهزة للشعارات داخل assets/partners/",
  "clients.eyebrow":"عملاؤنا","clients.title":"عملاؤنا","clients.ph":"شعار عميل",
  "clients.note":"أماكن جاهزة للشعارات داخل assets/clients/",
  "contact.eyebrow":"تواصل معنا","contact.title":"لنبدأ رحلة تقييم عقارك",
  "contact.lead":"نسعد بخدمتكم — تواصلوا معنا عبر القنوات الرسمية التالية.",
  "contact.t1":"الاتصال الموحد","contact.t2":"الجوال","contact.t3":"البريد الإلكتروني","contact.t4":"الموقع الإلكتروني",
  "contact.bCall":"اتصل بنا","contact.bWa":"واتساب","contact.bMail":"البريد الإلكتروني","contact.bSite":"الموقع الإلكتروني",
  "footer.tag":"متخصصون في التقييم العقاري بمهنية ودقة عالية، وفق معايير معترف بها محليًا وعالميًا.",
  "footer.links":"روابط سريعة","footer.contactT":"تواصل",
  "footer.rights":"© Menassat Real Estate Valuation. All Rights Reserved.",
  "footer.lic":"مرخصون لمزاولة مهنة التقييم — ترخيص رقم 13044",
  "meta.title":"منصات للتقييم العقاري | صنّاع القيمة"
},
en: {
  "misc.skip":"Skip to content",
  "brand.name":"MENASSAT","brand.tag":"للتقييم العقاري · REAL ESTATE VALUATION",
  "nav.home":"Home","nav.about":"About","nav.vision":"Vision","nav.mission":"Mission",
  "nav.values":"Values","nav.services":"Services","nav.process":"Valuation Process",
  "nav.achievements":"Achievements","nav.certs":"Certificates","nav.partners":"Partners",
  "nav.clients":"Clients","nav.contact":"Contact",
  "hero.kicker":"VALUE MAKERS..",
  "hero.title":"Precision That Creates <span class='hl'>Property Value</span>",
  "hero.desc":"We specialize in professional real estate valuation with high precision, relying on locally and internationally recognized valuation standards, and a comprehensive analysis of every property covering location, condition, and market value.",
  "hero.cta1":"Request a Valuation","hero.cta2":"Discover Menassat",
  "chip.lic":"Valuation Practice License — 13044",
  "chip.fellow":"Fellow of the Saudi Authority for Accredited Valuers",
  "chip.rics":"MRICS Membership — RICS",
  "hero.doc":"Valuation Report","hero.docVal":"Market Value",
  "hero.floatNote":"Locally & internationally recognized standards","hero.scroll":"Scroll down",
  "about.eyebrow":"About Us","about.title":"Who We Are",
  "about.text":"We specialize in professional real estate valuation with high precision, adhering to locally and internationally recognized standards. Through comprehensive analysis of every property — location, condition, and market value — we deliver accurate reports that support our clients' decisions in selling, buying, financing, or investment.",
  "about.f1":"Locally & internationally recognized valuation standards",
  "about.f2":"Comprehensive analysis: location, condition & market value",
  "about.f3":"Accurate reports supporting sale, purchase, financing & investment decisions",
  "about.badge":"Reports deposited on the «Qima» platform",
  "goal.eyebrow":"Our Goal","goal.title":"Added Value.. A Trusted Service",
  "goal.text":"To deliver added value and a trusted service that meets your real estate needs.","goal.ghost":"GOAL",
  "vm.vEyebrow":"Our Vision","vm.vTitle":"Our Vision",
  "vm.vText":"To become pioneers in real estate valuation in the Kingdom of Saudi Arabia and the Arabian Gulf region.",
  "vm.mEyebrow":"Our Mission","vm.mTitle":"Our Mission",
  "vm.mText":"To deliver world-class real estate valuation services built on innovation, work ethics, and precision, with full professional commitment.",
  "values.eyebrow":"Our Values","values.title":"Values Behind Every Report We Issue",
  "stats.eyebrow":"Experience in Numbers","stats.label":"Hours of Experience",
  "ceo.eyebrow":"Leadership","ceo.title":"CEO Message",
  "ceo.name":"KHALED SHAKER ALMOBID","ceo.name2":"Khaled Shaker Almobid",
  "ceo.role":"Chief Executive Officer","ceo.role2":"Chief Executive Officer — Menassat Real Estate Valuation",
  "ceo.text":"At Menassat, we believe real estate valuation is not just a number — it is a decision. That is why we are committed to valuation services built on locally and internationally recognized standards, driven by precision, work ethics, and innovation, delivering added value and a trusted service that supports our clients' selling, buying, financing, and investment decisions with confidence.",
  "certs.eyebrow":"Accreditations","certs.title":"Our Accreditations & Certificates",
  "certs.note":"Official certificate scans can be placed inside assets/certificates/",
  "process.eyebrow":"Methodology","process.title":"The Valuation Process",
  "process.lead":"Every valuation at Menassat travels through twelve disciplined stages — from the first contact to the delivery of the final report.",
  "process.hint":"Tap any stage to reveal its details",
  "methods.eyebrow":"Our Services","methods.title":"Property Valuation Methods",
  "instant.title":"Instant Property Valuation",
  "instant.text":"An instant, fast-track valuation service is available for an additional fee, serving clients with urgent needs.",
  "instant.btn":"I need an urgent valuation",
  "ach.eyebrow":"Our Journey","ach.title":"Key Achievements","ach.cap":"Selected work",
  "partners.eyebrow":"Mutual Trust","partners.title":"Our Partners","partners.ph":"Partner logo",
  "partners.note":"Logo slots ready inside assets/partners/",
  "clients.eyebrow":"Clients","clients.title":"Our Clients","clients.ph":"Client logo",
  "clients.note":"Logo slots ready inside assets/clients/",
  "contact.eyebrow":"Contact Us","contact.title":"Start Your Valuation Journey",
  "contact.lead":"We are glad to serve you — reach us through the official channels below.",
  "contact.t1":"Unified Number","contact.t2":"Mobile","contact.t3":"Email","contact.t4":"Website",
  "contact.bCall":"Call Us","contact.bWa":"WhatsApp","contact.bMail":"Email","contact.bSite":"Website",
  "footer.tag":"Specialized in real estate valuation with high professionalism and precision, following locally and internationally recognized standards.",
  "footer.links":"Quick Links","footer.contactT":"Contact",
  "footer.rights":"© Menassat Real Estate Valuation. All Rights Reserved.",
  "footer.lic":"Licensed to practice valuation — License No. 13044",
  "meta.title":"Menassat Real Estate Valuation | Value Makers"
}};

/* ============================================================
   2) DATA — dynamic sections (values · certificates · 12 stages · methods)
   ============================================================ */
const DATA = {
values: {
ar:[
 {icon:"fa-scale-balanced",t:"الشفافية",d:"تقديم تقارير واضحة ودقيقة تدعم قرارات عملائنا."},
 {icon:"fa-medal",t:"الجودة",d:"الالتزام بأعلى معايير الجودة في جميع مراحل العمل."},
 {icon:"fa-handshake-angle",t:"العملاء أولًا",d:"التركيز على تلبية احتياجات العملاء بما يعزز ثقتهم ورضاهم."},
 {icon:"fa-lightbulb",t:"الابتكار",d:"توظيف أحدث التقنيات لتعزيز الكفاءة والدقة."}
],
en:[
 {icon:"fa-scale-balanced",t:"Transparency",d:"Clear, accurate reports that support our clients' decisions."},
 {icon:"fa-medal",t:"Quality",d:"Commitment to the highest quality standards across every stage of our work."},
 {icon:"fa-handshake-angle",t:"Clients First",d:"Focusing on clients' needs to strengthen their trust and satisfaction."},
 {icon:"fa-lightbulb",t:"Innovation",d:"Employing the latest technologies to enhance efficiency and accuracy."}
]},
certs: {
ar:[
 {icon:"fa-file-shield",t:"ترخيص مزاولة مهنة التقييم",rows:[["الفرع","العقارات"],["رقم الترخيص","13044"]]},
 {icon:"fa-award",t:"شهادة الزمالة",rows:[["الاسم","خالد شاكر بن حامد المبيض"],["رقم العضوية","1210000163"],["الجهة","الهيئة السعودية للمقيمين المعتمدين — فرع العقار"],["تاريخ الإصدار","11-04-2022"],["رقم الشهادة","220199FR"]]},
 {icon:"fa-building-columns",t:"السجل التجاري",badge:"نشط",rows:[["اسم الشركة","شركة منصات للتقييم العقاري"],["الرقم الوطني الموحد","7002867906"],["تاريخ الإصدار","12/04/2018"],["نوع الكيان","شركة ذات مسؤولية محدودة"],["صفات الشركة","مهنية"]]},
 {icon:"fa-certificate",t:"RICS",rows:[["العضوية","MRICS"],["العضو","Khaled Shaker Almobid"]]},
 {icon:"fa-star-of-life",t:"شهادة سمة للتصنيف",rows:[["التصنيف","3+VFR"],["النظرة المستقبلية","Positive Outlook"]]}
],
en:[
 {icon:"fa-file-shield",t:"Valuation Practice License",rows:[["Branch","Real Estate"],["License No.","13044"]]},
 {icon:"fa-award",t:"Fellowship Certificate",rows:[["Name","Khaled Shaker bin Hamid Almobid"],["Membership No.","1210000163"],["Issued by","Saudi Authority for Accredited Valuers — Real Estate"],["Issue Date","11-04-2022"],["Certificate No.","220199FR"]]},
 {icon:"fa-building-columns",t:"Commercial Registration",badge:"Active",rows:[["Company","Menassat Real Estate Valuation Co."],["Unified National No.","7002867906"],["Issue Date","12/04/2018"],["Entity Type","Limited Liability Company"],["Classification","Professional"]]},
 {icon:"fa-certificate",t:"RICS",rows:[["Membership","MRICS"],["Member","Khaled Shaker Almobid"]]},
 {icon:"fa-star-of-life",t:"Sima Classification Certificate",rows:[["Rating","3+VFR"],["Outlook","Positive Outlook"]]}
]},
methods: {
ar:[
 {icon:"fa-chart-line",t:"طريقة الدخل (الإيرادات)",d:"تعتمد على حساب العائد المالي المتوقع من العقار، مثل الإيجارات السنوية، لمعرفة قيمته.",sp:"M6 26 L26 18 L46 22 L66 10 L86 14 L106 4"},
 {icon:"fa-calculator",t:"طريقة التكلفة",d:"يتم حساب تكلفة بناء العقار من جديد، مع إضافة قيمة الأرض.",sp:"M6 24 L26 24 L46 14 L66 18 L86 8 L106 8"},
 {icon:"fa-code-compare",t:"طريقة السوق (المقارنة)",d:"يتم تقييم العقار بمقارنته بعقارات مشابهة تم بيعها مؤخرًا في نفس المنطقة بناءً على الموقع والمساحة وحالة العقار.",sp:"M6 20 L26 26 L46 10 L66 16 L86 6 L106 12"}
],
en:[
 {icon:"fa-chart-line",t:"Income Approach",d:"Based on calculating the expected financial return of the property, such as annual rents, to determine its value.",sp:"M6 26 L26 18 L46 22 L66 10 L86 14 L106 4"},
 {icon:"fa-calculator",t:"Cost Approach",d:"Calculating the cost of rebuilding the property from scratch, adding the land value.",sp:"M6 24 L26 24 L46 14 L66 18 L86 8 L106 8"},
 {icon:"fa-code-compare",t:"Market (Comparison) Approach",d:"Valuing the property by comparing it with similar properties recently sold in the same area, based on location, size, and condition.",sp:"M6 20 L26 26 L46 10 L66 16 L86 6 L106 12"}
]},
stages: {
ar:[
 {icon:"fa-phone",t:"التواصل مع العميل",p:["فهم احتياجات العميل وتوقعاته","الإجابة على استفسارات العميل بطريقة مهنية وواضحة","توفير شرح مفصل لخطوات التقييم العقاري","تحديد موعد زيارة العقار وتأكيده"]},
 {icon:"fa-folder-open",t:"استلام المستندات",p:["تحديد قائمة المستندات المطلوبة","التحقق من صحة وأصالة المستندات","الحفاظ على سرية وأمان المستندات","توثيق استلام المستندات"]},
 {icon:"fa-magnifying-glass-chart",t:"دراسة العقار",p:["فحص الموقع","حالة البناء","جودة التشطيبات","عمر العقار","تحليل الحالة العامة للعقار","مراجعة المستندات","مقارنة السوق"]},
 {icon:"fa-file-invoice-dollar",t:"تحديد نطاق العمل والأتعاب وتصدير عرض السعر",p:["تحديد نطاق العمل","تحديد الأتعاب","إعداد عرض السعر","مراجعة وتأكيد العرض"]},
 {icon:"fa-file-contract",t:"التعاقد مع العميل",p:["اعتماد عرض السعر والتوصل إلى الاتفاق","توثيق الاتفاقية ونطاق العمل والأتعاب","تنسيق الجدول الزمني لتنفيذ العمل"]},
 {icon:"fa-route",t:"توجيه المقيم لمعاينة العقار",p:["إسناد المهمة إلى مقيم مختص","تزويد المقيم بالمستندات ونطاق العمل","تحديد موعد المعاينة الميدانية وتأكيده مع العميل"]},
 {icon:"fa-database",t:"جمع وتحليل البيانات",p:["إجراء المعاينة الميدانية للعقار","جمع بيانات الموقع والمبنى والمحيط","تحليل بيانات السوق والعقارات المماثلة"]},
 {icon:"fa-scale-balanced",t:"استخلاص القيمة بأحد طرق التقييم",p:["اختيار طريقة التقييم المناسبة (الدخل، التكلفة، السوق)","احتساب القيمة وفق المعايير المعتمدة","المراجعة الفنية للنتائج ومطابقتها لواقع العقار"]},
 {icon:"fa-file-lines",t:"إعداد التقرير",p:["إعداد تقرير التقييم وفق المعايير المعتمدة","تضمين تحليل شامل للموقع والحالة والقيمة السوقية","التدقيق الفني واللغوي للتقرير"]},
 {icon:"fa-paper-plane",t:"إرسال مسودة للعميل",p:["إرسال مسودة التقرير للعميل للاطلاع","استقبال ملاحظات العميل ومعالجتها","التأكد من اكتمال البيانات ودقتها"]},
 {icon:"fa-stamp",t:"اعتماد التقرير وإيداعه في «قيمة»",p:["اعتماد التقرير النهائي","إيداع التقرير في منصة «قيمة»","توثيق عملية الإيداع"]},
 {icon:"fa-circle-check",t:"تسليم التقرير النهائي",p:["تسليم العميل نسخة التقرير المعتمدة","الإجابة عن استفسارات العميل بعد التسليم","إغلاق الملف مع الحفاظ على سرية المستندات"]}
],
en:[
 {icon:"fa-phone",t:"Client Communication",p:["Understanding the client's needs and expectations","Answering client inquiries professionally and clearly","Providing a detailed explanation of the valuation steps","Scheduling and confirming the property visit"]},
 {icon:"fa-folder-open",t:"Documents Collection",p:["Identifying the list of required documents","Verifying the validity and authenticity of documents","Maintaining confidentiality and security of documents","Documenting the receipt of documents"]},
 {icon:"fa-magnifying-glass-chart",t:"Property Study",p:["Site inspection","Building condition","Quality of finishes","Property age","Analyzing the overall condition of the property","Reviewing documents","Market comparison"]},
 {icon:"fa-file-invoice-dollar",t:"Scope, Fees & Quotation",p:["Defining the scope of work","Determining the fees","Preparing the quotation","Reviewing and confirming the quotation"]},
 {icon:"fa-file-contract",t:"Contracting",p:["Approving the quotation and reaching an agreement","Documenting the agreement, scope of work, and fees","Coordinating the timeline for execution"]},
 {icon:"fa-route",t:"Assigning the Valuer",p:["Assigning the task to a specialized valuer","Providing the valuer with documents and scope","Scheduling and confirming the site inspection with the client"]},
 {icon:"fa-database",t:"Data Gathering & Analysis",p:["Conducting the field inspection","Collecting data on location, building, and surroundings","Analyzing market data and comparable properties"]},
 {icon:"fa-scale-balanced",t:"Value Derivation",p:["Selecting the suitable valuation method (income, cost, market)","Calculating the value according to approved standards","Technical review of results against the property's reality"]},
 {icon:"fa-file-lines",t:"Report Preparation",p:["Preparing the valuation report per approved standards","Including comprehensive analysis of location, condition & market value","Technical and linguistic proofreading of the report"]},
 {icon:"fa-paper-plane",t:"Draft Delivery",p:["Sending the report draft to the client for review","Receiving and addressing the client's feedback","Ensuring data completeness and accuracy"]},
 {icon:"fa-stamp",t:"Approval & «Qima» Deposit",p:["Final approval of the report","Depositing the report on the «Qima» platform","Documenting the deposit process"]},
 {icon:"fa-circle-check",t:"Final Report Delivery",p:["Delivering the approved report copy to the client","Answering post-delivery inquiries","Closing the file while maintaining confidentiality"]}
]}
};

/* ============================================================
   3) State & language engine
   ============================================================ */
let lang = localStorage.getItem("menassat_lang") || "ar";

function applyLanguage(l){
  lang = l;
  localStorage.setItem("menassat_lang", l);
  const root = document.documentElement;
  root.lang = l;
  root.dir = l === "ar" ? "rtl" : "ltr";
  document.title = I18N[l]["meta.title"];
  $(".lt-ar").classList.toggle("on", l === "ar");
  $(".lt-en").classList.toggle("on", l === "en");

  $$("[data-i18n]").forEach(el => {
    const val = I18N[l][el.dataset.i18n];
    if (val == null) return;
    if ("i18nHtml" in el.dataset) el.innerHTML = val;
    else el.textContent = val;
  });

  renderAll();
  requestAnimationFrame(() => bindAfterRender());
}

function switchLanguage(l){
  if (l === lang) return;
  document.documentElement.classList.add("lang-fading");
  setTimeout(() => {
    applyLanguage(l);
    document.documentElement.classList.remove("lang-fading");
  }, REDUCED ? 0 : 260);
}

/* ============================================================
   4) Renderers (dynamic sections)
   ============================================================ */
const spark = sp => `
  <svg viewBox="0 0 112 32" aria-hidden="true">
    <path class="sp-base" d="M6 28 H106"/>
    <path class="sp-line" pathLength="1" d="${sp}"/>
  </svg>`;

function renderValues(){
  $("#valuesGrid").innerHTML = DATA.values[lang].map((v,i) => `
    <article class="v-card tilt" data-reveal data-delay="${i*90}">
      <span class="v-num">0${i+1}</span>
      <span class="v-icon"><i class="fa-solid ${v.icon}"></i></span>
      <h3>${v.t}</h3><p>${v.d}</p>
    </article>`).join("");
}

function renderCerts(){
  $("#certsGrid").innerHTML = DATA.certs[lang].map((c,i) => `
    <article class="cert-card" data-reveal data-delay="${i*80}">
      <div class="cert-head">
        <span class="cert-ic"><i class="fa-solid ${c.icon}"></i></span>
        <h3>${c.t}</h3>${c.badge ? `<span class="cert-badge">${c.badge}</span>` : ""}
      </div>
      <dl class="cert-rows">${c.rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl>
    </article>`).join("");
}

function renderMethods(){
  $("#methodsGrid").innerHTML = DATA.methods[lang].map((m,i) => `
    <article class="m-card tilt" data-reveal data-delay="${i*110}">
      <span class="m-icon"><i class="fa-solid ${m.icon}"></i></span>
      <h3>${m.t}</h3><p>${m.d}</p>
      <div class="m-spark">${spark(m.sp)}</div>
    </article>`).join("");
}

function renderStages(){
  $("#timeline").querySelectorAll(".tl-item").forEach(n=>n.remove());
  const items = DATA.stages[lang].map((s,i) => {
    const num = String(i+1).padStart(2,"0");
    const li = document.createElement("li");
    li.className = "tl-item";
    li.innerHTML = `
      <div class="tl-node"><span>${num}</span></div>
      <article class="tl-card">
        <h3 class="tl-title">
          <button class="tl-head" aria-expanded="false">
            <span class="tl-icon"><i class="fa-solid ${s.icon}"></i></span>
            <span class="tl-txt"><span class="tl-num">${num}</span><b class="tl-t">${s.t}</b></span>
            <i class="fa-solid fa-plus tl-chev" aria-hidden="true"></i>
          </button>
        </h3>
        <div class="tl-body"><ul>${s.p.map(pt=>`<li><i class="fa-solid fa-check"></i>${pt}</li>`).join("")}</ul></div>
      </article>`;
    return li;
  });
  items.forEach(li => $("#timeline").appendChild(li));
}

function renderMarquee(id, folder, phLabel, count = 8){
  const tile = i => `
    <div class="logo-ph"><i class="fa-solid fa-cubes"></i>
      <span>${phLabel}</span><small>assets/${folder}/0${i}.png</small></div>`;
  const half = Array.from({length:count},(_,i)=>tile(i+1)).join("");
  $(id).innerHTML = half + half; /* duplicated for a seamless loop */
}

function renderAll(){
  renderValues(); renderCerts(); renderMethods(); renderStages();
  renderMarquee("#partnersTrack","partners", I18N[lang]["partners.ph"]);
  renderMarquee("#clientsTrack","clients",  I18N[lang]["clients.ph"]);
}

/* ============================================================
   5) Intro sequence
   ============================================================ */
function playIntro(){
  const done = () => {
    document.body.classList.add("intro-gone","hero-in");
    document.body.style.overflow = "";
  };
  if (REDUCED){ done(); return; }
  document.body.style.overflow = "hidden";
  const t1 = setTimeout(done, 3350);
  $("#intro").addEventListener("click", () => { clearTimeout(t1); done(); }, { once:true });
}

/* ============================================================
   6) Header · scroll progress · active link · back-top
   ============================================================ */
function initChrome(){
  const header = $("#siteHeader"), progress = $("#scrollProgress"), backTop = $("#backTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    backTop.classList.toggle("show", y > 620);
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive:true }); onScroll();
  backTop.addEventListener("click", () => scrollTo({ top:0, behavior: REDUCED ? "auto" : "smooth" }));

  /* active section highlight */
  const links = $$(".nav-link");
  const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.remove("active"));
      map.get(e.target.id)?.classList.add("active");
    });
  }, { rootMargin:"-40% 0px -55% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) secObs.observe(s); });
}

/* ---------- Mobile menu ---------- */
function initMenu(){
  const btn = $("#menuBtn");
  const close = () => { document.body.classList.remove("menu-open"); btn.setAttribute("aria-expanded","false"); };
  btn.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", open);
  });
  $$(".nav-link").forEach(a => a.addEventListener("click", close));
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* ============================================================
   7) Reveal on scroll
   ============================================================ */
let revealObs;
function initReveal(){
  revealObs?.disconnect();
  revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.style.transitionDelay = (el.dataset.delay || 0) + "ms";
      el.classList.add("in-view");
      revealObs.unobserve(el);
    });
  }, { threshold:.14 });
  $$("[data-reveal]:not(.in-view)").forEach(el => revealObs.observe(el));
}

/* ============================================================
   8) Counter (224,600+)
   ============================================================ */
function initCounter(){
  const el = $(".counter");
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    const target = +el.dataset.count, dur = 2000, t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(tick);
    };
    REDUCED ? el.textContent = target.toLocaleString("en-US") : requestAnimationFrame(tick);
  }, { threshold:.5 });
  obs.observe(el);
}

/* ============================================================
   9) Timeline — progress line + expandable stages
   ============================================================ */
function initTimeline(){
  const tl = $("#timeline"), fill = $("#tlFill");
  const onScroll = () => {
    const r = tl.getBoundingClientRect();
    const passed = Math.min(Math.max(innerHeight * .55 - r.top, 0), r.height);
    fill.style.height = (passed / r.height) * 100 + "%";
  };
  addEventListener("scroll", onScroll, { passive:true }); onScroll();

  const nodeObs = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle("active", e.isIntersecting));
  }, { rootMargin:"0px 0px -35% 0px" });
  $$(".tl-item").forEach(li => nodeObs.observe(li));

  tl.addEventListener("click", e => {
    const head = e.target.closest(".tl-head");
    if (!head) return;
    const card = head.closest(".tl-card");
    const open = card.classList.toggle("open");
    head.setAttribute("aria-expanded", open);
  });
}

/* ============================================================
   10) 3D tilt cards (values & methods)
   ============================================================ */
function initTilt(){
  if (!FINE || REDUCED) return;
  $$(".tilt").forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "1";
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* ============================================================
   11) Magnetic buttons
   ============================================================ */
function initMagnetic(){
  if (!FINE || REDUCED) return;
  $$(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * .18}px, ${y * .3}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });
}

/* ============================================================
   12) Custom cursor
   ============================================================ */
function initCursor(){
  if (!FINE || REDUCED) return;
  document.body.classList.add("cursor-on");
  const dot = $("#cursorDot"), ring = $("#cursorRing");
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
  });
  (function loop(){
    rx += (mx - rx) * .16; ry += (my - ry) * .16;
    const s = ring.classList.contains("is-hover") ? 28 : 19;
    ring.style.transform = `translate(${rx - s}px, ${ry - s}px)`;
    requestAnimationFrame(loop);
  })();
  addEventListener("mouseover", e => {
    ring.classList.toggle("is-hover", !!e.target.closest("a,button,.tilt"));
  });
}

/* ============================================================
   13) Hero — particles + mouse parallax
   ============================================================ */
function initHero(){
  /* particles */
  const cv = $("#particles"), ctx = cv.getContext("2d");
  let W, H, pts = [], running = true;
  const resize = () => {
    W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight;
    const n = Math.min(70, Math.floor(W / 22));
    pts = Array.from({length:n}, () => ({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.22, vy:(Math.random()-.5)*.22, r:Math.random()*1.6+.6
    }));
  };
  resize(); addEventListener("resize", resize);
  const draw = () => {
    if (!running){ requestAnimationFrame(draw); return; }
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = "rgba(201,166,88,.5)"; ctx.fill();
    });
    for (let i = 0; i < pts.length; i++)
      for (let j = i+1; j < pts.length; j++){
        const a = pts[i], b = pts[j], d = Math.hypot(a.x-b.x, a.y-b.y);
        if (d < 120){
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle = `rgba(147,161,184,${(1 - d/120)*.14})`; ctx.stroke();
        }
      }
    requestAnimationFrame(draw);
  };
  if (!REDUCED) draw();
  new IntersectionObserver(([e]) => running = e.isIntersecting)
    .observe($(".hero"));

  /* mouse parallax on floating elements */
  if (!FINE || REDUCED) return;
  const layers = $$(".hero [data-depth]");
  let tx = 0, ty = 0, cx = 0, cy = 0;
  $(".hero").addEventListener("mousemove", e => {
    tx = (e.clientX / innerWidth - .5);
    ty = (e.clientY / innerHeight - .5);
  });
  (function parallax(){
    cx += (tx - cx) * .06; cy += (ty - cy) * .06;
    layers.forEach(el => {
      const d = +el.dataset.depth;
      el.style.translate = `${cx * d * 42}px ${cy * d * 42}px`;
    });
    requestAnimationFrame(parallax);
  })();
}

/* ============================================================
   14) Boot
   ============================================================ */
function bindAfterRender(){
  initReveal(); initTilt(); initTimeline();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(lang);
  initChrome(); initMenu(); initCounter();
  initMagnetic(); initCursor(); initHero();
  playIntro();

  $("#langToggle").addEventListener("click", () => switchLanguage(lang === "ar" ? "en" : "ar"));
  $$(".lang-toggle .lt").forEach(s => s.addEventListener("click", () => switchLanguage(s.dataset.l)));
});