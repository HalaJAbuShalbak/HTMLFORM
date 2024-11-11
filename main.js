

const formDiv=$('#htmlForm')

$(document).ready(function () {
  
  
  $(".faq-container").click(function () {
    // Find the associated answer for the clicked container
    var answerElement = $(this).next(".faq-answer");

    // Check if the associated answer is already visible
    var isAnswerVisible = answerElement.is(":visible");

    // First, hide all answers
    $(".faq-answer").slideUp(180);

    // If the answer was not previously visible, show it
    if (!isAnswerVisible) {
      answerElement.slideDown(180);
    }
  });
  $.get('HTML.html', function(data) {
    formDiv.text(data);
  });
});

// $(document).ready(function () {
//   const endDate = new Date("2024-04-20T23:59:59"); // cohort's start date

//   function updateCountdown() {
//     const now = new Date();
//     const timeDifference = endDate - now;

//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor(
//       (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//     // Using padStart to add a leading zero if the number is a single digit
//     $(".days").text(String(days).padStart(2, "0"));
//     $(".hours").text(String(hours).padStart(2, "0"));
//     $(".minutes").text(String(minutes).padStart(2, "0"));
//     $(".seconds").text(String(seconds).padStart(2, "0"));
//   }

//   setInterval(updateCountdown, 1000);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const endDate = new Date("2024-02-25T23:59:59"); // Adjust date as needed
//   const countdown = document.getElementById("countdown");
//   const urgentMessage = document.getElementById("urgentMessage");

//   function updateCountdown() {
//     const now = new Date();
//     const timeDifference = endDate - now;
//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//     if (days < 7) {
//       // Hide countdown, show urgent message
//       countdown.classList.add("hidden");
//       urgentMessage.classList.remove("hidden");
//     } else {
//       // Calculate and display the countdown
//       const hours = Math.floor(
//         (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor(
//         (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
//       );
//       const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//       countdown.innerHTML = `
//         <div class="time-unit flex flex-col items-center">
//           <span class="number days text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${days}</span>
//           <span class="label">يوم</span>
//         </div>
//         <span class="colon text-4xl lg:text-6xl font-bold text-white">:</span>
//         <div class="time-unit flex flex-col items-center">
//           <span class="number hours text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${hours}</span>
//           <span class="label">ساعة</span>
//         </div>
//         <span class="colon text-4xl lg:text-6xl font-bold text-white">:</span>
//         <div class="time-unit flex flex-col items-center">
//           <span class="number minutes text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${minutes}</span>
//           <span class="label">دقيقة</span>
//         </div>
//         <span class="colon text-4xl lg:text-6xl font-bold text-white">:</span>
//         <div class="time-unit flex flex-col items-center">
//           <span class="number seconds text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${seconds}</span>
//           <span class="label">ثانية</span>
//         </div>
//       `;
//       urgentMessage.classList.add("hidden");
//     }
//   }

//   setInterval(updateCountdown, 1000);
// });

document.addEventListener("DOMContentLoaded", function () {
  // Bootcamp start date HERE
  const bootcampStartDate = new Date("2024-12-03T00:00:00");

  const now = new Date();
  let endDate;

  // Calculate the difference in days between now and the bootcamp start date
  const diffTime = bootcampStartDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    endDate = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
  } else {
    endDate = bootcampStartDate;
  }
  /*
    // If the difference is 7 days or less, or if it's past the start date, set the countdown to start from 7 days

    if (diffDays <= 7) {
    endDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); 
    // Set endDate to 7 days from now
  } else {
    endDate = bootcampStartDate;
  }
*/

  const countdown = document.getElementById("countdown");
  const urgentMessage = document.getElementById("urgentMessage");

  function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdown.innerHTML = `
    <div class="time-unit flex flex-col items-center">
    <span class="number seconds text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${seconds}</span>
    <span class="label">ثانية</span>
  </div>
      <span class="colon text-4xl lg:text-6xl font-bold text-white">:</span>
      <div class="time-unit flex flex-col items-center">
        <span class="number minutes text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${minutes}</span>
        <span class="label">دقيقة</span>
      </div>
      <span class="colon text-4xl lg:text-6xl font-bold text-white">:</span>
      <div class="time-unit flex flex-col items-center">
      <span class="number hours text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${hours}</span>
      <span class="label">ساعة</span>
    </div>
      <span class="colon text-4xl lg:text-6xl font-bold text-white">:</span>
      <div class="time-unit flex flex-col items-center">
        <span class="number days text-4xl lg:text-6xl font-bold mb-2 text-purple-400">${days}</span>
        <span class="label">يوم</span>
      </div>
    `;
    // Show the countdown and hide the urgent message if there are more than 7 days left
    if (diffDays > 7) {
      countdown.classList.remove("hidden");
      urgentMessage.classList.add("hidden");
    } else {
      // If within 7 days or past the start date, always start the countdown from 7 and hide the urgent message
      countdown.classList.remove("hidden");
      urgentMessage.classList.add("hidden");
    }
  }

  setInterval(updateCountdown, 1000);
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // Show the button after 500px of scrolling
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelector(".mobile-menu-button").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});

window.addEventListener("load", function () {
  // Set a delay to ensure the Fillout script has time to insert the button
  setTimeout(function () {
    // Attempt to select the button within the #filloutContainer div
    var filloutButton = document.querySelector("#filloutContainer button");
    // If the button is found, change its text
    if (filloutButton) {
      filloutButton.textContent = "سجل الآن";
      filloutButton.style.fontFamily = '"Cairo", sans-serif';
      filloutButton.style.fontSize = "1.5rem"; // Equivalent to Tailwind's text-xl
      filloutButton.style.padding = "0.75rem 4rem";
    }
  }, 1); // Adjust the timeout as needed, here it's set to 3000 milliseconds (3 seconds)
});





  
