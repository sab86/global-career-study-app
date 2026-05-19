import { useState } from "react";

const content = {
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "العمل بالخارج", "الدراسة بالخارج", "الباقات", "كيف نعمل؟"],
    cta: "ابدأ الآن",
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
    countriesTitle: "الوجهات التي نغطيها",
    packagesTitle: "الباقات والخدمات",
    whyTitle: "لماذا تختارنا؟",
    why: [
      "نوفر عليك الوقت في البحث",
      "نساعدك على تجنب ضياع المال في خدمات غير واضحة",
      "نركز على الفرص المناسبة لملفك الشخصي",
      "نجهز وثائق مهنية بدل نماذج عامة",
      "نوضح لك الخطوات بدون وعود كاذبة",
    ],
    formTitle: "أرسل طلبك",
    disclaimer:
      "نحن لا نضمن الحصول على عمل، عقد عمل، قبول جامعي، منحة، أو تأشيرة. خدماتنا تركز على إعداد الوثائق المهنية، البحث عن الفرص المناسبة، وتقديم إرشاد واضح وشفاف.",
  },
  fr: {
    dir: "ltr",
    nav: ["Accueil", "Travail à l’étranger", "Études à l’étranger", "Packs", "Comment ça marche ?"],
    cta: "Commencer",
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
    countriesTitle: "Destinations couvertes",
    packagesTitle: "Packs et services",
    whyTitle: "Pourquoi nous choisir ?",
    why: [
      "Nous vous faisons gagner du temps",
      "Nous vous aidons à éviter les services flous ou coûteux",
      "Nous recherchons des opportunités adaptées à votre profil",
      "Nous préparons des documents professionnels au lieu de modèles génériques",
      "Nous expliquons les étapes clairement, sans fausses promesses",
    ],
    formTitle: "Envoyez votre demande",
    disclaimer:
      "Nous ne garantissons pas l’obtention d’un emploi, d’un contrat, d’une admission, d’une bourse ou d’un visa. Nos services se concentrent sur la préparation de documents professionnels, la recherche d’opportunités adaptées et l’orientation transparente.",
  },
};

const countries = ["Canada", "USA", "Europe", "Gulf Countries"];

const packages = [
  {
    titleAr: "باقة الملف المهني الأساسية",
    titleFr: "Pack Carrière Essentiel",
    itemsAr: ["إنشاء أو تحسين CV", "Cover Letter", "نصائح عامة للتقديم"],
    itemsFr: ["Création ou amélioration du CV", "Lettre de motivation", "Conseils généraux pour postuler"],
  },
  {
    titleAr: "باقة البحث عن عمل بالخارج",
    titleFr: "Pack Recherche d’Emploi à l’Étranger",
    itemsAr: ["CV احترافي", "Cover Letter", "بحث عن فرص عمل مناسبة", "خطة تقديم خطوة بخطوة"],
    itemsFr: ["CV professionnel", "Lettre de motivation", "Recherche d’opportunités adaptées", "Plan de candidature"],
  },
  {
    titleAr: "باقة الدراسة بالخارج",
    titleFr: "Pack Études à l’Étranger",
    itemsAr: ["Student CV", "Motivation Letter أو SOP", "بحث عن جامعات وبرامج مناسبة", "Checklist للوثائق"],
    itemsFr: ["CV étudiant", "Lettre de motivation ou SOP", "Recherche d’universités adaptées", "Checklist des documents"],
  },
];

function App() {
  const [lang, setLang] = useState("ar");
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">Global Pathway</div>

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
              className="rounded-full border border-white/20 px-3 py-2 text-sm"
            >
              {lang === "ar" ? "Français" : "العربية"}
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
              <a
                href="#form"
                className="rounded-full bg-emerald-500 px-7 py-4 text-center font-semibold text-white hover:bg-emerald-400"
              >
                {t.workBtn}
              </a>
              <a
                href="#form"
                className="rounded-full border border-white/25 px-7 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                {t.studyBtn}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-6 text-slate-900">
              <h3 className="text-2xl font-bold">
                {lang === "ar" ? "ابدأ رحلتك بخطة واضحة" : "Start with a clear plan"}
              </h3>
              <div className="mt-6 space-y-4">
                {["CV", "Cover Letter", "Job Research", "University Research"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                    <span>{item}</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                      Included
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
              <div className="mb-4 h-10 w-10 rounded-xl bg-emerald-100"></div>
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

      <Section title={t.countriesTitle}>
        <div className="grid gap-5 md:grid-cols-4">
          {countries.map((country) => (
            <Card key={country}>
              <h3 className="text-xl font-bold">{country}</h3>
              <p className="mt-3 text-slate-600">
                {lang === "ar"
                  ? "دعم للبحث عن فرص العمل والدراسة."
                  : "Support for work and study opportunity research."}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={t.packagesTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pack) => (
            <Card key={pack.titleAr}>
              <h3 className="text-xl font-bold">{lang === "ar" ? pack.titleAr : pack.titleFr}</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                {(lang === "ar" ? pack.itemsAr : pack.itemsFr).map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a
                href="#form"
                className="mt-6 block rounded-full bg-slate-950 px-5 py-3 text-center font-semibold text-white hover:bg-slate-800"
              >
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

      <section id="form" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
          <h2 className="text-3xl font-bold">{t.formTitle}</h2>
          <form className="mt-8 grid gap-4">
            <input className="rounded-xl border p-4" placeholder={lang === "ar" ? "الاسم الكامل" : "Full name"} />
            <input className="rounded-xl border p-4" placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} />
            <input className="rounded-xl border p-4" placeholder={lang === "ar" ? "رقم الواتساب" : "WhatsApp number"} />
            <select className="rounded-xl border p-4">
              <option>{lang === "ar" ? "اختر هدفك" : "Choose your goal"}</option>
              <option>{lang === "ar" ? "العمل بالخارج" : "Work abroad"}</option>
              <option>{lang === "ar" ? "الدراسة بالخارج" : "Study abroad"}</option>
            </select>
            <textarea
              className="min-h-32 rounded-xl border p-4"
              placeholder={lang === "ar" ? "اكتب تفاصيل طلبك" : "Write your request details"}
            />
            <label className="flex gap-3 text-sm text-slate-600">
              <input type="checkbox" />
              <span>{t.disclaimer}</span>
            </label>
            <button
              type="button"
              className="rounded-full bg-emerald-500 px-7 py-4 font-semibold text-white hover:bg-emerald-400"
            >
              {lang === "ar" ? "إرسال الطلب" : "Envoyer la demande"}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 px-6 py-10 text-center text-sm text-slate-300">
        <p>{t.disclaimer}</p>
        <p className="mt-4">© 2026 Global Pathway. All rights reserved.</p>
      </footer>
    </main>
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