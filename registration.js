function sortTable(columnIndex) {
  const table = document.getElementById("registrationTable");
  const rows = Array.from(table.rows).slice(1); // Skip the header row
  const isAscending = table.dataset.sortOrder === "asc";
  table.dataset.sortOrder = isAscending ? "desc" : "asc";

  rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.toLowerCase();
    const bText = b.cells[columnIndex].textContent.toLowerCase();
    return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
  });

  rows.forEach(row => table.tBodies[0].appendChild(row));
}