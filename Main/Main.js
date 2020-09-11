$('.fa-edit').on('click',function(){

        
    var cols_ = document.querySelectorAll('.box');
    var dragSrcEl_ = null;
  
    handleDragStart = function(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
  
      dragSrcEl_ = this;
  
      this.style.opacity = '0.4';
  
      // this/e.target is the source node.
      $(this).addClass('moving');
    };
  
    handleDragOver = function(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Allows us to drop.
      }
  
      e.dataTransfer.dropEffect = 'move';
  
      return false;
    };
  
    handleDragEnter = function(e) {
      $(this).addClass('over');
    };
  
    handleDragLeave = function(e) {
      // this/e.target is previous target element.
  
      $(this).removeClass('over');
    };
  
    handleDrop = function(e) {
      // this/e.target is current target element.
      console.log(e.dataTransfer);
  
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
  
      // Don't do anything if we're dropping on the same column we're dragging.
      if (dragSrcEl_ != this) {
        dragSrcEl_.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
  
      return false;
    };
  
    handleDragEnd = function(e) {
      // this/e.target is the source node.
      this.style.opacity = '1';
  
      [].forEach.call(cols_, function (col) {
        $(col).removeClass('over');
        $(col).removeClass('moving');
      });
    };
  
    [].forEach.call(cols_, function (col) {
      col.setAttribute('draggable', 'true');  // Enable columns to be draggable.
      col.addEventListener('dragstart', this.handleDragStart, false);
      col.addEventListener('dragenter', this.handleDragEnter, false);
      col.addEventListener('dragover', this.handleDragOver, false);
      col.addEventListener('dragleave', this.handleDragLeave, false);
      col.addEventListener('drop', this.handleDrop, false);
      col.addEventListener('dragend', this.handleDragEnd, false);
    });

    
  });
  


  

    
      $('#webchat').hide()
      $('#chatbot').on('click',function(){
      $('.modal-body #webchat').show();
      $('img').hide();
     
    });
    
    $('.close').on('click',function(){
        $('img').show(); 
    });
    $('body').on('click',function(){
        $('img').show(); 
    });


    (async function() {
    
      window.WebChat.renderWebChat(
        {
          directLine: window.WebChat.createDirectLine({ token : 'LClctYwctZY.bslfYm74sJFrE7dtG4fga80VgdpRhRX3wGUML207Bks' }),
          webSpeechPonyfillFactory: window.WebChat.createBrowserWebSpeechPonyfillFactory(),
        },
        document.getElementById('webchat')
      );
      document.querySelector('#webchat > *').focus();
    })().catch(err => console.error(err));
