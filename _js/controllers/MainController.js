app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Most Popular Tv Show';


  //to change the color of the background, but it doesn't work outside the ng-repeat loop, i have to try it again
  // var backgroundBody = "pink";
  // $scope.mainShow = { 
  //   background: backgroundBody 
  // };
  
  $scope.shows = [
  {name: 'This is us',
    episodes: 18,
    shortname:'thisisus',
    cover: '_images/thisisus.jpg',
    synopsis: 'Sometimes life will surprise you. Starring Mandy Moore, Milo Ventimiglia and Sterling K. Brown," this refreshingly honest and provocative series, THIS IS US follows a unique ensemble whose paths cross and their life stories intertwine in curious ways. We find several of them share the same birthday, and so much more than anyone would expect. From the writer and directors of "Crazy, Stupid, Love." comes a smart, modern dramedy that will challenge your everyday presumptions about the people you think you know.',
    ytLink: 'https://www.youtube.com/watch?v=SSBe9xYdtbQ'
    /*,
    backgroundBody:'yellow'*/
  },
  {name: 'Claws',
    episodes: 10,
    shortname:'claws',
    cover: '_images/claws.jpg',
    synopsis: '"Claws", a midnight-dark, wickedly funny meditation on female badness set in a South Florida nail salon. "Claws" follows the rise of five diverse and treacherous manicurists working at the Nail Artisan of Manatee County salon, where there is a lot more going on than silk wraps and pedicures. At the center is salon owner Desna, who lives with and cares for her mentally ill twin brother, Dean. <br/> Desna\'s staff includes best friend Jennifer, a tenuously sober ex-party girl raising two children from previous relationships; Quiet Ann, Desna\'s enigmatic driver who also provides security for the salon; Polly, a mild-mannered preppy who recently served time in prison for identity theft; and Virginia, who makes no effort to hide her boredom and impatience with her job.',
    ytLink: 'https://www.youtube.com/watch?v=8V-zp5oO9jc'
     /*,
    backgroundBody:'purple'*/
  },
  {name: 'Girlboss',
    episodes: 13,
    shortname:'girlboss',
    cover: '_images/girlboss.jpg',
    synopsis: 'Based on Sophia Amoruso\'s book, "Girlboss" will follow Amoruso\'s story of how she went from selling vintage clothing on eBay to founding the multimillion-dollar Nasty Gal fashion label by age 27. In the series, Brittany Robertson portrays Sophia Amoruso, a rebellious, broke anarchist who refuses to grow up. She stumbles upon her passion of selling vintage clothes online and becomes an unlikely businesswoman. As she builds her retail fashion empire, she realizes the value and the difficulty of being the boss of her own life',
    ytLink: 'https://www.youtube.com/watch?v=g-U2G280kmI'
    /*,
    backgroundBody:'orange'*/
  },
  {name: 'Orphan Black',
    episodes: 50,
    shortname:'orphanblack',
    cover: '_images/orphanblack.jpg',
    synopsis: 'Orphan Black follows outsider, orphan and street-wise chameleon Sarah. After witnessing a woman\'s suicide, Sarah assumes the stranger\'s identity - who happens to look just like her. Expecting to solve all her problems by cleaning out the dead woman\'s savings, Sarah is instead thrust headlong into a kaleidoscopic mystery as she realizes the dizzying truth - she and the dead woman are clones. As Sarah searches for answers, she discovers the chilling fact that there are more people like her out there - genetically identical individuals who were planted in unsuspecting birth parents and nurtured in completely different circumstances. With no idea who created the clones, she\'ll need to discover the reason in a hurry as an assassin is killing them one by one.',
    ytLink:'https://www.youtube.com/watch?v=do_BCA-vR9E'
    /*,
    backgroundBody:'black'*/
  }
  ];

  

//when we click on a serie
$scope.selectMe = function ($event, shows){
  //we remove the overflow to let the cover go outside the white box
  $('section').removeClass('scrollable');
  $('section').addClass('block');


  //we remove the nav and the other element to get a white background , nav is in "visibility hidden" to keep the space
  $('.vignette_film').addClass('hidden');
  $('nav').addClass('hidden');
  $('nav').removeClass('block');
  // $('nav').addClass('red');
  
  //we keep the element clicked visible
  $(event.target).closest('.vignette_film').addClass('block');
  
  //and put the "active" class on it to restylize it
  $(event.target).closest('div').addClass('active');
  
  $('.close').addClass('block');



  //test color body background
  // $scope.background = "black";
  // console.log($scope.background);

}





//when we click on the cross /!\ the croos DOES NOT be on the vignette_film
$scope.closeMe = function (event, shows){

    //we add the class to make visible again the hidden elements due by the previous click
    $('section').addClass('scrollable');
    $('section').removeClass('block');

    
    //we remove the active class to put again its first style
    //we let the hidden elements be visible again
    //we remove the block, hidden and active class to all the "vignette_film" element to make it like the first time we open the webpage
    $('nav').addClass('block');
    $('nav').removeClass('hidden');
    $('.vignette_film').removeClass("hidden block active");

    $('.close').removeClass('block');
  }

}]);










