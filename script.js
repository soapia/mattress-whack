var doAFlip

var no = ["No", "Nope", "No thanks", "Not really", "Nah"]
var notMePast = ["I didn't", "I did not", "Not personally", "No", "Not really", "Nope", "Not myself", "Not particularly"]
var notMeNow = ["I don't", "I do not", "Not personally", "No", "Not really", "Nope", "Not myself", "Not particularly"]
var but = ["but", "however", "although", "yet", "nevertheless"]
var bills = [
  "HB 574 creates barriers for those who work in the electoral process",
  "SB 331 severely limits access to interpreters",
  "HB 1622 pressures local officials towards limiting early access voting through bureaucratic red taep and cumbersome hurdles",
  "HB 3920 limits mail ballots for those with diabsilites and working class people",
  "HB 1128 results in intimidating polling workers",
  "HB 1888 reduces the number of mobile and temporary voting locations",
  "SB 1 institutes partisan poll watchers which erode trust in voting centers, and felony penalties for poll workers and voters",
  "HB 273 reduces the number of voting possibilites by restricting mail ballots",
  "SB 1113 pressures state officials to purge the voter rolls",
  "SB 1048 limits early voting locations and make them less accessible to voters"]
var result = [
  "harming the democratic process", "resulting in voter suppression and intimidation", "eroding faith in our democracy", "harming Texas voters and manufacturing doubt about the election process", "undermining democracy and eroding the hard fought efforts of marginalized voters", "which is clearly an affront to democracy", "which is a direct threat and suppression of marginalized voters", "harming every day Texans", "placing obstacles in voters' path to excercise their constitutional right to vote", "hurting Texas voters",  "making elections less fair and less representative", "supressing community members from accessing their government", "which ia a clear violation of the right to vote", "which is clearly voter intimidation and voter suppression", "which is a purposeful attempt to undermine democracy", "nullifying every voters right to feel secure in their election", "making it harder to cast a vote without fear", "amping voter suppression to new levels", "designed to rig the game against marginalized voters", "which is an attack on the right to vote", "lessening the chance for every Texas who registers to vote to have the chance to cast their ballot", "jeopardizing the votes of Texans", "which clearly is voter suppression hurting our democracy", "which is  a prime example of voter suppression at its worst", "adding further hurdles to voting", "undermining our democracy by making voting a privilege rather than a Constituionally guaranteed right", "a blatant act of voter suppression by the Republican Texas Legislature"]


