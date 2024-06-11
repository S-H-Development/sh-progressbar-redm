$(document).ready(function() {
    let interval;

    window.addEventListener('message', (event) => {
        const data = event.data;

        if (data.type == 'progress') {
            const totalMilliseconds = data.duration;
            const color = data.color || 'rgb(87, 196, 199)';
            const progressBottomText = $('.progress-bottom-text');
            
            progressBottomText.css('color', color);
            progressBottomText.text(data.text);

            $('.progress-container').css('display', 'flex');
            startProgress(totalMilliseconds, color);
        }
    });

    function startProgress(totalMilliseconds, color) {
        const progressBar = $('.progress-fill');
        const progressText = $('.progress-text');

        let currentMilliseconds = totalMilliseconds;
        const intervalTime = 10;
        const decrement = intervalTime;
    
        progressText.text(`${totalMilliseconds / 1000}s`);
    
        interval = setInterval(() => {
            currentMilliseconds -= decrement;
    
            const remainingSeconds = Math.ceil(currentMilliseconds / 1000);
            progressText.text(`${remainingSeconds}s`);

            const progressPercent = ((totalMilliseconds - currentMilliseconds) / totalMilliseconds) * 100;

            progressBar.css('background', `conic-gradient(${color} ${progressPercent}%, transparent 0deg)`);

            if (currentMilliseconds <= 0) {
                clearInterval(interval);
                resetProgress();
            }
        }, intervalTime);
    }

    function resetProgress() {
        clearInterval(interval);
        $('.progress-container').css('display', 'none');
        $('.progress-fill').css('background', 'conic-gradient(transparent 0%, transparent 0deg)');
    }
});