/* settings.js for Alden's Web. The only per-child file.
   Alden is almost 3 and is not reading yet, so this site has no quizzes,
   no Treasure Map, no Practice, and no Brain Breaks. Just tap and listen.
   There is no backend, no chat, and no stars. */
window.KIDS_SETTINGS = {
  childName: "Alden",
  childKey: "alden",
  age: 2,
  siteTitle: "Alden's Web",
  themeColor: "#2f9e57",
  brainBreaks: false,
  backend: { functionsUrl: "" }
};

window.TAP_CONFIG = {
  key: "alden-tap",
  title: "Alden's Web",
  /* Games on the home page, in order. */
  /* Extra home tiles that open their own page (shown first). */
  links: [{ href: "sounds/", emoji: "🐴", title: "Animal Sounds" }],
  games: ["animals", "colors", "shapes", "count", "shabbat", "alephbet"],
  roundSize: 3,      /* three finds, then a cheer */
  choices: 2,        /* two big pictures at a time */
  countMax: 3,       /* count 1 to 3 */
  first: { animals: "horse" },   /* Alden loves horses: the horse comes first, top-left, with a real gentle neigh */
  rate: 0.65,        /* slow speech */
  pause: 5200,       /* time to hear English, Hebrew, and Thai before moving on */
  he: true,          /* Hebrew on by default (toggle on screen) */
  th: true           /* Thai on by default (toggle on screen). Mom: please check thai-review.md first. */
};

/* Kid switcher links (js/kid-switch.js), same as Aria's and Bodhi's sites. Remove a line to hide that kid. */
window.KID_SWITCH_KIDS = [{"id": "aria", "name": "Aria", "face": "👧", "href": "https://aria.cainhq.com/", "host": "aria."}, {"id": "bodhi", "name": "Bodhi", "face": "🐯", "href": "https://bodhi.cainhq.com/", "host": "bodhi."}, {"id": "alden", "name": "Alden", "face": "🐣", "href": "https://alden.cainhq.com/", "host": "alden."}];
window.KID_SWITCH_BIG = true;   /* bigger pill for little fingers */
