# GhostyPR Website

This is the official website for GhostyPR, a gaming streamer.

## Features

- Responsive design for all devices
- Live stream status indicator
- Stream schedule and upcoming events
- Video content gallery
- Merchandise store
- Contact form
- Admin dashboard for site management

## Technical Details

### Pages
- **Home**: Main landing page with live stream status, latest highlights, and upcoming streams
- **About**: Information about GhostyPR, gaming journey, and setup
- **Streams**: Video gallery with filtering options
- **Schedule**: Weekly streaming schedule and special events
- **Gallery**: Photo gallery with fan art submissions
- **Merch**: Merchandise store with products and bundles
- **Contact**: Contact form and social media links
- **Admin**: Dashboard for managing website content (login required)

### Admin Dashboard
The admin dashboard allows GhostyPR to:
- Update stream status (live/offline)
- Manage stream information
- Update schedule and events
- Add/remove content from the video gallery
- Manage merchandise items
- View and respond to contact form submissions
- Update site settings

## Known Issues and Incomplete Features

1. **Gallery Page**: Currently using placeholder images. Need to add actual gallery images.

2. **Video Category Tabs**: The styling for the category tabs on the streams page needs to be improved.

3. **Merch Page Category Buttons**: The styling for the category buttons on the merch page needs to be improved.

4. **Admin Dashboard**: Only the login and stream status management sections are fully implemented. The following sections need to be completed:
   - Schedule Manager
   - Content Manager
   - Merchandise Manager
   - User Messages
   - Site Settings

5. **TikTok Integration**: The website currently checks for stream status using localStorage (set by the admin dashboard). A real implementation would need to use the TikTok API to check if the streamer is live.

## Login Information

For testing the admin dashboard:
- Username: admin
- Password: password

## Development Notes

- The site uses vanilla JavaScript without any frameworks
- CSS is organized with variables for easy theme customization
- Local storage is used to simulate database functionality for the admin dashboard
## TikTok Live Integration

The website now includes a feature to check if GhostyPR is live on TikTok. Here's how it works:

1. **Automatic Checking**: The website checks every 2 minutes if GhostyPR is live on TikTok.

2. **Manual Override**: The admin can manually set the stream status to "Live" or "Offline" using the admin dashboard.

3. **Implementation Notes**:
   - In a real production environment, this would require a server-side component to check the TikTok API.
   - The current implementation uses a combination of:
     - Admin dashboard manual toggle
     - A simulation for demonstration purposes (10% chance of being "live" when checked)
   - The live URL is set to: `https://www.tiktok.com/@_ghostypr/live`

4. **UI Updates**:
   - When live, the website shows a "LIVE" badge and a button to watch on TikTok
   - The game/category section has been removed as requested
   - The stream title is displayed (either from admin input or a default)

5. **Future Improvements**:
   - Implement a proper server-side API check for TikTok live status
   - Add notifications when the stream goes live
   - Integrate with TikTok's API to get real-time stream information