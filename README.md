## Setup
- Add a dependency on OTRSharedLibs in bower.json. TBD: the repo below will be made private 

```js
   ...
   "otr-shared-libs": "https://github.com/alexg313/OTRSharedLibs.git#v1.0.2",
   ...
```

- After running the proper build command to pull in all the bower dependencies, then in your index.html include the script(s)

```html
   <script src="{path/to/bower_components}/otr-shared-libs/dist/otrBackendService.min.js"></script>
```

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
