var pic = " ";
var msg = " ";
function run()
{
  document.getElementById('questionaire').style.display = "none";
  var d = document.getElementById('day').value;
  var m = document.getElementById('month').value;
  var b = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (m == b[0]) {
    if(d <= 20 && d > 0)
    {
      capricorn();
    }
    else if(d > 20 && d <= 31)
    {
      aquarius();
    }
  }
  else if(m == b[1])
  {
    if(d <= 18 && d > 0)
    {
      aquarius();
    }
    else if(d > 18 && d <= 28)
    {
      pisces();
    }
  }
  else if(m == b[2])
  {
    if(d <= 20 && d > 0)
    {
      pisces();
    }
    else if(d > 20 && d <= 31)
    {
      aries();
    }
  }
  else if(m == b[3])
  {
    if(d <= 19 && d > 0)
    {
      aries();
    }
    else if(d > 19 && d <= 30)
    {
      taurus();
    }
  }
  else if(m == b[4])
  {
    if(d <= 20 && d > 0)
    {
      taurus();
    }
    else if(d > 20 && d <= 31)
    {
      gemini();
    }
  }
  else if(m == b[5])
  {
    if(d <= 20 && d > 0)
    {
      gemini();
    }
    else if(d > 20 && d <= 30)
    {
      cancer();
    }
  }
  else if(m == b[6])
  {
    if(d <= 22 && d > 0)
    {
      cancer();
    }
    else if(d > 22 && d <= 31)
    {
      leo();
    }
  }
  else if(m == b[7])
  {
    if(d <= 22 && d > 0)
    {
      leo();
    }
    else if(d > 22 && d <= 31)
    {
      virgo();
    }
  }
  else if(m == b[8])
  {
    if(d <= 22 && d > 0)
    {
      virgo();
    }
    else if(d > 22 && d <= 30)
    {
      libra();
    }
  }
  else if(m == b[9])
  {
    if(d <= 22 && d > 0)
    {
      libra();
    }
    else if(d > 22 && d <= 31)
    {
      scorpio();
    }
  }
  else if(m == b[10])
  {
    if(d <= 21 && d > 0)
    {
      scorpio();
    }
    else if(d > 21 && d <= 30)
    {
      sagittarius();
    }
  }
  else if(m == b[11])
  {
    if(d <= 21 && d > 0)
    {
      sagittarius();
    }
    else if(d > 21 && d <= 31)
    {
      capricorn();
    }
  }
  document.getElementById('astroSign').innerHTML = pic;
  document.getElementById('fortune').innerHTML = msg;
}

function aries()
{
  pic = "<img src = 'aries.jpeg' width = '100px' height = '100px'>";
  msg = "The human body harbors about four hundred different microbes. While there are many things you don’t see at the moment, you can acknowledge what is already known and obvious, and care for your body and routine in ways that have ...";
}

function taurus()
{
  pic = "<img src = 'taurus.jpeg' width = '100px' height = '100px'>";
  msg = "At the end of one emotional cycle, you need some time to yourself so you can contemplate on everything that has been happening so far and your reactions to events in the outer world. See what hides below forms and ...";
}

function gemini()
{
  pic = "<img src = 'gemini.jpeg' width = '100px' height = '100px'>";
  msg = "If life was there to be enjoyed and shared with others in loving and warm contacts, maybe some changes are necessary in your world to adapt to the actual potential of the world. See things around you as flexible as ...";
}

function cancer()
{
  pic = "<img src = 'cancer.jpeg' width = '100px' height = '100px'>";
  msg = "Disneyland was off limits for men with long hair until the 1960s. Deeply emotional about some bans and restrictions, this is a good moment to ask yourself if they are perhaps protecting you from some choices and not only holding ...";
}

function leo()
{
  pic = "<img src = 'leo.jpeg' width = '100px' height = '100px'>";
  msg = "With high aspirations and goals, you wish to reach today, you are ready to fight for positive things in your life and things that other people think are impossible. Knowing where your abilities lie, you aren’t willing to let anyone ...";
}

function virgo()
{
  pic = "<img src = 'virgo.jpeg' width = '100px' height = '100px'>";
  msg = "Some beliefs need special attention and nurturing so you don’t take away your own power by thinking about all negative options and circumstances that might arise. Worries are natural and protect you from problems along the way, but they shouldn’t ...";
}

function libra()
{
  pic = "<img src = 'libra.jpeg' width = '100px' height = '100px'>";
  msg = "One tree of olive can live up to 1,500 years. With energies high, you can do a lot more than meets the eye. Shadows will be embraced, and some problems overcome today, so you can move on with your heart ...";
}

function scorpio()
{
  pic = "<img src = 'scorpio.jpeg' width = '100px' height = '100px'>";
  msg = "There is more power to this moment than others seem to realize, and strong energies are rising to push you through any problem you might have had in the past. Believe in yourself so you can make bold steps forwards ...";
}

function sagittarius()
{
  pic = "<img src = 'sagittarius.jpeg' width = '100px' height = '100px'>";
  msg = "High hopes are about to pull you through, even though others might disagree and see you as the one to run away from responsibility and serious matters. Go in-depth and don’t be defined by anyone’s opinion on where actual “depth” ...";
}

function capricorn()
{
  pic = "<img src = 'capricorn.jpeg' width = '100px' height = '100px'>";
  msg = "About 80% of millionaires are known to buy and drive used cars. Even though you are being criticized for what seems as common sense to you, there is no need to overspend or overdo anything today, with your energies set ...";
}

function aquarius()
{
  pic = "<img src = 'aquarius.jpeg' width = '100px' height = '100px'>";
  msg = "Experience has been gathered, and you are certain that everything will eventually fall into place. Circumstances haven’t exactly been easy on you, but they did make you stronger and readier for what is about to come in these following weeks. ...";
}

function pisces()
{
  pic = "<img src = 'pisces.jpeg' width = '100px' height = '100px'>";
  msg = "Ancestors seem to be supporting your current choices and actions that people around you might disapprove of. Think about talents waiting to be used instead of pushing them away to be more practical and seek grounding. True grounding will be ...";
}
