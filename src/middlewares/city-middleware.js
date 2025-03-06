const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');


function validateCreateRequest(req, res, next)
{
    if(!req.body.name)
    {
        // console.log(res);
        // console.log("SGSG");
        ErrorResponse.message='something went wrong while creating city';
        ErrorResponse.error={explanation:'Model Number not found in the incoming request int the correct form'}

        // console.log("NO");
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}