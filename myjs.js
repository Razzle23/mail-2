 $(document).ready(function(){

        $('.submit').click(function(){
            //стираем старый алерт
            $('.emailalert').html(' ');
            //получаем значение поля ввода
            var em=$("#email").val();
            //alert(em);
            //шаблон регулярного выражения для проверки правильности ввода email
            var emRegExp=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            //проверка через ф-ю .test() соотнош рег выражения и данных в форме
            if(!emRegExp.test(em)){
                var eReg='<div class="alert alert-danger col-sm-9  col-sm-offset-2 col-xs-offset-1 col-xs-10"><p class="text-center"><strong>Неправильный email адрес</strong></p></div>';
                $('.emailalert').html(eReg);
            }
            //если поле пустое
            if(em==''){
                 var e='<div class="alert alert-danger col-sm-9  col-sm-offset-2 col-xs-offset-1 col-xs-10"><p class="text-center"><strong>заполните поле с адресом электронной почты </strong></p></div>';
                 //выводим предупреждение
                 $('.emailalert').html(e);
            }
            //стираем старый алерт
            $('.bodyalert').html(' ');
            var bd=$("#body").val();
            //если поле пустое
            if(bd==''){
                 var b='<div class="alert alert-danger col-sm-9  col-sm-offset-2 col-xs-offset-1 col-xs-10"><p class="text-center"><strong>Заполните поле с текстом письма</strong></p></div>';
                 //выводим предупреждение
                 $('.bodyalert').html(b);
            }
            if(emRegExp.test(em)&&!em==''&&!bd==''){
            $.ajax({
          //как будем передавать данные
                  type: "POST",
          //куда передаём
                  url: "send.php",
          //какие данные передаём
                  data: {email: em, body: bd},
          //событие перед отправкой ajax
                  beforeSend: function(){
                  //стираем старый вывод
                     $('#result').html(' ');
                  //выводим гифку
                      $(".load").show();
                  },
          //событие после получения ответа, 
          //получаем массив в data
                  success: function(data){
                  //скрываем гифку
                      $(".load").hide();
                      $('#result').html(data);
                      //выводим модальное окно
                      $('#myModal').modal();
                  }
                });
            }
        })
    })


