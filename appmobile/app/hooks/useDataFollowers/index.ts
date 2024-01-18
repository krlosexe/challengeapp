import { useEffect, useState } from 'react';
import request from '@app/helpers/requests';
import {itemsType} from '@app/types/hooks/useSearch';

type UserDetailType = {
  labels: string[]; 
  data: number[];
  loading: boolean;
  error: any
};

export const useUserDetail = (users: itemsType[]): UserDetailType => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const data = {};
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data} = await request.get(`users/${userName}`);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [users]);

  return { data, error, loading };
};

