export interface User {
    _id:             string;
    enabled:         boolean;
    tokenExpiration: number;
    aceptTC:         boolean;
    auth:            boolean;
    user:            string;
    email:           string;
    creationDate:    string;
    operationType:   string;
    __v:             number;
}
