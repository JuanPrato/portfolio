const data = {
  projects: [
    {
      img: "images/stock-master.png",
      title: "Stock-Master",
      description:
        "Proyecto para facturación de pequeñas empresas. Incluye\ncontrol de stock con movimientos de inventario y\nfacturación.",
      actions: {
        code: "https://github.com/JuanPrato/stock-master",
        live: "https://stock-master-five.vercel.app/",
      },
      badges: ["In progress", "NextJs", "Tailwind", "SQLite"],
    },
    {
      img: "images/out-budget.png",
      title: "Out Budget",
      description:
        "Un proyecto simple para poder tener un presupuesto en conjunto o individual.",
      actions: {
        code: "https://github.com/JuanPrato/out-budget",
        live: "https://out-budget.vercel.app/",
      },
      badges: ["NextJs", "Tailwind", "Firebase"],
    },
  ],
  timeline: [
    {
      year: "2017",
      emoji: "🌎",
      event: "Comienzo en el mundo de la programación",
    },
    {
      year: "2018",
      emoji: "🏫",
      event: "Inicio de carrera ingeniera en sistema",
    },
    { year: "2019", event: "Mi primer trabajo en una consultora" },
    {
      year: "2021",
      emoji: "🔄",
      note: "Un cambio de rumbo",
      event: "Cambio la carrera un tecnicatura en programación",
    },
    {
      year: "2023",
      emoji: "🏦",
      event: "Arranco a trabajar para el banco ICBC",
    },
    {
      year: "2024",
      emoji: "👨🏻‍💻",
      event: "Me nombran líder técnico de la mi celular de trabajo",
    },
    {
      year: "Proximamente...",
      emoji: "🖋️",
      event: "La historia se sigue escribiendo",
    },
  ],
  contact: {
    number: "541111111111",
  },
};

const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);

// PROYECTOS

const $projectsList = $(".projects_list");

const projects = data.projects
  .map(
    (project) => `
  <div class="project_card">
  <header>
    <img src="${project.img}" />
  </header>
  <main>
    <div class="box">
      <h3 class="title">${project.title}</h3>
      <p>
        ${project.description}
      </p>
      <div class="box box-row">
        <a
          class="btn"
          href="${project.actions.live}"
          target="_blank"
          >VISITAR</a
        >
        <a
          class="btn btn-outline"
          href="${project.actions.code}"
          target="_blank"
          >CÓDIGO</a
        >
      </div>
    </div>
    <footer>
      ${project.badges.map((b) => `<span class="badge">${b}</span>`).join("\n")}
    </footer>
  </main>
</div>
`
  )
  .join("");

$projectsList.innerHTML = projects;

// ABOUT ME

const $timelineContainer = $(".aboutme_timeline");

const timelineItems = data.timeline
  .map(
    (item, index) =>
      `<div class="timeline-card" data-index="${index}">
          <header class="box box-row justify-between items-center">
            <h3 class="title">${item.year}</h3>
            <span class="text-large">${item.emoji ? item.emoji : "💻"}</span>
          </header>
          ${item.note ? `<h5 class="text-muted">${item.note}</h5>` : ""}
          <p class="paragraph">${item.event}</p>
        </div>`
  )
  .join("\n");

$timelineContainer.innerHTML = timelineItems;

const $timelineCards = $all(".timeline-card");
let current = 0;

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;

      const index = e.target.dataset["index"];

      if (!index) return;

      current = Number(index);
    });
  },
  {
    root: $timelineContainer,
    threshold: 0.5,
    rootMargin: "-25px",
  }
);

$timelineCards.forEach((e) => timelineObserver.observe(e));

const $prev = $(".timeline-control-left");
const $next = $(".timeline-control-right");

$prev.addEventListener("click", () => {
  if (current === 0) return;

  const element = $timelineCards[current - 1];

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
});

$next.addEventListener("click", () => {
  if (current === $timelineCards.length - 1) return;

  const element = $timelineCards[current + 1];

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
});

// CONTACTO

const $contactForm = $(".contact_form");

const getMessage = (name, mess) =>
  `https://api.whatsapp.com/send?phone=${data.contact.number}&text=Hola mi nombre es ${name}:\n${mess}`;

$contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const $name = $("#name");
  const $question = $("#question");

  if (!$name.value || !$question.value) return;

  const a = document.createElement("a");
  a.target = "_blank";
  a.href = getMessage($name.value, $question.value);

  a.click();

  $contactForm.reset();
});

// NAV

const $sectionsBox = $(".body_sections");
const $sections = $all(".body_section");

const $menuLinks = $all(".nav_link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      const id = e.target.id;
      const $link = [...$menuLinks.values()].find(
        (link) => link.dataset["refId"] === id
      );

      if (!$link) return;

      $link.classList.toggle("selected", e.isIntersecting);
    });
  },
  {
    root: $sectionsBox,
    threshold: 0.5,
    rootMargin: "-100px",
  }
);

$sections.forEach((e) => observer.observe(e));
