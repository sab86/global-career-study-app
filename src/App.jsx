import { useState } from "react";

const content = {
  ar: {
    dir: "rtl",
    brand: "Global Pathway",
    nav: ["الرئيسية", "العمل بالخارج", "الدراسة بالخارج", "الباقات", "كيف نعمل؟", "الطلبات"],
    cta: "ابدأ الآن",
    langSwitch: "Français",
    heroTitle: "خدم أو قرا برا المغرب بثقة ووضوح",
    heroText:
      "نساعدك على تجهيز ملف مهني قوي، البحث عن فرص مناسبة للعمل أو الدراسة في كندا، أمريكا، أوروبا ودول الخليج، وتجنب ضياع الوقت والمال في وعود غير واضحة.",
    workBtn: "أبحث عن عمل بالخارج",
    studyBtn: "أريد الدراسة بالخارج",
    problemTitle: "المشاكل التي نساعدك على تجنبها",
    problems: [
      "دفع مبالغ كبيرة لخدمات غير واضحة",
      "عدم معرفة هل الفرصة حقيقية أو مناسبة",
      "CV ضعيف أو Cover Letter عام وغير احترافي",
      "صعوبة فهم متطلبات الدراسة أو العمل بالخارج",
      "الخوف من الوعود الكاذبة أو الاحتيال",
      "تضييع الوقت في التقديم على فرص غير مناسبة",
    ],
    solutionTitle: "نحن لا نعطيك روابط فقط — نساعدك بخطة واضحة",
    solutionText:
      "نساعدك على تجهيز وثائق مهنية، فهم الخيارات المناسبة لملفك الشخصي، البحث عن فرص عمل أو دراسة مناسبة، وتنظيم خطوات التقديم بطريقة واضحة وشفافة.",
    pathsTitle: "اختر المسار المناسب لك",
    countriesTitle: "الوجهات التي نغطيها",
    packagesTitle: "الباقات والخدمات",
    whyTitle: "لماذا تختارنا؟",
    why: [
      "نوفر عليك الوقت في البحث",
      "نساعدك على تجنب ضياع المال في خدمات غير واضحة",
      "نركز على الفرص المناسبة لملفك الشخصي",
      "نجهز وثائق مهنية بدل نماذج عامة",
      "نوضح لك الخطوات بدون وعود كاذبة",
      "نساعدك على اتخاذ قرار أفضل قبل دفع مبالغ كبيرة",
    ],
    howTitle: "كيف نعمل؟",
    steps: [
      "اختر هدفك: العمل أو الدراسة",
      "املأ الاستمارة",
      "أرسل معلوماتك والوثائق المتوفرة لديك",
      "نقوم بتحليل ملفك الشخصي",
      "نجهز الوثائق ونبحث عن الفرص المناسبة",
      "تتوصل بالتقرير، الوثائق، والخطوات القادمة",
    ],
    formTitle: "أرسل طلبك",
    workTab: "العمل بالخارج",
    studyTab: "الدراسة بالخارج",
    adminTitle: "منطقة إدارة الطلبات",
    adminText:
      "هذا نموذج أولي لمنطقة الإدارة. لاحقاً سيتم ربطها بقاعدة بيانات لحفظ الطلبات الحقيقية ومتابعتها.",
    disclaimer:
      "نحن لا نضمن الحصول على عمل، عقد عمل، قبول جامعي، منحة، أو تأشيرة. خدماتنا تركز على إعداد الوثائق المهنية، البحث عن الفرص المناسبة، وتقديم إرشاد واضح وشفاف.",
  },
  fr: {
    dir: "ltr",
    brand: "Global Pathway",
    nav: ["Accueil", "Travail à l’étranger", "Études à l’étranger", "Packs", "Comment ça marche ?", "Demandes"],
    cta: "Commencer",
    langSwitch: "العربية",
    heroTitle: "Travaillez ou étudiez à l’étranger avec clarté et confiance",
    heroText:
      "Nous aidons les candidats et les étudiants à préparer des dossiers professionnels, à rechercher des opportunités adaptées au Canada, aux États-Unis, en Europe et dans les pays du Golfe, tout en évitant la confusion et les promesses irréalistes.",
    workBtn: "Trouver un emploi à l’étranger",
    studyBtn: "Étudier à l’étranger",
    problemTitle: "Les problèmes que nous vous aidons à éviter",
    problems: [
      "Payer des frais élevés pour des services peu clairs",
      "Ne pas savoir si une opportunité est réaliste ou adaptée",
      "Utiliser un CV faible ou une lettre de motivation générique",
      "Avoir du mal à comprendre les exigences pour étudier ou travailler à l’étranger",
      "Craindre les fausses promesses ou les arnaques",
      "Perdre du temps à postuler à des opportunités non adaptées",
    ],
    solutionTitle: "Nous ne donnons pas seulement des liens — nous vous aidons avec une stratégie claire",
    solutionText:
      "Nous vous aidons à préparer des documents professionnels, à comprendre les options adaptées à votre profil, à rechercher des opportunités de travail ou d’études, et à organiser vos démarches de manière claire et transparente.",
    pathsTitle: "Choisissez votre parcours",
    countriesTitle: "Destinations couvertes",
    packagesTitle: "Packs et services",
    whyTitle: "Pourquoi nous choisir ?",
    why: [
      "Nous vous faisons gagner du temps",
      "Nous vous aidons à éviter les services flous ou coûteux",
      "Nous recherchons des opportunités adaptées à votre profil",
      "Nous préparons des documents professionnels au lieu de modèles génériques",
      "Nous expliquons les étapes clairement, sans fausses promesses",
      "Nous vous aidons à prendre une décision plus informée avant de payer des frais élevés",
    ],
    howTitle: "Comment ça marche ?",
    steps: [
      "Choisissez votre objectif : travailler ou étudier",
      "Remplissez le formulaire",
      "Envoyez vos informations et les documents disponibles",
      "Nous analysons votre profil",
      "Nous préparons vos documents et recherchons des opportunités adaptées",
      "Vous recevez votre rapport, vos documents et les prochaines étapes",
    ],
    formTitle: "Envoyez votre demande",
    workTab: "Travail à l’étranger",
    studyTab: "Études à l’étranger",
    adminTitle: "Espace de gestion des demandes",
    adminText:
      "Ceci est un prototype d’espace admin. Plus tard, il sera connecté à une base de données pour sauvegarder et suivre les vraies demandes.",
    disclaimer:
      "Nous ne garantissons pas l’obtention d’un emploi, d’un contrat, d’une admission, d’une bourse ou d’un visa. Nos services se concentrent sur la préparation de documents professionnels, la recherche d’opportunités adaptées et l’orientation transparente.",
  },
};

