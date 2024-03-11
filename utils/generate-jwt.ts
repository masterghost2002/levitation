import jwt, { Secret } from 'jsonwebtoken';
const jwtSecret: Secret = process.env.JWT_SECRET!;
const generateToken = async (data: any) => {
  let token: string;
  try {
    token = await jwt.sign(data, jwtSecret, { expiresIn: '60d' });
  } catch (error) {
    throw error;
  }
  return token;
};
export default generateToken;
