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
      "Layanan ini menyederhanakan salah satu aspek terpenting: memilih tempat yang sempurna. Penyelenggara pernikahan Anda mencari lokasi, menegosiasikan kontrak, dan mengoordinasikan pengaturan agar selaras dengan tema dan jumlah tamu Anda, memastikan ruang yang Anda pilih mencerminkan visi dan suasana yang ingin Anda ciptakan, tanpa Anda perlu khawatir tentang detailnya.",
    service2:
      "Dari toko bunga hingga fotografer, katering hingga musisi, layanan ini melibatkan kurasi tim profesional yang sesuai dengan gaya dan anggaran Anda. Penyelenggara Anda menangani komunikasi, jadwal, dan pembayaran, memastikan Anda mendapatkan layanan berkualitas dan integrasi tanpa batas dari setiap elemen pada hari pernikahan Anda.",
    service3:
      "Di sinilah kisah visual pernikahan Anda menjadi hidup. Melalui diskusi terperinci tentang preferensi dan gaya Anda, penyelenggara Anda membuat tampilan kohesif yang mencakup segala hal mulai dari undangan hingga pengaturan meja. Mereka mengelola desain, pengaturan, dan kerusakan, mengubah tempat Anda menjadi surga pernikahan yang dipersonalisasi.",
    service4:
      "Setiap menit dari hari pernikahan Anda direncanakan dengan presisi. Layanan ini termasuk menyusun garis waktu terperinci yang mengatur semua kegiatan, mulai dari upacara hingga resepsi, memastikan eksekusi tepat waktu. Penyelenggara Anda berkoordinasi dengan vendor dan tempat untuk menjaga semuanya tetap pada jalurnya, memungkinkan Anda untuk sepenuhnya tenggelam dalam perayaan Anda.",
    service5:
      "Ini mencakup pelacakan RSVP, akomodasi, dan transportasi untuk tamu Anda. Wedding organizer Anda memastikan kebutuhan orang yang Anda cintai terpenuhi, mulai dari penginapan yang nyaman hingga transportasi yang lancar, membuat pengalaman mereka berkesan dan bebas repot.",
    service6:
      "Pada hari pernikahan Anda, penyelenggara Anda menjadi orang yang tepat untuk semua vendor, tamu, dan anggota pesta pernikahan, menangani penyesuaian menit terakhir dan memastikan acara berjalan lancar. Layanan ini memungkinkan Anda dan pasangan Anda fokus hanya untuk menikmati hari istimewa Anda, dengan ketenangan pikiran bahwa semuanya terkendali di belakang layar.",
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
