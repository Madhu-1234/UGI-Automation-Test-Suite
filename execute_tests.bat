
npm run cleandir & ^
npm run test & ^
netlify deploy --dir=allure-report & ^
netlify deploy --prod --dir=allure-report & ^
node utils/sendmail.js & ^
npm run allure-report & ^
PAUSE
