document.addEventListener('DOMContentLoaded', function () {
    const categorySelector = document.getElementById('category-selector');
    const productsSection = document.getElementById('products-section');
    const animalsSelector = document.getElementById('animals-selector');

    const productModal = document.getElementById('product-modal');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductText = document.getElementById('modal-product-text');
    const modalProductPrice = document.getElementById('modal-product-price');

    const productsData = {
        products: [
            { name: 'Котешка храна за зрели котки', image: './assets/images/cat-food.png', Text: '10кг храна за котки с вкус на сьомга', price: '20.00лв.', subcategories: ['all', 'catProducts'] },
            { name: 'Котешка храна за котенца', image: '/assets/images/food-for-kittens.jpg', Text: '3кг храна за котенца до 1 година', price: '10.00лв.', subcategories: ['all', 'catProducts'] },
            { name: 'Котешка храна за кастрирани котки', image: '/assets/images/sterilised-cats-food1.jpg', Text: '3кг храна за кастрирани котки с вкус на сьомга', price: '15.00лв.', subcategories: ['all', 'catProducts'] },
            { name: 'Котешка храна против космени топки', image: '/assets/images/cat-food-for-hairballs.png', Text: '10кг храна за котки против космени топки', price: '25.00лв.', subcategories: ['all', 'catProducts']},
            { name: 'Кучешка храна за зрели кучета', image: '/assets/images/food-dog.jpg', Text: '1кг храна за зрели кучета с вкус на телешко', price: '30.00лв.', subcategories: ['all', 'dogProducts']},
            { name: 'Консервирана храна за кученца', image: '/assets/images/puppy-food1.jpg',Text: '2.5кг храна за кученца до 1г. с вкус на пиле', price: '7.00лв', subcategories: ['all', 'dogProducts']},
            { name: 'Храна за кученца', image: '/assets/images/food-for-puppies.jpg', Text: '2.5кг храна за кученца с вкус на пиле', price: '23.00лв', subcategories: ['all', 'dogProducts']},
            { name: 'Кучешки бисквитки', image: '/assets/images/dog-biscuits.jpg', Text: '200г Кучешко лакомство с 3 страхотни вкуса ', price: '5.00лв.', subcategories: ['all', 'dogProducts']},
            { name: 'Катерушка за котки', image: '/assets/images/toy-for-cats.jpg', Text: 'Катерушка за котки 100см', price: '18.00лв.', subcategories: ['all', 'catProducts']},
            { name: 'Игра за котки', image: '/assets/images/toy2-for-cats.jpg', Text: 'Занимателна играчка за котки', price: '8.00лв.', subcategories: ['all', 'catProducts']},
            { name: 'Кучешка играчка', image: '/assets/images/dog-toy.png', Text: 'Мека писукаща играчка за кучета', price: '6.00лв.', subcategories: ['all', 'dogProducts']},
            { name: 'Каишка за куче', image: '/assets/images/dog-toy2.jpg', Text: 'Каишка повод за куче 1.5М. здрава материя', price: '10.00лв.', subcategories: ['all', 'dogProducts']},
            { name: 'Купички за кучета 2 броя', image: '/assets/images/bowls-for-dogs.jpg', Text: 'Две купички на дървена стойка за кучета', price: '12.00лв.', subcategories: ['all', 'dogProducts']},
            { name: 'Лакомство за кучета', image: '/assets/images/dental-sticks-for-dogs.jpg', Text: 'Дентални пръчки за кучета възраст 1-6г', price: '6.50лв', subcategories: ['all', 'dogProducts']},
            { name: 'Сива чанта за котки с отвор', image: '/assets/images/bag-for-cat.jpg', Text: 'Удобна чанта за котки в сиво с прозорче и до 6кг', price: '20.00лв.', subcategories: ['all', 'catProducts']},
            { name: 'Лакомство за котки', image: '/assets/images/yummy-food-for-cats.jpg', Text: 'Лакомство за котки с вкус на риба тон', price: '5.80лв.', subcategories: ['all', 'catProducts']},
        ],
        services: [
            { name: 'Преглед', image: '/assets/images/vet1.jpg' },
            { name: 'Кастрация', image: '/assets/images/veterinary-patient.jpg' },
            { name: 'Кардиология', image: '/assets/images/cat-in-veterinary.jpg' },
            { name: 'Дентални грижи', image: '/assets/images/vet-and-dog2.jpg' },
            { name: 'Хирургия', image: '/assets/images/vet-and-dog1.jpg' },
            { name: 'Ваксинация', image: '/assets/images/vet-and-dog3.jpg' },
            { name: 'Спешна медицина', image: '/assets/images/emergency-vet.jpg' },
            { name: 'Дерматология', image: '/assets/images/women-and-dog.jpg' }
        ]
    };

    function resizeElement() {
        var el = document.getElementById('products-section');
        el.style.width = 230;
        el.style.height = 223;
    }
    resizeElement();

    function updateProducts() {
        const selectedCategory = categorySelector.value;
        const selectedSubCategory = animalsSelector.value;
        let items;

        if (selectedCategory === 'products') {
            items = selectedSubCategory === 'all'
                ? productsData.products
                : productsData.products.filter(product => product.subcategories && product.subcategories.includes(selectedSubCategory));
    
            animalsSelector.style.display = 'inline-block';
        } else if (selectedCategory === 'services') {
            items = productsData.services;
            animalsSelector.style.display = 'none';
    
        } else {
            items = productsData.filter(product => product.subcategories && product.subcategories.includes(selectedCategory));
            animalsSelector.style.display = 'none';
        }

        if (items) {
            const itemsHTML = items.map(item => {
                if (selectedCategory === 'services') {
                    // Render services without buttons
                    return `
                        <div class="product-card">
                            <div class="image-card">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <h3>${item.name}</h3>
                        </div>
                    `;
                } else {
                    // Render other categories with buttons
                    return `
                        <div class="product-card">
                            <div class="image-card">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <h3>${item.name}</h3>
                            <p class="text">${item.Text}</p>
                            <p class="price">${item.price}</p>
                            <button class="open-modal-btn" data-name="${item.name}" data-image="${item.image}" data-text="${item.Text}" data-price="${item.price}">Поръчай</button>
                        </div>
                    `;
                }
            }).join('');


            productsSection.innerHTML = itemsHTML;
            if(selectedCategory === 'products'){
            const modalButtons = document.querySelectorAll('.open-modal-btn');
            modalButtons.forEach(button => {
                button.addEventListener('click', openProductModal);
            });
        }
        } else {
            productsSection.innerHTML = 'No items available for this category.';
        }
    }

    function openProductModal(event) {
        const productName = event.currentTarget.getAttribute('data-name');
        const productImage = event.currentTarget.getAttribute('data-image');
        const productText = event.currentTarget.getAttribute('data-text');
        const productPrice = event.currentTarget.getAttribute('data-price');
        
        const selectedCategory = categorySelector.value;
        if (selectedCategory === 'services') {
        // Redirect to the contacts page
        
        } else {
        // Show the modal for other categories
            modalProductName.textContent = productName;
            modalProductImage.src = productImage;
            modalProductText.textContent = productText;
            modalProductPrice.textContent = `Цена за 1бр: ${productPrice}`;
            productModal.style.display = 'block';
    }
    // Prevent the default behavior of the button (form submission)
    event.preventDefault();
    }

    categorySelector.addEventListener('change', updateProducts);
    animalsSelector.addEventListener('change', updateProducts);

        // Close the modal when the close button is clicked
        document.querySelector('.close').addEventListener('click', function () {
            productModal.style.display = 'none';
        });
    
        // Close the modal if the user clicks outside of it
        window.addEventListener('click', function (event) {
            if (event.target === productModal) {
                productModal.style.display = 'none';
            }
        });
    
    updateProducts(); // Initial update based on the default category
});