const expect = require('chai').expect;
const jsonpath = require('jsonpath');
const RequestManager = require('../../../api/request.manager');


describe('Duck Duckgo search text by API', () => {

    it('should retrieve and print Icon URL if not null', async () => {
        const requestOptions = {
            method: 'GET',
            params:  {
                q: 'simpsons',
                format: 'json'
            },
            url: 'https://api.duckduckgo.com/'
        };
        const response = await RequestManager.sendRequest(requestOptions);
        expect(response.status).to.equal(200);
        const urls = jsonpath.query(response.data, '$.RelatedTopics..URL');
        urls.forEach(url=>{
            if (url) {
                console.log('Icon URL:',url);
            }
        })

    })
})

