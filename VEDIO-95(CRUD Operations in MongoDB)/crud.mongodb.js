use("CrudDB")

console.log(db)

db.createCollection("Courses")
db.Courses.insertOne({
    name:"Aman",
    course:"web dev",
    price:"free of cost",
    projects:10
})
db.Courses.insertMany
    [
        {
          "name": "aman",
          "price": 20000,
          "instructor": "aman"
        },
        {
          "name": "Dummy Product 1",
          "price": 15.99,
          "instructor": "N/A"
        },
        {
          "name": "Service X",
          "price": 99.00,
          "instructor": "Alice"
        },
        {
          "name": "Workshop Y",
          "price": null, // Price unavailable
          "instructor": "Bob"
        },
        {
          "name": "Random Item",
          "price": 42.42,  // Playful reference
          "instructor": "Unknown"
        },
        {
          "name": "Gadget Z",
          "price": 299.99,
          "instructor": "Tech Specialist"
        },
        {
          "name": "Course A",
          "price": 129.95,
          "instructor": "Professor X"
        },
        {
          "name": "Package B",
          "price": 49.99,
          "instructor": "Not Applicable"
        },
        {
          "name": "Subscription C",
          "price": 7.99,
          "instructor": "Support Team"
        },
        {
          "name": "Custom Item",
          "price": "Contact for Quote", // Price depends on customization
          "instructor": "Design Team"
        }
      ]
      db.Courses
      let a =db.Courses.find({price:7.99})
      //console.log(a.count())
      console.log(a.toArray())
      