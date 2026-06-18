/* ============================================
   MAIN.JS — Expense Tracker Entry Point
   ============================================
   Purpose: Initializes the Expense Tracker application.
   
   Steps:
   1. Load saved transactions from localStorage
   2. Render the initial UI
   3. Set up form submission handler
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Load any previously saved transactions from localStorage
  initializeTransactions();

  // Step 2: Render the transaction list and summary
  renderTransactions();
  renderSummary();

  // Step 3: Set up the form submission handler
  const form = document.getElementById("transaction-form");
  form.addEventListener("submit", handleFormSubmit);
});
