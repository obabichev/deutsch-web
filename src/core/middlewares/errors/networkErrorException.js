export const NETWORK_ERROR_EXCEPTION = 'NETWORK_ERROR_EXCEPTION';

export const networkErrorException = (status, message) => ({
    type: NETWORK_ERROR_EXCEPTION,
    status,
    message
});