const destinations = [
  {
    name: "Canada",
    descAr: "فرص للعمل والدراسة، مع تركيز على الملفات المهنية والبرامج المناسبة.",
    descFr: "Opportunités de travail et d’études avec un dossier professionnel adapté.",
  },
  {
    name: "USA",
    descAr: "بحث عن فرص مهنية ودراسية مناسبة حسب الملف الشخصي.",
    descFr: "Recherche d’opportunités professionnelles et académiques selon le profil.",
  },
  {
    name: "Europe",
    descAr: "دعم للبحث عن الدراسة والعمل في دول أوروبية مختلفة.",
    descFr: "Support pour rechercher des options d’études et de travail en Europe.",
  },
  {
    name: "Gulf Countries",
    descAr: "فرص في الخليج، خصوصاً في الخدمات، الضيافة، الأعمال، والرعاية.",
    descFr: "Opportunités dans le Golfe, notamment services, hôtellerie, business et care.",
  },
];

const packages = [
  {
    titleAr: "باقة الملف المهني الأساسية",
    titleFr: "Pack Carrière Essentiel",
    itemsAr: ["إنشاء أو تحسين CV", "Cover Letter", "نصائح عامة للتقديم", "مناسبة لمن يريد تحسين ملفه المهني"],
    itemsFr: ["Création ou amélioration du CV", "Lettre de motivation", "Conseils généraux", "Adapté pour améliorer son dossier"],
  },
  {
    titleAr: "باقة البحث عن عمل بالخارج",
    titleFr: "Pack Recherche d’Emploi à l’Étranger",
    itemsAr: ["CV احترافي", "Cover Letter", "بحث عن فرص عمل مناسبة", "لائحة شركات أو منصات تقديم", "خطة تقديم خطوة بخطوة"],
    itemsFr: ["CV professionnel", "Lettre de motivation", "Recherche d’opportunités", "Liste d’entreprises ou plateformes", "Plan de candidature"],
  },
  {
    titleAr: "باقة الدراسة بالخارج",
    titleFr: "Pack Études à l’Étranger",
    itemsAr: ["Student CV", "Motivation Letter أو SOP", "بحث عن جامعات وبرامج مناسبة", "Checklist للوثائق", "خطة تقديم واضحة"],
    itemsFr: ["CV étudiant", "Lettre de motivation ou SOP", "Recherche d’universités adaptées", "Checklist des documents", "Plan de candidature"],
  },
  {
    titleAr: "باقة الدعم المتقدم",
    titleFr: "Pack Support Premium",
    itemsAr: ["ملف كامل للعمل أو الدراسة", "بحث مخصص حسب الملف الشخصي", "وثائق مهنية", "تقرير فرص مفصل", "متابعة أولية"],
    itemsFr: ["Dossier complet travail ou études", "Recherche personnalisée", "Documents professionnels", "Rapport détaillé", "Suivi initial"],
  },
];

