
module.exports = app => {
    app.route('/books')
        .get(app.api.book.save)
}