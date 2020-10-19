
npm run cleandir & ^
npm run test & ^
allure generate allure-results --clean & ^
xcopy /s /e /v /y "C:\Automated Testing\UGI-Automation-Test-Suite\allure-report" "\\aisuetst-flb002\C$\inetpub\wwwroot\UGIAutomationTestReport" & ^
node utils/sendmail.js
REM npm run allure-report & ^
REM netlify deploy --dir=allure-report & ^
REM netlify deploy --prod --dir=allure-report & ^
PAUSE
