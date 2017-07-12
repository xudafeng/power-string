git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

build:
	@$(pwd)./build.sh
install:
	@npm i
jshint: install
	@${npm_bin}/jshint .
