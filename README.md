# http-auto-auth
Browser extension to automatically fill the credentials in basic HTTP authentication popup.

Atleast once in a career time, every web automation engineer might have came accross a single question "How to automate authentication popup in browser?". If you are one among them, then you are at the right place. 

To solve the everlasting problem, i developed a browser extension which can automically fill the values in authentication popup from the credentials provided in the URL params.

# How to use?

1. Download the project to the local machine by clicking the **Download Zip** button
2. Extract the zip file and move the files to your project directory.
3. That's it. Now copy folder path where the extension is saved and use it in selenium to load the extension.
```
System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver/chromedriver");
ChromeOptions options = new ChromeOptions();
options.addArguments("--load-extension=/path/to/unpacked/extension/http-auto-auth"); //replace the folder path
WebDriver driver = new ChromeDriver(options);
driver.get("http://localhost:3000/?auto_auth_ext_credentials=admin:pass123A!@#"); //passing auto_auth_ext_credentials=admin:pass123A!@# param to the url will automatically fills the username as admin and password as pass123A!@#
```

You can also rename the query param from **auto_auth_ext_credentials** to something else based on the requirement. 

To rename the query param
1. Open **main.js** file.
2. Replace **auto_auth_ext_credentials** with any value in line no 7.

**Before changing the param name**
```
var paramsRegexPattern = new RegExp(/auto_auth_ext_credentials=(?<username>.+?):(?<password>.+?)$/g);
```

**After changing the param name**
```
var paramsRegexPattern = new RegExp(/my_custom_param_name=(?<username>.+?):(?<password>.+?)$/g);
```
