#!/usr/bin/env bash
# Recompile the inlined Tailwind stylesheet inside index.html.
# Run this after adding or changing any Tailwind class in the markup or JS —
# the CSS is precompiled (no CDN), so new classes must be regenerated.
set -euo pipefail
cd "$(dirname "$0")"
python3 - <<'PY'
import re, pathlib
page = pathlib.Path("../index.html").read_text(encoding="utf-8")
i = page.index("<style>"); j = page.index("</style>", i) + len("</style>")
pathlib.Path(".scan.html").write_text(page[:i] + page[j:], encoding="utf-8")
PY
npx -y tailwindcss@3 -c tailwind.config.js -i input.css -o .out.css --minify
python3 - <<'PY'
import pathlib
page = pathlib.Path("../index.html").read_text(encoding="utf-8")
css  = pathlib.Path(".out.css").read_text(encoding="utf-8")
i = page.index("<style>"); j = page.index("</style>", i) + len("</style>")
pathlib.Path("../index.html").write_text(page[:i] + "<style>" + css + "</style>" + page[j:], encoding="utf-8")
print("inlined", len(css), "bytes of CSS into index.html")
PY
rm -f .scan.html .out.css
