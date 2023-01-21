#!/usr/bin/env sh

# This doesn't work on GitHub Actions somehow with the following logs:
# [SB]    "GET /iframe.html" Error (404): "Not found"
# [TEST]  Message:
# [TEST]    Timed out waiting for Storybook to load after 10 seconds. Are you sure the Storybook is running correctly in that URL? Is the Storybook private (e.g. under authentication layers)?

pnpm concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
  "pnpm http-server apps/storybook/storybook-static --port 6006 --silent" \
  "pnpm -v wait-on tcp:6006 && pnpm -F storybook run test --url http://127.0.0.1:6006"
