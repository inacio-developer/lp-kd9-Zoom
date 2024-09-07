$(function () {
  $(".btn-enter").on("click", () => {
    $(".video-intro")[0].pause();
    $(".page-intro").addClass("d-none");
    $(".body-website").removeClass("d-none");
    $(".video-about")[0].play();
  });
});
