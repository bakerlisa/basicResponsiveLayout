function desktopEnterNavigation(activeDataType){
	$('.flyouts').children().removeClass('active');
	$('.flyouts').find('[data-submenu="' + activeDataType + '"]').addClass('active');	
}

function noHoverNavigation(clickParent, mobileActiveDataType, activeDropdown){
	$('.flyouts').children().removeClass('active');
	clickParent.siblings().removeClass('active');
	
	if(clickParent.hasClass('active')){
		clickParent.removeClass('active');
		activeDropdown.removeClass('active');
	}else{
		clickParent.addClass('active');
		activeDropdown.addClass('active');
	}
}

$(document).ready(function(){
	//NAVIGATION - Desktop
	$('.navigation-container li').hover(function(event){
		var windowWidth = $(window).width();
		var activeDataType = $(this).attr('data-submenu');	

		if(windowWidth >= 1024 ){	
			$(this).siblings().removeClass('active');		
			$(this).addClass('active');		
			desktopEnterNavigation(activeDataType);
		}
		//Don't know the exact code off the top of my head: 

		//	if(!mouse is over nav || !mouse is not over flyouts){
		//		$('.navigation-container li').siblings().removeClass('active');
		//		$('.flyouts').children().removeClass('active');
		//	}
		//Close the submenus when you're not in the nav
	});	


	//NAVIGATION - Tablet & Mobile
	$('.navigation-container li').click(function(event){
		var windowWidth = $(window).width();
		var clickParent = $(this);
		var mobileActiveDataType = $(this).attr('data-submenu');
		var activeDropdown = $('.flyouts').find('[data-submenu="' + mobileActiveDataType + '"]');
		

		if(windowWidth < 1024 ){
			//If the parent link has submenu's, preventDefault - else go to link
			if(activeDropdown.length > 0 ){	
				event.preventDefault();
			}					
			noHoverNavigation(clickParent, mobileActiveDataType, activeDropdown);
		}	
	});

	/*panel navigation*/
	$('.mobile-menu').click(function(){
		$('.navigation-container').addClass('active');
		$('.flyouts').children().removeClass('active');
		$('body').addClass('active');	
	});

	$('.mobile-exit').click(function(){
		$('.navigation-container').removeClass('active');
		$('.flyouts').children().removeClass('active');
		$('body').removeClass('active');
	});

	$('.submenu-exit').click(function(){
		$('.navigation-container').removeClass('active');
		$('body').removeClass('active');
	});

	$('.mobile-submenu-back').click(function(){
		$(this).parent().removeClass('active');
	});

	//Footer
		//Newsletter
		$('.newsletter-submit').click(function(event){
			event.preventDefault();
			var email = $('.newsletter-input').val();
			var message = '';
			//Need regular expression to check email against inputted email
			//So I have it checking my email address
			var vaildEmail = 'lisa@niftymarketing.com';
			if(email === vaildEmail){
				
			}else{
				message = "Please provide a valid email";
			}

			if(message.length <= 0){
				//can't remember how to set up the delay, always have to look it up!.delay(5).fadeOut()
				$('.message').html('Thank you!').addClass('success').fadeIn();

			}else{
				$('.message').html(message).addClass('error').fadeIn();
				
			}

			//depending on what they wanted and how to email was set up would dictate what I would do from here
		});

		$('footer h4').click(function(){
			var parent = $(this).parent();
			
			if(parent.hasClass('active')){
				parent.removeClass('active');
			}else{
				parent.siblings().removeClass('active');
				parent.addClass('active');
			}
		});		



	
	
});//Doc Ready
