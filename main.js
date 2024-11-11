const openModalButton = document.getElementById("openModalBtn");
openModalButton.addEventListener("click", function() {
    const modal = document.getElementById("customModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];
  
    // Open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };
  
    // Close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };
  
    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  