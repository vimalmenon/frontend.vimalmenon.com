'use client';
import { ICommand, LanguageType } from '@types';
import * as yup from 'yup';

export const schema = yup
  .object<ICommand>()
  .shape({
    describe: yup.string().required('Required'),
    command: yup.string().required('Required'),
    language: yup.string<LanguageType>().required('Required'),
  })
  .required();
