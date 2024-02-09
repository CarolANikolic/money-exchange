<img src="client/public/screenshots/money-exchange-header.png" width=100% alt="header screenshot">

Money exchange is a personal project to explore [Frankfurther Rest API](https://www.frankfurter.app/docs/). With Money Exchange you can easily access exchange rates for any amount, selecting from a comprehensive list of 31 currencies. Plus, with Money Exchange, you can conveniently visualize rate fluctuations over the past 30, 60, or 90 days.

## Responsive Design

The design is created by me and it follows a mobile-first workflow, adapting to all screen sizes.


## Development Process

- Setting up the project starting files;
- Making the HTML structure for the Home page;
- Downloading the necessary dependencies;
- Define the paths to the client-side files;
- Set up the necessary middleware;
- Make a request from the client side for the currency conversion;
- Make a request from the client side for the historical rate fluctuations;
- Setting up the server side with the methods and necessary endpoints;
- Testing all the requests;
- Sending back the responses;
- Adjusting the HTML structure as per necessity;
- Refactor the functions to separate the concerns and smoother reading and maintenance;
- Fix any bugs that were noticed, e.g., formatting the month and date for the historical rates, adding a left zero 01-09;
- Styling each component of the page and adding classes on HTML.

## Built with

- Semantic HTML5 markup;
- JavaScript;
- Node.js;
- Express.js;
- Frankfurter API;
- Mobile-first workflow.

## Technologies and Tools

- [HTML5](https://html.com)
- [CSS3](https://www.w3.org/Style/CSS/)
- [JavaScript](https://www.javascript.com)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com)

## Requirements

To work with the code, you will need, before you begin, to install on your machine: Node.Js, and Git and to have a source-code editor such as [VSCode](https://code.visualstudio.com).
You will also need to download all the dependencies used in this project by using this command in your terminal:

```
npm install
```

To run de project on your machine, open http://localhost:3000/ in your browser, and on the terminal use de following command:
```
npm start 
```

## What I Learned

### Headers in the Fetch Request

- Headers are a important to send additional information when making an HTTP request and response. This additional information can be related to: a. "content-type" - indicating the media type of the resource that is being sent, for example, a JSON type data; b. "authorization" - it contains the credentials to authenticate the client request; c. "user-agent" - send the identification of the user app or browser that is making the request; d. "accept" - this metadata specifies the media types that are acceptable for the response; e. "cache-control" - controls the cache behavior for both requests and responses. 
- The header that I used was "Content-Type" to send the data as a JSON format to the server. Additionally, when received the data also as in JSON format, I used the json() method to transform/parse the response into a JavaScript object in order to make it easier to work with it on the client side.

~~~
const fetchData = async (data, endPoint, errorMessage) => {

    const response = await fetch(`/${endPoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        return await response.json()
    } else {
        throw new Error(`${errorMessage}: ${response.statusText}`)
    }
}

export default fetchData
~~~

### Use Axios library to make a request to a public API
- Using Axios library makes the requests more simple and intuitive. The code using https native to Node.js is longer and more difficult to read and debug. With Axios we have the following advantages: 1. Promise-based: we can write asynchronous code (async/await) instead of the then() syntax. 2. Simple API: the construction of responses and errors is simplified with a then() to get the response.data and a catch to handle any error that may occur during the request. 3. Built-in error handling: Axios have a set of built-in error handling that we can tap on like error.response, error.request and, error.message.

~~~
app.post("/convert", async (req, res) => {
    try {
        const amount = req.body.amount;
        const from = req.body.fromCurrency;
        const to = req.body.toCurrency;

        const response = await axios.get(`https://${API_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
        const convertedValue = response.data;

        res.json({ rates: convertedValue.rates });
    } catch (error) {
        console.log("Error converting value:", error);
        res.status(400).send("Sorry! We couldn't process this conversion.");
    }
});
~~~

### Object.keys() method
- This method returns an array of the keys of a given object. I used it to verify if the client received the historical rates data, or if it was empty indicating an error.

~~~
if (Object.keys(data).length === 0) {
        createAndAppendElement(
            "span", 
            "No historical rates available.",
            "errorMessage",
            historicalRatesResult);
    } else {
        createTableHead(table, columnNames);
        createTableBody(table, data, currencyCode);
    }
~~~

### Destructuring Object.entries() method:
-   We can use the destructuring Object.entries() method to transform an object into an array of objects. In the code, each of the arrays contains a key-value pair (currency code and currency name).

~~~
    const currenciesObject = response.data;
    const currenciesArray = Object.entries(currenciesObject).map(([code, name]) => ({ code, name }));
~~~

### Made with :heart: by [Caroline Almeida Nikolic](https://www.linkedin.com/in/carolinealmeidanikolic/)