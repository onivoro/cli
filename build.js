#! /usr/bin/env node

const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");

const bin = 'dist/apps/cli/main.js';

execSync('npx nx build cli --skip-nx-cache')
const code = readFileSync(bin, 'utf-8');
writeFileSync(bin, `#! /usr/bin/env node\n${code}`, 'utf-8');
execSync(`chmod +x ${bin}`);