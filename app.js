const express = require('express');
const foodRoutes = require('./routes/foodroutes');
const app = express();
const PORT = 3000


app.use(express.json());

// Routes
app.use('/api', foodRoutes);

app.get("/api", (req, res) => {
    res.json({
        status: "success"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
