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
  games: ["animals", "colors", "shapes", "count", "shabbat", "alephbet"],
  roundSize: 3,      /* three finds, then a cheer */
  choices: 2,        /* two big pictures at a time */
  countMax: 3,       /* count 1 to 3 */
  rate: 0.65,        /* slow speech */
  pause: 5200,       /* time to hear English, Hebrew, and Thai before moving on */
  he: true,          /* Hebrew on by default (toggle on screen) */
  th: true           /* Thai on by default (toggle on screen). Mom: please check thai-review.md first. */
};
