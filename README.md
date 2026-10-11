# Alden's Web

A calm tap-and-listen site for Alden (a toddler). It reuses the look of the
joyce-games sites (css/site.css) but replaces the quiz model with toddler games:

* Animals, Colors, Shapes, Count 1-3, Shabbat (candles, challah, kiddush cup, Torah), Aleph-Bet.
* Two big pictures at a time. Any tap is fine: the tapped picture is named; no wrong answers.
* No timers, no scores, no losing screens, no flashing. Rounds of three, then a cheer.
* Words are spoken slowly (rate 0.65) in English, then Hebrew and Thai (toggles at the top).
* No Brain Breaks, no backend, no chat, no stars.

Edit `settings.js` to change games, round length, speed, or default languages.
Words live in `games/words.js`. Thai words must be checked: see `../thai-review.md`.

Publish: own GitHub repo, Pages from main / root. `CNAME` = alden.cainhq.com.
