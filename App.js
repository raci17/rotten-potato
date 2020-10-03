import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const textdesign = {fontWeight: "bold", fontSize:25, color:"#ffe7be"};
const textdesing2 = {fontWeight: "bold", color:"#ffe7be"};

/*Movies Dataset*/
const Movie = [
  {
    url: "https://imgur.com/RxKzr2y.jpg",
    MovieTitle: "Avengers",
    MovieDesc:
      "Ratings 8.0/10\n2012",
    MovieRating: 3.5,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Joss Whedon</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nRobert Downey Jr. \nChris Evans \nMark Ruffalo \nChris Hemsworth \nScarlett Johansson \nJeremy Renner \nTom Hiddleston \nClark Gregg \nCobie Smulders \nStellan Skarsgård \nSamuel L. Jackson`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's "dream team" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}After all the films leading to this one we were promised the Avengers on screen and this film gave us that big time. This film sees a group of big personalities having to come together and defeat a mad man and his army from enslaving humanity. One of the most important parts of the build up to this film was Robert Downey jnr's performance as Tony stark/iron man, and he is just as awesome in this film. His character grows in all these films but he is still the narcissist that we love. Also Chris Evans as captain America was really important as he is the leader and comes across as the moral compass of the whole film but he isn't boring which is great for the character. The rest of the performances are great as well, first of all is the recasting of Mark ruffalo as Bruce banner/hulk and he was the biggest surprise in this film. He was great in both roles and the hulk has absolutely never been better then this film. Chris Hemsworth is back as Thor and this guy is absolutely seriously movie star and makes this character a great character full of personality. Scarlett Johansson returns as black widow and she is sexy and tough while also proving that she is also the best female in these superhero films around. Samuel L Jackson is back as Nick fury and he is great as the character and squeezes the most he can out of this great character. The one member of the team that isn't really developed is Hawkeye, he isn't really himself for the most of the movie but even then the last battle he becomes great. What is important in a film like this is having a great villain and Tom hiddlestone as Loki definitely succeeds at that. He is just so fun to watch and you buy that he could pull off all this destruction. Sometimes simplicity is best for a story and this is one of those times, it has happened before that a group of combustible elements have to team up but this film gets the most out of it and adds real drama to the film. The script is the best part of the film and the dialogue between the characters is what makes this film so enjoyable to watch because it makes all the characters feel unique and there own personalities. The style of this film is great, the action is all enjoyable and the film looks great but I have to mention the show stealer that is the incredible hulk. This is the best interpretation of the hulk and he looks better then ever and he is possibly the best character in the film. Overall this is one of my favourite films ever and this is a comic book fans dream.</Text></Text>,
  },
  {
    url: "https://imgur.com/wOmxja8.jpg",
    MovieTitle: "Venom",
    MovieDesc:
      "Ratings 6.7/10\n2018",
    MovieRating: 2,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Ruben Fleischer</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nTom Hardy \nMichelle Williams \nRiz Ahmed \nScott Haze \nReid Scott`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}Had a test screening tonight in cinema I work at, and couldn't wait to watch my all-time favorite Marvel (anti) hero on big screen. Tom Hardy is great as always, that guy really can act. Can't think of anyone else who would be a better choice for the role but him. Introduction was really long, but I was not bored for a second. When Venom comes in his true form - the party starts! Wish few action scenes were less like Michael Bay's style (hardly see anything) but the inner child in me was really happy for Venom's maniacal kicking and punching around. Venom's character is really well made visually - his walking, jumping and smashing are just like in the comic books - thumbs up for that!
    Hope they will release R rated version on BluRay so we can see more of Venom's craziness. Tom Hardy allegedly said best parts are cut out to make the movie more age appropriate, and I think that's a shame. Anyway, I will watch this movie once more in cinema, and buy it on BluRay. After all, it's Venom! Go and see it on big screen - hope you won't be disappointed! Oh, and there are TWO mid-credit scenes - one we all are waiting for and another one that...just go and see it for yourself! {`\n\n\n`}It is the script and story where 'Venom' fails most. The script is really clunky, especially with the forced and goofy humour that can be misplaced (Venom's disgust at taking the elevator was the one moment passing as funny) and the villain spouting dialogues and speeches that mean nothing. The less too about the soapy and cliché-ridden scenes featuring Hardy and Williams the better, they are bland and don't serve much point, and the Life Institute scenes should have had more clarity. Unfortunately, these scenes dominate the first act and makes it feel rather dull and "taking too long to get going". The story is tonally disjointed, too many tones that are very variable on their own and don't gel together, and very clunky. This is not a case of the film not trying, to me it came over as trying too hard in catering to everyone and throwing in too many ideas and elements and executing them very variably and too safely. For a story intended to be dark and violent, this seemed rather tame and held back. </Text></Text>,
  },
  {
    url: "https://imgur.com/MAGP986.jpg",
    MovieTitle: "Ready Player One",
    MovieDesc:
      "Ratings 7.5/10\n2018",
    MovieRating: 3,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Steven Spielberg</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nTye Sheridan \nOlivia Cooke \nBen Mendelsohn \nT.J. Miller \nSimon Pegg \nMark Rylance`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}In 2045 the planet is on the brink of chaos and collapse, but people find salvation in the OASIS: an expansive virtual reality universe created by eccentric James Halliday. When Halliday dies, he promises his immense fortune to the first person to discover a digital Easter egg that's hidden somewhere in the OASIS. When young Wade Watts joins the contest, he finds himself becoming an unlikely hero in a reality-bending treasure hunt through a fantastical world of mystery, discovery and danger.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}This film is an absolute blast. It seamlessly combines reality and animation into one big, exciting adventure. I'm still not completely sure how it pulled it off. I was absolutely amazed at how seamlessly the film merged animation with reality (I'd say only perhaps 1/3 of the film takes place in the "real" world) and gave the obviously digital environments emotional and kinetic weight. That's a very hard balance to pull off and this movie doesn't even raise a sweat. In fact, some of the best scenes revolve around the absurd mix of online and real existence. Pretty much every scene in Sorrento's soulless corporate HQ is a riot because of the seriousness with which they take their involvement in this silly online world, made even more ridiculous by the motions they all make in their VR suits as they react to unseen perils like well-dressed mimes.{`\n \n`}The characters are all good fun. Parzival and his mate Aech are just like a lot of friends I know online, although Parzival's shallowness gives him a good obstacle to overcome. Art3mis is a bit more driven and has goals that take her further than just being the best at a video game. Parzival has a major cyber-crush on her, which is something of a problem. Daito and Shoto are somewhat more distant online rivals. All of them have great moments, but most come after their true selves get revealed around 2/3 of the way through the film. Some of them are very surprising (don't look at the cast list) and they are all funny together. Krennic's director Sorrento is a great villain. He's so full of himself and contemptuous that his appearance in-game as a muscular brute in a business suit dealing with mystical things he cares nothing about is a blast. And when he's cornered he can be hilariously practical. His online minion i-R0k is also priceless, the sort of super badass dude living in his mom's basement that you can only find in video games. Mark Rylance steals every scene he's in as the vaguely Wozniakian creator of the game. He's a rather sad figure, one who could never handle reality with such aplomb as he does the world he designed. I was surprsed to see Simon Pegg as his co-founder, a somewhat wasted role but nicel different from his more usual fare.</Text></Text>,
  },
  {
    url:"https://imgur.com/89M7esw.jpg",
    MovieTitle:"John Wick",
    MovieDesc:"Ratings 7.4/10\n2014",
    MovieRating: 3,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Chad Stahelski</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nKeanu Reeves \nMichael Nyqvist \nAlfie Allen \nAdrianne Palicki \nBridget Moynahan \nDean Winters \nIan McShane \nJohn Leguizamo \nWillem Dafoe`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}The story follows its chronological course by explaining that after John Wick loses his wife Helen to a terminal illness, he receives a beagle puppy named Daisy from her to help him cope with his grief. Despite John's stoic demeanor, he bonds with the puppy and they spend their day driving around in his vintage 1969 Ford Mustang Mach 1. At a gas station, he encounters a trio of Russian gangsters whose leader Iosef insists on buying his car, but John refuses to sell it. Frustrated, the mobsters later break into John's home, knock him unconscious, steal his car, and kill Daisy.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}It looks as if the filmmakers realized that the public was sick of certain movies. Most movies nowadays are full of wire work, sci-fi, etc. often topped with icing made of needless or predictable background stories that add nothing. For example the beautiful girlfriend who gives the moral speeches or the troubled teenage daughter, who aren't present here.{`\n\n`}Nothing of that is in John Wick. John Wick adds hardly a story, no character development, no needless character or background, no misplaced drama, no misplaced humor and not too much eye candy, nothing of that. What John Wick offers is action, action and more action. In fact, it is one long action scene, with some lines and close ups added. But that is not a problem. The directors promise action and deliver. While delivering they made it look good and convincing, without trying to be more, and they're smart enough to give the movie a satisfying beginning and ending.{`\n\n`}And for those who claim that Keanu Reeves is a horrible actor..... you are right. But his blank expression is perfect for this movie. Leave the acting to the bad guys and the delicious guest part for Willem Dafoe.{`\n\n`}If you're tired of movies with forced drama or loaded with CGI, John Wick will be a pleasant wake-up call.</Text></Text>,
  },
  {
    url:"https://imgur.com/DbqKdHZ.jpg",
    MovieTitle:"Avengers: Age of Ultron",
    MovieDesc:"Ratings 7.3/10\n2015",
    MovieRating: 3,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Joss Whedon</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nRobert Downey Jr. \nChris Evans \nMark Ruffalo \nChris Hemsworth \nScarlett Johansson \nJeremy Renner \nAaron Taylor-Johnson\nElizabeth Olsen \nCobie Smulders \nPaul Bettany \nAnthony Mackie \nHayley Atwell \nIdris Elba \nJames Spader \nStellan Skarsgård \nSamuel L. Jackson`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}Being a huge Marvel fan, and also Josh Whedon fan I was super excited for him to come back and do another Avengers movie. The first film was pretty brilliant. But with this film, Whedon wasn't given much air to breathe, with constant Studio interference and orders of certain shots to be re- done, or scrapped if not worse. Put in.{`\n\n`}So, you thinking why is this film so bad, if you are a fan, you should love it. Well the film changes pace, very quickly and abruptly, which is a poor sign of movie making. The Characters do not act like they would usually act in the same scenario, the progression of the story is all over the place, Scene's that just have no weight or meaning to the film, but in there because it looks cool or is setting up another independent super hero movie, the Villain that is so smart, but doesn't use the internet and his ability to control everything just to wipe out everybody, but rather has this ridiculously stupid plan. The Hero's that are suppose to be smart, intelligent and some what Spanish do not see all of the stupid plot hole that get infiltrated.{`\n\n`}The fighting was also a problem for me, it was the same. Once you saw it in the first Avengers, you see exact same thing in the second one too, and it doesn't even change a little.{`\n\n`}Overall, this film is bunched up due to the constant interference by Studio as Josh has stated so many times now.</Text></Text>,
  },
  {
    url:"https://imgur.com/xx5xRme.jpg",
    MovieTitle:"Godzilla",
    MovieDesc:"Ratings 6.4/10\n2014",
    MovieRating: 2,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Gareth Edwards</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nAaron Taylor-Johnson \nKen Watanabe \nElizabeth Olsen \nJuliette Binoche \nSally Hawkins \nDavid Strathairn \nBryan Cranston`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}Ford Brody (Aaron Taylor-Johnson), a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe (Bryan Cranston). Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}The plot in "Godzilla" is disposable. It only exists as an excuse to unleash the film's titular character. However, is it too much to ask for an original plot with characters we could care about? Here, the back story is cliché-ridden and the characters simply serve the function of moving the story forwards. As such, one would expect that Godzilla is at least given ample screen time. Surprisingly, this is not the case, and the majority of the film's focus seems to be on the military attempting to find out how to kill Godzilla and the MUTOs, which look like giant, angry cockroaches. Ultimately, it is left up to the score and the Michael Bay-esque dub-step reminiscent sound design to create tension.{`\n\n`}Bryan Cranston and Juliette Binoche do their best with the little screen time they are given, and the couple of Aaron-Taylor Johnson and Elizabeth Olsen are given the impossible task of creating interesting characters from the uninspired script. More worrying, however, is how unnecessary Sally Hawkins' character is and how the script manages to make Ken Watanabe look like a second-rate actor, as his character rarely changes expression from the looks of intense thought or surprise.{`\n\n`}Overall, "Godzilla" did not work for me at all. Not only is it a film without heart, but it a film meant to thrill that ends up just being tedious. I could have left halfway through the movie. I just didn't care how things would turn out.</Text></Text>,
  },
  {
    url:"https://imgur.com/2di57iS.jpg",
    MovieTitle:"The Space Between Us",
    MovieDesc:"Ratings 6.4/10\n2017",
    MovieRating: 2,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Peter Chelsom</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nGary Oldman \nAsa Butterfield \nCarla Gugino \nBritt Robertson`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}Gardner Elliot, the first human born on Mars, begins an online friendship with Tulsa, a teen in Colorado. On his maiden voyage to Earth, the 16-year-old finally gets to experience all the joys and wonders of a world he could only read about. Problems arise when scientists discover that Gardner's organs can't withstand the atmosphere. United with Tulsa and on the run, the interplanetary visitor races against time to unravel the mysteries of how he came to be, and where he belongs in the universe.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}This movie was fine. It's no masterpiece, but I actually found it much more enjoyable than "The Martian," the vaunted 2015 Matt Damon vehicle. That may be somewhat more scientifically accurate - although it still had its share of errors - but it just used people as setpieces for the situation, with no real character development.{`\n\n`}I liked Asa Butterfield as the eponymous character in "Ender's Game," and he's just as good here. Before you tag me as an Asa fan, I didn't like him in Scorsese's "Hugo." Here, he was convincing as a Mars-born child with his childlike, guileless naiveté and tall, gangly build. One professional critic compared this with "Flight of the Navigator," but Gardner isn't the smartmouth kid like David was in that movie, and Asa is a far, far better actor than Joey Cramer was. Likewise Gary Oldman, some of whose roles I have detested (his Doctor Smith in the awful "Lost in Space") while others like his Commissioner Gordon in Nolan's Batman movies were fine. The critics think he was over the top as billionaire mogul Nathaniel Shepard, but I found him to be a rather plausible mix of Steve Jobs' salesmanship, Elon Musk's arrogance and spaceflight ambitions, and Howard Hughes' fascination with flying and reclusive eccentricity.{`\n\n`}It's a relatively low budget science fiction film, not a $400 million blockbuster. They spent their budget on more important things like CGI effects, spacecraft props, Mars sets and weightlessness effects, not wasting it creating an entire future Earth, and the projections in movies set in the near future like "2001" always turn out looking dated after a few years anyway. You get the idea; the criticisms are generally incredibly petty, nitpicky and often just plain wrong. I can see plenty of scientific and technological mistakes, especially the Dream Chaser spacecraft used at the end, which would need a large booster and a launchpad rather than taking off using its own small rocket engines from a runway. But I accept that this is a movie, not a documentary, and focus on the characters, whom I did like and care about.{`\n\n`}Basically, the critiques boil down to "it's for kids!" As someone approaching retirement age, I'd much rather be young at heart than cranky and old in the head.</Text></Text>,
  },
  {
    url:"https://imgur.com/KzMIyMq.jpg",
    MovieTitle:"Paper Towns",
    MovieDesc:"Ratings 6.3/10\n2015",
    MovieRating: 2,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Jake Schreier</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nNat Wolff \nCara Delevingne \nHalston Sage \nAustin Abrams \nJustice Smith`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}Young and shy Quentin (Nat Wolff) is in for the night of his life when Margo (Cara Delevingne), the most popular student in high school, recruits him to help her play mischievous pranks on the friends who betrayed her. The next day, however, the mysterious Margo is nowhere to be found. With help from a few buddies and some cryptic clues that she left behind, Quentin embarks on an obsessive mission to find the girl who stole his heart and made him feel truly alive.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}Paper Towns. Paper Movie. For all its talk about those flat, hollow, deceiving facades, Paper Towns very quickly became what it seemingly tries to warn against. I feel swindled, conned, beguiled, paper mooned, pun intended! I was promised a whimsical, memorable, romantic romping young hearts, teenage adventure, a racing love story, risking it all, faint of heart never won fair lady and such! However, after a confusing, long, rather uneventful, and at times painfully awkward two hours, right when we've reached her, this woman of mystery and intrigue, who our shy hero has risked it all to find, there is............ nothing. No big, dramatic declaration, no tear-filled fantasy ending. No Magic. Paper Towns. Paper Love. It was like coming up empty handed at the end of the rainbow. Where is the whimsy, the destiny, the fleeting promise this movie had in the preview? Where were the passionate, young romantics, the real people that found each other in a paper world? Or did those shining figures exist only in our minds, were they paper stars that readily deceived? The best part for me was when Mr. Augustus Waters made an adorably unexpected cameo, a lovely reminder of what a REAL love story was the genuine gold value, that this paper, soulless, disposable nothing paled against. It's baffling to me, that the ingenious, and powerfully compelling Fault in Our Stars, and this cruel trick of a caper, Paper Towns were both penned by the same man. In truth, the moment I saw Gus, it made me wish I was watching his movie instead. This could have been a brilliant, spontaneous, wonder of a film, if its execution and ending had not so instantly caught fire. Well, then again, what better tinder for fire than ........ paper.{`\n\n`}The cast fails to deliver the dialogs convincingly and make everything look stiff. Worst off Cara Delevingne, the reason of all the trouble the hero gets in just days before his final exams, should definitely raise her acting level in her next project Suicide Squad to not terminate that franchise at the word go. Except for Justin Smith's Radar all everyone fails to have any kind of timing.{`\n\n`}The film comes off as having a very lazy production hoping to find success on the back off John Green's reader following; but thankfully they too disowned this serving.</Text></Text>,
  },
  {
    url:"https://imgur.com/1qtCBKx.jpg",
    MovieTitle:"Black Panther",
    MovieDesc:"Ratings 7.3/10\n2018",
    MovieRating: 3,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Ryan Coogler</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nChadwick Boseman \nMichael B. Jordan \nLupita Nyong'o \nDanai Gurira \nMartin Freeman \nDaniel Kaluuya \nLetitia Wright \nWinston Duke \nAngela Bassett \nForest Whitaker \nAndy Serkis`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}I went to see Black Panther along with my friends, and following the hype train we were excited to see it. However, following the showing we were all dissapointed by a mess of a movie with little plot and little thought which only served as a pit stop for infinity war.{`\n\n`}The critics have vastly overrated this movie due to its groundbreaking cast, but the movie itself is not at all groundbreaking. Littered with all the boring Marvel clichés I have come to know and hate, such as their inability to kill off any hero's to add gravitas to their story, or the one dimensional villain who only exists for one movie so you know they will kill him off before the next, Black panther is also plagued by new problems no one but me seemed to notice. For example, the CGI was awful in the action scenes: whenever someone was even prodded, they would go flying across the screen in the most outlandish fashion, and the plot was torn straight out of the Lion King, as well as having the biggest waste of Martin Freeman since those Vodafone adverts.{`\n\n`}Overall, I believe my dissapointment for this movie is fuelled by the marvel cinematic universe, as I feel sick of the movies they are pumping out like an industrial machine, as they all feel the same with little originality. I can only hope the bubble will burst sometime soon, and bring back true standalone movies which don't need a cinematic universe.</Text></Text>,
  },
  {
    url:"https://imgur.com/ePDX643.jpg",
    MovieTitle:"Avengers: Infinity War",
    MovieDesc:"Ratings 8.4/10\n2018",
    MovieRating: 4,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>	{`Anthony Russo and Joe Russo(Russo brothers)`}</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nRobert Downey Jr. \nChris Evans \nMark Ruffalo \nChris Hemsworth \nScarlett Johansson \nBenedict Cumberbatch \nDon Cheadle \nTom Holland \nChadwick Boseman \nPaul Bettany \nElizabeth Olsen \nAnthony Mackie \nSebastian Stan \nDanai Gurira \nLetitia Wright \nDave Bautista \nZoe Saldana \nJosh Brolin \nChris Pratt`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}I consider myself a big comic book marvel fan. My favorite films from the franchise so far, are Cap. American: Winter Soldier and Thor: Ragnarok. As this movie was directed by the same guys as Winter Soldier and Civil War, I went into this movie with sky-high expectations.{`\n\n`}I am gonna keep this brief: Avengers: Infinity War blew me away! If I should mention just one thing that really amazed me was the character of Thanos. He is so well developed and makes for a super interesting and complex villain. As an audience, we are actually capable of sympathizing with a guy, who wants to kill off half of the universe. It's not about power or dominance. It's about preserving life in a Universe with finite resources - a goal with leads him (and the avengers) into several interesting moral dilemmas.{`\n\n`}I agree with the other reviews here. This movie is such a beautiful calamity of 10 years of the best superhero entertainment there is. Thinking about it, I can't really grasp how the director pulled this off. So many well developed characters from different story lines are working together in a true cinematic symphony.{`\n\n`}I give this movie my highest recommendations. It's a must-see for anyone with just a remote interest in the franchise.10 years developement of a consistent franchise. And in the end a purple men with a not so empty heart wins. ITS GREAT.</Text></Text>,
  }, 
  {
    url:"https://imgur.com/3cZ4ZZB.jpg",
    MovieTitle:"Transformers",
    MovieDesc:"Ratings 7.0/10\n2007",
    MovieRating: 3,
    DirectedBy: <Text><Text style={textdesign}>Directed by: </Text><Text>Michael Bay</Text></Text>,
    CastBy: <Text><Text style={textdesign}>Starring by:</Text> <Text>{`\n\nShia LaBeouf \nTyrese Gibson \nJosh Duhamel \nAnthony Anderson \nMegan Fox \nRachael Taylor \nJohn Turturro \nJon Voight`}</Text></Text>,
    Plot: <Text><Text style={textdesign}>{`\n`}Plot</Text> <Text>{`\n\n`}The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power. Only a human youth, Sam Witwicky (Shia LaBeouf) can save the world from total destruction.</Text></Text>,
    Review: <Text><Text style={textdesign}>{`\n`}Critics Review</Text><Text>{`\n\n`}I was not a Transformers kid when I grew up in the 80's and I think that's why I wasn't so hard on Michael Bay's film when I caught it in the summer of 2007. Going into the film for the first time, the only characters I knew by name were Optimus Prime, Megatron, and Bumblebee (and I only knew of him through the mention of friends). So, without having the fanboy mentality, I was able to enjoy the movie as it was...and I did. I thought it was a fun action flick and one of the best popcorn movies from the year. Based on the Hasbro toyline and it's resulting animated series/comics, the film follows high-schooler Sam Witwicky who discovers his Camaro is a shape-shifting alien robot; he is soon brought into the middle of a war between the Autobots and the Decepticons, warring factions of a race of sentient robots.{`\n\n`}Let's be honest. The only things that matter about this movie are the special effects and the action sequences. ILM did a fantastic job with the Transformers in this film. The robots look amazing and their transformations are seamless. I've heard that some classic fans aren't satisfied with their designs but I felt they did a good job adding what realism they could to giant fighting robots. The action sequences aren't as abundant as one would expect, but I'm not complaining. I felt there were enough action scenes without going overboard and drowning out story. The battles feel epic and they aren't heavily edited into quick jump cuts so you can still understand what is going on.{`\n\n`}The cast does an adequate job and keep the movie from feeling B-grade. Shia LaBeouf was charismatic and had a good sense of comedic timing; John Turturro was a fun addition as the mental Sector 7 agent Simmons. Jon Voight seemed almost out of place in the film, though added a bit of class. I know there have been a lot of complaints about human characters in the movie, but it's a necessary element and I'm not complaining. The supporting cast did a great job; my favorites had to be Kevin Dunn and Julie White as Sam's eccentric parents. I felt the movie shouldn't have gone over 2 hours as it does begin to strain on the patience after a while but it still made for a fun ride.</Text></Text>,
  },
  ];

/*Animes Dataset*/
const Anime = [
  {
    url:"https://c4.wallpaperflare.com/wallpaper/705/107/655/kimi-no-na-wa-your-name-taki-tachibana-mitsuha-miyamizu-wallpaper-preview.jpg",
    AnimeTitle:"Kimi no Na wa.",
    AnimeScore:"Score 9.01/10\n2016",
    AnimeRating: 4,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Your Name.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`君の名は.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>Movie</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Aug 26, 2016`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Toho, Sound Team Don Juan, Amuse, JR East Marketing & Communications, Kadokawa, voque ting`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Funimation, NYAV Post`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`CoMix Wave Films`}</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Romance, Supernatural, School, Drama`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`1 hr. 46 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.{`\n\n`}One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.{`\n\n`}Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}Makoto Shinkai's latest work goes even further to support the theory that he's fantastic at directing a visually brilliant movie, but lacks the writing ability to tell a good story.{`\n\n`}An absolute mess. Without spoiling it, this movie fails to get into the main plot until roughly halfway through. Before that point, it views like a teenage slice of life; nothing to be disappointed by. After the halfway mark, the plot becomes incredibly contrived with no logic, reason, or thought put into its creation. There were at least 4 separate climaxes (which is inexcusable for any movie which is not Return of the King) and an overly drawn out epilogue sequence. The main climax happens off screen, which negates the entire build up to it, because Shinkai wanted to have a reveal with little weight. There are an unacceptable amount of plotholes, mostly due to the concept of Musubi. There's little coherence, and amateur directing/writing displayed frequently throughout. To differentiate this from his other movies, Shinkai infused supernatural elements with romance, which fails horribly at enhancing the movie and instead detracts very significantly. Even amongst the people who love this movie, there is a large percentage that find the plot messy.{`\n\n`}It's Makoto Shinkai. If movies were judged by aesthetics alone, this would be one of the best ones. There are no issues with the art. Scene composition is mostly great, the animation was very high quality, and the art style was beautiful. While there are not as many wallpaper opportunities as in 5cm/s, the quality of them is significantly higher. Watch this in the highest possible quality you can find. Worth watching for the art alone. The animation is what you'd expect from a high budget movie, but it's not anything revolutionary. There are several scenes that move beautifully and feel like magic to look at. The animation quality isn't quite up to Ghibli standards but it is nothing to scoff at.{`\n\n`}Voice actors were quite good and played different roles effectively. The change in voice aesthetic was notable during the first half when they were body swapping. The soundtrack was unmemorable, but set the scene adequately, and it may help to broaden your horizons and expose you to new music. Sound FX and general background noise was well produced and sounded natural. The opening sequence song in particular stood out and is worth a listen, but I can't say that for most of the soundtrack.{`\n\n`}The mains were adolescents, which meant there was a lot of adolescent stuff going on in the first half. The characters were interesting initially, though none stood out as incredibly well written and became less and less captivating as the movie went on. The main positive about the characters was that they mostly felt natural, save for when they were clearly not meant to. Side characters were certainly more natural than the mains, and contributed well to the atmosphere of the movie. They develop plot stupidity and have no depth or drive other than the forced romance, and plot amnesia is introduced for added gratuitous drama. There is no reason for the characters to become stupid, or amnesiacs, and it detracts from the believability of the characters and the plot.</Text></Text>
  }, 
  {
    url:"https://imgur.com/3ZjiCvU.jpg",
    AnimeTitle:"Tenki no Ko",
    AnimeScore:"Scores 8.47/10\n2019",
    AnimeRating: 3,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Weathering With You.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`天気の子.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>Movie</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jul 19, 2019`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Toho, Lawson HMV Entertainment, JR East Marketing & Communications, Kadokawa, voque ting, STORY, Lawson Entertainment`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`GKIDS`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`CoMix Wave Films`}</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Slice of Life, Drama, Romance, Fantasy`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`1 hr. 54 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother.{`\n\n`}Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. With Tokyo's unusual weather in mind, Hodaka sees the potential of this ability. He suggests that Hina should become a "sunshine girl"—someone who will clear the sky for people when they need it the most.{`\n\n`}Things begin looking up for them at first. However, it is common knowledge that power always comes with a hefty price...</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}This is snarky little thought that I came up with when I just got back from seeing this film in the theaters. However, in essence it is pretty much understandable to compare Tenki no Ko with Kimi no Nawa or even call this movie as its spiritual successor. Aside from the obvious the two movies are made by the same person, it also share the same universe where mystic/magic do appears in a grounded realistic setting as a main feature for the plot, RADWIMPS is once again present for providing the insert song/OST throughout the movie, and the two main protagonist of Kimi no Nawa did made a cameo appearances.{`\n\n`}The plot plays out exactly same too, with the first half of the movie coming up with mix up of Melancholic but very cheerful type of movie and the second half had drastic change in tone ;becoming dark and full of intensity. Most of the jokes including some perverts jokes, reverting-expectations jokes, mascot jokes and pretty much everything else that you’ve seen in Kimi no Nawa, to my eyes this is very poor attempts, because it didn’t give any variety and it seems as though Shinkai’s very content with his usual formula (but then again why doesn’t he feel the need to fix something that he thinks is not broken).{`\n\n`}But the problem of this movie is not that it is feels like a rehearse or it is a worse version to Kimi no Nawa. The problem with this movie is that judge on its own, it still feature the similar trait(or dare I say problems) of usual Makoto Shinkai’s movie; while the movie had an excellent production values it does not had a genuine plot and characters. It seems Shinkai has an idea but he doesn’t really manage to pull off the execution. Plot conveniences appear one after another, making it seems as though the objective is just to make the story progress whether is it believable. One of the examples is a scene when kids manage to escape from police station full of police and I do believe anyone with their right mind will find it odds and quite puzzling.{`\n\n`}The romance is very tame too. With the amount events of relationship that the two protagonist present, I would believe they are at a stage where they are at least make a kiss. The girl even doesn’t mind to open her bath robe, but even so the romantic action is quite lacking. I guess both elements did not present so intensely because the targeted audience is for kids to young teenager, but even so why show those somewhat adult content from the first place and also there’s no excuse for that, as there are also others kiddy show that manage to show itself quite believable.{`\n\n`}All in all. I feel like Tenki no Ko is just really wants to follow the successful of Kimi no Nawa but it never feels had a major deviation from its predecessor. So in the end, we got an the all-too-familiar product and this time I feel the execution is worse. On its own, it’s never being a good movie; there are some genuinely emotional moments in this movie that could move some viewers I guess. Nevertheless, it is a thoroughly frustrating movie. If you want to finish your Makoto Shinkai’s movie collection or you just want to watch some gorgeous animation spectacles. Go for it. Otherwise, I’d really can’t recommend it.</Text></Text>
  }, 
  {
    url:"https://imgur.com/fwAMHrr.jpg",
    AnimeTitle:"Sora no Aosa wo Shiru Hito yo",
    AnimeScore:"Score 7.56/10\n2019",
    AnimeRating: 2,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Her Blue Sky.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>The Person Who Knows How Blue the Sky Is.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`空の青さを知る人よ.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>Movie</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Oct 11, 2019`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Aniplex, Fuji TV, Toho, Kadokawa, STORY`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`None found`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`CloverWorks`}</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Drama`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`1 hr. 55 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}High school student Aoi Aioi lives with her elder sister, Akane, after a tragic accident took their parents away 13 years ago. Because Akane has since been taking care of her single-handedly, Aoi wants to move to Tokyo after her graduation to relieve her sister's burden and pursue a musical career, inspired by Akane's ex-boyfriend Shinnosuke "Shinno" Kanamuro. Shinno was part of a band until he left for Tokyo to become a professional guitarist after the sisters' parents passed away, and he was never to be seen again.{`\n\n`}One afternoon, while Aoi practices her bass in a guest house, she gets startled by the 18-year-old version of Shinno from 13 years ago! As if by coincidence, the current 31-year-old Shinno also returns to the town, but he has changed drastically. There are now two Shinno's in existence, but why is the Shinno from the past present?{`\n\n`}Sora no Aosa wo Shiru Hito yo revolves around these four individuals as they confront their inner feelings toward each other and make decisions that will affect their lives from here on out.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}The movie starts with Aoi plugging in her earphones to practice her bass, drowning out all sounds. I feel that that is a nice touch. We are then gradually introduced to the other characters and how Aoi feels about them. There was also a flashback of her past which explains why the two sisters are living together, when Shinno suddenly appears.{`\n\n`}There were some twists that I've never expected. At first, I thought only Aoi could see Shinno, but it turned out that everyone could see him too. They called him an Ikiryou (a spirit that is left behind when the living passes on) at the start, and I thought that that was the case too, when Aoi ran home to Akane and asked her for more details about Shinno - to which her reply was "I don't know whether he is even living or dead", which cemented my belief until minutes later when Shinnosuke appeared on the Enka stage as a guitarist.{`\n\n`}The story built up emotions leading to that scene from the ominous cave to the landslide to the sealed guitar and to the meeting, and the tension - emotions at an all-time high was kept at that plateau for the rest of the movie. It was truly a work of art.{`\n\n`}My first thought was that the older Nakamura looked like Poppo from AnoHana, but it turned out that they were different persons. Each scene, though ordinary somehow managed to look special while being not overtly imposing. I liked how the director transitioned from showing a dull welcoming scene to the appearance of a very flashy Nitobe, and how the camera slowly pans to the right to reveal the older Shinnosuke. That said though, while the art was great, it was not particularly outstanding hence the score.{`\n\n`}As I have mentioned in the introduction, the touch when earphones are plugged in and when Aoi tries to convey her feelings for the older Shinnosuke was absolutely stunning. Aoi fondly reminds me of K-On! when she plays the bass. I feel that her VA has done a good job in conveying her feelings for Shinno, like how her voice trembled when she spoke to him or that outburst when she found out what Chika has done.{`\n\n`}Given the number of characters, it can't be helped. Although every character has some development, I feel that they could have given more depth to each of them, particularly the older Shinnosuke and exactly how did he come around. Also, the boy-crazy Chika could have been given more exposition - we never knew if she was telling the truth or not when she claimed that 'nothing happened', because we only have an idea of what's her personality like.{`\n\n`}Overall, I enjoyed the movie enough to write such a long review about it. Even after watching the epilogue however, I am left with more questions that I had at the start and I think that this movie would have a better reception had it launched as an anime series instead.</Text></Text>
  }, 
  {
    url:"https://imgur.com/jsYTcUU.jpg",
    AnimeTitle:"Kimi to, Nami ni Noretara",
    AnimeScore:"Score 7.48/10\n2019",
    AnimeRating: 2,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Ride Your Wave.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`きみと、波にのれたら.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>Movie</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jun 21, 2019`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Lawson Entertainment`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`GKIDS`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Science SARU`}</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Drama, Romance, Supernatural`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`1 hr. 34 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Entranced by surfing and the sea, Hinako Mukaimizu is a spirited girl who attends college in a coastal city with no consideration for her future career. Her life takes an unexpected turn when a fireworks mishap sets the apartment building she lives in ablaze, where she is saved by a talented firefighter named Minato Hinageshi. Upon meeting, the two quickly become acquainted with one another—Hinako is instantly enamored by Minato's reliable personality and passion for saving others, while Minato is intrigued by surfing and is eager to learn how. As Hinako begins to teach Minato about surfing, the pair eventually fall in love and begin a gentle and devoted relationship.{`\n\n`}However, while surfing may seem fun and carefree, it can still be a dangerous and unpredictable activity. This is what Hinako learns when a surfing incident completely changes her life, leaving her forced to contemplate her undecided future. In search of her own calling, Hinako begins her journey of self-discovery, keeping Minato by her side as she gradually attempts to find her purpose and ride her own wave.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}I wasn't really expecting much before watching this movie, mainly because I saw the trailer and I thought it was going to be some sappy love story which I've honestly seen my fair share but I'm really glad I actually watched it.{`\n\n`}People will probably recognize the art style from the recent devilman series as its made by the same studio. The style, as with all their works, is simple but unique. But I particularly like this style because it gives something that can't be imitated by 3D CGI or live acting. It's a bit hard to explain but the style exaggerates certain things like when eating or doing actions, certain body parts may be way out of proportion than they should, and this exaggeration is something which you can only produce because your medium is 2D. Being a smaller studio, they obviously can't produce gorgeous backdrops or super intense action scenes but they've certainly proved that there's more to animation than just that, and you can convey so much even with simple animation.{`\n\n`}If you haven't heard of Oshima Michiru before it's about time you have. This woman is a living legend of a composer. The main reason I watched this movie actually was because I saw her name in the trailer. She produces a lot of background music for japanese anime or dramas. Usually they're orchestral, most of the time they have this nostalgic kind of vibe like the ET theme. In this movie however, most of the music is lighthearted and uplifting and it really helps in setting the mood and conveying the expressions of the characters. It's nothing extravagant but still really good.{`\n\n`}There aren't many characters as this is a movie, so there isn't much time for introduction or development. But there are 4 main characters, each with different hair colors so the audience can tell them apart easily haha. No one really stands out as a really cool/unique character but the main focus of the movie is the story so as far as interaction between characters go, the dialogue was really good and nothing really felt that awkward or out of place to hear.{`\n\n`}Really enjoyable. Probably something I would have enjoyed watching with my girlfriend if I had one :( This movie is about love, but it's also about coping loss and motivation so I think it appeals to a lot of whoever's watching this.{`\n\n`}The story is surprisingly good. Love stories usually struggle in any genre because it's so hard to relate to something I believe the majority of the population struggles in (especially anime otaku haha) but what makes this good is it also tackles other things besides love and it manages to do all this and make the story simple and easy to understand for the audience to follow. I like simple, simple is best. It's fun, refreshing and enjoyable to watch.</Text></Text>
  }, 
  {
    url:"https://imgur.com/uKRPyPp.jpg",
    AnimeTitle:"Naruto: Shippuuden",
    AnimeScore:"Score 8.15/10\n2007",
    AnimeRating: 3,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Naruto: Shippuden.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>Naruto Hurricane Chronicles.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`ナルト- 疾風伝.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>TV-Series</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>500</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Feb 15, 2007 to Mar 23, 2017`}</Text>
    <Text style={textdesing2}>{`\n`}Premiered:  </Text><Text>Winter 2007</Text>
    <Text style={textdesing2}>{`\n`}Broadcast:  </Text><Text>{`Thursdays at 19:30 (JST)`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`TV Tokyo, Aniplex, KSS, Rakuonsha, TV Tokyo Music, Shueisha`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Viz Media`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Studio Pierrot`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Manga</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Action, Adventure, Comedy, Super Power, Martial Arts, Shounen`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`23 min. per ep.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.{`\n\n`}Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}Don't get me wrong, Naruto didn't just magically start stabbing me with disappointment because the story started to totally go downhill. In fact, the first episode's preview with Naruto's future encounter with Sasuke had me on the edge of my seat. I couldn't believe it: Naruto was back! No, the story continues and follows through adequately as a continuation of the original Naruto. The great elements of the original story are still here: the theme of an everlasting friendship, the importance of maintaining hope, the need to endure and persevere .. these themes are all still there! Naruto is still a great guy and he still strives to protect his friends and 'save' Sasuke while taking on Akatsuki at the same time. So what happened to Naruto? Well, story-wise, nothing. I still love the story. I love the world of Naruto, the ninjas, the techniques, the weapons, the themes, the plot. Although the story doesn't present the viewers with anything deep or complicated, I still like it.{`\n\n`}It was great to see how much the characters changed from the original Naruto. Character development in this aspect, was great. Pretty much everbody had a new design and they all looked great. In terms of personality, well, they were the same loveable characters, unique in their own way. In terms of Naruto and Sakura, they really developed. Although he still acts like it, Naruto isn't the same happy loudmouth he used to be. He's been deeply scarred from Sasuke's betrayal, and despite all thats happened, he's still obsessed with saving him. Of course, Sasuke's betrayal affected Sakura too and she's really toughened up. She isn't the useless twist she used to be, and shes really grown to respect and care for Naruto. Character development is great, the characters are great, old and new. Sai for example, is an interesting add on, he brought the funnies and kept the comedic aspects of the show alive.{`\n\n`}Here is where Shippuuden starts going downhill. In terms of the new characters and their new character designs, I love em. But Naruto just isn't animated as well as it used to be. There is a lot of repeated animation in Shippuuden. This ranges from terribly animated tree jumping scenes (it actually looks more like they're flying instead of jumping half the time, lazy much?) to staring faces and overused flashbacks. I can understand the need to repeat the frames from things like the tree jumping scenes that are filled with dialog, or the occasional flashback to remind us of what happened in the original Naruto or something a couple of episodes ago. But the extent of it is teetering on the cliff side. The quality is just going downhill.{`\n\n`}Same enjoyable story with great potential. But the pacing needs to change. That pillow I mentioned at the beginning of this long, terrible review? It wasn't for sleeping. It was to stop me from killing myself from bashing my head against the desk as I watched a potentially good series slaughtered before my eyes.</Text></Text>
  }, 
  {
    url:"https://imgur.com/EzUJpbY.jpg",
    AnimeTitle:"Koe no Katachi",
    AnimeScore:"Score 9.01/10\n2016",
    AnimeRating: 4,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>A Silent Voice.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>The Shape of Voice.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`聲の形.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>Movie</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Sep 17, 2016`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Shochiku, Pony Canyon, Kodansha, ABC Animation, Quaras`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Eleven Arts, NYAV Post`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Kyoto Animation`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Manga</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Drama, School, Shounen`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`2 hr. 10 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.{`\n\n`}Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.{`\n\n`}Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}Koe no Katachi is dangerous because it is exploitative. I'm not going to pretend to know anything about deaf people. I don't. This movie certainly does not allow any greater understanding into the mind of deaf people is the point I want to iterate. It uses a serious problem as a plot device constantly and reduces Nishimiya to one-dimension. She is the textbook definition of a mary-sue as well as a damsel in distress. This is clearly troublesome when trying to explain deafness to an able-bodied audience.{`\n\n`}Nishimiya's entire character is her illness. She is paper thin with her sole character trait being she likes to feed fish. She is so inhuman it is gross. Moe being used in this way is offensive. Including deafness or any other handicap into anime is an exciting idea, and I laud the attempt. Sadly, the execution is simply sickening. A personality-less self-insert male character who wants to repent for mistakes he made when he was a child falls in love with the object of his errs. It's inherently questionable to approach this topic from a romantic perspective because it's hard to sympathize with an object. And that is what Nishimiya is, an object. To be affected on, for us to pity, for us to see illness in a "new light," to justify against bullying, to see the indomitable human spirit. A show like Monster works this concept excellently because it uses the object of interest (Johan) as more of a symbol. This work tries to make Nishimiya a character as deeply developed as Shouya but they foist too many roles on an underdeveloped symbol, not even mentioning her role as a character.{`\n\n`}Shouya, Ueno, and Ishida are all flat. Their motives are drawn to plot points not to logic. Ueno shows up when things finally start moving in a direction the audience would be satisfied with in tacky KyoAni fashion. Drama in this work is so over-the-top and predictable it's borderline cringe-worthy. Even if you could swallow the unbelievable developments that lead to the saccharine mid-section of the film the way it dissolves is so inauthentic. Shouya shows no signs of development and no effort to change throughout the work and then magically obtains a group of friends.{`\n\n`}What the point is thematically I can't tell you. I can tell you that this film is successfully doing what it wanted to do. Capitalize on disease using moe with the highest budget in the industry. This work is not even average, it is bad. Please stop and think about why you feel the way you do when you watch this work. If you're crying is it because Nishimiya is a person you have become endeared by or are you crying because she's like an injured puppy? Affection for things like this a wonderful human trait, but this work is dubious.</Text></Text>
  }, 
  {
    url:"https://imgur.com/kphxPYT.jpg",
    AnimeTitle:"High School DxD",
    AnimeScore:"Score 7.42/10\n2012",
    AnimeRating: 2,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>High School DxD.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`ハイスクールD×D.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>TV-Series</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>12</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jan 6, 2012 to Mar 23, 2012`}</Text>
    <Text style={textdesing2}>{`\n`}Premiered:  </Text><Text>Winter 2012</Text>
    <Text style={textdesing2}>{`\n`}Broadcast:  </Text><Text>{`Fridays at 11:00 (JST)`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Genco, Lantis, AT-X, PRA, Showgate, Atelier Musa, Fujimi Shobo`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Funimation`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`TNK`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Light Novel</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Comedy, Demons, Ecchi, Harem, Romance, School`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`24 min. per ep.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`R+ - Mild Nudity`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}High school student Issei Hyoudou is your run-of-the-mill pervert who does nothing productive with his life, peeping on women and dreaming of having his own harem one day. Things seem to be looking up for Issei when a beautiful girl asks him out on a date, although she turns out to be a fallen angel who brutally kills him! However, he gets a second chance at life when beautiful senior student Rias Gremory, who is a top-class devil, revives him as her servant, recruiting Issei into the ranks of the school's Occult Research club.{`\n\n`}Slowly adjusting to his new life, Issei must train and fight in order to survive in the violent world of angels and devils. Each new adventure leads to many hilarious (and risqué) moments with his new comrades, all the while keeping his new life a secret from his friends and family in High School DxD!</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}At first glance, the title High School DxD doesn't really stand out much. The first two words “high school” is probably a place most of us made good (or bad memories) in our lives. Of course, Issei hopes to make good memories because the school has recently turned into co-ed from a former girls-only school. And where else would a healthy boy at his puberty stage wants to make most of it? High school of course. But not all is easy as he is known to be creepy at the academy. With few “real” friends, the chances of making his goal of high school memories is becoming slim.{`\n\n`}That of course later changes when the unthinkable happens and he is killed by his very first girlfriend. Talk about bad luck, I can only think of one person off my head right now with the Imagine Breaker with that sort of luck. But is this really bad luck? Because the most beautiful and respected character of the school and series takes attention of him.{`\n\n`}First, we have the beautiful Rias Gremory. She is someone everyone admires and lusts about. She is the president of the Occult Club. And she is of course, the main heroine as well as one of the reasons some of us are watching this series for the lulz. She takes a curious interest in our protagonist Issei after the incident but what really makes her unique is her definite character. Behind her outer shell is a girl who takes responsibility and does what she does best: helping others. These traits seem to pass onto Issei for despite his creepiness around the academy, he is known to be helpful and hardworking.{`\n\n`}The art of this series is just meh for me. I didn't take much notice of it as most people are probably paying attention more to the action and fan-service than art when watching this. I don't blame you, I mean who could take their eyes off one second of that million dollar body of Rias Gremory? :) Then, of course, the sound. I do admit that it does mixes in well especially in later episodes where the seriousness conveys the more dramatic visage of the story. It's not as powerful as Yuki Kajiura's soundtracks from Mai-Hime or Tsubusa Chronicles but still all in all, it does fit well once you listen to it carefully.{`\n\n`}So, you're probably asking yourself now: “should I watch this?” Honestly, that's an ambigious question. When God gave us brains, we all have different views on everything like anime, manga, life, appearances, etc. However, if you just watched the trailer or first 5 mins of the series and decided to hit that drop button, then I feel really sorry for you. Why? Because this series is more than just about ecchi and fan-service. It has potential. It has emotion. It has drama. It has interest.</Text></Text>
  }, 
  {
    url:"https://imgur.com/rHUoQr1.jpg",
    AnimeTitle:"Nisekoi",
    AnimeScore:"Score 8.01/10\n2014",
    AnimeRating: 3,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Nisekoi: False Love.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`ニセコイ.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>TV-Series</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>20</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jan 11, 2014 to May 24, 2014`}</Text>
    <Text style={textdesing2}>{`\n`}Premiered:  </Text><Text>Winter 2014</Text>
    <Text style={textdesing2}>{`\n`}Broadcast:  </Text><Text>{`Saturdays at 23:30 (JST)`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Aniplex, Mainichi Broadcasting System, Shueisha`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Aniplex of America`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Shaft`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Manga</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Harem, Comedy, Romance, School, Shounen`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`24 min. per ep.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`24 min. per ep.`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Raku Ichijou, a first-year student at Bonyari High School, is the sole heir to an intimidating yakuza family. Ten years ago, Raku made a promise to his childhood friend. Now, all he has to go on is a pendant with a lock, which can only be unlocked with the key which the girl took with her when they parted.{`\n\n`}Now, years later, Raku has grown into a typical teenager, and all he wants is to remain as uninvolved in his yakuza background as possible while spending his school days alongside his middle school crush Kosaki Onodera. However, when the American Bee Hive Gang invades his family's turf, Raku's idyllic romantic dreams are sent for a toss as he is dragged into a frustrating conflict: Raku is to pretend that he is in a romantic relationship with Chitoge Kirisaki, the beautiful daughter of the Bee Hive's chief, so as to reduce the friction between the two groups. Unfortunately, reality could not be farther from this whopping lie—Raku and Chitoge fall in hate at first sight, as the girl is convinced he is a pathetic pushover, and in Raku's eyes, Chitoge is about as attractive as a savage gorilla.{`\n\n`}Nisekoi follows the daily antics of this mismatched couple who have been forced to get along for the sake of maintaining the city's peace. With many more girls popping up his life, all involved with Raku's past somehow, his search for the girl who holds his heart and his promise leads him in more unexpected directions than he expects.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}The story of Nisekoi is not one of its strong points. I don't think anybody but the most diehard fans would even bother offering any sort of rebuttal here. It plays on almost every cliché in the book, from the childhood promise, to the fated encounter, to the downright absurd misunderstandings, even to the freaking beach episode, that I can’t help but think that this is all some elaborate parody of the harem genre. If it is, then the author did a damn good job because it certainly feels like one.{`\n\n`}However, I think this section deserves more discussion however simply due to the fact that Shaft is at work. As I've stated, many fans of the manga were worried that Shaft would take their style too far and that it would detract heavily from the source material, which many believe to be too inherently “normal” to be deflowered by Shaft's hands, but fortunately that was not the case here. Sure, you've got Shinbo's signature camera angles and a few strangely elaborate backgrounds (and some intentionally simple ones), but these don't define the show as they might have in Bakemonogatari or Madoka Magica.{`\n\n`}All of my complaining might actually convince someone that I dislike this anime because of how generic it is. On the contrary; I find all of the enjoyment in reveling in just how cliché nearly every moment is. If you've seen even 2 or 3 harems (and I've probably seen dozens), you can call out just about everything that is going to happen in each episode and in each scene. It's that predictable. Yet, there is an inexplicable charm which pervades the series. Yes, I was literally facepalming at nearly every scene in the show, but underneath that palm was a gigantic smile that I just couldn't hold back.{`\n\n`}Nisekoi is not a groundbreaking anime by any means, but if it has proven one thing, it’s that originality is extremely overrated. All you need is a little charm, solid execution, and, of course, waifus. There's a reason that this story and these characters have been done before, and that's because they're enjoyable. Perhaps some of us are just in denial.</Text></Text>
  }, 
  {
    url:"https://imgur.com/4yB97bb.jpg",
    AnimeTitle:"Kaguya-sama: Love is War",
    AnimeScore:"Score 9.04/10\n2019",
    AnimeRating: 4,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Kaguya-sama: Love is War.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`かぐや様は告らせたい～天才たちの恋愛頭脳戦～.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>TV-Series</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>12</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jan 12, 2019 to Mar 30, 2019`}</Text>
    <Text style={textdesing2}>{`\n`}Premiered:  </Text><Text>Winter 2019</Text>
    <Text style={textdesing2}>{`\n`}Broadcast:  </Text><Text>{`Saturdays at 23:30 (JST)`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Aniplex, Mainichi Broadcasting System, Magic Capsule, Shueisha, JR East Marketing & Communications`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Aniplex of America`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`A-1 Pictures`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Manga</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Comedy, Psychological, Romance, School, Seinen`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`25 min. per ep.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president. Alongside him, the vice president Kaguya—eldest daughter of the wealthy Shinomiya family—excels in every field imaginable. They are the envy of the entire student body, regarded as the perfect couple.{`\n\n`}However, despite both having already developed feelings for the other, neither are willing to admit them. The first to confess loses, will be looked down upon, and will be considered the lesser. With their honor and pride at stake, Miyuki and Kaguya are both equally determined to be the one to emerge victorious on the battlefield of love!</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}The comedy is hit or miss most of the time, with the odd joke being able to crack a smile from me. The jokes and gags are repetitive and become stale e.g. the skit where the President and Kaguya gave love advice dragged on too long. The episode about the wiener joke (no, I’m not kidding) was so childish.{`\n\n`}The characters are a bunch of troupes who receive no character development: Kaguya is a rich, childish, pampered tsundere with barely any endearing qualities. Chika is the cute ditsy airhead, Ishigami is the depressed emo okatu that fans relate to calling him "our guy". He's easily the worst character because of how one dimensional he is and all his jokes being so predictable e.g. "oh no, Kaguya is going to kill me! I'm going home President!". The president is the hardworking and studious guy. He’s the best of the main cast in my opinion. He's the most interesting, relatable and got varied comedy.{`\n\n`}The main problem with this show is the narration. The narrator might as well be his own character with how overused it is, to the point it becomes overbearing and annoying. The writer clearly didn't grasp the concept of "show, don't tell" because i don't want to be told about the characters and their thought process like they’re puppets. I don’t know why the narrator is keeping score of their matches because it ultimately amounts to nothing and we get the same rinse-repeat scenario next episode. He’s often mentioning stuff that’s obvious on screen with info dumps, which is jarring because it comes across as if the viewer is too stupid to think for themselves.{`\n\n`}Overall, Kaguya sama is a fun rom-com, but it's cliche and filled with troupes that would otherwise be criticised in other shows. The dynamic between the two leads doesn’t change as they are no closer to confessing to each other than they were at beginning. It's baffling to see so many positive reviews and the amount of praise it’s received when it lacks substance and does nothing special compared to other rom-coms.</Text></Text>
  }, 
  {
    url:"https://imgur.com/0UEEP5u.jpg",
    AnimeTitle:"Kakegurui",
    AnimeScore:"Score 7.47/10\n2017",
    AnimeRating: 2,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>Kakegurui: Compulsive Gambler.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>Gambling School.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`賭ケグルイ.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>TV-Series</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>12</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jul 1, 2017 to Sep 23, 2017`}</Text>
    <Text style={textdesing2}>{`\n`}Premiered:  </Text><Text>Summer 2017</Text>
    <Text style={textdesing2}>{`\n`}Broadcast:  </Text><Text>Saturdays at 22:00 (JST)</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Dentsu, Square Enix, Movic, KlockWorx, DIVE II Entertainment, 81 Produce, Furyu`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`None found`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`MAPPA`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Manga</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Game, Mystery, Psychological, Drama, School, Shounen`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`24 min. per ep.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`R - 17+ (violence & profanity)`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Unlike many schools, attending Hyakkaou Private Academy prepares students for their time in the real world. Since many of the students are the children of the richest people in the world, the academy has its quirks that separate it from all the others. By day, it is a normal school, educating its pupils in history, languages, and the like. But at night, it turns into a gambling den, educating them in the art of dealing with money and manipulating people. Money is power; those who come out on top in the games stand at the top of the school.{`\n\n`}Yumeko Jabami, a seemingly naive and beautiful transfer student, is ready to try her hand at Hyakkaou's special curriculum. Unlike the rest, she doesn't play to win, but for the thrill of the gamble, and her borderline insane way of gambling might just bring too many new cards to the table.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}As you watch Kakagurui, you begin to notice a couple patterns with each gamble: High-stakes are never fully realised, every female character is bat-shit insane and “Yumeko wins LOL”. Seriously, even when Yumeko loses like in episode 3, she has no repercussions from losing. Because the audience is always watching from the perspective of either a mere onlooker or one of Yumeko’s opponents, she always comes across as too good for every situation she is placed in. Because of this she rids the show of any tension it could have had. And when you figure out that most of the time Yumeko gambles, she barely even uses a complete strategy, relying on pure luck to win at random times, which feels like a slap in the face to anyone expecting consistency and/or intelligence from this show. The fact that there are no actual punishments fulfilled from losing a high-stakes gamble also hinders the joy and excitement viewers get from watching. Now while there are consequences for being in an extreme amount of debt (e.g. house pet, Meari’s “Life Schedule”), you never actually see the show go through with these consequences and even then, the punishment for losing rarely ever matches the reward for winning.{`\n\n`}Speaking of which, this show stretches one’s suspension of disbelief so much that you would think this has the quality of fanfiction-level writing. Not just with the gambling aspect of it, but the entire setting is fucking stupid. From the very start I was always curious why there were so many students at Hyakkaou Academy and why they would all gamble. But as I continued watching, the curiosity turned into frustration because it became apparent that there is no proper reason why so many students would stay there or continue to engage in gambling than to make Yumeko even more perfect than what she already is. Yumeko exposes a lot of the games played in gambles as cheat ways to get other in debt, yet that never changes the amount of gambling that takes place within the academy, and that is because most of the students in the background are ignorant buffoons. I would also like to know why only one adult to my memory has appeared in the entire 12 episodes. ONE! I cannot imagine such a prestigious academy to only have one adult working at the academy, but it makes sense with the amount of betting that takes place so regularly.{`\n\n`}Nearly every character in this show pissed me off. I have already stated how Yumeko is convoluted out her own ass and is like a vacuum sucking all the excitement away from the show, but she seems like God’s gift to this show when compared to every other character. Meari, who seemed like she had potential, starting off as a cocky bitch that is humbled by Yumeko before being humiliated by the student council. Sadly, she turned out to be a weaker clone of Yumeko by episode 4 and is only used as a way to explain other games Yumeko plays as the story goes on. Literal waste of potential. Ryouta is their other friend, but honestly he does nothing in this show. He just reacts to shit happening around him and nods in response and is a waste of space. Fuck him.</Text></Text>
  }, 
  {
    url:"https://imgur.com/LilalSj.jpg",
    AnimeTitle:"5-toubun no Hanayome",
    AnimeScore:"Score 8.42/10\n2019",
    AnimeRating: 3,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>The Quintessential Quintuplets.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>Gotoubun no Hanayome, The Five Wedded Brides.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`五等分の花嫁.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>TV-Series</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>12</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jan 11, 2019 to Mar 29, 2019`}</Text>
    <Text style={textdesing2}>{`\n`}Premiered:  </Text><Text>Winter 2019</Text>
    <Text style={textdesing2}>{`\n`}Broadcast:  </Text><Text>Fridays at 01:28 (JST)</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`None found`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`Funimation`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Tezuka Productions`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Manga</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Harem, Comedy, Romance, School, Shounen`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`24 min. per ep..`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Fuutarou Uesugi is an ace high school student, but leads an otherwise tough life. His standoffish personality and reclusive nature have left him friendless, and his father is debt-ridden, forcing his family to scrape by.{`\n\n`}One day during his lunch break, Uesugi argues with a female transfer student who has claimed "his seat," leading both of them to dislike each other. That same day, he is presented with a golden opportunity to clear his family's debt: a private tutoring gig for a wealthy family's daughter, with a wage of five times the market price. He accepts the proposal, but is horrified to discover that the client, Itsuki Nakano, is the girl he confronted earlier!{`\n\n`}After unsuccessfully trying to get back on Itsuki's good side, Uesugi finds out that his problems don't end there: Itsuki is actually a quintuplet, so in addition to her, he must also tutor her sisters—Miku, Yotsuba, Nino, and Ichika—who, despite the very real threat of flunking, want nothing to do with a tutor. However, his family's livelihood is on the line so Uesugi pushes on, adamant in his resolve to rid the sisters of their detest for studying and successfully lead them to graduation.</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}The plot is easy to follow. A guy, Fuutarou Uesugi, nerdy, poor, solitary, gets a job as the tutor of a group of quintuplets who are near to fail the school. This group of girls, Ichika, Nino, Miku, Yotsuba, Itsuki, named in order as they came to this world, hate to study and even more dislike the tutor. After some time, these girls begin showing affection towards their tutor and their surroundings starts to change. The only problem, this kind of plot could be seen absurdness and filled with excessive banality, boring a selected group of anime followers.{`\n\n`}But that hardly matters. This group of characters is funny and genuine. In the beginning, you can feel the show as the classical, generic harem where the guy likes and love all the girls. However, in this series, the guy only cares to study and do not see the quintuplets as friends or even more as candidates to have a relationship.{`\n\n`}On the other hand, the art and sound are fabulous. For me, the art quality is one of the best of the season and I want to praise the creator, the animators because the quintuplets have the same silhouette but with some changes in the hair and the accessories they create different characters. If you pay closer attention to the character design, they will look the same boosting the effect. The sound and voice acting are perfect.{`\n\n`}Mostly, "Gotoubun no Hanayome” is just fun, for Fuutarou to become a better person and starts caring for others outside his family, for the quintuplets whom evolve and begin to experience the love path. Together, they create a cheerful and enjoyable comedy where this group connects between each other and their world expands hilariously.</Text></Text>
  }, 
  {
    url:"https://imgur.com/fyE0Y8e.jpg",
    AnimeTitle:"Hello World",
    AnimeScore:"Score 8.01/10\n2019",
    AnimeRating: 3,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Title</Text><Text style={textdesing2}>{`\n\n`}Japanese: </Text><Text>{`ハロー・ワールド.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>Movie</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Sep 20, 2019`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Yomiuri Telecasting, TV Osaka, Mainichi Broadcasting System, Movic, Toho, Memory-Tech, Tokyo MX, Shueisha, Kansai Telecasting, CyberAgent, JR East Marketing & Communications, LINE Corporation, Marui Group, Lawson Entertainment, Hikari TV`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`None found`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Graphinica`}</Text>
    <Text style={textdesing2}>{`\n`}Source:  </Text><Text>Original</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Sci-Fi, Drama, Romance`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`1 hr. 37 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}The year is 2027, and the city of Kyoto has undergone tremendous technological advancement. Within the city lives Naomi Katagaki, a socially awkward and introverted boy with a love for books, and Ruri Ichigyou, a girl with a cold personality who is often blunt with people, but shares his love for reading. Despite having similar interests, Naomi is afraid to approach Ruri due to her unfriendly nature.{`\n\n`}One day, as Naomi goes out for a walk, a crimson aurora pierces through the sky for a brief moment before vanishing. Shortly after, he sees a three-legged crow and a mysterious hooded man who reveals himself to be Naomi from 10 years in the future, explaining that he has come to change an imminent tragic event that happens to Ruri shortly after they start dating. Initially taking his words with a grain of salt, present-day Naomi follows his future self's instructions and starts getting closer to Ruri, determined to save her.{`\n\n`}Hello World focuses on the present Naomi alongside himself from 10 years into the future. With the help of his future self, Naomi begins his preparations to save Ruri. Will he be able to change the future?</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}To begin with, the story felt... confusing? Especially at the end, it might make you go, "what just happened?" Well yeah, that was me as well. But if you got confused at any part during the movie other than the last, I suggest you go watch Steins;Gate again to turn yourself into a true mad scientist! (Not sponsored by Dr. Pepper) However, you got to catch the information quickly especially at the first when it was the most crucial about his future self explaining about ALLTALE Quantum technology. If you missed that, good luck trying to understand the whole movie.{`\n\n`}Now onto the art & animation, which the art felt lackluster in emotions for a Romance film. However, do keep in mind that this a full CGI film, so get ready to see some wack animation. I only noticed one however, but it downgraded the whole thing since that animation was literally one of the simplest ones that is given a lot of time, I can probably do it as well. Back to the art, although lackluster, there were a few scenes that were incredibly cute thanks to the visuals. So it depends on whether you care about the Romance or the Sci-Fi, and then you see it yourself from a specific viewpoint then on. What I have to seriously criticize on however is the amount of color they used in the movie.{`\n\n`}Okay, Ruri and Naomi were so cute together it just felt amazing. (and then the story went downhill from there but let's not talk about the sad times) | Naomi in the future felt like a how a mentor should feel like, although there were *some* "disagreements", he has done his part well at tutoring himself in the past. Naomi in the past wasn't a wimp either, you can see the his development throughout the story through sheer willpower to save Ruri. He isn't that wimpy kid that doesn't even dare to enter the library anymore, he is a reliable and independent teen that people can rely on.{`\n\n`}Overall, if you have epilepsy, I will not recommend this movie due to the amount of colors and the motion. If you do not however, I can recommend it if you like Sci-Fi or romance. Or else, if you just like anything you watch then why are you here? Go ahead. However, if you are a critic that hates CGI, romance and time traveling. Then please, do not watch this. I already warned you beforehand. </Text></Text>
  }, 
  {
    url:"https://imgur.com/37l1D34.jpg",
    AnimeTitle:"A Whisker Away",
    AnimeScore:"Score 7.45/10\n2020",
    AnimeRating: 2,
    AnimeAlternative: <Text><Text style={textdesign}>Alternative Titles</Text><Text style={textdesing2}>{`\n\n`}English: </Text><Text>A Whisker Away.</Text><Text style={textdesing2}>{`\n`}Synonyms: </Text><Text>Nakineko.</Text><Text style={textdesing2}>{`\n`}Japanese: </Text><Text>{`泣きたい私は猫をかぶる.`}</Text></Text>,
    AnimeInfo: <Text><Text style={textdesign}>Information</Text><Text style={textdesing2}>{`\n\n`}Type:  </Text><Text>ONA</Text>
    <Text style={textdesing2}>{`\n`}Episodes:  </Text><Text>1</Text>
    <Text style={textdesing2}>{`\n`}Status:  </Text><Text>Finished Airing</Text>
    <Text style={textdesing2}>{`\n`}Aired:  </Text><Text>{`Jun 18, 2020`}</Text>
    <Text style={textdesing2}>{`\n`}Producers:  </Text><Text>{`Fuji TV, Toho, BS Fuji, TOHO animation, Universal Music Japan, Fuji Creative, Kadokawa, KDDI, Twin Engine, Dentsu Meitetsu Communications`}</Text>
    <Text style={textdesing2}>{`\n`}Licensors:  </Text><Text>{`None found`}</Text>
    <Text style={textdesing2}>{`\n`}Studios:  </Text><Text>{`Studio Colorido`}</Text>
    <Text style={textdesing2}>{`\n`}Genres:  </Text><Text>{`Comedy, Supernatural, Drama, Romance, School`}</Text>
    <Text style={textdesing2}>{`\n`}Duration:  </Text><Text>{`1 hr. 44 min.`}</Text>
    <Text style={textdesing2}>{`\n`}Rating:  </Text><Text>{`PG-13 - Teens 13 or older`}</Text></Text>,
    AnimeSynopsis: <Text><Text style={textdesign}>Synopsis</Text><Text>{`\n\n`}Miyo Sasaki is an energetic high school girl who comes from a broken family consisting of her unconfident father and an overly invested stepmother, whose attempts at connecting with Miyo come across as bothersome. Seeing Kento Hinode as a refuge from all her personal issues, she can't help herself from forcing her unorthodox demonstrations of love onto her crush.{`\n\n`}While Miyo is unable to get Kento's attention as herself, she manages to succeed by interacting with him in the form of a white cat, affectionately nicknamed "Tarou" by Kento. But Miyo soon realizes that she can't help Kento with the various problems she overhears in her cat form and is now caught between two tough choices. Will she continue her relationship with him as a cat, or will she reveal her identity and risk what they have, in order to help him as her human self?</Text></Text>,
    AnimeReview: <Text><Text style={textdesign}>Critics Review</Text><Text>{`\n\n`}The story starts off pretty quickly, so watching a trailer at least once is recommended. The storytelling begins with Miyo’s family, Miyo’s relationship with her friends, and how she got a mask that allows her to transform into a cat. The overall concept can be understood within 10 minutes or less, giving you time to enjoy the whole movie instead of making you try to understand what’s going on. The whole concept is interesting and unique, making A Whisker Away became a must-watch. The movie also maintains the proportion of the supernatural element and the daily life element at the appropriate level, being not too heavy on one side. Lastly, I would say that the story contains both sad and happy moments, leading to a satisfying conclusion.{`\n\n`}Eye-friendly, tender, and cute, these 3 words describe the art perfectly. While not being as vibrant as Your Name or Tenki no Ko, instead, A Whisker Away shows its own charm of art in the usage of colors. The art matches and creates the tender mood and tone of the movie, and when combined with such high-quality scenery art, a score of 10 is obtained easily.{`\n\n`}A Whisker Away is cute, being a unique watch, not many shows have animals as their main theme, and this movie is a success. What I enjoyed the most is the art and the theme song, which are totally charming and beautiful, matching the sweet and tender mood of the story. Overall, this movie left me an impression. My 104-minute watch is well spent.{`\n\n`}If you are looking for a unique movie with a light supernatural element, romance, and eye-friendly art, then I recommend this anime, or even if you just love cats. Enjoy!</Text></Text>
  }, 
  ];

