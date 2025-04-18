//100 lines
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
  
    let selectedCategory = '';
    let searchTerm = '';
  
    const filterToggle = document.getElementById('filter-toggle');
    const filters = document.getElementById('filters');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const courseGrid = document.getElementById('course-grid');
    const featuredCourseSection = document.getElementById('featured-course');
    const courseSectionTitle = document.getElementById('course-section-title');
    const courseCount = document.getElementById('course-count');
  
    filterToggle.addEventListener('click', () => {
      filters.classList.toggle('hidden');
    });
  
    function initializeCategoryFilters() {
      const categoryButtons = categories.map(category => {
        const isSelected = selectedCategory === (category.id === '1' ? '' : category.name);
        return `
          <button
            data-category="${category.id === '1' ? '' : category.name}"
            class="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
              isSelected
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
            }"
          >
            <i data-lucide="${category.icon}" class="w-4 h-4"></i>
            <span class="text-sm font-medium">${category.name}</span>
          </button>
        `;
      }).join('');
  
      categoryFilter.innerHTML = `<div class="flex flex-wrap gap-2 md:gap-3">${categoryButtons}</div>`;
      lucide.createIcons();
  
      categoryFilter.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
          selectedCategory = button.dataset.category;
          updateUI();
        });
      });
    }
  
    function createFeaturedCourseHTML(course) {
      return `
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg">
          <div class="md:flex">
            <div class="md:w-1/2">
              <img 
                src="${course.image}" 
                alt="${course.title}" 
                class="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div class="p-6 md:p-8 md:w-1/2 text-white">
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured Course
                </span>
                <span class="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  ${course.level}
                </span>
              </div>
              
              <h2 class="text-2xl md:text-3xl font-bold mb-3">${course.title}</h2>
              <p class="text-white text-opacity-90 mb-6">${course.description}</p>
              
              <div class="flex flex-wrap gap-4 mb-6">
                <div class="flex items-center gap-2">
                  <i data-lucide="clock" class="w-5 h-5"></i>
                  <span>${course.duration}</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="users" class="w-5 h-5"></i>
                  <span>${course.enrolled.toLocaleString()} students</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="star" class="w-5 h-5 text-yellow-300"></i>
                  <span>${course.rating}</span>
                </div>
              </div>
              
              <div class="flex items-center gap-3 mb-6">
                <img 
                  src="${course.instructor.avatar}" 
                  alt="${course.instructor.name}" 
                  class="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <p class="font-medium">${course.instructor.name}</p>
                  <p class="text-sm text-white text-opacity-80">${course.instructor.title}</p>
                </div>
              </div>
              
              <a href="#" target="_blank" ><button class="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                <i data-lucide="book-open" class="w-5 h-5"></i>
                Enroll Now
              </button></a>
            </div>
          </div>
        </div>
      `;
    }
  
    function createCourseCardHTML(course) {
      return `
        <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
          <div class="relative">
            <img 
              src="${course.image}" 
              alt="${course.title}" 
              class="w-full h-48 object-cover"
            />
            ${course.featured ? `
              <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Featured
              </div>
            ` : ''}
            ${course.progress !== undefined ? `
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <div 
                  class="h-full bg-green-500 progress-bar" 
                  style="width: ${course.progress}%"
                ></div>
              </div>
            ` : ''}
            <div class="absolute top-3 right-3 bg-gray-900 bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
              <i data-lucide="clock" class="w-3 h-3"></i>
              ${course.duration}
            </div>
          </div>
          
          <div class="p-5 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold px-2 py-1 rounded-full ${
                course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }">
                ${course.level}
              </span>
              <span class="text-xs text-gray-500">${course.category}</span>
            </div>
            
            <h3 class="font-bold text-lg mb-2 line-clamp-2">${course.title}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">${course.description}</p>
            
            <div class="flex items-center gap-3 mt-auto">
              <div class="flex items-center gap-1">
                <i data-lucide="users" class="w-4 h-4 text-gray-500"></i>
                <span class="text-xs text-gray-600">${course.enrolled.toLocaleString()}</span>
              </div>
              <div class="flex items-center gap-1">
                <i data-lucide="star" class="w-4 h-4 text-yellow-500"></i>
                <span class="text-xs text-gray-600">${course.rating}</span>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img 
                  src="${course.instructor.avatar}" 
                  alt="${course.instructor.name}" 
                  class="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p class="text-xs font-medium">${course.instructor.name}</p>
                  <p class="text-xs text-gray-500">${course.instructor.title}</p>
                </div>
              </div>
              <button class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors">
                <i data-lucide="book-open" class="w-4 h-4"></i>
                View
              </button>
            </div>
          </div>
        </div>
      `;
    }
  
    function filterCourses() {
      return courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === '' || course.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      });
    }
  
    function updateUI() {
      const filteredCourses = filterCourses();
      
      courseSectionTitle.textContent = selectedCategory || 'All Courses';
      courseCount.textContent = `(${filteredCourses.length})`;
  
      const featuredCourse = courses.find(course => course.featured);
      if (featuredCourse && searchTerm === '' && selectedCategory === '') {
        featuredCourseSection.innerHTML = createFeaturedCourseHTML(featuredCourse);
      } else {
        featuredCourseSection.innerHTML = '';
      }
  
      if (filteredCourses.length > 0) {
        courseGrid.innerHTML = filteredCourses.map(createCourseCardHTML).join('');
      } else {
        courseGrid.innerHTML = `
          <div class="text-center py-10 col-span-full">
            <p class="text-lg text-gray-600">No courses found matching your criteria</p>
            <button 
              class="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              onclick="clearFilters()"
            >
              Clear filters
            </button>
          </div>
        `;
      }
  
      lucide.createIcons();
  
      initializeCategoryFilters();
    }

    window.clearFilters = () => {
      searchTerm = '';
      selectedCategory = '';
      searchInput.value = '';
      updateUI();
    };
  
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      updateUI();
    });
  
    updateUI();
  });