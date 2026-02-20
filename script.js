   const container = document.getElementById("grid-container");
    const input = document.getElementById("gridSizeInput");
    const resetBtn = document.getElementById("resetBtn");

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

    // Update grid when input changes
    input.addEventListener("change", (e) => {
      createGrid(e.target.value);
    });
    
 // ResizeObserver to ensure proper layout recalculation
    const resizeObserver = new ResizeObserver(() => {
      // Force reflow recalculation for precision resizing
      const squares = document.querySelectorAll(".square");
      const squarePercent = 100 / currentSize;
      squares.forEach(sq => {
        sq.style.flex = `0 0 ${squarePercent}%`;
      });
    });

    resizeObserver.observe(container);

    // Initialize default grid
    createGrid(16);