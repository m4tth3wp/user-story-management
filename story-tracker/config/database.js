const mongoose = require('mongoose');

//for database on atlas
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

mongoose.connect('mongodb://localhost/usermanagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});