# Luyao Zhuang's academic homepage

The current homepage is a static site in `docs/`. It uses the original HTML structure, CSS, icon fonts, and layout script from [Shengyuan Chen's homepage](https://chensycn.github.io/), with Luyao Zhuang's content and project links. The template's MIT license is retained in `docs/TEMPLATE-LICENSE.txt`.

## Preview

From the repository root:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8766/` in a browser.

## Publish on GitHub Pages

1. Commit the `docs/` directory to the `master` branch of `LuyaoZhuang/LuyaoZhuang.github.io`, normally by merging the prepared `codex/academic-homepage` branch.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, then **master** and **/docs**, and save.
4. Wait for GitHub's Pages deployment to succeed. The site will be available at `https://luyaozhuang.github.io/`.

The old Jekyll source remains intact. The `.nojekyll` file allows the new homepage to be served without a Jekyll build. No paid services, build dependencies, or access tokens are needed by the website.

## Maintain

- Update text and links in `docs/index.html`.
- Replace `docs/images/avatar.jpg` to update the avatar.
- Preserve `docs/assets/css/main.css` and `docs/assets/css/academicons.css` to retain the reference site's formatting.
- GitHub Stars badges use Shields.io and update independently of the site. Their counts are not hardcoded.

## Content sources

- Education and awards: the CV supplied by Luyao Zhuang.
- Reviewer service, email, Scholar profile, and project participation: supplied directly by Luyao Zhuang.
- [LinearRAG](https://arxiv.org/abs/2510.10114) and its [official repository](https://github.com/DEEP-PolyU/LinearRAG).
- [LoSemB, WWW 2026](https://doi.org/10.1145/3774904.3792336); the published author list is used, following the [DBLP record](https://dblp.org/pid/415/0247.html) and [Qinggang Zhang's homepage](https://qing145.github.io/). The older arXiv manuscript has a different author list. The [Crossref publication record](https://api.crossref.org/works/10.1145/3774904.3792336) confirms online publication on April 12, 2026, so the news entry uses April 2026.
- [Org-Agent](https://arxiv.org/abs/2609.34392) and [Graph-based Agent Memory](https://arxiv.org/abs/2602.05665), labelled as preprints.
- [K-Cube](https://www.polyu.edu.hk/comp/kcube/welcome), linked from the user-provided [Rongjun Ye homepage](https://ericyerongjun.github.io/); the short product description follows the [official K-Cube introduction](https://kcube.comp.polyu.edu.hk/kcube/0010-graph.html).
- [DeepRead](https://github.com/zhikangSu/DeepRead).

The source CV is not published with this site. Project entries contain a short product description and links, without personal role claims.
