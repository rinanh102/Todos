import Joi from 'joi';

const todoSchema = Joi.object({
    content: Joi.string().required()
})

export async function createOrupdateTodoValidator(req) {
    const valid = todoSchema.validate(req.body);
    console.log(valid)
   
}