var $ = require('jquery'); // 美猴王 图片预览组件

var preview = function(img1, img2, img2_img, wrap, mousebg){
	this.img1 = img1;
	this.img2 = img2;
	this.img2_img = img2_img;
	this.wrap = wrap;
	this.mousebg = mousebg;
}

preview.prototype.init = function() {
	this.img1.on('mousemove', function(event){
		var mouseX = event.offsetX;
		var mouseY = event.offsetY;
		if(mouseX < this.mousebg[0].offsetWidth / 2){
            mouseX = this.mousebg[0].offsetWidth / 2;  
        }  
        if(mouseX > this.img1[0].offsetWidth - this.mousebg[0].offsetWidth / 2){  
            mouseX = this.img1[0].offsetWidth - this.mousebg[0].offsetWidth / 2;  
        }  
        if(mouseY < this.mousebg[0].offsetHeight / 2){  
            mouseY = this.mousebg[0].offsetHeight / 2;  
        }  
        if(mouseY > this.img1[0].offsetHeight - this.mousebg[0].offsetHeight / 2){  
            mouseY = this.img1[0].offsetHeight - this.mousebg[0].offsetHeight / 2;  
        }
        this.img2_img.css('left', -2 * mouseX + 190 + 'px');  
        this.img2_img.css('top', -2 * mouseY + 190 + 'px');
		this.mousebg.css('left', mouseX - this.mousebg[0].offsetWidth / 2 + 'px'); 
		this.mousebg.css('top', mouseY - this.mousebg[0].offsetHeight / 2 + 'px');
	}.bind(this))
}

export { preview }