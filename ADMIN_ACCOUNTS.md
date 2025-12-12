# Admin Accounts - Landing Page

## Admin Accounts Created ✅

Two admin accounts have been created in the database:

### Account 1: Basic Admin
- **Username:** `admin`
- **Password:** `Ustvmos817`
- **Login Method:** Username
- **Role:** admin

### Account 2: Admin Mode
- **Email:** `phuly.dncl@gmail.com`
- **Password:** `Ustvmos817!@Pil`
- **Login Method:** Email
- **Role:** admin

---

## How to Login

1. Go to: `/admin`
2. Enter either:
   - **Username:** `admin` OR
   - **Email:** `phuly.dncl@gmail.com`
3. Enter the corresponding password
4. Click "Sign In"

---

## Database Table

All accounts are stored in: `landing_admin_users`

**Table Structure:**
- `id` (UUID) - Unique identifier
- `username` (TEXT) - Username for login (nullable)
- `email` (TEXT) - Email for login (nullable)
- `password_hash` (TEXT) - SHA-256 hashed password
- `role` (TEXT) - User role (default: 'admin')
- `created_at` (TIMESTAMP) - Account creation time
- `updated_at` (TIMESTAMP) - Last update time

---

## Security

- ✅ Passwords are hashed using SHA-256
- ✅ Passwords are NOT stored in plain text
- ✅ Authentication checks against database
- ✅ Session tokens expire after 24 hours

---

## Adding More Admins

To add more admin accounts, run this SQL in Supabase:

```sql
-- Hash the password first using the script
-- node scripts/hash-password.js "your-password"

-- Then insert into database
INSERT INTO landing_admin_users (username, email, password_hash, role)
VALUES 
  ('username', NULL, 'hashed-password-here', 'admin'),
  -- OR
  (NULL, 'email@example.com', 'hashed-password-here', 'admin');
```

---

## Password Hashing

Passwords are hashed using SHA-256 with a salt:
- **Salt:** `dncl-landing-2024`
- **Algorithm:** SHA-256
- **Script:** `scripts/hash-password.js`

To hash a new password:
```bash
node scripts/hash-password.js "your-password"
```

---

## Notes

- Both accounts have full admin access
- You can login with either username OR email
- Passwords are case-sensitive
- Session expires after 24 hours

