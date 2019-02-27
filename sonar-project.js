const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://35.231.157.119:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'packages/core/src/**' // Entry point of your code
       }
     }, () => {});
