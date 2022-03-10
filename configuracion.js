const config = {
    // DB_URL: 'mongodb+srv://ups:ups2020@cluster0.pjyad.mongodb.net/tienda?retryWrites=true&w=majority',
    DB_URL: 'mongodb+srv://ups:ups2020@cluster0.5vdk8.mongodb.net/ups_examen?retryWrites=true&w=majority',
    HOST: "pwp59-iobesso-mongodb-heroku.herokuapp.com",
    // HOST: "https://pwp59-iobesso-mongodb-heroku.herokuapp.com",
    PUERTO: process.env.PORT || 3000
}

module.exports = config