const pickBtn = document.getElementById("pick-btn");

const hexInput = document.getElementById("hex-input");
const rgbInput = document.getElementById("rgb-input");
const pickedColor = document.getElementById("picked-color");

// Initialize Eyedropper if supported
const initEyeDropper = () => {
    if ("EyeDropper" in window) {
        pickBtn.classList.remove("hide");
        const eyeDropper = new EyeDropper();
        // Event listener for color selection
        pickBtn.addEventListener("click", async () => {
            try {
                const colorValue = await eyeDropper.open();
                
                const hexValue = colorValue.sRGBHex.toLowerCase();
                const rgbValue = hexToRgb(hexValue);
                result.style.display = "grid";
                hexInput.value = hexValue;
                rgbInput.value = rgbValue;
                pickedColor.style.backgroundColor = hexValue;
            } catch {
                alert("Your browser doesn't support Eyedropper Api!");
            }
        });
    } else {
        alert("Your browser doesn't support Eyedropper Api!");
    }
};



const copyToClipboard = (textId) => {
    const textElement = document.getElementById(textId);
    textElement.select();
    document.execCommand("copy");
};

const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
};


window.onload = initEyeDropper;