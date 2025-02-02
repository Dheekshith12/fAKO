function analyzePhoto() {
  const fileInput = document.getElementById('photoUpload');
  const resultDiv = document.getElementById('result');

  if (fileInput.files.length === 0) {
    alert('Please upload a photo.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;

    img.onload = function () {
      // Dummy analysis (replace with actual logic)
      const skinTone = "Light";
      const hairColor = "Black";
      const eyeColor = "Brown";
      const facialHair = "None";
      const faceShape = "Oval";
      const suggestedColors = ["Blue", "Green", "White"];

      resultDiv.innerHTML = `
        <p><strong>Skin Tone:</strong> ${skinTone}</p>
        <p><strong>Hair Color:</strong> ${hairColor}</p>
        <p><strong>Eye Color:</strong> ${eyeColor}</p>
        <p><strong>Facial Hair:</strong> ${facialHair}</p>
        <p><strong>Face Shape:</strong> ${faceShape}</p>
        <p><strong>Suggested Colors:</strong> ${suggestedColors.join(', ')}</p>
      `;
    };
  };

  reader.readAsDataURL(file);
}