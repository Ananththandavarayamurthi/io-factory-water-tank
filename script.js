function calculateWater() {
    const blockHeightsInput = document.getElementById('blockHeights').value.trim();
    const blockHeightsArray = blockHeightsInput.split(',').map(Number);
  
    const n = blockHeightsArray.length;
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterUnits = 0;
  
    const waterTankDiv = document.getElementById('waterTank');
    waterTankDiv.innerHTML = '';
  
    let svgShape = `<svg width="${n * 24}" height="150" xmlns="http://www.w3.org/2000/svg">`;
  
    while (left <= right) {
      if (blockHeightsArray[left] <= blockHeightsArray[right]) {
        if (blockHeightsArray[left] > leftMax) {
          leftMax = blockHeightsArray[left];
        } else {
          waterUnits += leftMax - blockHeightsArray[left];
        }
        svgShape += `<rect class="bar fill" x="${left * 24}" y="${150 - blockHeightsArray[left] * 15}" width="20" height="${blockHeightsArray[left] * 15}" />`;
        left++;
      } else {
        if (blockHeightsArray[right] > rightMax) {
          rightMax = blockHeightsArray[right];
        } else {
          waterUnits += rightMax - blockHeightsArray[right];
        }
        svgShape += `<rect class="bar fill" x="${right * 24}" y="${150 - blockHeightsArray[right] * 15}" width="20" height="${blockHeightsArray[right] * 15}" />`;
        right--;
      }
    }
  
    svgShape += `</svg>`;
    waterTankDiv.innerHTML = svgShape;
  
    const output = document.getElementById('output');
    output.innerText = `Units of Water Stored: ${waterUnits}`;
  }
  