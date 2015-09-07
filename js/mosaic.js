[].slice.call(document.querySelectorAll('../images/img.mosaic')).forEach(function(img){
  img.addEventListener('load',function(){
    var image=this;
    var canvas=document.createElement('canvas');
    canvas.width=image.offsetWidth;
    canvas.height=image.offsetHeight;
    image.parentNode.replaceChild(canvas,image);

    var context=canvas.getContext('2d');
    context.imageSmoothingEnabled=false;
    context.webkitImageSmoothingEnabled=false;

    var i=100;
    var mosaic=document.createElement('canvas');
    var mosaicContext=mosaic.getContext('2d');
    mosaicTick();
    function mosaicTick(){
      if(i>0){
        mosaic.width=canvas.width/i;
        mosaic.height=canvas.height/i;
        mosaicContext.drawImage(image,0,0,mosaic.width,mosaic.height);
        
        context.clearRect(0,0,canvas.width,canvas.height);
        context.drawImage(mosaic,0,0,canvas.width,canvas.height);
        
        i--;
        requestAnimationFrame(mosaicTick);
      }
    }
  });
});