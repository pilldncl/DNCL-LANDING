# Supabase Connection Setup Guide

## Your Supabase Project ID
**Project Reference:** `tvzcqwdnsyqjglmwklkk`

---

## Quick Setup Steps

### Step 1: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### Step 2: Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project (ID: `tvzcqwdnsyqjglmwklkk`)
3. Go to **Settings** > **API**
4. Copy the following:
   - **Project URL** (looks like: `https://tvzcqwdnsyqjglmwklkk.supabase.co`)
   - **anon/public key** (for client-side)

### Step 3: Add to Environment Variables

Create/update `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://tvzcqwdnsyqjglmwklkk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: For admin authentication
NEXT_PUBLIC_USE_SUPABASE_AUTH=true

# Optional: For server-side operations (keep secret!)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Step 4: Verify Connection

Create a test file or use the existing client:

```typescript
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client'

// Check if configured
if (isSupabaseConfigured()) {
  console.log('Supabase is connected!')
} else {
  console.log('Supabase not configured')
}
```

---

## Available Supabase Integrations

### 1. Admin Authentication

The admin panel can use Supabase for authentication:

```env
NEXT_PUBLIC_USE_SUPABASE_AUTH=true
```

**To set up:**
1. Go to Supabase Dashboard > **Authentication**
2. Create a new user with email/password
3. This user can now login to `/admin`

### 2. TikTok Config Storage

Store TikTok pop-up configuration in Supabase:

1. **Create a table:**
```sql
-- Run this in Supabase SQL Editor
CREATE TABLE tiktok_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enabled BOOLEAN DEFAULT false,
  username TEXT,
  video_ids JSONB DEFAULT '[]'::jsonb,
  delay_seconds INTEGER DEFAULT 5,
  title TEXT DEFAULT 'Check Us Out on TikTok!',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
CREATE TRIGGER update_tiktok_config_updated_at 
  BEFORE UPDATE ON tiktok_config
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default config
INSERT INTO tiktok_config (id, enabled, username, video_ids, delay_seconds, title)
VALUES ('00000000-0000-0000-0000-000000000000', false, '', '[]'::jsonb, 5, 'Check Us Out on TikTok!');
```

2. **Update API route** to use Supabase:
See `app/api/admin/tiktok-config/route.ts` - uncomment Supabase code

### 3. Other Use Cases

- **User authentication** for future features
- **Product catalog** storage
- **Form submissions** storage
- **Analytics** data
- **Contact requests** database

---

## Finding Your Supabase Project URL

Your project reference is: `tvzcqwdnsyqjglmwklkk`

Your Supabase URL should be:
```
https://tvzcqwdnsyqjglmwklkk.supabase.co
```

To verify:
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Find project with reference `tvzcqwdnsyqjglmwklkk`
3. Go to Settings > API
4. Copy the **Project URL**

---

## Getting API Keys

### Anon/Public Key (Client-side)

1. Supabase Dashboard > Your Project
2. Settings > API
3. Copy **anon public** key
4. Use as: `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Service Role Key (Server-side only)

1. Supabase Dashboard > Your Project
2. Settings > API
3. Copy **service_role** key
4. Use as: `SUPABASE_SERVICE_ROLE_KEY`
5. ⚠️ **Never expose this in client-side code!**

---

## Testing Connection

### Method 1: Test in Browser Console

```javascript
// In browser console after page loads
fetch('/api/admin/tiktok-config')
  .then(r => r.json())
  .then(console.log)
```

### Method 2: Create Test Page

```typescript
// app/test-supabase/page.tsx
'use client'
import { useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client'

export default function TestSupabase() {
  useEffect(() => {
    if (isSupabaseConfigured()) {
      console.log('✅ Supabase connected!')
      // Test query
      supabase?.from('tiktok_config').select('*')
        .then(({ data, error }) => {
          if (error) console.error('Error:', error)
          else console.log('Data:', data)
        })
    } else {
      console.log('❌ Supabase not configured')
    }
  }, [])

  return <div>Check browser console</div>
}
```

---

## Troubleshooting

### "Supabase not configured"
- ✅ Check `.env.local` exists
- ✅ Verify `NEXT_PUBLIC_SUPABASE_URL` is set
- ✅ Verify `NEXT_PUBLIC_SUPABASE_ANON_KEY` is set
- ✅ Restart dev server after adding env vars

### "Invalid API key"
- ✅ Check key is copied correctly (no extra spaces)
- ✅ Use **anon/public** key for client-side
- ✅ Verify project is active in Supabase

### "Permission denied"
- ✅ Check Row Level Security (RLS) policies
- ✅ Verify user has proper permissions
- ✅ Check service role key for admin operations

---

## Security Notes

1. **Never commit `.env.local`** - it's in `.gitignore`
2. **Use anon key** for client-side operations
3. **Use service role key** only on server-side
4. **Enable RLS** on sensitive tables
5. **Set up proper policies** in Supabase

---

## Next Steps

After setup:
1. ✅ Test connection
2. ✅ Set up admin authentication (optional)
3. ✅ Create database tables for your needs
4. ✅ Update API routes to use Supabase
5. ✅ Test all functionality

Need help? Check the Supabase documentation or verify your credentials in the dashboard.

