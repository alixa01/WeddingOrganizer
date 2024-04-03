$(document).ready(function () {
  //highlight navbar
  $(".targetElement").mouseenter(function () {
    $(this).addClass("highlighted");
  });

  $(".targetElement").mouseleave(function () {
    $(this).removeClass("highlighted");
  });
});

//slide
$(function () {
  $("[href*=\\#]:not([href=\\#]").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  });

  const descriptions = {
    service1:
      "This service simplifies one of the most important aspects: choosing the perfect venue. Your wedding organizer scouts locations, negotiates contracts, and coordinates arrangements to align with your theme and guest count, ensuring the space you choose reflects the vision and atmosphere you want to create, without you having to worry about the details.",
    service2:
      "From florists to photographers, caterers to musicians, this service involves curating a team of professionals to suit your style and budget. Your organizer handles communications, scheduling, and payments, ensuring you get quality service and seamless integration of every element of your wedding day.",
    service3:
      "This is where the visual story of your wedding comes to life. Through detailed discussions of your preferences and style, your organizer creates a cohesive look that includes everything from invitations to table settings. They manage the design, setup and breakdown, turning your venue into a personalized wedding paradise.",
    service4:
      "Every minute of your wedding day is planned with precision. This service includes creating a detailed timeline that organizes all activities, from the ceremony to the reception, ensuring timely execution. Your organizer coordinates with vendors and venues to keep everything on track, allowing you to fully immerse yourself in your celebration.",
    service5:
      "This includes RSVP tracking, accommodations, and transportation for your guests. Your wedding organizer ensures your loved ones' needs are met, from comfortable lodging to seamless transportation, making their experience memorable and hassle-free.",
    service6:
      "On your wedding day, your organizer becomes the go-to person for all vendors, guests, and wedding party members, handling last-minute adjustments and ensuring the event runs smoothly. This service allows you and your partner to focus solely on enjoying your special day, with the peace of mind that everything is under control behind the scenes.",
  };

  const services = {
    service1: "Venue Selection",
    service2: "Vendor Coordination",
    service3: "Design and Decor",
    service4: "Timeline Creation",
    service5: "Guest Management",
    service6: "Day-of Coordination",
  };

  $(".btn-description").click(function () {
    const serviceId = $(this).closest(".card-1").attr("id");
    $(".popup .services").text(services[serviceId]);
    $(".popup .description").text(descriptions[serviceId]);
    $(".popup").fadeIn(300, function () {
      $(this).addClass("show");
      $("body").css("overflow");
    });
  });

  $(".close-btn").click(function () {
    $(".popup").fadeOut(300, function () {
      $(this).removeClass("show");
      $("body").css("overflow", "auto");
    });
  });
});

function openLightbox(img) {
  var lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  document.querySelector(".lightbox").style.display = "block";
}

function closeLightbox() {
  document.querySelector(".lightbox").style.display = "none";
}
