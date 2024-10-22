document.getElementById("hamburger").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (window.matchMedia("(max-width: 768px)").matches) {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; 
    } else {
        dropdownMenu.style.display = "block"; 
    }
}});



const hearts = document.querySelectorAll('.heart');


hearts.forEach(heart => {
    heart.addEventListener('click', function() {
       
        if (heart.src.includes('heart.svg')) {
            heart.src = 'assets/heart.png'; 
            
        } else {
            heart.src = 'assets/heart.svg'; 
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('closeSidebar').addEventListener('click', function() {
        const closeBtn = document.getElementById('closeSidebar');
        const sidebar = document.getElementById('categories');
        const contentt = document.getElementsByClassName('content');

    
        if (!sidebar || !closeBtn) {
            console.error('Sidebar or close button not found!');
            return;
        }

       
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            closeBtn.innerHTML = '&times;'; 

            for (let i = 0; i < contentt.length; i++) {
                contentt[i].style.margin = '';
                contentt[i].style.padding = '';
            }
        } else {
            sidebar.classList.add('hidden');
            closeBtn.innerHTML = '&#x2B9E;';

           
            for (let i = 0; i < contentt.length; i++) {
                contentt[i].style.margin = '0';
                contentt[i].style.padding = '0';
            }
        }
    });
});








let filters = {
    type: [],
    capacity: []
};


function filterItems() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardType = card.getAttribute('data-type').toLowerCase(); 
        const cardCapacity = card.getAttribute('data-people');

       
        const matchesType = filters.type.length === 0 || filters.type.includes(cardType);
        const matchesCapacity = filters.capacity.length === 0 || filters.capacity.includes(cardCapacity);

       
        if (matchesType && matchesCapacity) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none'; 
        }
    });
}



const stars = document.querySelectorAll('.fa-star');
let rating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    
    rating = index + 1; 
    updateStarClasses(rating);
  });
});

function updateStarClasses(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      
      star.className = 'fa fa-star checked';
    } else {
      
      star.className = 'fa fa-star grey';
    }
  });
}








function toggleReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm.style.display === 'none' || reviewForm.style.display === '') {
        reviewForm.style.display = 'block'; 
    } else {
        reviewForm.style.display = 'none'; 
    }
}









function updateStarDisplay() {
    document.querySelectorAll('.rating span').forEach(star => {
        star.classList.toggle('checked', star.getAttribute('data-value') <= ratingValue);
    });
}

let ratingValue = 0; 
document.querySelectorAll('.rating span').forEach(star => {
    star.addEventListener('click', function () {
        ratingValue = this.getAttribute('data-value'); 
        updateStarDisplay();
    });
});

function updateStarDisplay() {
    document.querySelectorAll('.rating span').forEach(star => {
        star.classList.toggle('checked', star.getAttribute('data-value') <= ratingValue);
    });
}


function addReview() {
    console.log('Function triggered'); 

  
    let userName = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let description = document.getElementById('description').value;

    
    let newReview = document.createElement('div');
    newReview.classList.add('review'); 

    
    newReview.innerHTML = `
        <div class="review-details">
            <div class="review-person">
                <img src="assets/Profil.png" alt="Reviewer">
                <div class="reviewer-profile">
                    <p class="reviewer-name">${userName}</p>
                    <p class="reviewer-title">${title}</p>
                </div>
            </div>
            <div class="date-and-review">
                <p class="date">${date}</p>
                <div class="review-stars">
                    ${'<span class="fa fa-star checked"></span>'.repeat(ratingValue)}
                    ${'<span class="fa fa-star"></span>'.repeat(5 - ratingValue)}
                </div>
            </div>
        </div>
        <p class="car-description">${description}</p>
    `;

    
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.insertBefore(newReview, reviewsContainer.firstChild);




    const reviewCountElement = document.getElementById('review-count');
    let currentCount = parseInt(reviewCountElement.textContent); 
    reviewCountElement.textContent = currentCount + 1; 

    document.getElementById('name').value = '';
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    updateStarDisplay()
}


