# Chen Han — minimal academic homepage

A responsive, buildless redesign of https://hanshenmesen.github.io/, using the original site's public content and images. Visual reference: https://xyliu-cs.github.io/. Prepared on 2026-11-05.

## Preview and edit

Open `index.html` directly, or serve the directory:

```sh
python3 -m http.server 8765 --directory .
```

The site uses plain HTML, CSS and JavaScript, system fonts and local assets. It needs no package installation, build process or external runtime. Edit `index.html` for content, `style.css` for the base presentation, `sections.css` for career and reviewer lists, `hero.css` for the three-line research introduction, and `script.js` for the publication deep link and section navigation.

The approved website is deployed at https://hanshenmesen.github.io/ from the root of the main branch. The .nojekyll file disables Jekyll processing; legacy template files remain in the repository for reference. The published homepage uses index.html, style.css, hero.css, sections.css, script.js and assets/.

## Design

- Warm white background, charcoal type, restrained green links.
- Small inline SVG icons for navigation, contact links, section headings, paper links and personal details; no icon-font dependency.
- Name, research direction, affiliation and contact links in the first section.
- Three selected papers with concise summaries; original descriptions and figures expand on demand.
- All 11 original bibliography records retained in the full publication list.
- Seven news items, three internships, three education records and eight awards retained. Xiaohongshu’s ACE Top Talent program is highlighted in the internship heading.
- Experience and education use separate full-width sections, real locally hosted organization logos and aligned dates. The original logos are preserved; CSS frames the emblem portion of wide marks.
- Conference and journal reviewer lists flow horizontally and wrap on smaller screens. The service section includes the user's November 5 additions, with duplicate KSS entries merged, conference names shown without years, and unspecified conference years left unspecified.
- Small-screen layout, keyboard focus, semantic headings, reduced motion and print styling.

## Content notes

The original AAAI 2026 selected-paper entry has five authors, while its full citation has four. Both source strings are retained; the discrepancy should be resolved against the final paper when updating the content. The 2026 EMNLP citation specifies Findings; the original news uses EMNLP. The old “Before 2023” group includes 2023 papers and is labeled “2023 & earlier” here.

The three research directions and brief paper summaries are condensed from the research interests and descriptions on the original site. The original portrait is retained with no saturation filter. No new publication, award or affiliation has been added.

The Frontiers in Psychology reviewer entry specifies the Cognitive Science section and links to its public section page. The personal Frontiers reviewer-workspace URL is not included. Other journal links use the manuscript portals supplied by the user. Conference and journal reviewer entries are user-provided information; no blanket JCR classification is asserted.

The biography ends with the original Overwatch Top 500 Tank introduction and handle, accompanied by the Overwatch logo.

# Real logo sources

Downloaded on 2026-11-05. All seven files are original downloaded assets, with no drawn substitutes, recoloring, resampling, or cropping. Only `cufe.jpg` was replaced during collection with the correct official circular emblem rather than the site's horizontal calligraphic wordmark.

| Local file in `dist/assets/logos/` | Source page | Original asset URL | Display recommendation |
|---|---|---|---|
| xiaohongshu.png | https://www.xiaohongshu.com/ | https://picasso-static.xiaohongshu.com/fe-platform/f43dc4a8baf03678996c62d8db6ebc01a82256ff.png | 180×180 official apple-touch icon, red square with white 小红书. Show full asset. |
| source-code-capital.png | https://sourcecodecap.com/ | https://cdn.sourcecodecap.com/wp-content/uploads/2018/08/源码资本logo.png | 1392×350 white transparent wordmark. Real left symbol occupies x0–395; CSS crop to that mark on dark green background. |
| ant-group.png | https://en.wikipedia.org/wiki/Ant_Group ; official brand source https://www.antgroup.com/en/news-media/media-library | https://upload.wikimedia.org/wikipedia/en/d/de/Ant_Group_logo.png | 483×207 transparent blue ant + wordmark. Left ant occupies x0–161; CSS crop can show just blue ant. Official site is JS-rendered and asset could not be extracted; Wikimedia's actual company logo used. |
| ucas.svg | https://en.wikipedia.org/wiki/University_of_Chinese_Academy_of_Sciences ; official download listing https://www.ucas.ac.cn/zyxz/317e89147f454990bb5cf8df9724e1d8.htm | https://upload.wikimedia.org/wikipedia/en/6/64/University_of_the_Chinese_Academy_of_Sciences_logo.svg | 553×116 vector full university logo. Left round emblem approximately first116px. Official site returned access-denied HTML; Wikimedia actual university logo used. |
| cas.png | https://www.cas.cn/ | https://www.cas.cn/lib/images/favicon.png | 180×180 actual official blue CAS emblem. Show full asset. |
| cufe.jpg | https://www.cufe.edu.cn/xxgk/xxbs.htm | https://www.cufe.edu.cn/__local/6/1D/01/5E1C65508D4C700B569D215CBEF_6C9C52CE_113C3.jpg | 250×250 actual official blue circular CUFE emblem on white. Show full asset. |
| overwatch.svg | https://commons.wikimedia.org/wiki/File:Overwatch_2_logo.svg | https://upload.wikimedia.org/wikipedia/commons/c/c7/Overwatch_2_logo.svg | Authentic gray/orange Overwatch 2 icon, viewBox0 0 50 36.29. Keep colors. |

Institution and company marks remain their respective owners' trademarks and are used to identify the organizations in the experience/education entries.

News uses a native keyboard/touch scroll viewport, with the CAST doctoral talent program and BYD scholarship dated December 2025. Degree majors are included. Secondary text contrast and key text sizes have been increased.

# AMSS official logo

- Asset: `dist/assets/logos/amss.png`
- Original asset: http://amss.cas.cn/images/sxyxt2023-logoicon.png
- Official source page: http://www.amss.ac.cn/ (links this as its shortcut icon)
- Size: 76 × 76 pixels, RGBA PNG.
- The actual AMSS geometric navy mark; downloaded unchanged and visually inspected.
- Display at 46 × 46 pixels on desktop, 40 × 40 pixels on mobile with `object-fit: contain`. No crop required. Do not round corners, as the mark itself has a square outline.
- The official HTTPS server returned a self-signed-certificate error to curl. The website’s ordinary HTTP endpoint served its official HTML and linked asset successfully; no certificate bypass was used.

News includes a persistent left-side scrollbar, synchronized with native wheel, touch and keyboard scrolling. The scrollbar supports dragging and keyboard input.
