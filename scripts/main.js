function showReviewForm() {
    var form = document.getElementById("reviewForm");
    if (form.style.display === "none") {
      form.style.display = "block";
      form.scrollIntoView();
    } else {
      form.style.display = "none";
    }
}

var ratingValue = document.getElementById("numericalRating");
var display = document.getElementById("ratingNum");
var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");
display.innerHTML = ratingValue.value;

ratingValue.oninput = function()
{
  display.innerHTML = this.value;
  if (this.value=="0")
  {
    star1.classList = "bi bi-star";
    star2.classList = "bi bi-star";
    star3.classList = "bi bi-star";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="0.5")
  {
    star1.classList = "bi bi-star-half";
    star2.classList = "bi bi-star";
    star3.classList = "bi bi-star";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="1")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star";
    star3.classList = "bi bi-star";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="1.5")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-half";
    star3.classList = "bi bi-star";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="2")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="2.5")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star-half";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="3")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star-fill";
    star4.classList = "bi bi-star";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="3.5")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star-fill";
    star4.classList = "bi bi-star-half";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="4")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star-fill";
    star4.classList = "bi bi-star-fill";
    star5.classList = "bi bi-star";
  }
  else if (this.value=="4.5")
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star-fill";
    star4.classList = "bi bi-star-fill";
    star5.classList = "bi bi-star-half";
  }
  else
  {
    star1.classList = "bi bi-star-fill";
    star2.classList = "bi bi-star-fill";
    star3.classList = "bi bi-star-fill";
    star4.classList = "bi bi-star-fill";
    star5.classList = "bi bi-star-fill";
  }

}
