let clickAudio = null;

export function initClickSound(path = "/Audio/clicking.mp3", volume = 0.6) {
    if (!clickAudio) {
        clickAudio = new Audio(path);
        clickAudio.volume = volume;
        clickAudio.preload = "auto";
    }
}

export function playClickSound() {
    if (!clickAudio) {
        console.warn("Click sound not initialized. Call initClickSound() first.");
        return;
    }

    clickAudio.currentTime = 0;
    clickAudio.play().catch((err) => {
        console.error("Error playing click sound:", err);
    });
}
