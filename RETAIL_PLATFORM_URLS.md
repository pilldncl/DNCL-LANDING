# Retail Platform URLs Configuration

## How to Add Your Store URLs

To add your actual retail platform store URLs, edit the file:
**`components/Shop/RetailPlatforms.tsx`**

## Current Platform Structure

In the `platforms` array (around line 7), you'll find placeholder URLs marked with `#`. Replace these with your actual store URLs:

```typescript
const platforms = [
  {
    name: 'Amazon',
    url: '#', // ← Replace with your Amazon store URL
    // ... other properties
  },
  {
    name: 'Walmart',
    url: '#', // ← Replace with your Walmart store URL
    // ... other properties
  },
  {
    name: 'eBay',
    url: '#', // ← Replace with your eBay store URL
    // ... other properties
  },
  {
    name: 'Back Market',
    url: '#', // ← Replace with your Back Market URL
    // ... other properties
  },
]
```

## Example URLs Format

- **Amazon**: `https://www.amazon.com/stores/[YOUR_STORE_NAME]/page/[STORE_ID]`
- **Walmart**: `https://www.walmart.com/seller/[YOUR_SELLER_ID]`
- **eBay**: `https://www.ebay.com/usr/[YOUR_USERNAME]`
- **Back Market**: `https://www.backmarket.com/[YOUR_PAGE]`

## Additional Customization

You can also customize:
- **Platform names** - Change the display name
- **Descriptions** - Update the text for each platform
- **Stats/Badges** - Modify the rating or badge text
- **Colors** - Adjust the gradient colors for each platform card

## Adding More Platforms

To add additional platforms, simply add a new object to the `platforms` array following the same structure.

