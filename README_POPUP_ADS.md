# Pop-up Ads & TikTok Integration Guide

This guide explains how to use pop-up ads and TikTok integration on your landing page.

## Features

- ✅ **TikTok Pixel Integration** - Track conversions and enable retargeting
- ✅ **TikTok Video Embed Pop-ups** - Show TikTok content to visitors
- ✅ **Custom Promotional Pop-ups** - Create branded ad pop-ups
- ✅ **Smart Dismiss Tracking** - Remembers user preferences (localStorage)
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Performance Optimized** - Lazy loading and efficient rendering

---

## 1. TikTok Pixel Setup (Recommended)

### Step 1: Get Your TikTok Pixel ID

1. Go to [TikTok Ads Manager](https://ads.tiktok.com/)
2. Navigate to **Assets** > **Events** > **Web Events**
3. Create a new pixel or use existing one
4. Copy your **Pixel ID** (format: `C1234567890ABCDEF`)

### Step 2: Add to Environment Variables

Create/update `.env.local`:

```env
NEXT_PUBLIC_TIKTOK_PIXEL_ID=C1234567890ABCDEF
```

### Step 3: Add to Layout

Update `app/layout.tsx`:

```tsx
import TikTokPixel from '@/components/TikTokPixel'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ... existing code ... */}
        <TikTokPixel 
          pixelId={process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || ''} 
        />
      </body>
    </html>
  )
}
```

### Step 4: Track Custom Events

Track button clicks, form submissions, etc.:

```tsx
// In any component
const handleShopClick = () => {
  // Track custom event
  if (typeof window !== 'undefined' && window.trackTikTokEvent) {
    window.trackTikTokEvent('ClickButton', { 
      button_name: 'Shop Now',
      location: 'Hero Section'
    })
  }
  // Your existing code...
}
```

### Available Events:
- `PageView` - Automatic on page load
- `ClickButton` - Button clicks
- `CompleteRegistration` - Form submissions
- `ViewContent` - Content views
- `AddToCart` - Shopping cart events
- `Purchase` - Purchase completions

---

## 2. Pop-up Ad Component

### Basic Usage

```tsx
import PopupAd from '@/components/PopupAd'

// In your page/component
<PopupAd
  type="promo"
  title="Special Offer - 20% Off"
  content="https://example.com/promo-image.jpg"
  ctaText="Shop Now"
  ctaLink="https://app.dncltechzone.com"
  delaySeconds={5}
/>
```

### TikTok Video Pop-up

```tsx
<PopupAd
  type="tiktok"
  title="Check Out Our Latest Products"
  tiktokVideoId="7234567890123456789"
  ctaText="Shop Now"
  ctaLink="https://app.dncltechzone.com"
  delaySeconds={3}
/>
```

### Custom Promo Pop-up

```tsx
<PopupAd
  type="custom"
  title="🎉 New Year Sale!"
  content="Get 25% off on all enterprise devices"
  ctaText="Browse Catalog"
  ctaLink="https://app.dncltechzone.com"
  delaySeconds={4}
  persistDismiss={true}
  storageKey="new-year-sale-2024"
/>
```

---

## 3. Component Props

### PopupAd Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'tiktok' \| 'promo' \| 'ad' \| 'custom'` | `'promo'` | Type of pop-up |
| `title` | `string` | - | Pop-up title |
| `content` | `string` | - | Image URL or custom content |
| `ctaText` | `string` | `'Shop Now'` | CTA button text |
| `ctaLink` | `string` | - | CTA button URL |
| `tiktokVideoId` | `string` | - | TikTok video ID (for type='tiktok') |
| `delaySeconds` | `number` | `3` | Delay before showing (seconds) |
| `persistDismiss` | `boolean` | `true` | Remember dismiss (localStorage) |
| `storageKey` | `string` | `'dncl-popup-dismissed'` | localStorage key |
| `onClose` | `() => void` | - | Close callback |
| `onCTAClick` | `() => void` | - | CTA click callback |

---

## 4. Implementation Examples

### Example 1: Add to Home Page

Update `app/page.tsx`:

```tsx
import PopupAd from '@/components/PopupAd'

export default function Home() {
  return (
    <div>
      {/* ... existing content ... */}
      
      {/* Pop-up appears after 5 seconds */}
      <PopupAd
        type="promo"
        title="Limited Time Offer"
        content="https://your-cdn.com/promo-banner.jpg"
        ctaText="Shop Now"
        ctaLink="https://app.dncltechzone.com"
        delaySeconds={5}
        onCTAClick={() => {
          // Track TikTok event
          window.trackTikTokEvent?.('ClickButton', { 
            button_name: 'Popup Shop Now' 
          })
        }}
      />
    </div>
  )
}
```

### Example 2: Multiple Pop-ups (Different Keys)

```tsx
// Seasonal sale pop-up
<PopupAd
  storageKey="winter-sale-2024"
  title="Winter Sale - 30% Off"
  content="winter-sale.jpg"
  ctaLink="https://app.dncltechzone.com/sale"
/>

// TikTok video showcase
<PopupAd
  storageKey="tiktok-showcase"
  type="tiktok"
  tiktokVideoId="7234567890123456789"
  title="See Our Products in Action"
/>
```

---

## 5. Best Practices

### ✅ Do:
- Use **unique storage keys** for different campaigns
- Set reasonable **delay times** (3-5 seconds)
- Make **CTAs clear and actionable**
- Track events with **TikTok Pixel**
- Test on **mobile devices**
- Use **high-quality images** (optimized for web)

### ❌ Don't:
- Show pop-ups **immediately** (< 2 seconds)
- Use **too many pop-ups** (one at a time)
- Make pop-ups **hard to close**
- Show dismissed pop-ups **again** (if persistDismiss=true)
- Use **low-quality or large images**

---

## 6. Advanced: Conditional Pop-ups

Show different pop-ups based on user behavior:

```tsx
'use client'

import { useEffect, useState } from 'react'
import PopupAd from '@/components/PopupAd'

export default function SmartPopup() {
  const [userType, setUserType] = useState<'new' | 'returning'>('new')

  useEffect(() => {
    // Check if returning visitor
    const hasVisited = localStorage.getItem('dncl-has-visited')
    setUserType(hasVisited ? 'returning' : 'new')
    localStorage.setItem('dncl-has-visited', 'true')
  }, [])

  if (userType === 'new') {
    return (
      <PopupAd
        type="promo"
        title="Welcome! Get 10% Off Your First Order"
        content="welcome-offer.jpg"
        ctaLink="https://app.dncltechzone.com"
        storageKey="welcome-popup"
      />
    )
  }

  return (
    <PopupAd
      type="promo"
      title="Thanks for Coming Back! Check Out New Arrivals"
      content="new-arrivals.jpg"
      ctaLink="https://app.dncltechzone.com/new"
      storageKey="returning-popup"
    />
  )
}
```

---

## 7. Troubleshooting

### Pop-up not showing?
- Check `delaySeconds` value
- Verify `storageKey` isn't already dismissed
- Clear localStorage: `localStorage.removeItem('your-storage-key')`
- Check browser console for errors

### TikTok Pixel not tracking?
- Verify Pixel ID in `.env.local`
- Check TikTok Ads Manager > Events for data
- Use browser DevTools > Network to see requests
- Ensure pixel script loads: Check `<head>` in browser

### TikTok video not embedding?
- Verify video ID format (numeric string)
- Check if video is public
- TikTok embed script may need to load
- Try refreshing the page

---

## 8. Analytics & Tracking

### Track Pop-up Performance

```tsx
<PopupAd
  onCTAClick={() => {
    // TikTok event
    window.trackTikTokEvent?.('CompleteRegistration', {
      content_name: 'Promo Pop-up',
      value: 0
    })
    
    // Google Analytics (if using)
    window.gtag?.('event', 'popup_cta_click', {
      popup_type: 'promo',
      cta_text: 'Shop Now'
    })
  }}
/>
```

---

## Support

For issues or questions:
- Check TikTok Ads Manager documentation
- Review Next.js documentation for Script component
- Test in incognito mode to bypass localStorage

