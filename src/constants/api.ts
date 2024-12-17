import { IApi, ICommand } from '@types';
import { env } from '@constants';

const GetVimData = (): IApi => ({
  url: `${env.API}/vim/`,
  method: 'GET',
});

const PostVimData = (data: ICommand): IApi => ({
  url: `${env.API}/vim/`,
  method: 'POST',
  body: JSON.stringify(data),
});

export const API = {
  GetVimData,
  PostVimData,
};
