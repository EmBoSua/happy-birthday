(function () {

// Lập trình thay đổi ảnh mỗi 5 giây và thêm hiệu ứng xoay
const images = ["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg", "avatar-4.jpg", "avatar-5.jpg", "avatar-6.jpg"]; // Danh sách các ảnh

const imageElement = document.getElementById("changing-image");
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const nextImage = images[currentIndex];

    // Thêm class "rotate" để kích hoạt animation
    imageElement.classList.add("fade-out");

    // Loại bỏ class "rotate" sau khi hoàn thành animation
    setTimeout(() => {
        imageElement.src = nextImage;
        imageElement.classList.remove("fade-out");
    }, 750); // 750ms sau khi xoay, loại bỏ class "rotate"
}

// Gọi hàm thay đổi ảnh mỗi 5 giây
setInterval(changeImage, 5000); // 5000ms (5 giây)

function playMusic(){
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && !myAudio.paused) {
        //Its playing...do your job

    } else {
        myAudio.play();
        //Not playing...maybe paused, stopped or never played.

    }
}

const wishes = [
    "Chúc mừng sinh nhật 🍀🍀🍀",
    "Tuổi mới gặp thật nhiều may mắn",
    "Luôn luôn mỉm cười",
    "Sớm ngày đạt được mong ước",
];

const wishesContainer = document.getElementById("wishes-container");
let currentWishIndex = 0;
let currentCharIndex = 0;

function printWishes() {
    if (currentWishIndex < wishes.length) {
        const currentWish = wishes[currentWishIndex];

        if (currentCharIndex < currentWish.length) {
            const char = currentWish.charAt(currentCharIndex);
            const charElement = document.createElement("span");
            charElement.textContent = char;
            wishesContainer.appendChild(charElement);
            currentCharIndex++;

            setTimeout(printWishes, 100); // Điều chỉnh tốc độ in
        } else {
            // Khi in xong một lời chúc, chuyển sang lời chúc tiếp theo
            currentWishIndex++;
            currentCharIndex = 0;
            wishesContainer.appendChild(document.createElement("br"));
            setTimeout(printWishes, 1000); // Điều chỉnh thời gian chờ trước khi in lời chúc tiếp theo
        }
    }
}


const birthdayContainer = document.querySelector('.birthday-container');
const container = document.querySelector('.container');

birthdayContainer.addEventListener('click', () => {
    // Ẩn birthday-container
    birthdayContainer.style.display = 'none';
    // Hiển thị container
    container.style.display = 'flex';

    playMusic();

    // Gọi hàm in lời chúc
    printWishes();
});


})("sweaverD.com");