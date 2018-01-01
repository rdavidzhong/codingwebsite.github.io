function Excuse() {
	
  var thing_that_sucks = ['Valve', 'Mass Effect: Andromeda', 'StarWars BattleFront: 2', 'Your Waifu', 'Mobile Legends', 'The Crew', 'Hawaii','Pokemon', 'Life','Bleach','Cancer','Electronic Arts', '13 reasons why', 'Nihilism', 'The Universe', 'Harvard', 'Homework', 'China', 'Donald Trump', 'Donald Duck', 'This Existence', 'The Lord of the Rings', 'Game of Thrones', 'CSGO', 'Doki Doki, why do you watch this club?', 'Exercise', 'Badminton', 'My Hero Academia', 'Sword Art Online', 'Halloween', 'Science', 'Math', 'Kumon', 'Batman VS Superman', 'Food', 'Duck', 'Mickey Mouse', 'Sonic', 'Tails', 'Lootboxes', 'Overwatch', 'Call of Duty', 'Darius', 'Galio', 'Team NRG', 'Team Rocket', 'School', 'Prom', 'Camp', 'Studying', 'Grammar', 'English', 'ADST', 'Marketing', 'Ubisoft', 'Competetive CSGO', 'Darkness', 'Money', 'Light', 'Windows', 'Apple', 'Microsoft', 'Anime', 'Football', 'Supercell', 'Halo', 'Glue', 'Tape', 'Wifi', 'Citrus', 'Water', 'Taliban', 'Isis',  'Vietnam', 'North Korea', 'K-Pop','Makeup', 'Ireland', 'Alchohol', 'Smoking', 'Safety', 'Dust II', 'Mirage', 'Monitors', 'Sound', 'Spain', 'Belgium', 'Activision', 'TakeTwo', 'GTA V', 'Mass Effect: Andromeda', 'Bomb Site B', 'Bomb Site A', 'Physics'];

var thing_that_sucks_2 = ['Dogs', 'Cats', 'Hamstesr', 'Chinchillas', 'Rocks','Iguanas', 'Turtles', 'Best Friends', 'Gerbils', 'Bunnies', 'Gummy Worms', 'Rocks', 'Fish', 'Disks', 'Lootboxes',  'The Cleveland Cavaliers','Books','Mandarin Oranges',  'Parties', 'Large Corperations', 'Equations', 'Fractions', 'Decimals', 'Windows', 'Apple', 'Microsoft', 'Anime', 'Dictionaries', 'Backpacks', 'Staplers', 'Posters', 'Horses','Tissues', 'Pencils',  'Tumblr Users', 'Keyboard warriors', 'Dragons', 'Millenials', 'Girls', 'Boys', 'Erasers',  'Textbooks', 'Doors','Calculators', ' Monitors', 'Mirrors', 'Chargers', 'Sweaters', 'Dresses', 'Socks', 'Skirts', 'Desks', 'Lamps', 'Beds', 'Parasites', 'Binders', 'Folders', 'Teemo Doesnt'];


	var reason_why_it_sucks = ['Life', 'Logic', 'Reasons', 'Erasers', 'Rocks', 'Remixes', 'Gaben', 'Lootboxes', 'it Just Sucks', 'Paperclips', 'Trump', 'recycling', 'Christmas Gifts', 'Plagiarism', 'Confiscation', 'Barf', 'Thievery', 'Ransom', 'Water Bottle Spillage', 'Loosing of Socks', 'Misplacement of Socks', 'ITS DANGEROUS TO GO ALONE', 'Shredder', 'Hide And Seek', 'Freedom', 'Solitude', 'Ebay', 'Craigslist', 'Etsy', 'Twitter', 'Instagram', 'Snap-Chat', 'Youtube', 'ILLAOI DOESNT HAVE A DUNK-MASTER SKIN', 'Sub-Tweets', 'Youtube Kids', 'Reddit', 'Downvosts', 'BASKETBALL CORPORATIONS ARE BUYING INTO LEAGUE OF LEGENDS LCS!', 'Lebron James', 'Vlogs', 'Jake Paul', 'Bleh', 'they can go jump off a cliff', 'TEAM NRG SUCKS', 'Cyka Blyat', 'Dummkopf'];
	
	var reason_why_it_sucks2 = ['Life', 'Logic', 'Reasons', 'Erasers', 'Rocks', 'Remixes', 'Gaben', 'Lootboxes', 'it Just Sucks', 'Paperclips', 'Trump', 'recycling', 'Christmas Gifts', 'Plagiarism', 'Confiscation', 'Barf', 'Thievery', 'Ransom', 'Water Bottle Spillage', 'Loosing of Socks', 'Misplacement of Socks', 'ITS DANGEROUS TO GO ALONE', 'Shredder', 'Hide And Seek', 'Freedom', 'Solitude', 'Ebay', 'Craigslist', 'Etsy', 'Twitter', 'Instagram', 'Snap-Chat', 'Youtube', 'ILLAOI DOESNT HAVE A DUNK-MASTER SKIN', 'Sub-Tweets', 'Youtube Kids', 'Reddit', 'Downvosts', 'Basketball Corporations are Buying their Way into League of Legengds LCS!', 'Lebron James', 'Vlogs', 'Jake Paul', 'Bleh', 'they can go jump off a cliff', 'TEAM NRG', 'Cyka Blyat', 'Dummkopf'];
	
	
	var x  = Math.floor((Math.random() * 10) + 1);
	
  if ( x % 2 === 0) {
  var noun = thing_that_sucks[Math.round(Math.random()*(thing_that_sucks.length-1))];
  var because = reason_why_it_sucks[Math.round(Math.random()*(reason_why_it_sucks.length-1))];

 
  document.getElementById('excuses').value =  noun + ' ' +'Sucks Because' + ' ' + because; '.</div>' 
  }
  
  else{ 
    var noun2 = thing_that_sucks_2[Math.round(Math.random()*(thing_that_sucks_2.length-1))];
  var because2 = reason_why_it_sucks2[Math.round(Math.random()*(reason_why_it_sucks2.length-1))];
 
document.getElementById('excuses').value =  noun2 + ' ' +'Suck Because' + ' ' + because2; '.</div>' 
  }

}
  
  
  