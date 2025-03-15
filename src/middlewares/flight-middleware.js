const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');


function validateCreateRequest(req, res, next)
{
    console.log("jgsguo");
    if(!req.body.flightNumber)
    {
        // console.log(res);
        // console.log("SGSG");
        ErrorResponse.message='something went wrong while creating flight';
        ErrorResponse.error={explanation:'fligtnumber not found in the oncoming request int the correct form'}

        // console.log("NO");
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.airplaneID)
    {
            // console.log(res);
            // console.log("SGSG");
            ErrorResponse.message='something went wrong while creating flight';
            ErrorResponse.error={explanation:'Airplaneid code not found in the oncoming request int the correct form'}
    
            // console.log("NO");
            return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
    }
    if(!req.body.departureAirportID)
        {
                // console.log(res);
                // console.log("SGSG");
                ErrorResponse.message='something went wrong while creating flight';
                ErrorResponse.error={explanation:'departureID not found in the oncoming request int the correct form'}
        
                // console.log("NO");
                return res
                        .status(StatusCodes.BAD_REQUEST)
                        .json(ErrorResponse);
        }


    if(!req.body.arrivalAirportID)
        {
                    // console.log(res);
                    // console.log("SGSG");
                    ErrorResponse.message='something went wrong while creating flight';
                    ErrorResponse.error={explanation:'arrivalairportID not found in the oncoming request int the correct form'}
            
                    // console.log("NO");
                    return res
                            .status(StatusCodes.BAD_REQUEST)
                            .json(ErrorResponse);
        }
     if(!req.body.arrivalTime)
        {
                // console.log(res);
                // console.log("SGSG");
                ErrorResponse.message='something went wrong while creating flight';
                ErrorResponse.error={explanation:'arrivaltime not found in the oncoming request int the correct form'}
        
                // console.log("NO");
                return res
                        .status(StatusCodes.BAD_REQUEST)
                        .json(ErrorResponse);
        }
    if(!req.body.departureTime)
        {
                    // console.log(res);
                    // console.log("SGSG");
                    ErrorResponse.message='something went wrong while creating flight';
                    ErrorResponse.error={explanation:'departuretime not found in the oncoming request int the correct form'}
            
                    // console.log("NO");
                    return res
                            .status(StatusCodes.BAD_REQUEST)
                            .json(ErrorResponse);
        }
    if(!req.body.price)
                    {
                        // console.log(res);
                        // console.log("SGSG");
                        ErrorResponse.message='something went wrong while creating flight';
                        ErrorResponse.error={explanation:'price not found in the oncoming request int the correct form'}
                
                        // console.log("NO");
                        return res
                                .status(StatusCodes.BAD_REQUEST)
                                .json(ErrorResponse);
                    }

        if(!req.body.totalSeats)
            {
                            // console.log(res);
                            // console.log("SGSG");
                  ErrorResponse.message='something went wrong while creating flight';
                   ErrorResponse.error={explanation:'totalSeats not found in the oncoming request int the correct form'}
                    
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