// Main Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Check if stream is live and update the live stream section
    const streamStatusContainer = document.getElementById('stream-status-container');
    
    if (streamStatusContainer) {
        checkStreamStatus();
    }

    // Add styling to category buttons on streams page
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter content based on category (would be implemented based on specific page)
                const category = this.getAttribute('data-category');
                filterContent(category);
            });
        });
    }

    // Add styling to video category tabs on streams page
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter videos based on category
                const category = this.getAttribute('data-category');
                filterVideos(category);
            });
        });
    }
});

// Function to check if stream is live (legacy function, now redirects to updateStreamStatusUI)
function checkStreamStatus() {
    const streamStatusContainer = document.getElementById('stream-status-container');
    
    if (!streamStatusContainer) return;
    
    // Check localStorage for stream status (set by admin dashboard)
    const isLive = localStorage.getItem('streamStatus') === 'live';
    const streamUrl = localStorage.getItem('streamUrl') || 'https://www.tiktok.com/@_ghostypr/live';
    
    // Use the new function to update UI
    updateStreamStatusUI(isLive, streamUrl);
}

// Function to filter content based on category
function filterContent(category) {
    const items = document.querySelectorAll('[data-category]');
    
    if (items.length === 0) return;
    
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Function to filter videos based on category
function filterVideos(category) {
    const videos = document.querySelectorAll('.video-card');
    
    if (videos.length === 0) return;
    
    if (category === 'all') {
        videos.forEach(video => {
            video.style.display = 'block';
        });
    } else {
        videos.forEach(video => {
            if (video.getAttribute('data-category') === category) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    }
}
// Gallery search functionality
document.addEventListener('DOMContentLoaded', function() {
    const gallerySearch = document.getElementById('gallery-search');
    if (gallerySearch) {
        gallerySearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const desc = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});
// Updated gallery filtering to match streams page behavior
document.addEventListener('DOMContentLoaded', function() {
    // Gallery category buttons
    const galleryButtons = document.querySelectorAll('.gallery-categories .category-btn');
    if (galleryButtons.length > 0) {
        galleryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                galleryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter gallery items based on category
                const category = this.getAttribute('data-category');
                filterGalleryItems(category);
            });
        });
    }
});

// Function to filter gallery items based on category
function filterGalleryItems(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    if (items.length === 0) return;
    
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}
// Merch category filtering
document.addEventListener('DOMContentLoaded', function() {
    // Merch category buttons
    const merchButtons = document.querySelectorAll('.merch-categories .category-btn');
    if (merchButtons.length > 0) {
        merchButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                merchButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter merch items based on category
                const category = this.getAttribute('data-category');
                filterMerchItems(category);
            });
        });
    }
});

// Function to filter merchandise items based on category
function filterMerchItems(category) {
    const items = document.querySelectorAll('.merch-item');
    
    if (items.length === 0) return;
    
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}
// Fix for gallery category buttons
document.addEventListener('DOMContentLoaded', function() {
    // Make sure gallery filtering works properly
    const galleryButtons = document.querySelectorAll('.gallery-categories .category-btn');
    if (galleryButtons.length > 0) {
        galleryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Show all items if "all" is selected
                if (category === 'all') {
                    document.querySelectorAll('.gallery-item').forEach(item => {
                        item.style.display = 'block';
                    });
                } else {
                    // Otherwise, show only items in the selected category
                    document.querySelectorAll('.gallery-item').forEach(item => {
                        if (item.getAttribute('data-category') === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
                
                // Update active button
                galleryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});
// TikTok Live Check
document.addEventListener('DOMContentLoaded', function() {
    // Set up periodic checks for TikTok live status
    if (document.getElementById('stream-status-container')) {
        // Initial check
        checkTikTokLiveStatus();
        
        // Check every 2 minutes (120000 ms)
        setInterval(checkTikTokLiveStatus, 120000);
    }
});

// Function to check if GhostyPR is live on TikTok
function checkTikTokLiveStatus() {
    const tiktokUsername = '_ghostypr';
    const liveUrl = `https://www.tiktok.com/@${tiktokUsername}/live`;
    
    // In a real implementation, you would use a server-side proxy to check if the stream is live
    // Since we can't directly check from client-side JavaScript due to CORS restrictions,
    // we'll simulate this with a combination of:
    // 1. The admin dashboard toggle (already implemented)
    // 2. A random chance of being live for demonstration purposes
    
    // Check if manually set to live in admin dashboard
    const manuallySetLive = localStorage.getItem('streamStatus') === 'live';
    
    if (manuallySetLive) {
        updateStreamStatusUI(true, liveUrl);
        return;
    }
    
    // For demonstration: random chance of being live (10%)
    // In a real implementation, this would be replaced with an actual API check
    const randomCheck = Math.random() < 0.1;
    
    if (randomCheck) {
        // Simulate being live
        localStorage.setItem('streamStatus', 'live');
        localStorage.setItem('streamUrl', liveUrl);
        localStorage.setItem('streamTitle', 'GhostyPR is Live!');
        updateStreamStatusUI(true, liveUrl);
    } else {
        // Simulate being offline
        localStorage.setItem('streamStatus', 'offline');
        updateStreamStatusUI(false);
    }
}

// Function to update the UI based on stream status
function updateStreamStatusUI(isLive, streamUrl = '') {
    const streamStatusContainer = document.getElementById('stream-status-container');
    if (!streamStatusContainer) return;
    
    if (isLive) {
        // Show live stream embed
        streamStatusContainer.innerHTML = `
            <div class="live-now">
                <div class="live-badge">LIVE</div>
                <h3>${localStorage.getItem('streamTitle') || 'GhostyPR is Live!'}</h3>
                <div class="stream-embed">
                    <a href="${streamUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-play-circle"></i> Watch on TikTok
                    </a>
                </div>
            </div>
        `;
    } else {
        // Show offline message
        streamStatusContainer.innerHTML = `
            <div class="placeholder-stream">
                <i class="fas fa-play-circle ghost-pulse" style="color: var(--primary-color);"></i>
                <p>Stream Offline</p>
                <p class="small">Check back during scheduled stream times!</p>
                <img src="icon.png" alt="Ghost Icon" class="ghost-icon floating-ghost" style="margin: 15px auto; opacity: 0.5;">
            </div>
        `;
    }
}