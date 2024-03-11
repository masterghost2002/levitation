import * as z from 'zod';
const validateData = z.object({
    name:z.string().min(3, {message:'Name should be at least 3 char long'}).max(20, {message:'Name should not exceed 20 char'}),
    email:z.string().email({message:'Invalid email'}),
    password:z.string().min(6, {message:'Password should be at least 6 char long'}).max(20, {message:'Password should not exceed 40 char'})
});
export default validateData;