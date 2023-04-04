In this project i have tested on JS + WDIO. This example shows tests in habr account

for start do:
npm i
                                                
for run do:
./node_modules/.bin/wdio wdio.conf.js  

if you want to run one separate test do:
npm run wdio -- --baseurl https://habr.com/ru/all/  --spec test/specs/someTest.spec.js
