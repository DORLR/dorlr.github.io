# DORLR

Source for the [DORL Robotics Team website](https://dorlr.github.io/). Open `index.html` in a browser (or run `python3 -m http.server`) to preview locally.

- **Projects:** Ordered reverse-chronologically (most recent first) in `index.html`. Store project cover images in `assets/projects/` and project-author headshots in `assets/avatars/`. Author link priority: personal homepage → LinkedIn. Author avatar priority: LinkedIn → Google Scholar → DORL homepage → initials badge.
- **Team Photos:** Hero carousel slides live in `assets/` (e.g. `team-corl-2026.jpg`, `team-iros-2026.jpg`), controlled by `site.js` with left/right arrows and dot selectors. Strip EXIF metadata before committing photos.
- **Members:** Plain-text roster under PhD, MS, or Undergrad (no avatars in the roster).
- **Order:** PhD lists the senior students first (Chongyu Zhu, Ramy ElMallah), then Hyegang Kim, then everyone else by surname. Other groups are sorted by surname.
- **Alumni:** When someone leaves the team, move their name from their group to the Alumni list. Tag it with their program and when they were here, e.g. `Undergrad · Summer 2026`. Don't delete it.
- **Faculty advisor:** Profile and headshot are from the [U of T faculty directory](https://www.mie.utoronto.ca/faculty_staff/cglee/). Lab links go to the [DORL homepage](https://dorl.mie.utoronto.ca/).

GitHub Pages publishes from the root of the `main` branch.