/*Home Screen Component*/
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: "https://papers.co/wallpaper/papers.co-vf69-stripe-dark-texture-pattern-41-iphone-wallpaper.jpg"}} style={styles.backgroundimg}>

      {/* Logo Image */}
      <Image
        source={{ uri: "https://www4.lunapic.com/editor/working/160156674073480357?1820568027" }}
        style={{ width: 72, height: 72, position:"relative", top:-70,left:149}}
      />

      {/*App Title*/}
      <View>
        <Text style={styles.titlefont}>ROTTEN</Text>
        <Text style={styles.titlefont2}>POTATO</Text>
      </View>

      {/* Movie Menu Button */}
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Movies")}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Movie Reviews</Text>
        </View>
      </TouchableHighlight>

      {/* Anime Menu Button */}
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Anime")}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Anime Reviews</Text>
        </View>
      </TouchableHighlight>

      {/*Company Title*/}
      <View>
        <Text style={styles.companytitle}>© 2020 Team Patatas</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

/*Heart Loop*/
const Hearts = (n) => {
  let hearts = [];
  for (let i = 0; i < n; i++) {
    hearts.push(
      <Image
        key={i}
        style={styles.heart}
        source={{ uri: "https://www4.lunapic.com/editor/working/160156636168450197?3240117667" }}
      />
    );
  }
  return hearts;
};


