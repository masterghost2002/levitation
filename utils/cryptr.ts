import Cryptr from "cryptr";
const saltSecret = process.env.SALT_SECRET!;
const cryptr = new Cryptr(saltSecret, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
export default cryptr;