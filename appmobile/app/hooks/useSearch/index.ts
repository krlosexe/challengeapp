import request from '@app/helpers/requests';
import {useSearchType} from '@app/types/hooks/useSearch';
export const useSearch = async (search: string): Promise<useSearchType> => {
  try {
    console.log(`search/users?q=${search}`)
    const response = await request.get(`search/users?q=${search}`);
    return response.data as useSearchType;
  } catch (error) {
   console.log({error})
   throw error;
  } 
};
