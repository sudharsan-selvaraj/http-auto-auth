chrome.webRequest.onAuthRequired.addListener(function (request) {
        /**
         * Update the query param name as per the need. Default param name is "auto_auth_ext_credentials".
         * sample url: https://www.example.com?auto_auth_ext_credentials=admin:pass123
         * In above url, admin is the username and pass123 is the password.
         * */
        var paramsRegexPattern = new RegExp(/auto_auth_ext_credentials=(?<username>.+?):(?<password>.+?)$/g);
        if ((match = paramsRegexPattern.exec(request.url)) != null) {
            return {
                authCredentials: {
                    username: match.groups.username,
                    password: match.groups.password
                }
            }
        }

        /* No credentials provided */
        return {};

    },
    {
        urls: ['<all_urls>']
    },
    ['blocking']
);
