import express from 'express';

const app = express();
const PORT = 3000;


app.get("api/auth/signup", (req, res) => {
    res.send("Singup endpoint");
});

app.get("api/auth/login", (req, res) => {
    res.send("Login endpoint");
});

app.get("api/auth/logout", (req, res) => {
    res.send("Logout endpoint");
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})