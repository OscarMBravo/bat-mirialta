import { atom, useRecoilState } from 'recoil';

import { Database } from '../../../types/supabase';

const responsesState = atom<Database['public']['Tables']['bat_responses']['Row'][]>({
  key: 'responses-state',
  default: [],
});

const useResponses = () => {
  const [responses, setResponses] = useRecoilState(responsesState);
  return { responses, setResponses };
};

const responseCategoriesState = atom<
  Database['public']['Tables']['bat_response_categories']['Row'][]
>({
  key: 'response-categories-state',
  default: [],
});

const useResponseCategories = () => {
  const [responseCategories, setResponseCategories] = useRecoilState(responseCategoriesState);
  return { responseCategories, setResponseCategories };
};

export { responsesState, useResponses, useResponseCategories };
