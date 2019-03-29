$(document).ready(function () {
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#myCarousel").carousel("next");
  });

  var goToCartIcon = function (addTocartBtn) {
    var cartIcon = $(".my-cart-icon");
    var image = $('<img width="30px" height="30px" src="' + addTocartBtn.data("image") + '"/>').css({ "position": "fixed", "z-index": "999" });
    addTocartBtn.prepend(image);
    var position = cartIcon.position();
    image.animate({
      top: position.top,
      left: position.left
    }, 500, "linear", function () {
      image.remove();
    });
  }
  $('.my-cart-btn').myCart({
    currencySymbol: '$',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
    cartItems: [

    ],
    clickOnAddToCart: function (addTocart) {
      goToCartIcon(addTocart);
    },
    afterAddOnCart: function (products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function (cartIcon, products, totalPrice, totalQuantity) {
      console.log("cart icon clicked", cartIcon, products, totalPrice, totalQuantity);
    },
    checkoutCart: function (products, totalPrice, totalQuantity) {
      var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
      checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
      $.each(products, function () {
        checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
      });
      alert(checkoutString)
      console.log("checking out", products, totalPrice, totalQuantity);
    },
    getDiscountPrice: function (products, totalPrice, totalQuantity) {
      console.log("calculating discount", products, totalPrice, totalQuantity);
      return totalPrice * 0.5;
    }

  });


});
//pic shows

//tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
//login
$('input[type="submit"]').mousedown(function () {
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function () {
  $(this).css('background', '#1abc9c');
});

$('#loginform').click(function () {
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});



$(document).mouseup(function (e) {
  var container = $(".login");

  if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    container.hide();
    $('#loginform').removeClass('green');
  }
});
//login and register form
$(document).ready(function () {
  $('#loginForm').click(function () {
      $('#login').toggle(500);
      $("#register").hide();
  });

  $('#forget').click(function () {
      $('#forgetForm').toggle();
      $("#register").hide();
  });
});
$(document).ready(function () {

  $('#registerForm').click(function () {
      $('#register').toggle(500);
      $("#login").hide();
      $('#forgetForm').hide();
  });
});