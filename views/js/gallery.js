document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.card-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      alert('has compardo la obra');
    });
  });
});
