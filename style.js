const quotes = [
    {
        id: 1,
        quote: "For a minute, walk outside stand there in silence, look up at sky and appreciate how amazing life is.",
        author: "Agirlandherpetals"
    },
    {
        id: 2,
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        id: 3,
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        id: 4,
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        id: 5,
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        id: 6,
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        id: 7,
        quote: "Believe in yourself, take on your challenges, and let your dreams guide you.",
        author: "Donna Karan"
    },
    {
        id: 8,
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        id: 9,
        quote: "The harder I work, the luckier I get.",
        author: "Samuel Goldwyn"
    },
    {
        id: 10,
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        id: 11,
        quote: "And in a world that only shows you hate, i hope you choose to plant your own seeds of love.",
        author: "Agirlandherpetals"
    },
    {
        id: 12,
        quote: "The only person you should try to be better than is the person you were yesterday.",
        author: "Matty Mullins"
    },
    {
        id: 13,
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        id: 14,
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
    },
    {
        id: 15,
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        id: 16,
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        id: 17,
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        id: 18,
        quote: "I hope despite everything, you never forget to be kind.",
        author: "AFRENCHFRIE",
        img : "images/french-fries-2.png"
    },
    {
        id: 19,
        quote: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    },
    {
        id: 20,
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        id: 21,
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    /*{
        id: 22,
        quote: "We lose the people we thought we had.",
        author: "Agirlandherpetals"
    },*/
    {
        id: 23,
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        id: 24,
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        id: 25,
        quote: "The only person you should try to be better than is the person you were yesterday.",
        author: "Anonymous"
    },
    {
        id: 26,
        quote: "The future starts today, not tomorrow.",
        author: "Pope John Paul II"
    },
];

let getQuote = document.querySelector("button");

getQuote.addEventListener("click", CreateQuote);

function CreateQuote(){
    let quoteContainer = document.querySelector(".quote");
    let randomQuote = generateRandomQuote();

    if (randomQuote.id == quotes[17].id){
        quoteContainer.innerHTML = `
                <p class="quote-content">"${randomQuote.quote}"</p>
                <p class="author">
                <span style= "text-decoration: line-through; text-decoration-thickness: 3px;">---</span>
                ${randomQuote.author} <img src="${randomQuote.img}" style ="width: 20px;">
                </p>
                `;
    } else{
        quoteContainer.innerHTML = `
                <p class="quote-content">"${randomQuote.quote}"</p>
                <p class="author">
                <span style= "text-decoration: line-through; text-decoration-thickness: 3px;">---</span>
                ${randomQuote.author}
                </p>
                `;
    }
}
CreateQuote();

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};


