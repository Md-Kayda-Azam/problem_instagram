import jwt from 'jsonwebtoken';

// crate JWT Token
export const createToken = (data, expire = '7d') => {

    return jwt.sing({data}, process.env.JWT_SECRET, {
        expiresIn : expire
    });

} 