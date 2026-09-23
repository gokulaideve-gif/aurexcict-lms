import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export function useTrainees() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    supabase.from('users').select('*').eq('role', 'learner').then(({ data }) => {
      setData(data || []);
      setLoading(false);
    });
  }, []);
  
  return { data, loading };
}

export function useWorkshops() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    supabase.from('workshops').select('*').then(({ data }) => setData(data || []));
  }, []);
  
  return data;
}

export function useAttendance(userId: string) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if (!userId) return;
    supabase.from('attendance').select('*').eq('user_id', userId).then(({ data }) => setData(data || []));
  }, [userId]);
  
  return data;
}
