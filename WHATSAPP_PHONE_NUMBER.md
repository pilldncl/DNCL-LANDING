# WhatsApp Phone Number Configuration

## Current Setup

All phone numbers on the site now link to WhatsApp instead of regular phone calls.

## How to Update Your WhatsApp Number

The WhatsApp link format is: `https://wa.me/PHONENUMBER`

**Important:** The phone number must be in international format WITHOUT:
- Plus signs (+)
- Spaces
- Dashes (-)
- Parentheses ()
- Any other special characters

### Example:
- ❌ Wrong: `+1 (800) 000-0000`
- ❌ Wrong: `+1-800-000-0000`
- ✅ Correct: `18000000000`

## Files to Update

Replace `18000000000` with your actual WhatsApp number in these files:

1. **components/Navbar.tsx** (line ~29)
   - Find: `href="https://wa.me/18000000000"`
   - Replace with your number

2. **components/Footer.tsx** (line ~23)
   - Find: `href="https://wa.me/18000000000"`
   - Replace with your number

3. **components/Landing/CTA.tsx** (lines ~33, ~51)
   - Find: `href="https://wa.me/18000000000"`
   - Replace with your number

4. **components/Contact/ContactInfo.tsx** (line ~18)
   - Find: `link: 'https://wa.me/18000000000'`
   - Replace with your number

## Display Format

The displayed phone number format (e.g., "+1 (800) 000-0000") can remain user-friendly - only the link URL needs the international format.

## Testing

After updating:
1. Click any phone number link
2. It should open WhatsApp (web or app)
3. The chat should open with your number pre-filled

