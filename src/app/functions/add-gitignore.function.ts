import { writeFile } from 'fs/promises';

export async function addGitignore() {
    await writeFile('.gitignore', `
# See http://help.github.com/ignore-files/ for more about ignoring files.

# Environment
*.env
.env.local
.env*
!example.env

# compiled output
/dist
/tmp
/out-tsc
/zips

# dependencies
node_modules

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db

.angular
.nx
`);
}