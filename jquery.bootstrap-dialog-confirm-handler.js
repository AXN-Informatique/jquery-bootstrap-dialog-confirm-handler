
(function($) {

    $.fn.bootstrapDialogConfimHandler = function() {

        if (this.length > 1) {
            this.each(function() {
                $(this).bootstrapDialogConfimHandler();
            });

            return this;
        }

        return $(this).on('click', function(event) {
            var $element = $(this);

            if ($element.data('confirmed')) {
                return true;
            }

            event.preventDefault();

            BootstrapDialog.confirm($element.data('confirm'), function(yes) {
                if (yes) {
                    $element.attr('data-confirmed', 1);
                    $element.get(0).click();
                }
            });
        });
    };

})(jQuery);
