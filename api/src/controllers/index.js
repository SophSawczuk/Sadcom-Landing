const { Review } = require('../db.js')

module.exports = {
    getReviews: async function() {
        let reviews = await Review.findAll()
        return reviews
    },
    postReviews: async function(name, email, review, business, date) {
        if(!name || !email || !review || !business) {
            return "Faltan ingresar datos"
        } else {
            let newReview = await Review.create({
                name, email, review, business
            })
            return newReview
        }
    }
}