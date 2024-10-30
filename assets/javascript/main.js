document.addEventListener('DOMContentLoaded', function() {
    //quantity wrap
    const quantityWraps = document.querySelectorAll('.details-product-quantity-wrap');
    quantityWraps.forEach(wrap => {
        const quantityElement = wrap.querySelector('.details-product__quantity');
        let quantity = parseInt(quantityElement.textContent);

        wrap.querySelector('.details-product-quantity__icon-increase').onclick = function() {
            quantity++;
            quantityElement.textContent = quantity;
        };

        wrap.querySelector('.details-product-quantity__icon-decrease').onclick = function() {
            if (quantity > 1) { 
                quantity--;
                quantityElement.textContent = quantity;
            }
        };
    });

    //delete buttons
    const deleteButtons = document.querySelectorAll('.cart-footer__icon__detele');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartWrap = this.closest('.cart-wrap');
            cartWrap.classList.add('shrink'); 

            setTimeout(() => {
                cartWrap.remove();
            }, 500);
        });
    });

    //Flickity
    const flkty = new Flickity('#carousel-customers', {
        groupCells: false,
        pageDots: false,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true,
        draggable: true
    });

    document.getElementById('nextSlide').addEventListener('click', function() {
        flkty.next();
    });
    document.getElementById('prevSlide').addEventListener('click', function() {
        flkty.previous(); 
    });


});