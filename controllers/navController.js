

const loggedOut = (req, res) => {
    res.render('navOut.ejs');
};

const loggedIn = (req, res) => {
    res.render('navIn.ejs');
};


module.exports = {
    loggedOut,
    loggedIn
}
