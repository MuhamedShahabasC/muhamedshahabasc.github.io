#!/bin/sh

set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
dist_dir="$repo_dir/dist"

"$repo_dir/scripts/build.sh"

for route in index.html blogs/index.html blogs/pvc-explain.html blogs/stateless-mcp-explainer.html favicon.png favicon.ico robots.txt sitemap.xml; do
  test -f "$dist_dir/$route"
done

if find "$dist_dir" -name '.env' -o -name '.env.*' | grep -q .; then
  echo "Verification failed: environment file found in dist." >&2
  exit 1
fi

if rg -n -i '\b(react|vite|npm)\b' "$repo_dir/site" \
  --glob '!**/assets/vendor/**'; then
  echo "Verification failed: removed stack referenced in site source." >&2
  exit 1
fi

for page in index.html blogs/index.html blogs/pvc-explain.html blogs/stateless-mcp-explainer.html; do
  file="$dist_dir/$page"
  rg -q '<title>[^<]+</title>' "$file"
  rg -q 'name="description"' "$file"
  rg -q 'rel="canonical"' "$file"
  rg -q 'property="og:title"' "$file"
  rg -q 'name="twitter:card"' "$file"
  rg -q 'application/ld\+json' "$file"
  rg -q 'rel="icon"[^>]+href="(\.\./)?favicon\.png"' "$file"
done

xmllint --noout "$dist_dir/sitemap.xml"

printf '%s  %s\n' \
  "57b37d7cae9a27d965fdae4adcc844245dfdc407e655aee85dcfff3a08036a3f" \
  "$dist_dir/assets/vendor/alpine-3.15.12.min.js" \
  "d4292342cd1c591a0b75fc5108be17dfbfd54311c95f26a02b9d955d406958fe" \
  "$dist_dir/assets/vendor/lit-3.3.3.min.js" \
  "aa41150f5240714d45b3eee34be60c8eccf4bbfa6cd875b227d60e293403a24d" \
  "$dist_dir/assets/vendor/lit-css-tag-2.1.2.min.js" \
  "f17dfd9abb8c95953f09893cfefaaf9e09b9205012f6a2e3976dc946c89f6d7d" \
  "$dist_dir/assets/vendor/konva-10.3.0.min.js" |
  shasum -a 256 -c

if rg -n 'â|Ã|Â|�' "$dist_dir" --glob '*.html' --glob '*.js' \
  --glob '!**/assets/vendor/**'; then
  echo "Verification failed: possible mojibake found." >&2
  exit 1
fi

echo "Static verification passed."
