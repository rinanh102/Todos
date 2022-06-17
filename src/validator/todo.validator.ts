import Joi from 'joi';

const todoSchema = Joi.object({
    content: Joi.string().required()
})

export async function createOrupdateTodoValidator(req) {
    const value = todoSchema.validate(req.body);
    
}