/*Anime Screen Component*/
function AnimeScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ScrollView>
      <ImageBackground source={{uri: "https://cdn.donmai.us/original/31/5e/__kimi_no_na_wa_drawn_by_linxiaoming_southcity__315e9763bdf243a76c58128e12415c25.jpg"}} style={styles.backgroundimg}>
      <Text
        style={{
          marginTop: 15,
          fontSize: 20,
          marginHorizontal: 15,
        }}
      >
      </Text>
      <TextInput
        style={styles.inputStyle_2}
        onChangeText={(text) => setKeyword(text)}
        placeholder = "Search Bar" placeholderTextColor="#047eff" 
        underlineColorAndroid='transparent'
      />

      {/*Looping the Anime Content*/}
      {Anime.map((menu, key) => {
        if (menu.AnimeTitle.toLowerCase().includes(keyword.toLowerCase())) {
          return (
            <View key={key} style={{ flexDirection: "row" }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ecf0f1"
                onPress={() => navigation.navigate(menu.AnimeTitle)}
              >
                <View style={styles.card3}>
                  <Image style={styles.cardImg} source={{ uri: menu.url }} />
                  <Text style={styles.AnimeTitle}>{menu.AnimeTitle}</Text>
                  <View
                    style={{ flexDirection: "row", alignContent: "flex-end" }}
                  >
                    {Hearts(menu.AnimeRating)}
                  </View>
                  
                  <Text style={styles.AnimeDesc} numberOfLines={2}>
                    {menu.AnimeScore}
                  </Text>

                </View>
              </TouchableHighlight>
            </View>
          );
        }
      })}
      </ImageBackground>
    </ScrollView>
  );
}

