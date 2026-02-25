class Flatbread {
  constructor() {
    this.manifestUrl = 'https://cdn.jsdelivr.net/gh/CapitalistOnSteroids/Flatbread.js/database.json';
    this.data = null;
  }

  // Load the button data
  async init() {
    const response = await fetch(this.manifestUrl);
    this.data = await response.json();
    console.log("Flatbread.js: loaded!");
  }

  // The main function: Find by name and insert
  bake(buttonName, selector) {
    if (!this.data) return console.error("Flatbread not initialized. Run .init() first!");

    const btn = this.data.buttons.find(b => b.name === buttonName);
    if (!btn) return console.warn(`Button "${buttonName}" not found.`);

    const img = document.createElement('img');
    img.src = `${this.data.config.cdnBase}/${btn.file}`;
    img.alt = btn.name;
    img.loading = "lazy"; // Built-in browser lazy loading
    
    const target = document.querySelector(selector);
    if (target) target.appendChild(img);
  }
}
