// Gallery functionality for International Kidz World Website

class GalleryManager {
    constructor() {
        this.currentFilter = 'all';
        this.currentImageIndex = 0;
        this.filteredImages = [];
        this.allImages = [];
        this.lightboxActive = false;
        
        this.init();
    }
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadImages();
        this.updateCounts();
        this.initializeLayout();
        
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    initializeLayout() {
        // Ensure all gallery items are properly positioned
        this.galleryItems.forEach((item, index) => {
            item.classList.add('visible');
            item.style.display = 'block';
            item.style.position = 'relative';
            
            // Ensure proper grid positioning
            item.style.gridColumn = 'span 1';
            item.style.gridRow = 'span 1';
            item.style.justifySelf = 'stretch';
            item.style.alignSelf = 'stretch';
        });
        
        // Force grid recalculation after a short delay
        setTimeout(() => {
            if (this.galleryGrid) {
                this.galleryGrid.style.display = 'grid';
                
                // Trigger a reflow to ensure proper layout
                this.galleryGrid.offsetHeight;
            }
        }, 100);
        
        // Additional layout check after images load
        setTimeout(() => {
            this.checkImageLayout();
        }, 500);
    }
    
    checkImageLayout() {
        this.galleryItems.forEach(item => {
            const img = item.querySelector('img');
            if (img && img.complete) {
                item.classList.add('loaded');
                item.classList.remove('loading');
            }
        });
    }
    
    cacheElements() {
        // Filter elements
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.galleryGrid = document.getElementById('gallery-grid');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        
        // Count elements
        this.totalImagesSpan = document.getElementById('total-images');
        this.visibleCountSpan = document.getElementById('visible-count');
        this.countTextSpan = document.getElementById('count-text');
        this.noResultsDiv = document.getElementById('no-results');
        
        // Lightbox elements
        this.lightbox = document.getElementById('lightbox');
        this.lightboxOverlay = document.getElementById('lightbox-overlay');
        this.lightboxClose = document.getElementById('lightbox-close');
        this.lightboxPrev = document.getElementById('lightbox-prev');
        this.lightboxNext = document.getElementById('lightbox-next');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxTitle = document.getElementById('lightbox-title');
        this.lightboxDescription = document.getElementById('lightbox-description');
        this.lightboxCurrent = document.getElementById('lightbox-current');
        this.lightboxTotal = document.getElementById('lightbox-total');
    }
    
