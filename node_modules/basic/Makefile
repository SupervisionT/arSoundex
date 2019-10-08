ESLINT=./node_modules/.bin/eslint
TAP=./node_modules/.bin/tap

# ------------------------------------------------------------------------------

lint:
	$(ESLINT) ./*.js
	$(ESLINT) ./lib/*.js
	$(ESLINT) ./test/**/*.js

unit:
	$(TAP) ./test/unit/*.js

functional:
	$(TAP) ./test/functional/*.js

test:
	@make lint
	@make unit
	@make functional

# ------------------------------------------------------------------------------

.PHONY: lint unit functional test
