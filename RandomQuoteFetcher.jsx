import { useState, useEffect } from 'react'
const Random_Quote_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function RandomQuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" })
    useEffect(() => {
        fetchQuote();
    }, [])

    async function fetchQuote() {
        const response = await fetch(Random_Quote_URL)
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
    }

    return (
        <body>
            <div id="container">
                <h1 id="text">{quote.text}</h1>
                <h2 id="author">- {quote.author}</h2>
                <button id="new-quote" onClick={fetchQuote}>New Quote</button>
            </div>
        </body>
    )
}