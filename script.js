document.addEventListener("alpine:init", () => {
    Alpine.data("imageSlider", () => ({
        currentIndex: 1,
        images: [
            "images/pdf.jpg",
            "images/codebase.jpg",
            "images/googleDrive.jpg",
            "images/slackMessages.jpg",
            "images/SQL_Database.jpg",
        ],
        previous() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        forward() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            }
        },
    }));
});