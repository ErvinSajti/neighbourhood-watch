import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bbukzblktyptlbncqkjs.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidWt6YmxrdHlwdGxibmNxa2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNTUyNjUsImV4cCI6MjAyODkzMTI2NX0.fzhzZb3FPa3p9t7bxD1_roy6rzyt3wDpjx9OXyoTU5Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
