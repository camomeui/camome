#!/usr/bin/env sh

pnpm concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
  "pnpm http-server apps/storybook/storybook-static --port 6006" \
  "pnpm -v wait-on tcp:6006 && pnpm -F storybook run test --url http://127.0.0.1:6006"
