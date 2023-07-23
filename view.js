$(document).ready(function() {
    $('.ebook-link').click(function(event) {
        event.preventDefault();

        var ebookUrl = $(this).attr('href');
        var popupContent = '<iframe id="pdf-viewer" src="' + ebookUrl + '" frameborder="0"></iframe>';

        var popupContainer = $('<div class="popup-container"></div>');
        var popupContentWrapper = $('<div class="popup-content"></div>');
        popupContentWrapper.html(popupContent);
        popupContainer.append(popupContentWrapper);

        $('body').append(popupContainer);

        popupContainer.click(function() {
            $(this).remove();
        });
    });
});
