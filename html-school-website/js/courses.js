// Courses page functionality

// Program expansion/collapse functionality
function toggleProgram(programId) {
    const card = document.querySelector(`[data-program="${programId}"]`);
    if (!card) return;
    
    const content = card.querySelector('.program-content');
    const icon = card.querySelector('.expand-icon i');
    
    if (!content || !icon) return;
    
    // Close all other programs first
    document.querySelectorAll('.program-detail-card').forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('expanded')) {
            otherCard.classList.remove('expanded');
            const otherContent = otherCard.querySelector('.program-content');
            const otherIcon = otherCard.querySelector('.expand-icon i');
            if (otherContent) {
                otherContent.style.maxHeight = '0px';
                otherContent.style.opacity = '0';
            }
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current program
    if (card.classList.contains('expanded')) {
        // Collapse
        card.classList.remove('expanded');
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Expand
        card.classList.add('expanded');
        
        // First, make content visible to measure its height
        content.style.display = 'block';
        content.style.maxHeight = 'none';
        content.style.opacity = '1';
        
        // Get the actual height
        const actualHeight = content.scrollHeight;
        
        // Reset and animate
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        
        // Force reflow
        content.offsetHeight;
        
        // Animate to full height
        setTimeout(() => {
            content.style.maxHeight = actualHeight + 'px';
            content.style.opacity = '1';
            icon.style.transform = 'rotate(180deg)';
        }, 10);
        
        // After animation completes, set to auto for responsive behavior
        setTimeout(() => {
            if (card.classList.contains('expanded')) {
                content.style.maxHeight = 'none';
            }
        }, 600);
    }
}

// Enquire functionality
function enquireProgram(programName) {
    // WhatsApp number (from contact info: +91 98414 44842)
    const whatsappNumber = "919841444842"; // Remove + and spaces for WhatsApp URL
    
    // Pre-filled message
    const message = `Hello! I'm interested in the ${programName} program at International Kidz World Montessori Play School. Could you please provide more information about admission, fees, and availability? Thank you!`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
}

// Initialize courses page
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to program cards
    const cards = document.querySelectorAll('.program-detail-card');
    
    cards.forEach(card => {
        const programId = card.dataset.program;
        const header = card.querySelector('.program-header');
        const content = card.querySelector('.program-content');
        
        if (header) {
            header.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Simple toggle without complex logic
                if (card.classList.contains('expanded')) {
                    card.classList.remove('expanded');
                    if (content) {
                        content.style.maxHeight = '0px';
                        content.style.opacity = '0';
                        content.style.overflow = 'hidden';
                    }
                } else {
                    // Close all others first
                    cards.forEach(otherCard => {
                        if (otherCard !== card) {
                            otherCard.classList.remove('expanded');
                            const otherContent = otherCard.querySelector('.program-content');
                            if (otherContent) {
                                otherContent.style.maxHeight = '0px';
                                otherContent.style.opacity = '0';
                                otherContent.style.overflow = 'hidden';
                            }
                        }
                    });
                    
                    // Expand current
                    card.classList.add('expanded');
                    if (content) {
                        // Force display and measure
                        content.style.display = 'block';
                        content.style.overflow = 'visible';
                        
                        // Get the full height including all content
                        const height = content.scrollHeight + 50; // Add extra padding
                        
                        // Animate
                        content.style.maxHeight = height + 'px';
                        content.style.opacity = '1';
                        
                        // After animation, set to auto for better responsiveness
                        setTimeout(() => {
                            if (card.classList.contains('expanded')) {
                                content.style.maxHeight = 'none';
                                content.style.overflow = 'visible';
                            }
                        }, 650);
                    }
                }
                
                // Rotate icon
                const icon = card.querySelector('.expand-icon i');
                if (icon) {
                    if (card.classList.contains('expanded')) {
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
                
                // Smooth scroll to the expanded card
                if (card.classList.contains('expanded')) {
                    setTimeout(() => {
                        card.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest',
                            inline: 'nearest'
                        });
                    }, 300);
                }
            });
        }
    });
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});