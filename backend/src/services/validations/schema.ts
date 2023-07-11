import Joi from 'joi';
import { IUser } from '../../interfaces/IUser';
import { IUserCreate } from '../../interfaces/IUserCreate';

const errorMessage = 'All fields must be filled';

export const validateUserLogin = (body: IUser) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.empty': errorMessage,
      'string.email': 'Invalid email',
      'string.required': errorMessage,
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid password length',
      'string.required': errorMessage,
    }),
  });
  const { error } = schema.validate(body);
  if (error) {
    throw new Error(error.message);
  }
};

export const validateUserCreate = (body: IUserCreate) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.empty': errorMessage,
      'string.email': 'Invalid email or password',
      'string.required': errorMessage,
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid email or password',
      'string.required': errorMessage,
    }),
    userName: Joi.string().min(3).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid userName length',
      'string.required': errorMessage,
    }),
  });
  const { error } = schema.validate(body);
  if (error) {
    throw new Error(error.message);
  }
}