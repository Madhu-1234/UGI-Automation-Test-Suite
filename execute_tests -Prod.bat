npm run test-prod & ^
allure generate allure-results-Prod --clean & ^
xcopy /s /e /v /y "C:\Automated Testing\UGI-Automation-Test-Suite\allure-report" "\\aisuetst-flb002\C$\inetpub\wwwroot\UGIAutomationTestReport" & ^
node utils/sendmail.js & ^
PAUSE

