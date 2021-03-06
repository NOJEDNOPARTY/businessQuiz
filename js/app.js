var common = {
	init: function() {
		common.main();
		common.stringAnimate();
	},
	main: function(){
		$('.start-btn').click(function(e){
			e.preventDefault();
			var dataBlock = '.' + $(this).attr('data-block')
			var dataClose = '.' + $(this).attr('data-close')
			$(dataBlock).addClass('active');
			$(dataClose).addClass('hidden');
		});
		
		$('.btn-popup').click(function(e){
			e.preventDefault();
			var dataBlock = '#' + $(this).attr('data-block')
			$('.popup-wrapper').removeClass('active');
			$(dataBlock).addClass('active');
		});

		$('.popup-close').click(function(e){
			e.preventDefault();
			$('.popup-wrapper').removeClass('active');
		});

		$('.form-radio label').click(function(e){
			if($(this).hasClass('another-trigger')) {
				if($(this).find('input').prop("checked") == true) {
					$('.another-field').addClass('active');
				}
			}else {
				$('.another-field').removeClass('active');
			}
		});
		
		$('.trigger-btn').click(function(e){
			e.preventDefault();
			var dataBlock = '.' + $(this).attr('data-block');
			var dataprize = '.' + $(this).attr('data-prize');
			var dataProgress = $(this).attr('data-progress');
			var dataProgressText = $(this).attr('data-progress-text');
			$('.toggle-block').removeClass('active');
			$('.quiz-progress-line').css('max-width', dataProgress);
			$('.quiz-progress-text span').text(dataProgressText)
			$(dataBlock).addClass('active');
			$(dataprize).addClass('active');
		});
	},
	stringAnimate: function() {
		$.fn.endlessScroll = function (options) {
		
				var options = $.extend({ width: "400px", height: "100px", steps : -2, speed : 40, mousestop : true }, options);
		
				var elem = $(this);
				var elemId = $(this).attr("id");
				var istep = options.steps;
		
				elem.css({ "overflow": "hidden", "width": options.width, "height": options.height, "position": "relative", "left": "0px", "top": "0px" })
				elem.wrapInner("<nobr />");
		
				elem.mouseover(function () {
					if (options.mousestop) { istep = 0; }
				})
				elem.mouseout(function () {
					istep = options.steps;
				});
				
				elem.wrapInner("<div id='" + elemId + "1' />");
				var e1 = $('#' + elemId + "1");
				e1.css({ "position": "absolute" }).clone().attr('id', elemId + "2").insertAfter(e1);
				var e2 = $('#' + elemId + "2");
				Repos(e1, e2, options.steps > 0);
		
				var refreshId = setInterval(function () {
					e1.css({ "left": (parseInt(e1.css("left")) + istep) + "px" });
					e2.css({ "left": (parseInt(e2.css("left")) + istep) + "px" });
					if ((parseInt(e1.css("left")) < 0) || (parseInt(e1.css("left")) > e1.width())) {
						Repos(e1, e2, options.steps > 0);
					}
				}, options.speed);
		
		
				function Repos(e1, e2, fwd) {
					e1.css({ "left": (fwd) ? "0px" : e1.width() + "px" });
					e2.css({ "left": (fwd) ? (-1 * e1.width()) + "px" : "0px" });
				}
		
				return elem;
		}
		$("#marquee").endlessScroll({ 
			width: "100%", // Ширина строки
			height: "44px", // Высота строки
			steps: -1, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
			speed: 0, // Скорость анимации (0 - максимальная)
			mousestop: true // Останавливать ли полосу при наведении мыши (да - true, нет - false)
		});
	}

};

(function() {
	common.init();
}());


