$('#title').keyup(function() {
    $('#slug').val($(this).val().toLowerCase().split(',').join('').replace(/\s/g,"-"));
});
© 2021 GitHub, Inc.
