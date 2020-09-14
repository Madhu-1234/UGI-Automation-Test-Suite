cd C:\Users\Alok's\Documents\UGI Automated testscripts
npm run cleandir & ^
npm run test & ^
netlify deploy --dir=allure-report & ^
netlify deploy --prod --dir=allure-report & ^
node utils/sendmail.js & ^
npm run allure-report & ^
PAUSE