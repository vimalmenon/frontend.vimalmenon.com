import { IApi, ICommand } from '@types';
import { env } from '@constants';

const GetVimData = (): IApi => ({
  url: `${env.API}/vim/`,
  method: 'GET',
});

const AddVimData = (data: ICommand): IApi => ({
  url: `${env.API}/vim/`,
  method: 'POST',
  body: JSON.stringify(data),
});

const DeleteVimData = (id: string): IApi => ({
  url: `${env.API}/vim/${id}`,
  method: 'DELETE',
});
const UpdateVimData = (data: ICommand): IApi => ({
  url: `${env.API}/vim/`,
  method: 'PUT',
  body: JSON.stringify(data),
});

export const API = {
  GetVimData,
  AddVimData,
  DeleteVimData,
  UpdateVimData,
};
