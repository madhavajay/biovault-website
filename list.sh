#!/bin/bash

npx wrangler d1 execute d1-biovault-website \
  --local \
  --command "SELECT * FROM waitlist;"
