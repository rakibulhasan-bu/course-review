import { Error } from "mongoose";
import { TErrorResponse, TErrorSources } from "../interface/error.interface";

const handleValidationError = (
  error: Error.ValidationError,
): TErrorResponse => {
  const statusCode = 400;
  const errorSources: TErrorSources[] = Object.values(error?.errors).map(
    (value: Error.ValidatorError | Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );
  return {
    statusCode,
    message: error?.message,
    errorSources,
  };
};
export default handleValidationError;
