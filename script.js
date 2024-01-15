document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        fetch('HwidSpoofer.rar')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки файла: ' + response.status);
                }
                return response.blob();
            })
            .then(blob => {
                console.log('Загруженный Blob:', blob);
            })
            .catch(error => {
                console.error('Ошибка загрузки файла:', error);
            });
    });
});
