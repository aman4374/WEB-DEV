
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
  [
    {
        "name": "placeholder",
        "price": 100.5,
        "instructor": "unknown"
    },
    {
        "name": "product X",
        "price": 350.75,
        "instructor": "Alice"
    },
    {
        "name": "service Y",
        "price": null,
        "instructor": "Bob"
    }
]

]);



// Print a message to the output window.
console.log(` Done Inserting Data`);

