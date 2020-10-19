npm run test-prod & ^
allure generate allure-results-Prod --clean & ^
xcopy /s /e /v /y "C:\Automated Testing\UGI-Automation-Test-Suite\allure-report" "\\aisuetst-flb002\C$\inetpub\wwwroot\UGIAutomationTestReport" & ^
node utils/sendmail.js & ^
PAUSE
=======
npm run test-prod & ^
allure generate allure-results-Prod --clean & ^
xcopy /s /e /v /y "C:\Automated Testing\UGI-Automation-Test-Suite\allure-report" "\\aisuetst-flb002\C$\inetpub\wwwroot\UGIAutomationTestReport" & ^
node utils/sendmail.js & ^
PAUSE
>>>>>>> 6482f7b2c83a85539c6f3db82f5439698de13dbd
