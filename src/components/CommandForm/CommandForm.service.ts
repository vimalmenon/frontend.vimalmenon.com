'use client';
import { ICommand, LanguageType } from '@types';
import * as yup from 'yup';

export const schema = yup
  .object<ICommand>()
  .shape({
    id: yup.string().optional(),
    describe: yup.string().required('Required'),
    command: yup.string().required('Required'),
    language: yup.string<LanguageType>().required('Required'),
    hidden: yup.boolean().optional(),
    tags: yup.array().of(yup.string().required('Required')).min(1).required('Required'),
  })
  .required();
