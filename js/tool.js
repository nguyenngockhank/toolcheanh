//  TẠO ĐỐI TƯỢNG CANVAS
var canvas = new fabric.Canvas('canvas', {});

var BackgroundImage = {
	setEvent: function(){
		$('.thumbnail').click(function(){
			BackgroundImage.handleEvent(this)
		})
	}, 
	handleEvent: function(imgElement) {
		var src = $(imgElement).attr('src')
	    fabric.Image.fromURL(src, function(oImg) {
	       canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas))
	       canvas.setWidth(oImg.width);
	       canvas.setHeight(oImg.height);
	    });
	}
}


var Text = {
	setEvent: function(){
		$('#ctrlAddText').click(function(){
			Text.handleEvent();
		})
	},
	handleEvent: function(){
		var content = $('#ctrlText').val();
		var param = {
			fill: 'black', // color
			fontSize: 35,
		};
		var textObj = new fabric.Text(content, param);
		canvas.add(textObj)
	}
}

var Download = {
	setEvent: function(){
		$('#ctrlSave').click(function(){
			Download.handleEvent(this);
		})
	},
	handleEvent: function(anchorElement){
		var dataURL = document.getElementById('canvas').toDataURL('image/png');
		anchorElement.href = dataURL;
		anchorElement.download = "RandomName.png"
	}

	
}


// KHỞI TẠO 
BackgroundImage.setEvent();
Text.setEvent();
Download.setEvent();