#!/bin/sh

set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
source_dir="$repo_dir/site"
output_dir="$repo_dir/dist"

if command -v rg >/dev/null 2>&1 &&
  rg -n '(href|src|action)=["'"'"']/|url\(["'"'"']?/' "$source_dir" \
    --glob '*.html' --glob '*.css'; then
  echo "Build stopped: internal asset and route URLs must be relative." >&2
  exit 1
fi

rm -rf "$output_dir"
mkdir -p "$output_dir"
cp -R "$source_dir"/. "$output_dir"/

if find "$output_dir" -name '.env' -o -name '.env.*' | grep -q .; then
  echo "Build stopped: environment file found in dist." >&2
  exit 1
fi

printf 'Built %s\n' "$output_dir"
