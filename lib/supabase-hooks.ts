'use client';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export function useTrainees() {
  const [data, setData] = useState<any[]>([]);
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
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    supabase.from('workshops').select('*').then(({ data }) => {
      setData(data || []);
      setLoading(false);
    });
  }, []);
  
  return { data, loading };
}

export function useAttendance(userId: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    supabase.from('attendance').select('*').eq('user_id', userId).then(({ data }) => {
      setData(data || []);
      setLoading(false);
    });
  }, [userId]);
  
  return { data, loading };
}