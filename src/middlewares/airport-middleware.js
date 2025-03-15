const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');


function validateCreateRequest(req, res, next)
{
    console.log("jgsguo");
    if(!req.body.name)
    {
        // console.log(res);
        // console.log("SGSG");
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error={explanation:'name not found in the oncoming request int the correct form'}

        // console.log("NO");
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.code)
    {
            // console.log(res);
            // console.log("SGSG");
            ErrorResponse.message='something went wrong while creating airport';
            ErrorResponse.error={explanation:'Airport code not found in the oncoming request int the correct form'}
    
            // console.log("NO");
            return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.cityId)
        {
                // console.log(res);
                // console.log("SGSG");
                ErrorResponse.message='something went wrong while creating airport';
                ErrorResponse.error={explanation:'City ID not found in the oncoming request int the correct form'}
        
                // console.log("NO");
                return res
                        .status(StatusCodes.BAD_REQUEST)
                        .json(ErrorResponse);
        }
        console.log("Sgslgjlsg");

    next();
}

module.exports={
    validateCreateRequest
}