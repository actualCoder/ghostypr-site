// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const adminName = document.getElementById('admin-name');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (in a real app, this would be server-side)
            if (username === 'admin' && password === 'password') {
                loginSection.style.display = 'none';
                dashboardSection.style.display = 'block';
                adminName.textContent = username;
                
                // Store login state in session storage
                sessionStorage.setItem('adminLoggedIn', 'true');
                sessionStorage.setItem('adminName', username);
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Check if admin is already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        if (loginSection && dashboardSection) {
            loginSection.style.display = 'none';
            dashboardSection.style.display = 'block';
            adminName.textContent = sessionStorage.getItem('adminName') || 'Admin';
        }
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('adminName');
            loginSection.style.display = 'flex';
            dashboardSection.style.display = 'none';
        });
    }

    // Navigation functionality
    const navLinks = document.querySelectorAll('.admin-nav a');
    const sections = document.querySelectorAll('.admin-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Stream status toggle functionality
    const streamToggle = document.getElementById('stream-active-toggle');
    const statusLabel = document.getElementById('status-label');

    if (streamToggle && statusLabel) {
        streamToggle.addEventListener('change', function() {
            if (this.checked) {
                statusLabel.textContent = 'Live';
                statusLabel.style.color = 'var(--primary-color)';
                // In a real app, this would update the live status on the main site
                localStorage.setItem('streamStatus', 'live');
            } else {
                statusLabel.textContent = 'Offline';
                statusLabel.style.color = 'var(--light-text)';
                localStorage.setItem('streamStatus', 'offline');
            }
        });

        // Check initial stream status
        if (localStorage.getItem('streamStatus') === 'live') {
            streamToggle.checked = true;
            statusLabel.textContent = 'Live';
            statusLabel.style.color = 'var(--primary-color)';
        }
    }

    // Stream info form functionality
    const streamInfoForm = document.getElementById('stream-info');
    
    if (streamInfoForm) {
        // Load saved stream info if available
        if (localStorage.getItem('streamTitle')) {
            document.getElementById('stream-title').value = localStorage.getItem('streamTitle');
        }
        if (localStorage.getItem('streamGame')) {
            document.getElementById('stream-game').value = localStorage.getItem('streamGame');
        }
        if (localStorage.getItem('streamUrl')) {
            document.getElementById('stream-url').value = localStorage.getItem('streamUrl');
        }

        streamInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const streamTitle = document.getElementById('stream-title').value;
            const streamGame = document.getElementById('stream-game').value;
            const streamUrl = document.getElementById('stream-url').value;
            
            // Save stream info to localStorage
            localStorage.setItem('streamTitle', streamTitle);
            localStorage.setItem('streamGame', streamGame);
            localStorage.setItem('streamUrl', streamUrl);
            
            alert('Stream information updated successfully!');
        });
    }
});
// Update admin.js to handle TikTok live status

document.addEventListener('DOMContentLoaded', function() {
    // Stream info form functionality
    const streamInfoForm = document.getElementById('stream-info');
    
    if (streamInfoForm) {
        // Update form to focus on TikTok live
        const streamGameField = document.getElementById('stream-game');
        if (streamGameField) {
            // Hide the game field as it's not needed anymore
            streamGameField.parentElement.style.display = 'none';
        }
        
        // Update the URL field to default to TikTok live URL
        const streamUrlField = document.getElementById('stream-url');
        if (streamUrlField && !streamUrlField.value) {
            streamUrlField.value = 'https://www.tiktok.com/@_ghostypr/live';
        }
        
        // Update form submission
        streamInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const streamTitle = document.getElementById('stream-title').value;
            const streamUrl = document.getElementById('stream-url').value || 'https://www.tiktok.com/@_ghostypr/live';
            
            // Save stream info to localStorage
            localStorage.setItem('streamTitle', streamTitle);
            localStorage.setItem('streamUrl', streamUrl);
            
            alert('Stream information updated successfully!');
        });
    }
});