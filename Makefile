install:
	npm install
	
start:
	npx babel-node src/bin/brain-games.js

start2:
	npx babel-node src/bin/brain-even.js

start3:
	npx babel-node src/bin/brain-calc.js

start4:
	npx babel-node src/bin/brain-gcd.js

prepublish:
	npm publish --dry-run

test:
	npm test

lint:
	npx eslint .