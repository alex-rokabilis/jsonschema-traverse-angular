const shortid = require("shortid");
shortid.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$");
export const generateID = shortid.generate;