    bindEvents() {
        // Filter button events
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.currentTarget.dataset.filter;
                this.setActiveFilter(filter);
                this.filterImages(filter);
            });
        });
        
        // Gallery item click events
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(index);
            });
            
            // Add loading state and proper image handling
            const img = item.querySelector('img');
            if (img) {
                // Set initial loading state
                item.classList.add('loading');
                
                img.addEventListener('load', () => {
                    item.classList.add('loaded');
                    item.classList.remove('loading');
                    
                    // Ensure proper positioning after load
                    setTimeout(() => {
                        this.recalculateGrid();
                    }, 50);
                });
                
                img.addEventListener('error', () => {
                    console.warn('Failed to load image:', img.src);
                    item.style.display = 'none';
                });
                
                // If image is already loaded (cached)
                if (img.complete && img.naturalHeight !== 0) {
                    item.classList.add('loaded');
                    item.classList.remove('loading');
                }
            }
        });
        
        // Lightbox events
        if (this.lightboxClose) {
            this.lightboxClose.addEventListener('click', () => this.closeLightbox());
        }
        
        if (this.lightboxOverlay) {
            this.lightboxOverlay.addEventListener('click', () => this.closeLightbox());
        }
        
        if (this.lightboxPrev) {
            this.lightboxPrev.addEventListener('click', () => this.previousImage());
        }
        
        if (this.lightboxNext) {
            this.lightboxNext.addEventListener('click', () => this.nextImage());
        }
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (this.lightboxActive) {
                switch(e.key) {
                    case 'Escape':
                        this.closeLightbox();
                        break;
                    case 'ArrowLeft':
                        this.previousImage();
                        break;
                    case 'ArrowRight':
                        this.nextImage();
                        break;
                }
            }
        });
        
        // Prevent lightbox close when clicking on image
        if (this.lightboxImage) {
            this.lightboxImage.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        
        // Window resize handler for grid recalculation
        window.addEventListener('resize', () => {
            this.debounce(() => {
                this.recalculateGrid();
            }, 250);
        });
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    recalculateGrid() {
        if (this.galleryGrid) {
            // Force grid recalculation
            this.galleryGrid.style.display = 'none';
            this.galleryGrid.offsetHeight; // Trigger reflow
            this.galleryGrid.style.display = 'grid';
        }
    }
    
    loadImages() {
        this.allImages = Array.from(this.galleryItems).map((item, index) => ({
            element: item,
            index: index,
            category: item.dataset.category,
            title: item.dataset.title,
            alt: item.dataset.alt,
            src: item.querySelector('img').src
        }));
        
        this.filteredImages = [...this.allImages];
    }
    
    setActiveFilter(filter) {
        this.currentFilter = filter;
        
        // Update button states
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.filter === filter) {
                button.classList.add('active');
            }
        });
    }
    
    filterImages(filter) {
        // Add filtering class for animation
        this.galleryItems.forEach(item => {
            item.classList.add('filtering');
        });
        
        setTimeout(() => {
            if (filter === 'all') {
                this.filteredImages = [...this.allImages];
                this.galleryItems.forEach(item => {
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                    item.style.display = 'block';
                });
            } else {
                this.filteredImages = this.allImages.filter(img => img.category === filter);
                
                this.galleryItems.forEach(item => {
                    if (item.dataset.category === filter) {
                        item.classList.remove('hidden');
                        item.classList.add('visible');
                        item.style.display = 'block';
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('visible');
                        item.style.display = 'none';
                    }
                });
            }
            
            this.updateCounts();
            this.showNoResultsIfNeeded();
            
            // Remove filtering class and ensure proper grid layout
            setTimeout(() => {
                this.galleryItems.forEach(item => {
                    item.classList.remove('filtering');
                });
                
                // Force grid recalculation
                if (this.galleryGrid) {
                    this.galleryGrid.style.display = 'none';
                    this.galleryGrid.offsetHeight; // Trigger reflow
                    this.galleryGrid.style.display = 'grid';
                }
            }, 400);
        }, 200);
    }
    
    updateCounts() {
        const visibleCount = this.filteredImages.length;
        const totalCount = this.allImages.length;
        
        if (this.totalImagesSpan) {
            this.totalImagesSpan.textContent = totalCount;
        }
        
        if (this.visibleCountSpan) {
            this.visibleCountSpan.textContent = visibleCount;
        }
        
        if (this.countTextSpan) {
            this.countTextSpan.textContent = visibleCount === 1 ? 'photo' : 'photos';
        }
    }
    
    showNoResultsIfNeeded() {
        if (this.noResultsDiv) {
            if (this.filteredImages.length === 0) {
                this.noResultsDiv.style.display = 'block';
                this.noResultsDiv.style.animation = 'fadeIn 0.5s ease-out';
            } else {
                this.noResultsDiv.style.display = 'none';
            }
        }
    }
    
    openLightbox(imageIndex) {
        // Find the index in filtered images
        const clickedImage = this.allImages[imageIndex];
        const filteredIndex = this.filteredImages.findIndex(img => img.index === imageIndex);
        
        if (filteredIndex === -1) return; // Image not in current filter
        
        this.currentImageIndex = filteredIndex;
        this.lightboxActive = true;
        
        // Show lightbox
        if (this.lightbox) {
            this.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        this.updateLightboxContent();
        this.updateNavigationButtons();
        
        // Update counter
        if (this.lightboxTotal) {
            this.lightboxTotal.textContent = this.filteredImages.length;
        }
    }
    
    closeLightbox() {
        this.lightboxActive = false;
        
        if (this.lightbox) {
            this.lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    previousImage() {
        if (this.filteredImages.length <= 1) return;
        
        this.currentImageIndex = this.currentImageIndex === 0 
            ? this.filteredImages.length - 1 
            : this.currentImageIndex - 1;
            
        this.updateLightboxContent();
        this.updateNavigationButtons();
    }
    
    nextImage() {
        if (this.filteredImages.length <= 1) return;
        
        this.currentImageIndex = this.currentImageIndex === this.filteredImages.length - 1 
            ? 0 
            : this.currentImageIndex + 1;
            
        this.updateLightboxContent();
        this.updateNavigationButtons();
    }
    
    updateLightboxContent() {
        const currentImage = this.filteredImages[this.currentImageIndex];
        
        if (!currentImage) return;
        
        // Update image
        if (this.lightboxImage) {
            this.lightboxImage.src = currentImage.src;
            this.lightboxImage.alt = currentImage.alt;
        }
        
        // Update title and description
        if (this.lightboxTitle) {
            this.lightboxTitle.textContent = currentImage.title;
        }
        
        if (this.lightboxDescription) {
            this.lightboxDescription.textContent = currentImage.alt;
        }
        
        // Update counter
        if (this.lightboxCurrent) {
            this.lightboxCurrent.textContent = this.currentImageIndex + 1;
        }
    }
    
    updateNavigationButtons() {
        const hasMultipleImages = this.filteredImages.length > 1;
        
        if (this.lightboxPrev) {
            this.lightboxPrev.style.display = hasMultipleImages ? 'flex' : 'none';
        }
        
        if (this.lightboxNext) {
            this.lightboxNext.style.display = hasMultipleImages ? 'flex' : 'none';
        }
    }
    
    // Public methods for external use
    setFilter(filter) {
        this.setActiveFilter(filter);
        this.filterImages(filter);
    }
    
    getStats() {
        return {
            total: this.allImages.length,
            visible: this.filteredImages.length,
            currentFilter: this.currentFilter
        };
    }
}

// Lazy loading for gallery images
class LazyImageLoader {
    constructor() {
        this.imageObserver = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.imageObserver.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '50px 0px'
            });
            
            this.observeImages();
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }
    
    observeImages() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            this.imageObserver.observe(img);
        });
    }
    
    loadImage(img) {
        const src = img.dataset.src || img.src;
        const parent = img.closest('.gallery-item');
        
        if (parent) {
            parent.classList.add('loading');
        }
        
        img.src = src;
        img.onload = () => {
            if (parent) {
                parent.classList.remove('loading');
                parent.classList.add('loaded');
            }
        };
        
        img.onerror = () => {
            if (parent) {
                parent.style.display = 'none';
            }
            console.warn('Failed to load image:', src);
        };
    }
    
    loadAllImages() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => this.loadImage(img));
    }
}

