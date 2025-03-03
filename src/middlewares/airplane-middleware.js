const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');


function validateCreateRequest(req, res, next)
{
    if(!req.body.modelNumber)
    {
        // console.log(res);
        // console.log("SGSG");
        ErrorResponse.message='something went wrong while creating airplane';
        ErrorResponse.error={explanation:'Model Number not found in the oncoming request int the correct form'}

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