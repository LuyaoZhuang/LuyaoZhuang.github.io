// Keep a verified local badge visible if GitHub is unavailable or rate-limited.
document.querySelectorAll('img[data-stars-repo]').forEach(async (image) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(`https://api.github.com/repos/${image.dataset.starsRepo}`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) return;
    const { stargazers_count: count } = await response.json();
    if (!Number.isSafeInteger(count) || count < 0 || count === Number(image.dataset.starsCount)) return;

    const template = await fetch(image.src, { signal: controller.signal });
    if (!template.ok) return;
    const svg = new DOMParser().parseFromString(await template.text(), 'image/svg+xml');
    const label = count.toLocaleString('en-US');
    const textWidth = label.length * 6 + 1;
    const right = svg.querySelector('#rlink').parentNode;
    svg.documentElement.setAttribute('width', String(69 + textWidth));
    svg.querySelector('rect[x="60.5"]').setAttribute('width', String(textWidth + 8));
    right.querySelector('rect').setAttribute('width', String(textWidth + 9));
    right.querySelectorAll('text').forEach((text) => {
      text.textContent = label;
      text.setAttribute('x', String((60 + (textWidth + 8) / 2) * 10));
      text.setAttribute('textLength', String(textWidth * 10));
    });
    image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    image.dataset.starsCount = String(count);
  } catch (_) {
    // Preserve the locally hosted count on network errors or invalid responses.
  } finally {
    clearTimeout(timeout);
  }
});