const adminRequests = [
  { id: "REQ-001", name: "Client Example", goal: "Work", destination: "Canada", packageName: "Work Abroad Pack", status: "New" },
  { id: "REQ-002", name: "Student Example", goal: "Study", destination: "France", packageName: "Study Abroad Pack", status: "In Progress" },
  { id: "REQ-003", name: "Client Example", goal: "Work", destination: "Gulf", packageName: "Premium Support", status: "Contacted" },
];

function App() {
  const [lang, setLang] = useState("ar");
  const [activeForm, setActiveForm] = useState("work");
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">{t.brand}</div>

          <nav className="hidden gap-6 text-sm md:flex">
            {t.nav.map((item) => (
              <a key={item} href="#" className="text-slate-200 hover:text-emerald-300">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
              className="rounded-full border border-white/20 px-4 py-2 text-sm"
            >
              {t.langSwitch}
            </button>
            <a
              href="#form"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              Canada • USA • Europe • Gulf
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#form" onClick={() => setActiveForm("work")} className="rounded-full bg-emerald-500 px-7 py-4 text-center font-semibold text-white hover:bg-emerald-400">
                {t.workBtn}
              </a>
              <a href="#form" onClick={() => setActiveForm("study")} className="rounded-full border border-white/25 px-7 py-4 text-center font-semibold text-white hover:bg-white/10">
                {t.studyBtn}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-6 text-slate-900">
              <h3 className="text-2xl font-bold">{lang === "ar" ? "ابدأ رحلتك بخطة واضحة" : "Start with a clear plan"}</h3>
              <div className="mt-6 space-y-4">
                {["CV", "Cover Letter", "Job Research", "University Research"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                    <span>{item}</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                      {lang === "ar" ? "مشمول" : "Included"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title={t.problemTitle}>
        <div className="grid gap-5 md:grid-cols-3">
          {t.problems.map((item) => (
            <Card key={item}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                !
              </div>
              <p className="font-medium leading-7">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={t.solutionTitle}>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">{t.solutionText}</p>
        </div>
      </Section>

      <Section title={t.pathsTitle}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-bold">{lang === "ar" ? "للراغبين في العمل بالخارج" : "For Job Seekers"}</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              {(lang === "ar"
                ? ["CV احترافي مناسب للبلد المستهدف", "Cover Letter مخصص", "البحث عن فرص عمل مناسبة", "رسائل مهنية للتقديم", "خطة تقديم واضحة"]
                : ["Country-specific professional CV", "Customized cover letter", "Job opportunity research", "Professional application messages", "Clear application plan"]
              ).map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold">{lang === "ar" ? "للطلاب الراغبين في الدراسة بالخارج" : "For Students"}</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              {(lang === "ar"
                ? ["Student CV", "Motivation Letter أو SOP", "بحث عن جامعات وبرامج مناسبة", "Checklist للوثائق", "خطة تقديم واضحة"]
                : ["Student CV", "Motivation Letter or SOP", "University and program research", "Document checklist", "Clear application plan"]
              ).map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title={t.countriesTitle}>
        <div className="grid gap-5 md:grid-cols-4">
          {destinations.map((country) => (
            <Card key={country.name}>
              <h3 className="text-xl font-bold">{country.name}</h3>
              <p className="mt-3 leading-7 text-slate-600">{lang === "ar" ? country.descAr : country.descFr}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={t.packagesTitle}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pack) => (
            <Card key={pack.titleAr}>
              <h3 className="text-xl font-bold">{lang === "ar" ? pack.titleAr : pack.titleFr}</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                {(lang === "ar" ? pack.itemsAr : pack.itemsFr).map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a href="#form" className="mt-6 block rounded-full bg-slate-950 px-5 py-3 text-center font-semibold text-white hover:bg-slate-800">
                {lang === "ar" ? "اطلب السعر" : "Demander un devis"}
              </a>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={t.whyTitle}>
        <div className="grid gap-5 md:grid-cols-2">
          {t.why.map((item) => (
            <div key={item} className="rounded-2xl bg-emerald-50 p-5 text-emerald-950">
              ✓ {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.howTitle}>
        <div className="grid gap-5 md:grid-cols-3">
          {t.steps.map((step, index) => (
            <Card key={step}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                {index + 1}
              </div>
              <p className="font-medium leading-7">{step}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section id="form" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
          <h2 className="text-3xl font-bold">{t.formTitle}</h2>

          <div className="mt-6 flex rounded-2xl bg-slate-100 p-2">
            <button
              onClick={() => setActiveForm("work")}
              className={`flex-1 rounded-xl px-4 py-3 font-semibold ${activeForm === "work" ? "bg-emerald-500 text-white" : "text-slate-700"}`}
            >
              {t.workTab}
            </button>
            <button
              onClick={() => setActiveForm("study")}
              className={`flex-1 rounded-xl px-4 py-3 font-semibold ${activeForm === "study" ? "bg-emerald-500 text-white" : "text-slate-700"}`}
            >
              {t.studyTab}
            </button>
          </div>

          {activeForm === "work" ? <WorkForm lang={lang} disclaimer={t.disclaimer} /> : <StudyForm lang={lang} disclaimer={t.disclaimer} />}
        </div>
      </section>

      <Section title={t.adminTitle}>
        <p className="mb-8 max-w-3xl leading-8 text-slate-600">{t.adminText}</p>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="p-4 text-start">ID</th>
                  <th className="p-4 text-start">{lang === "ar" ? "الاسم" : "Name"}</th>
                  <th className="p-4 text-start">{lang === "ar" ? "الهدف" : "Goal"}</th>
                  <th className="p-4 text-start">{lang === "ar" ? "الوجهة" : "Destination"}</th>
                  <th className="p-4 text-start">{lang === "ar" ? "الباقة" : "Package"}</th>
                  <th className="p-4 text-start">{lang === "ar" ? "الحالة" : "Status"}</th>
                </tr>
              </thead>
              <tbody>
                {adminRequests.map((request) => (
                  <tr key={request.id} className="border-t">
                    <td className="p-4">{request.id}</td>
                    <td className="p-4">{request.name}</td>
                    <td className="p-4">{request.goal}</td>
                    <td className="p-4">{request.destination}</td>
                    <td className="p-4">{request.packageName}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">{request.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <footer className="bg-slate-900 px-6 py-10 text-center text-sm text-slate-300">
        <p>{t.disclaimer}</p>
        <p className="mt-4">© 2026 Global Pathway. All rights reserved.</p>
      </footer>
    </main>
  );
}

function WorkForm({ lang, disclaimer }) {
  return (
    <form className="mt-8 grid gap-4 md:grid-cols-2">
      <Input placeholder={lang === "ar" ? "الاسم الكامل" : "Full name"} />
      <Input placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} />
      <Input placeholder={lang === "ar" ? "رقم الواتساب" : "WhatsApp number"} />
      <Input placeholder={lang === "ar" ? "المدينة وبلد الإقامة" : "City and country of residence"} />
      <Select options={lang === "ar" ? ["الوجهة المستهدفة", "كندا", "أمريكا", "أوروبا", "دول الخليج"] : ["Target destination", "Canada", "USA", "Europe", "Gulf countries"]} />
      <Select options={lang === "ar" ? ["نوع الفرصة", "عمل عام", "عقد عمل", "عمل موسمي", "عمل مهني", "عمل عن بعد"] : ["Type of opportunity", "General job", "Work contract", "Seasonal work", "Skilled job", "Remote job"]} />
      <Input placeholder={lang === "ar" ? "المستوى الدراسي" : "Education level"} />
      <Input placeholder={lang === "ar" ? "الخبرة العملية" : "Work experience"} />
      <Input placeholder={lang === "ar" ? "اللغات التي تتحدثها" : "Languages spoken"} />
      <Select options={lang === "ar" ? ["الباقة المفضلة", "باقة الملف المهني", "باقة البحث عن عمل", "باقة الدعم المتقدم"] : ["Preferred package", "Career Pack", "Work Abroad Pack", "Premium Pack"]} />
      <textarea className="min-h-32 rounded-xl border p-4 md:col-span-2" placeholder={lang === "ar" ? "اكتب تفاصيل طلبك" : "Write your request details"} />
      <label className="flex gap-3 text-sm text-slate-600 md:col-span-2">
        <input type="checkbox" />
        <span>{disclaimer}</span>
      </label>
      <button type="button" className="rounded-full bg-emerald-500 px-7 py-4 font-semibold text-white hover:bg-emerald-400 md:col-span-2">
        {lang === "ar" ? "إرسال طلب العمل" : "Submit Work Request"}
      </button>
    </form>
  );
}

function StudyForm({ lang, disclaimer }) {
  return (
    <form className="mt-8 grid gap-4 md:grid-cols-2">
      <Input placeholder={lang === "ar" ? "الاسم الكامل" : "Full name"} />
      <Input placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} />
      <Input placeholder={lang === "ar" ? "رقم الواتساب" : "WhatsApp number"} />
      <Input placeholder={lang === "ar" ? "المدينة وبلد الإقامة" : "City and country of residence"} />
      <Select options={lang === "ar" ? ["الوجهة المستهدفة", "كندا", "أمريكا", "أوروبا", "دول الخليج"] : ["Target destination", "Canada", "USA", "Europe", "Gulf countries"]} />
      <Select options={lang === "ar" ? ["المستوى الدراسي المطلوب", "دبلوم", "بكالوريوس", "ماستر", "دكتوراه", "برنامج لغة"] : ["Study level", "Diploma", "Bachelor’s degree", "Master’s degree", "PhD", "Language program"]} />
      <Input placeholder={lang === "ar" ? "التخصص المطلوب" : "Field of study"} />
      <Input placeholder={lang === "ar" ? "الميزانية التقريبية" : "Budget range"} />
      <Select options={lang === "ar" ? ["لغة الدراسة المفضلة", "العربية", "الفرنسية", "الإنجليزية"] : ["Preferred language of study", "Arabic", "French", "English"]} />
      <Select options={lang === "ar" ? ["الباقة المفضلة", "باقة الدراسة بالخارج", "باقة الدعم المتقدم"] : ["Preferred package", "Study Abroad Pack", "Premium Pack"]} />
      <textarea className="min-h-32 rounded-xl border p-4 md:col-span-2" placeholder={lang === "ar" ? "اكتب تفاصيل طلبك الدراسي" : "Write your study request details"} />
      <label className="flex gap-3 text-sm text-slate-600 md:col-span-2">
        <input type="checkbox" />
        <span>{disclaimer}</span>
      </label>
      <button type="button" className="rounded-full bg-emerald-500 px-7 py-4 font-semibold text-white hover:bg-emerald-400 md:col-span-2">
        {lang === "ar" ? "إرسال طلب الدراسة" : "Submit Study Request"}
      </button>
    </form>
  );
}

function Input({ placeholder }) {
  return <input className="rounded-xl border p-4" placeholder={placeholder} />;
}

function Select({ options }) {
  return (
    <select className="rounded-xl border p-4">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

function Section({ title, children }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-slate-950 md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {children}
    </div>
  );
}

export default App;