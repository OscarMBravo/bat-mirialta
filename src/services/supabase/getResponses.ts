/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from '@/services/supabase';

const getResponses = async () => {
  try {
    const { data, error } = await supabase.from('bat_responses').select(`*`);

    if (error) {
      console.log('error:', error);
      return;
    } else {
      return data;
    }
  } catch (e: any) {
    alert(e.message);
  }
};

export default getResponses;
