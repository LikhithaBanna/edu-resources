// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const listItems = document.querySelectorAll("ul li");

  // Filter resources as user types
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    listItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    });
  });
});
