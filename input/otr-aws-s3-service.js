angular.module('otrBackendService', [])
    .factory('OtrAWSS3Service', ['ENV', '$q', '$http', '$rootScope', 'OtrService', function(ENV, $q, $http, $rootScope, OtrService) {
        'use strict';

        var service = {};

        // INTERFACE
        service.generateSignedUrl = generateSignedUrl;
        service.setCredentials    = setCredentials;

        AWS.config.apiVersions = {
            s3: '2006-03-01'
        };

        var bucketRegex = /http.?:\/\/([-\w]+).*.com/;
        var keyRegex    = /s3.amazonaws.com\/(.*)/;

        var s3CitationClient = null;
        var credentials = {};

        service.otrService = null;

        (function initService() {
            service.otrService = new OtrService({domain: ENV.apiEndpoint})
        })();

        return service;

        function generateSignedUrl(options) {

            if(!s3CitationClient) {
                //lazy load the credentials
                this.otrService.getAwsCredentialsUsingPOST(
                    {
                        request: {
                            keyName: ENV.CONSTANTS.S3_CITATION_IMAGES_RO
                        }
                    })
                    .then(function(response) {
                        setCredentials({ credentials: response });
                        signTheUrl(options);
                    })
            } else {
                signTheUrl(options);
            }
        }

        function signTheUrl(options) {
            var imageUrl = options.ticketImageUrl;

            var bucketMatches = bucketRegex.exec(imageUrl);
            var bucketName = bucketMatches[1];
            var keyMatches = keyRegex.exec(imageUrl);
            var keyName = keyMatches[1];

            var params = {
                Bucket: bucketName,
                Key: keyName
            };

            s3CitationClient.getSignedUrl('getObject', params, function (err, url) {
                options.success(url);
            });
        }

        function setCredentials(options) {
            var creds = options.credentials;
            var awsCreds = new AWS.Credentials({
                accessKeyId: creds.accessKeyId, secretAccessKey: creds.secretKey
            });
            s3CitationClient = new AWS.S3({credentials: awsCreds});
        }

}]);