/*Star Loop*/
const Stars = (n) => {
  let stars = [];
  for (let i = 0; i < n; i++) {
    stars.push(
      <Image
        key={i}
        style={styles.star}
        source={{ uri: "https://www7.lunapic.com/editor/working/160148628564660292?4259021683" }}
      />
    );
  }
  return stars;
};

/*Movie Screen Component*/
function MovieScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ScrollView>
    <View style={{flex: 1, backgroundColor:"#141414"}}>
      <Text
        style={{
          marginTop: 15,
          fontSize: 20,
          marginHorizontal: 15,
        }}
      >
      </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setKeyword(text)}
        placeholder = "Search Bar" placeholderTextColor="#414246" 
        underlineColorAndroid='transparent'
      />
      {/*Looping the Movie Content*/}
      {Movie.map((menu, key) => {
        if (menu.MovieTitle.toLowerCase().includes(keyword.toLowerCase())) {
          return (
            <View key={key} style={{ flexDirection: "row" }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ecf0f1"
                onPress={() => navigation.navigate(menu.MovieTitle)}
              >
                <View style={styles.card}>
                  <Image style={styles.cardImg} source={{ uri: menu.url }} />
                  <Text style={styles.MovieTitle}>{menu.MovieTitle}</Text>
                  <View
                    style={{ flexDirection: "row", alignContent: "flex-end" }}
                  >
                    {Stars(menu.MovieRating)}
                  </View>
                  
                  <Text style={styles.MovieDesc} numberOfLines={2}>
                    {menu.MovieDesc}
                  </Text>

                </View>
              </TouchableHighlight>
            </View>
          );
        }
      })}
      </View>
    </ScrollView>
  );
}

