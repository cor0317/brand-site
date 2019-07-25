$(function(){
    // 상품 선택시 구매 페이지 링크
    $('.products li a')
      .attr('href', 'buy.html');

      //상품 구캐 > 수량 버튼
      var buy_quantity = {
         init_number : 1,   // 기본 수량 값
         number: 1, // 변경되는 수량값
         min_number : 1,   // 최소값
         max_number : 9   // 최대값
      }
      
      $('#btn-add').on('click', function(){if(buy_quantity.number == buy_quantity.max_number) return;
        buy_quantity.number++;
        $('#naumber').val(buy_quantity.number);
      });

      $('#btn-sub').on('click', function(){if(buy_quantity.number == buy_quantity.min_number) return;
        buy_quantity.number--;
        $('#naumber').val(buy_quantity.number);
      });
     
      $('.bottom-close').on('click',function(){
        $('.popup').removeClass('show')
    })
  })
  