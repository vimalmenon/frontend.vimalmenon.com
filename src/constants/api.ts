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

const DeleteVimData = (id: string): IApi => ({
  url: `${env.API}/vim/${id}`,
  method: 'DELETE',
});

export const API = {
  GetVimData,
  PostVimData,
  DeleteVimData,
};
