const {validationResult} = require('express-validator')

exports.runValidation = (req,res,next) => {
    console.log('Inside run validation')
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log("run validation errors")
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    next()
}   