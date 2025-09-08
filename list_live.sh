#!/bin/bash

npx wrangler d1 execute d1-biovault-website \
  --remote \
  --command "SELECT * FROM waitlist;"