// Gallery search functionality
class GallerySearch {
    constructor(galleryManager) {
        this.galleryManager = galleryManager;
        this.searchInput = null;
        this.init();
    }
    
    init() {
        this.createSearchInput();
        this.bindEvents();
    }
    
    createSearchInput() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'gallery-search';
        searchContainer.innerHTML = `
            <div class="search-input-container">
                <input type="text" id="gallery-search" placeholder="Search photos..." class="search-input">
                <i data-lucide="search" class="search-icon"></i>
            </div>
        `;
        
        // Insert after gallery filters
        const filtersContainer = document.querySelector('.gallery-filters');
        if (filtersContainer) {
            filtersContainer.parentNode.insertBefore(searchContainer, filtersContainer.nextSibling);
        }
        
        this.searchInput = document.getElementById('gallery-search');
        
        // Reinitialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    bindEvents() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });
        }
    }
    
    performSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Reset to current filter
            this.galleryManager.filterImages(this.galleryManager.currentFilter);
            return;
        }
        
        // Filter images based on search term
        const matchingImages = this.galleryManager.allImages.filter(img => {
            return img.title.toLowerCase().includes(searchTerm) ||
                   img.alt.toLowerCase().includes(searchTerm) ||
                   img.category.toLowerCase().includes(searchTerm);
        });
        
        // Update filtered images
        this.galleryManager.filteredImages = matchingImages;
        
        // Show/hide gallery items
        this.galleryManager.galleryItems.forEach(item => {
            const imageData = this.galleryManager.allImages.find(img => img.element === item);
            if (matchingImages.includes(imageData)) {
                item.classList.remove('hidden');
                item.classList.add('visible');
                item.style.display = 'block';
            } else {
                item.classList.add('hidden');
                item.classList.remove('visible');
                item.style.display = 'none';
            }
        });
        
        this.galleryManager.updateCounts();
        this.galleryManager.showNoResultsIfNeeded();
        
        // Recalculate grid layout
        setTimeout(() => {
            this.galleryManager.recalculateGrid();
        }, 100);
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery manager
    const galleryManager = new GalleryManager();
    
    // Initialize lazy loading
    const lazyLoader = new LazyImageLoader();
    
    // Initialize search (optional)
    // const gallerySearch = new GallerySearch(galleryManager);
    
    // Make gallery manager globally available
    window.galleryManager = galleryManager;
    
    console.log('Gallery initialized successfully!');
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GalleryManager, LazyImageLoader, GallerySearch };
}