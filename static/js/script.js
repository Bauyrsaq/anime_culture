$(document).ready(function() {
    $.ajax({
      url: '/get_users',
      type: 'GET',
      success: function(data) {
        // Обработка данных, например, вывод на консоль
        console.log(data);
      },
      error: function(error) {
        console.error('Error fetching users:', error);
      }
    });
  });

  