const express = require('express');

// Create the Express app.
const app = express();
// Define the port. 
const port = 5000;
app.listen(port, () => console.log('Server is listening on Port', port, '.' ));