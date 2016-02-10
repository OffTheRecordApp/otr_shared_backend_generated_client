## Setup
- In your app.js, inject the otrBackendService module

```js
angular.module("otr-console", [
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ngRetina',
    ...
    'otrBackendService'
]);
```

## Instantiation

- Inject OtrService into your controller/bizLogic
- Create an OtrService variable in the scope of the controller/bizLogic
- You can inject the domain via constructor injection.

```js
...
var otrService = new OtrService({domain: ENV.apiEndpoint})
...
```

## Usage

- The methods generated in the OtrService component are the java methodName + "Using" + httpMethod
- E.g. getCaseUsingGET, confirmBookingUsingPOST, and etc...

```js
otrService.getCaseUsingGET({caseId: caseId})
    .then(
        function(responseSuccess) {
        
        },
        
        function(errorResponse) {
        
        }
    );
```

## Error Handling

- Sample Code

```js
otrService.getCaseUsingGET({caseId: caseId})
    .then(
        function(response) {
        
        },
        function(error) {
            var uiErrorMsg = error.body.error.uiErrorMsg;
            ...
        }
    );
```
