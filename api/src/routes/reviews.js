const {Router} = require('express')
const router = Router();
const ctrl = require("../controllers/index.js")

router.get("/", (req, res) => {
    try {
        return ctrl.getReviews()
            .then((result) => {
                return res.status(200).json(result)
            })
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.post("/", (req, res) => {
    let { name, email, review, business, date } = req.body
    try {
        return ctrl.postReviews(name, email, review, business, date)
            .then(() => {
                return res.send("Review created")
            })
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;