document.addEventListener('DOMContentLoaded', function() {
    const startTestButton = document.getElementById('startTestButton');

    // Add the "link3" placeholder for now. Replace it when you have the actual link.
    const testLinks = [
        'https://nguyenluuducminh.github.io/assessment-web-app/',
        'https://lppphi.github.io/DanhGiaSV/',
        'https://xuan-cuong.github.io/Test-IT/' // Replace this with your actual third link
    ];

    // If you want to highlight specific words like in the image,
    // you can do it dynamically or just add <strong> tags in HTML.
    // Here's an example of how you could do it dynamically (optional)
    const visionItems = document.querySelectorAll('.vision-card li p');
    const keywordsToBold = [
        ["nền tảng ươm mầm và kết nối hàng đầu"],
        ["hệ sinh thái công nghệ bền vững"],
        ["tích cực vào quá trình chuyển đổi số"]
    ];

    visionItems.forEach((item, index) => {
        if (keywordsToBold[index]) {
            keywordsToBold[index].forEach(keyword => {
                const regex = new RegExp(`(${keyword})`, 'gi');
                item.innerHTML = item.innerHTML.replace(regex, '<strong>$1</strong>');
            });
        }
    });


    startTestButton.addEventListener('click', function() {
        // Filter out any placeholder links before choosing randomly
        const validLinks = testLinks.filter(link => link && !link.includes('PLACEHOLDER'));

        if (validLinks.length === 0) {
            alert('Chưa có link bài test nào được cấu hình!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * validLinks.length);
        const randomLink = validLinks[randomIndex];
        
        console.log('Redirecting to:', randomLink);
        window.location.href = randomLink;
    });
});