/*Movie Details Screen Component*/
function MovieDetail(props) {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor:"#141414"}}>
       <View style={styles.card2}>
        <Image style={styles.img} source={{uri: props.route.params.url}}/>
        <Text style={{textAlign:"center", color:"#ffe7be",padding:9, fontSize:30, fontFamily:"Roboto", fontWeight: "bold"}}>{props.route.params.MovieTitle}</Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.DirectedBy}</Text>
        <Text style={styles.txtforviewing}>{props.route.params.CastBy}</Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.Plot}</Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.Review}</Text>
       </View>
    </View>
    </ScrollView>
  );
}

/*Anime Details Screen Component*/
function AnimeDetail(props){
  return(
    <ScrollView>
      <View style={{flex: 1, backgroundColor:"#246dad"}}>
        <View style={styles.card4}>
        <Image style={styles.img2} source={{uri: props.route.params.url}}/>
        <Text style={{textAlign:"center", color:"#bda945",padding:9, fontSize:28, fontFamily:"Roboto", fontWeight: "bold"}}>{props.route.params.AnimeTitle}</Text>
        <View style={{borderBottomColor: 'white', borderBottomWidth: 2, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.AnimeAlternative}</Text>
        <View style={{borderBottomColor: 'white', borderBottomWidth: 2, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.AnimeInfo}</Text>
        <View style={{borderBottomColor: 'white', borderBottomWidth: 2, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.AnimeSynopsis}</Text>
        <View style={{borderBottomColor: 'white', borderBottomWidth: 2, }}/>
        <Text style={styles.txtforviewing}>{props.route.params.AnimeReview}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

/*Main Navigations*/
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#414246",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/*HomeScreen*/}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/*MoviesScreen*/}
        <Stack.Screen name="Movies" component={MovieScreen} />

        {/*AnimeScreen*/}
        <Stack.Screen name="Anime" component={AnimeScreen} />


        {/*Looping of Screens for each Movies*/}
        {Movie.map((menu, key) => (
          <Stack.Screen
            key={key}
            initialParams={{
              url: menu.url,
              MovieTitle: menu.MovieTitle,
              MovieDesc: menu.MovieDesc,
              DirectedBy: menu.DirectedBy,
              CastBy: menu.CastBy,
              Plot: menu.Plot,
              Review: menu.Review,
            }}
            name={menu.MovieTitle}
            component={MovieDetail}
          />
        ))}

        {/*Looping of Screens for each Animes*/}
        {Anime.map((menu, key) => (
          <Stack.Screen
            key={key}
            initialParams={{
              url: menu.url,
              AnimeTitle: menu.AnimeTitle,
              AnimeAlternative: menu.AnimeAlternative,
              AnimeInfo: menu.AnimeInfo,
              AnimeSynopsis: menu.AnimeSynopsis,
              AnimeReview: menu.AnimeReview,
              
            }}
            name={menu.AnimeTitle}
            component={AnimeDetail}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Custom Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#646464",
    height: 50,
    width: 300,
    borderRadius: 5,
    margin: 14,
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    flex: 1,
    height: 300,
    backgroundColor: "#141414",
    marginHorizontal: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
  },
  cardImg: {
    width: 363,
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#ecf0f1",
    textAlign: "center",
  },

  inputStyle: {
    width: "90%",
    height: 40,
    fontSize: 26,
    padding: 8,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    color: "#ffff",
    borderColor: "#414246",
    margin: 15,
    marginTop: -25,
    alignSelf: "flex-end",
    textAlign:'center',
    fontSize: 18,
  },
  MovieTitle: {
    fontSize: 25,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 10,
  },
  MovieDesc: {
    paddingLeft: 12,
    paddingRight: 12,
    color:"#fff",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  star: {
    width: 25,
    height: 25,
    marginTop: 4,
    marginLeft: 10,
  },
  heart: {
    width: 25,
    height: 25,
    marginTop: 4,
    marginLeft: 10,
  },
  img:{
    width: 348,
    height: 190,
    marginTop: 5,
    borderRadius: 6,
  },
  card2:{
    flex:1,
    height: 2900,
    padding:7,
    backgroundColor: "#3d3e41",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  txtforviewing:{
    padding:10, 
    fontSize:20, 
    color:"#b3a885",
    fontFamily:"Roboto"
  },
  txtmoviearray:{
    fontWeight: "bold",
   fontSize:25, 
   color:"#ffe7be"
  },
  backgroundimg: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    width: '100%', 
    height: '100%',
  },
  card3:{
    flex: 1,
    height: 300,
    backgroundColor: "#246dad",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#414246",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
  },
  inputStyle_2: {
    width: "90%",
    height: 40,
    fontSize: 26,
    padding: 8,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    color: "#ffff",
    borderColor: "#047eff",
    margin: 15,
    marginTop: -25,
    alignSelf: "flex-end",
    textAlign:'center',
    fontSize: 18,
  },
  card4:{
    flex:1,
    height: 4150,
    padding:7,
    backgroundColor: "#246dad",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 0,
  },
  AnimeTitle: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
    color: "#bda945",
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 10,
  },
  AnimeDesc: {
    paddingLeft: 12,
    paddingRight: 12,
    color:"#bda945",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  img2:{
    width: 348,
    height: 300,
    marginTop: 5,
    borderRadius: 6,
  },
  titlefont:{
    position:"relative", 
    top:-80, color:"#c0c0c0", 
    textAlign:"center", 
    fontSize:86, 
    fontFamily: 'sans-serif-condensed'
  },
  titlefont2:{
    position:"relative", 
    top:-117, 
    color:"#ffd400", 
    textAlign:"center", 
    fontWeight: "bold", 
    fontSize:96, //63
    fontFamily: 'sans-serif-condensed'
  },
  companytitle:{
    position:"relative", 
    top:50, color:"#c0c0c0", 
    textAlign:"center", 
    fontSize:15, 
    fontFamily: 'sans-serif-condensed'
  }
});
