Parts:
 - Selenium IDE
 - Selenium Server
 - Appium

Clients:
 - Desktop / Mobile
 - Selenium is a Java web app (jar)
 - Run Selenium jar in a JVM -> WebDriver talks between the Selenium Server and Chrome binary
 - WebDriver is now a W3C standard; all major browsers have support. 

CI/CD machine runs tests after deployment in the pipeline
CI/CD box -> Selenium Server (JVM) -> App server / browser client

Selenium Grid:  clustering system to control Selenium boxes. Each having a an OS/Browser combination.
 - Can fan out test suite for execution speed
 
Services: Saucelabs, browserstack, gridlastic
Parallelism and session

Needed:
 - Selenium driver lib
 - WebDriver (chrome driver)
 - 
