# Admin Panel Setup Guide

This guide explains how to set up the admin panel for managing TikTok pop-ups.

## Features

✅ **Email/Password Authentication**  
✅ **Protected Admin Routes**  
✅ **TikTok Pop-up Management**  
✅ **Supabase Integration Ready** (optional)  
✅ **Secure Session Management**

---

## Quick Setup

### Step 1: Set Environment Variables

Create/update `.env.local`:

```env
# Admin Authentication
ADMIN_PASSWORD=your-secure-password-here
NEXT_PUBLIC_ADMIN_EMAIL=admin@dncltechzone.com

# Optional: Supabase Authentication
# NEXT_PUBLIC_USE_SUPABASE_AUTH=true
# NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
```

### Step 2: Access Admin Panel

1. Go to: `http://localhost:3000/admin`
2. Login with:
   - Email: `admin@dncltechzone.com` (or your configured email)
   - Password: Your `ADMIN_PASSWORD` from `.env.local`

### Step 3: Manage TikTok Pop-ups

1. After login, you'll be redirected to `/admin/dashboard`
2. Configure TikTok settings:
   - Enable/disable pop-up
   - Set TikTok username
   - Add video IDs
   - Adjust delay timing
   - Customize title

---

## Authentication Modes

### Mode 1: Simple Password (Default)

Uses environment variables for authentication. Quick to set up.

**Pros:**
- ✅ Simple setup
- ✅ No database required
- ✅ Good for single admin

**Cons:**
- ❌ Password stored in env file
- ❌ No multiple users
- ❌ No password recovery

### Mode 2: Supabase Authentication (Optional)

Uses Supabase for secure authentication. Better for multiple users.

**Setup:**

1. Install Supabase client:
```bash
npm install @supabase/supabase-js
```

2. Add to `.env.local`:
```env
NEXT_PUBLIC_USE_SUPABASE_AUTH=true
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Create admin user in Supabase:
   - Go to Supabase Dashboard > Authentication
   - Create user with email/password
   - This user can now login

**Pros:**
- ✅ Secure authentication
- ✅ Multiple users supported
- ✅ Password recovery
- ✅ User management

---

## Admin Routes

- `/admin` - Login page
- `/admin/dashboard` - Admin dashboard (protected)
- `/api/admin/login` - Login API endpoint
- `/api/admin/logout` - Logout API endpoint
- `/api/admin/verify` - Session verification
- `/api/admin/tiktok-config` - TikTok config management

---

## TikTok Configuration

The admin panel allows you to manage:

1. **Enable/Disable** - Turn pop-up on/off
2. **Username** - Your TikTok username (without @)
3. **Video IDs** - List of TikTok video IDs to display
4. **Delay** - Seconds before pop-up appears
5. **Title** - Pop-up heading text

### How to Get Video IDs

1. Open your TikTok video
2. Click **Share** > **Embed**
3. Copy the video ID from the embed code
4. Or extract from URL: `https://www.tiktok.com/@username/video/VIDEO_ID`

---

## Security Notes

### Production Checklist

- ✅ Use strong `ADMIN_PASSWORD`
- ✅ Set `NODE_ENV=production`
- ✅ Use HTTPS (secure cookies)
- ✅ Rotate passwords regularly
- ✅ Limit admin access
- ✅ Monitor login attempts

### Session Security

- Sessions expire after 24 hours
- Cookies are HTTP-only
- Secure flag enabled in production
- SameSite protection enabled

---

## Supabase Integration (Optional)

To store TikTok config in Supabase:

1. Create a table:
```sql
CREATE TABLE tiktok_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  enabled BOOLEAN DEFAULT false,
  username TEXT,
  video_ids JSONB,
  delay_seconds INTEGER DEFAULT 5,
  title TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);
```

2. Update `/api/admin/tiktok-config/route.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// In POST handler:
await supabase
  .from('tiktok_config')
  .upsert({ id: 'default', ...config })
```

---

## Troubleshooting

### Can't Login?

- ✅ Check `ADMIN_PASSWORD` in `.env.local`
- ✅ Check `NEXT_PUBLIC_ADMIN_EMAIL` matches
- ✅ Restart dev server after env changes
- ✅ Clear browser cookies

### Session Expired?

- Sessions last 24 hours
- Clear cookies and login again
- Check system time is correct

### Config Not Saving?

- Check API endpoint is accessible
- Check browser console for errors
- Verify session is valid
- Fallback: uses localStorage

---

## Future Enhancements

Potential additions:

- [ ] Multiple admin users
- [ ] Activity logs
- [ ] Password reset
- [ ] Two-factor authentication
- [ ] Role-based access
- [ ] Analytics dashboard
- [ ] Export/import config
- [ ] Scheduled pop-ups

---

## Support

For issues:
1. Check browser console
2. Check server logs
3. Verify environment variables
4. Test authentication endpoint

Happy managing! 🚀

