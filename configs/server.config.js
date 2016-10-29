//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        'generic': {
            host: 'localhost', port: 8890, path: '/sparql', type: 'virtuoso'
        },
        //Example config to connect a Sesame-based triple store e.g. Stardog
        'http://localhost:5820/testDB/query': {
            host: 'localhost', port: 5820, path: '/testDB/query', useDefaultGraph: 1, type: 'sesame', useReasoning: 1
        },
        //Example for connecting to a Virtuoso triple store
        'http://live.dbpedia.org/sparql': {
            host: 'live.dbpedia.org', port: 80, path: '/sparql', useDefaultGraph: 1, type: 'virtuoso'
        }
    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
