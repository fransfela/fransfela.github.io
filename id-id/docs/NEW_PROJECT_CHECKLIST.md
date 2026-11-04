# New project checklist

Complete every item before publishing a project page.

- [ ] Built on my own time and equipment.
- [ ] No employer data, audio, video, code, screenshots, names or internal URLs.
- [ ] No employer name or logo.
- [ ] Examples use public or synthetic data.
- [ ] Author, license and copyright holder are me personally.
- [ ] Git author email is a personal or GitHub noreply address.
- [ ] Written approval obtained from my employer if there is any doubt.

Then run `bash bin/check-employer-refs.sh`. It scans `_projects/`, `projects/`, `_includes/`, `_layouts/`, `assets/js/` and `README.md` for the terms in `.github/employer-banned-terms.txt`.