var quotes = {
  "Ann Richards": ["I did not want my tombstone to read, 'She kept a really clean house.' I think I'd like them to remember me by saying, 'She opened government to everyone.'", "Power is what calls the shots, and power is a white male game."],
  "Barbara Jordan": ["A nation is formed by the willingness of each of us to share in the responsibility for upholding the common good.", "If the society today allows wrongs to go unchallenged, the impression is created that those wrongs have the approval of the majority.", "The imperative is to define what is right and do it.", "My faith in the Constitution is whole, it is complete, it is total, and I am not going to sit here and be an idle spectator to the diminution, the subversion, the destruction of the Constitution.", "If the society today allows wrongs to go unchallenged, the impression is created that those wrongs have the approval of the majority.", "In this election year, we must define the common good and begin again to shape a common future."],
  "Beto O'Rourke": ["If the society today allows wrongs to go unchallenged, the impression is created that those wrongs have the approval of the majority.", "The world wants to know - is the future a democratic one or an autocratic one? And I want to make sure that the United States leads on that, clearly that it's democratic."],
  "Lyndon B. Johnson": ["The vote is the most powerful instrument ever devised by man for breaking down injustice and destroying the terrible walls which imprison men because they are different from other men.", "Many of the issues of civil rights are very complex and most difficult. But about this there can and should be no argument: Every American citizen must have an equal right to vote. There is no reason which can excuse the denial of that right. There is no duty which weighs more heavily on us than the duty we have to ensure that right.", "I want to be the president who educated young children to the wonders of their world. I want to be the president who helped to feed the hungry and to prepare them to be taxpayers instead of tax eaters. I want to be the president who helped the poor to find their own way and who protected the right of every citizen to vote in every election.", "And I pledge you that we will not delay, or we will not hesitate, or we will not turn aside until Americans of every race and color and origin in this country have the same right as all others to share in the process of democracy.", "Open your polling places to all your people. Allow men and women to register and vote whatever the color of their skin. Extend the rights of citizenship to every citizen of this land.", "Democracy is a constant tension between truth and half-truth and, in the arsenal of truth, there is no greater weapon than fact.", "We preach the virtues of democracy abroad. We must practice its duties here at home. Voting is the first duty of democracy.", "For it was only after I could become President of this country that I could really see in all its hopeful and troubling implications just how much the hopes of our citizens and the security of our Nation and the real strength of our democracy depended upon the learning and the understanding of our people.", "A man without a vote is a man without protection.", "We did not choose to be the guardians of the gate, but there is no one else."],
  "Molly Ivins": ["We need to reform the political system, or we'll lose the democracy. I don't think it's that hard. It doesn't take rocket science. We've done it before successfully at the presidential level and tried it several places at the state level.", "So keep fightin' for freedom and justice, beloveds, but don't you forget to have fun doin' it. Lord, let your laughter ring forth. Be outrageous, ridicule the fraidy-cats, rejoice in all the oddities that freedom can produce.", "When politicians start talking about large groups of their fellow Americans as 'enemies,' it's time for a quiet stir of alertness. Polarizing people is a good way to win an election, and also a good way to wreck a country.", "It is possible to read the history of this country as one long struggle to extend the liberties established in our Constitution to everyone in America."],
  "Wendy Davis": ["The fight for the future of Texas is just beginning.", "I think that speaking is the most important thing we can do, but let's talk about what it means to speak effectively. We can talk in an echo chamber to our friends on social media and otherwise - and that's important, that's how we encourage and educate one another.But speech that leads to action is critical. And it doesn't sound very sexy, but one of the most important ways to speak in a way that makes an impact is to vote. Speaking at the ballot box is the most important place that we speak."],
}

