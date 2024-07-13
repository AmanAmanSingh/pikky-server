const express = require('express');
const foodRoutes = require('./routes/foodroutes');
const app = express();
const PORT = 3000


app.use(express.json());

// Routes
app.use('/api', foodRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
