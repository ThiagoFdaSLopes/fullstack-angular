import Joi from 'joi';
import { IUser } from '../../interfaces/IUser';
import { IUserCreate } from '../../interfaces/IUserCreate';
import IInfluencer from '../../interfaces/IInfluencer';

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
      'string.email': 'Invalid email',
      'string.required': errorMessage,
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid password',
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

export const validateInfluencerCreate = (body: IInfluencer) => {
  const schema = Joi.object({
    image: Joi.string().required().messages({
      'string.empty': errorMessage,
      'string.email': 'Invalid image',
      'string.required': errorMessage,
    }),
    name: Joi.string().min(3).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid name',
      'string.required': errorMessage,
    }),
    platform: Joi.string().min(3).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid platform',
      'string.required': errorMessage,
    }),
    country: Joi.string().min(2).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid country',
      'string.required': errorMessage,
    }),
    followers: Joi.number().required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid followers',
      'string.required': errorMessage,
    }),
    category: Joi.string().min(3).required().messages({
      'string.empty': errorMessage,
      'string.min': 'Invalid category',
      'string.required': errorMessage,
    }),
  });
  const { error } = schema.validate(body);
  if (error) {
    throw new Error(error.message);
  }
}