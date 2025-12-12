# TikTok Integration Setup Guide

This guide shows you how to display your TikTok videos on your website.

## What You Need

✅ **Public TikTok Account Username** (e.g., `dncltechzone`)  
✅ **TikTok Video IDs** from your videos

---

## Quick Start: Show TikTok Video as Pop-up

### Step 1: Get Your TikTok Video ID

1. Go to your TikTok video on the app or website
2. Click **Share** button
3. Click **Embed**
4. Copy the video ID from the embed code, OR
5. Extract from URL: `https://www.tiktok.com/@username/video/VIDEO_ID_HERE`

**Example:**
- URL: `https://www.tiktok.com/@dncltechzone/video/7234567890123456789`
- Video ID: `7234567890123456789`

### Step 2: Add to Your Home Page

Add to `app/page.tsx`:

```tsx
import TikTokPopup from '@/components/TikTokPopup'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ... your existing content ... */}
      
      {/* TikTok Pop-up - Shows after 5 seconds */}
      <TikTokPopup
        username="dncltechzone"  // Your TikTok username (without @)
        videoId="7234567890123456789"  // Your video ID
        title="Check Us Out on TikTok!"
        delaySeconds={5}
      />
    </div>
  )
}
```

That's it! The pop-up will show after 5 seconds.

---

## Option 2: Show Multiple TikTok Videos (Feed)

If you want to show multiple videos with navigation:

```tsx
import TikTokFeed from '@/components/TikTokFeed'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ... your existing content ... */}
      
      {/* TikTok Feed - Pop-up with multiple videos */}
      <TikTokFeed
        username="dncltechzone"
        videoIds={[
          "7234567890123456789",  // Video 1
          "7234567890123456790",  // Video 2
          "7234567890123456791",  // Video 3
        ]}
        mode="popup"
        showAsPopup={true}
        maxVideos={3}
        delaySeconds={5}
      />
    </div>
  )
}
```

---

## Option 3: Show TikTok Inline (Not Pop-up)

Show TikTok videos as a section on your page:

```tsx
import TikTokFeed from '@/components/TikTokFeed'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ... existing sections ... */}
      
      {/* TikTok Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Follow Us on TikTok
          </h2>
          <TikTokFeed
            username="dncltechzone"
            videoIds={["7234567890123456789"]}
            mode="inline"
            maxVideos={1}
          />
        </div>
      </section>
    </div>
  )
}
```

---

## How to Get Video IDs

### Method 1: From TikTok URL
1. Open your TikTok video
2. Copy the URL
3. Extract the number at the end: `.../video/7234567890123456789`

### Method 2: From Share > Embed
1. Click **Share** on your TikTok video
2. Click **Embed**
3. Copy the `data-video-id` value from the embed code

### Method 3: From TikTok Website
1. Go to `https://www.tiktok.com/@yourusername`
2. Click on a video
3. Look at the URL in the address bar
4. Copy the number after `/video/`

---

## Component Options

### TikTokPopup (Simple Single Video)

| Prop | Type | Description |
|------|------|-------------|
| `username` | `string` | Your TikTok username (required) |
| `videoId` | `string` | Video ID (required) |
| `title` | `string` | Pop-up title (default: "Check Us Out on TikTok!") |
| `delaySeconds` | `number` | Delay before showing (default: 5) |
| `persistDismiss` | `boolean` | Remember if user closed it (default: true) |
| `storageKey` | `string` | localStorage key for tracking |

### TikTokFeed (Multiple Videos)

| Prop | Type | Description |
|------|------|-------------|
| `username` | `string` | Your TikTok username (required) |
| `videoIds` | `string[]` | Array of video IDs (required) |
| `mode` | `'popup' \| 'inline'` | Display mode (default: 'inline') |
| `maxVideos` | `number` | Max videos to show (default: 3) |
| `showAsPopup` | `boolean` | Show as pop-up (for popup mode) |
| `delaySeconds` | `number` | Delay before showing (default: 5) |
| `storageKey` | `string` | localStorage key for tracking |

---

## Example: Add to Layout (Shows on All Pages)

Add to `app/layout.tsx`:

```tsx
import TikTokPopup from '@/components/TikTokPopup'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Chatbot />
        
        {/* TikTok Pop-up - Shows on all pages */}
        <TikTokPopup
          username="dncltechzone"
          videoId="7234567890123456789"
          delaySeconds={8}
        />
      </body>
    </html>
  )
}
```

---

## Tips

✅ **Use Your Best Video** - Pick your most engaging TikTok video  
✅ **Set Appropriate Delay** - 5-8 seconds works well (don't show immediately)  
✅ **Update Regularly** - Change video ID to your latest content  
✅ **Test on Mobile** - Make sure it looks good on phones  
✅ **Don't Overuse** - One pop-up per visit is enough

---

## Troubleshooting

### Video not showing?
- ✅ Check video ID is correct (numeric string)
- ✅ Make sure video is public
- ✅ Clear browser cache
- ✅ Check browser console for errors

### Pop-up not appearing?
- ✅ Check `delaySeconds` value
- ✅ Clear localStorage: `localStorage.removeItem('tiktok-popup-dismissed')`
- ✅ Check if already dismissed in browser

### Video embed not loading?
- ✅ TikTok embed script loads automatically
- ✅ Wait a few seconds for script to load
- ✅ Check internet connection

---

## Need Help?

1. Get your TikTok username: `@yourusername` → use `yourusername`
2. Get video IDs from your TikTok videos
3. Add component to page with your username and video IDs
4. Test and adjust `delaySeconds` as needed

That's it! Your TikTok content will now show to website visitors. 🎉

