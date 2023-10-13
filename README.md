```sh
npm ci  # Run a clean install of deps

npx nx run shell-browser:serve                                                    # Serve app in browser
npx nx run-many --target=serve --projects=shell-browser,shell-desktop --parallel  # Serve app in browser and electron desktop

npx nx format:check   # Run file formatting checks on workspace files
npx nx format:write   # Run file formatting on workspace files

npx nx run-many --target lint         # Run linter on all projects in workspace
npx nx run-many --target lint --fix   # Run linter on all projects in worksapce and auto fix

npx nx run-many --target test   # Run unit testing on all projects in workspace

npx nx run shell-browser:build:production-browser   # Build the shell-browser project for production (Browser)
npx nx run shell-browser:build:production           # Build the shell-browser project for production (Electron)

npx nx run shell-desktop:make:production   # Build, Package & Make the shell-desktop project for production (Electron) - shell-browser is auto built in production mode when this is run
```
