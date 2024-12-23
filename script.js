// Function to display marine life information
function showMarineLife() {
    const marineInfo = `
    <h3>Marine Life Facts:</h3>
    <ul>
      <li><strong>Whales:</strong> The largest animal on Earth, blue whales can grow up to 100 feet long!</li>
      <li><strong>Coral Reefs:</strong> Coral reefs are like underwater rainforests, home to thousands of species of fish and other sea life.</li>
      <li><strong>Sharks:</strong> Sharks are essential for maintaining the balance of the ocean's ecosystems. They help control fish populations.</li>
    </ul>
  `;
    document.getElementById("marine-info").innerHTML = marineInfo;
}

// Function to display shipwrecks information
function showShipwrecks() {
    const shipwreckInfo = `
    <h3>Famous Shipwrecks:</h3>
    <ul>
      <li><strong>Titanic:</strong> The Titanic sank in 1912 after hitting an iceberg in the North Atlantic. Its wreck was discovered in 1985.</li>
      <li><strong>Mary Celeste:</strong> Found abandoned in 1872, the mystery of the Mary Celeste's crew disappearance remains unsolved.</li>
      <li><strong>USS Arizona:</strong> Located in Pearl Harbor, the wreck of the USS Arizona is a memorial to those who died during the attack on December 7, 1941.</li>
    </ul>
  `;
    document.getElementById("shipwreck-info").innerHTML = shipwreckInfo;
}

// Function to display underwater volcanoes information
function showVolcanoes() {
    const volcanoInfo = `
    <h3>Underwater Volcanoes:</h3>
    <ul>
      <li><strong>Krakatoa:</strong> Although famous for its eruption on land, Krakatoa is actually part of a volcanic island system in the Sunda Strait, Indonesia.</li>
      <li><strong>Loihi:</strong> Located near the Big Island of Hawaii, Loihi is an active underwater volcano that's slowly growing above sea level.</li>
      <li><strong>Axial Seamount:</strong> An underwater volcano off the coast of Oregon, known for frequent eruptions and seismic activity.</li>
    </ul>
  `;
    document.getElementById("volcano-info").innerHTML = volcanoInfo;
}
