import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

type CreateViewResponse = {
   response: any;
};

const viewJson = setupCache(axios);

export async function getViewJson(path: any) {
   try {
      const { data } = await viewJson.get<CreateViewResponse>(
         path,
         {
            headers: {
               'Accept-Encoding': 'application/json',
               'Access-Control-Allow-Origin': 'http://localhost:3030/'
            },
         }
      );
      return data;
   } catch (error) {
      if (axios.isAxiosError(error)) {
         return error.message;
      } else {
         console.log('unexpected error: ', error);
         return 'An unexpected error occurred';
      }
   }
}