var news = [
  "State Rep. Carrie Isaac (R) of Wimberley filed House Bill 2390, one of over 100 election-related bills that have been filed this session. Voting rights advocates say the bill is a targeted attack on the political power of young voters.", "In 2018, Texas State's early voting location closed after the first three days of the early voting period, during which students faced hour-and-a-half-long waits to cast a ballot", "In the last 10 years, Texas has closed a total of 750 polling locations — the most of any state", "Currently, Texas recognizes concealed handgun carry licenses, but not student I.D. cards, as acceptable voter I.D.", "A volunteer fielded a heartbreaking call from an elderly woman who said she was afraid to vote by mail because she didn’t want to go to jail. This is the consequence of voter suppression.", "Texas enacted tougher voter identification rules for those who vote by mail in 2022. They must provide a state-issued photo ID or the last four digits of their Social Security number to get their application approved. The change led to a dramatic increase in the rate of rejected mail-in ballots. They went from 1 percent in 2020 to 12 percent in the March primary. In raw numbers, that was 12,000 absentee ballot applications and 24,000 mail-in ballots turned down, The Texas Tribute reported.", "Historically, Texas A&M hosted the polling location within its campus at the Memorial Student Center. This year, however, the county commissioners put the location up to a vote. With a simple majority, it was decided that the location would be moved to the newly constructed City Hall right in the center of College Station. County Commissioner Nancy Berry, who oversees the precinct that includes Texas A&M, cited the convenient location of the City Hall as well as low voter turnout at the Texas A&M polling place as reasons for moving the early voting location. However, data obtained by The Texas Tribune showed that it was one of the county’s most popular early-voting sites in recent general elections.", "Across Texas, many universities lack on-campus polling sites. Coupled with state laws regarding voter ID and registration, advocate groups say these are barriers that make it harder for young Texans to vote.", "When you're selecting some forms of I.D. but not selecting others, what you're doing is shaping the electorate. It's the same thing with prohibiting campus polling locations; these are conscious choices to keep some people from participating and to elevate the participation of others.", "data from the March 2022 primary shows that just SB 1’s many provisions caused massive disenfranchisement and major racial disparities.", "absentee applications and mail ballots were rejected at extremely high levels. These reports — relying primarily on aggregate, high-level data or data from a small handful of counties — showed that some 12,000 applications and 25,000 ballots were rejected during the March primary and that there were “signs of a race gap.”", "the overwhelming majority of ballot rejections were due to the new ID number requirements imposed by S.B. 1 and that Latino, Asian, and Black voters were significantly more likely to have their mail ballot applications rejected than white voters.", "even when voters successfully applied to vote by mail, voters of color were far more likely to have their mail ballots rejected.", "The combination of application and mail ballot rejections left nonwhite voters at least 30 percent more likely to have an application or mail ballot rejected than white voters.", "The vote-by-mail applications of voters of color were rejected for S.B.1–related reasons at higher rates than those of white voters.", "Although all racial and ethnic groups were more likely than white voters to have their ballot applications rejected, the rejection rate was highest for Asian voters, who were about 40 percent more likely to have an application rejected than white voters.", "white voters were the least likely to have their ballots rejected. All other racial and ethnic groups were at least 47 percent more likely than white voters to have their ballot rejected, even though they were also less likely to successfully request a mail ballot in the first place.", "Asian and Latino voters were each more than 50 percent more likely to have a ballot rejected due to a problem meeting S.B. 1’s new requirements than white voters.", "S.B.–1 related racial disparities compounded over the primary: nonwhite voters were less likely than white voters to obtain a mail ballot because their applications were rejected at much higher rates, and when they were able to obtain one, they were much more likely to have their ballot rejected.", "While 12 percent of white voters who requested a mail ballot had either their application or ballot rejected due to S.B. 1, these numbers were far higher for other racial and ethnic groups: more than 16 percent of each group saw either their application or ballot tossed.", "S.B. 1–related rejection rates were more than a third higher for Black and Latino voters than for white voters and more than 60 percent higher for Asian voters than for white voters."]


$(document).ready(function(){
  document.getElementById("on").addEventListener("click", startLoop);
  document.getElementById("off").addEventListener("click", stopLoop);
  var iframe = document.getElementById("230446758425057")
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
})

function talkYoShit() {
  var canYou = rando(no)
  var didYou5 = `${rando(notMePast)}, ${rando(but)} ${rando(bills)}, ${rando(result)}.`
  var didYou7 = `${rando(notMePast)}, ${rando(but)}, "${rando(news)}"`
  var doYou = rando(notMeNow)
  var wouldYou = rando(no)
  var randomPerson = randoObj(quotes)
  var isThere = `"${rando(quotes[randomPerson])}" -${randomPerson}`
  document.getElementById("iframe-script").src = `https://form.jotform.com/230446758425057/?canYou=${encodeURIComponent(canYou)}&didYou5=${encodeURIComponent(didYou5)}&didYou7=${encodeURIComponent(didYou7)}&doYou=${encodeURIComponent(doYou)}&wouldYou=${encodeURIComponent(wouldYou)}&isThere=${encodeURIComponent(isThere)}`
  // document.getElementById("230446758425057").submit()
  // gtag('event', 'send_form')
}

function startLoop() {
  console.log("started")
  $('#on').hide()
  $('#off').show()
  if (!doAFlip) {
    doAFlip = setInterval(talkYoShit, 3000)
  }
}

function stopLoop() {
  console.log("stopped")
  $('#on').show()
  $('#off').hide()
  clearInterval(doAFlip)
  doAFlip = null
}

function rando(arr) {
    var index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function randoObj(obj) {
  const keys = Object.keys(obj)
  return keys[Math.floor(Math.random() * keys.length)]

}

function getIFrame(frameID) {
  var frameObj = document.getElementById(frameID);
  var frameContent = frameObj.contentWindow.document.body.innerHTML;
  return frameContent
}