/* Animal Sounds: tap an animal -> it bounces, its real (quiet) sound plays,
   then its name in English, Hebrew and Thai. A new tap stops what is playing.
   No prompts, no scores, no timers, no text on screen. */
(function () {
  var A = window.SOUND_ANIMALS, grid = document.getElementById("snd-grid");
  var langs = { he: true, th: true };
  try { var s = JSON.parse(localStorage.getItem("alden-tap-langs") || "null"); if (s) { langs.he = !!s.he; langs.th = !!s.th; } } catch (e) {}
  var RATE = (window.TAP_CONFIG && window.TAP_CONFIG.rate) || 0.65, current = null;
  function play(a, btn) {
    if (current) current.classList.remove("playing");
    btn.classList.remove("bounce"); void btn.offsetWidth; btn.classList.add("bounce", "playing"); current = btn;
    var parts = [{ src: a.fx }, { text: a.en, lang: "en" }];
    if (langs.he) parts.push({ text: a.he, lang: "he" });
    if (langs.th) parts.push({ text: a.th, lang: "th" });
    if (window.KidsVoice) window.KidsVoice.say(parts, { interrupt: true, rate: RATE, pitch: 1, skipMissing: true,
      onend: function () { if (current === btn) btn.classList.remove("playing"); } });
  }
  A.forEach(function (a) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "snd-animal"; b.setAttribute("data-id", a.id); b.setAttribute("aria-label", a.en);
    var p = document.createElement("span"); p.textContent = a.pic; p.setAttribute("aria-hidden", "true"); b.appendChild(p);
    b.addEventListener("click", function () { play(a, b); });
    grid.appendChild(b);
  });
})();
