# Landing Page Tables - Supabase

## Overview

New tables created specifically for the DNCL Landing Page application. All table names are prefixed with `landing_` for easy recognition.

---

## Tables Created

### 1. `landing_tiktok_config`
**Purpose:** Stores TikTok pop-up configuration managed through admin panel

**Columns:**
- `id` (UUID) - Primary key (default config ID: `00000000-0000-0000-0000-000000000001`)
- `enabled` (BOOLEAN) - Enable/disable pop-up
- `username` (TEXT) - TikTok username (without @)
- `video_ids` (JSONB) - Array of TikTok video IDs
- `delay_seconds` (INTEGER) - Delay before showing pop-up
- `title` (TEXT) - Pop-up title/heading
- `created_at` (TIMESTAMP) - Creation timestamp
- `updated_at` (TIMESTAMP) - Auto-updated on changes

**Usage:**
```typescript
// Get config
const { data } = await supabase
  .from('landing_tiktok_config')
  .select('*')
  .eq('id', '00000000-0000-0000-0000-000000000001')
  .single()

// Update config
await supabase
  .from('landing_tiktok_config')
  .upsert({
    id: '00000000-0000-0000-0000-000000000001',
    enabled: true,
    username: 'dncltechzone',
    video_ids: ['1234567890', '0987654321'],
    delay_seconds: 5,
    title: 'Check Us Out on TikTok!'
  })
```

---

### 2. `landing_admin_sessions`
**Purpose:** Stores admin session tokens for authentication

**Columns:**
- `id` (UUID) - Primary key
- `session_token` (TEXT) - Unique session token
- `admin_email` (TEXT) - Admin email address
- `expires_at` (TIMESTAMP) - Session expiration time
- `created_at` (TIMESTAMP) - Session creation time

**Indexes:**
- `idx_landing_admin_sessions_token` - Fast token lookup
- `idx_landing_admin_sessions_expires` - Expired session cleanup

**Usage:**
```typescript
// Create session
await supabase
  .from('landing_admin_sessions')
  .insert({
    session_token: 'token-here',
    admin_email: 'admin@example.com',
    expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  })

// Verify session
const { data } = await supabase
  .from('landing_admin_sessions')
  .select('*')
  .eq('session_token', token)
  .gt('expires_at', new Date().toISOString())
  .single()
```

---

### 3. `landing_settings`
**Purpose:** General settings and configuration for landing page

**Columns:**
- `id` (TEXT) - Primary key (default: 'default')
- `settings` (JSONB) - Flexible settings object
- `created_at` (TIMESTAMP) - Creation timestamp
- `updated_at` (TIMESTAMP) - Auto-updated on changes

**Usage:**
```typescript
// Get settings
const { data } = await supabase
  .from('landing_settings')
  .select('*')
  .eq('id', 'default')
  .single()

// Update settings
await supabase
  .from('landing_settings')
  .upsert({
    id: 'default',
    settings: {
      theme: 'dark',
      maintenance_mode: false,
      // ... other settings
    }
  })
```

---

## Features

✅ **Auto-updated timestamps** - `updated_at` automatically updates on changes  
✅ **Indexes** - Optimized for fast queries  
✅ **UUID primary keys** - Unique identifiers  
✅ **JSONB support** - Flexible data storage  
✅ **Clear naming** - All prefixed with `landing_`

---

## Table Relationships

```
landing_tiktok_config (standalone)
  └─ Used by: Admin Panel, TikTok Pop-up Component

landing_admin_sessions (standalone)
  └─ Used by: Admin Authentication

landing_settings (standalone)
  └─ Used by: General Landing Page Settings
```

---

## Row Level Security (RLS)

Currently, RLS is **disabled** on these tables. You can enable it if needed:

```sql
-- Enable RLS
ALTER TABLE landing_tiktok_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE landing_admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE landing_settings ENABLE ROW LEVEL SECURITY;

-- Create policies as needed
-- Example: Only authenticated admins can modify
CREATE POLICY "Admin only" ON landing_tiktok_config
  FOR ALL
  USING (auth.role() = 'authenticated');
```

---

## Maintenance

### Cleanup Expired Sessions
```sql
-- Delete expired sessions (can be run as cron job)
DELETE FROM landing_admin_sessions
WHERE expires_at < NOW();
```

### Backup Default Config
```sql
-- Export current config
SELECT * FROM landing_tiktok_config
WHERE id = '00000000-0000-0000-0000-000000000001';
```

---

## Notes

- ✅ All existing tables remain untouched
- ✅ Tables are clearly named with `landing_` prefix
- ✅ Simple structure, easy to understand
- ✅ Ready for production use

