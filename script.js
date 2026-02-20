   const container = document.getElementById("grid-container");
    const input = document.getElementById("gridSizeInput");
    const resetBtn = document.getElementById("resetBtn");
     const resizeBtn = document.getElementById("resizeBtn");

    let currentSize = 16;

    // Create grid
    function createGrid(size) {
      currentSize = parseInt(size);
      container.innerHTML = "";

      const squarePercent = 100 / currentSize;

      for (let i = 0; i < currentSize * currentSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `0 0 ${squarePercent}%`;

        // Hover coloring
        square.addEventListener("mouseenter", () => {
          square.style.backgroundColor = randomColor();
        });

        container.appendChild(square);
      }
    }


      // Random RGB color
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    // Reset colors
    resetBtn.addEventListener("click", () => {
      document.querySelectorAll(".square").forEach(sq => {
        sq.style.backgroundColor = "";
      });
    });

    //Resize Grid with button
    resizeBtn.addEventListener("click", () => {
       let size = prompt("Enter new grid size (e.g., 10 for 10x10):", "10");

    if (size > 100) {
      alert("Max number of Grids is 100");
      return;
    }  
    if (size === null || size === "") return; // Cancelled 

    createGrid(size);
    });
    
    // Initialize default grid
    createGrid(16);