-- Enable RLS on tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_history ENABLE ROW LEVEL SECURITY;

-- Create policies for 'profiles'

-- Policy: Users can view their own profile
CREATE POLICY "Users can view own profile" 
ON profiles FOR SELECT 
USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE 
USING (auth.uid() = id);

-- Policy: Users can insert their own profile (usually handled by triggers, but good to have)
CREATE POLICY "Users can insert own profile" 
ON profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Create policies for 'payment_history'

-- Policy: Users can view their own payment history
CREATE POLICY "Users can view own payment history" 
ON payment_history FOR SELECT 
USING (auth.uid() = user_id);

-- Note: Payment history is usually inserted by the server (service role), 
-- so standard users don't need INSERT/UPDATE permissions on it.
