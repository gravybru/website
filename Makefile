install:
	cd xav-website && npm install

dev:
	cd xav-website && npm run dev

deploy:
	cd xav-website && npm run build && cd .. && firebase deploy --only hosting