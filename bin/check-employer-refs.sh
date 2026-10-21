#!/usr/bin/env bash
# Fail if banned employer terms appear in the scanned project and template paths.
# Terms live in .github/employer-banned-terms.txt, one per line.
# Matching is whole-word and case-insensitive, except the bare term "GN",
# which matches only as an uppercase whole word.
# About, CV, resume JSON, news and blog are intentionally not scanned.

set -u

cd "$(dirname "$0")/.." || exit 2

TERMS_FILE=".github/employer-banned-terms.txt"
SCAN_PATHS=(_projects projects _includes _layouts assets/js README.md)

if [ ! -f "$TERMS_FILE" ]; then
  echo "Missing $TERMS_FILE" >&2
  exit 2
fi

paths=()
for p in "${SCAN_PATHS[@]}"; do
  [ -e "$p" ] && paths+=("$p")
done

found=0
while IFS= read -r term || [ -n "$term" ]; do
  term="${term%$'\r'}"
  [ -z "$term" ] && continue
  case "$term" in \#*) continue ;; esac

  if [ "$term" = "GN" ]; then
    flags=(-rInHw -F)
  else
    flags=(-rInHiw -F)
  fi

  if hits=$(grep "${flags[@]}" -e "$term" -- "${paths[@]}" 2>/dev/null) && [ -n "$hits" ]; then
    echo "Banned term \"$term\":"
    echo "$hits" | cut -c1-240 | sed 's/^/  /'
    found=1
  fi
done < "$TERMS_FILE"

if [ "$found" -ne 0 ]; then
  echo "Employer reference check failed. See docs/NEW_PROJECT_CHECKLIST.md." >&2
  exit 1
fi

echo "Employer reference check passed."
