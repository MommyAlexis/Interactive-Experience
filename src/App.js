import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import AgeVerification from './components/AgeVerification';

const themes = ['Age Play', 'JOI', 'Cheating', 'Cucking', 'Praise', 'Humiliation', 'Findom'];

const themeContent = {
  'Age Play': {
    description: "Are you ready to get off with a barely legal teen?",
    image: "/images/Sexy.jpg",
    content: [
      { type: 'text', content: "I love how eager you are to get off with mommy." },
      { type: 'nameInput', prompt: "Now, what should mommy call her little perv?" },
      { type: 'text', content: "Thats what you are, right {name}?" }, 
      { type: 'text', content: "Only pervs stroke their cocks to barely legal teens." },
      { type: 'text', content: "You love how young and small I am don’t you? 😏" },
      { type: 'text', content: "Knowing I'm so much younger than you." },
      { type: 'text', content: "Your cock just gets so hard for teens and brats doesnt it?" },
      { type: 'text', content: "You can't even control it." },
      { type: 'text', content: "Constantly craving more." },
      { type: 'text', content: "Always getting worse and worse." },
      { type: 'text', content: "But don't worry, mommy will keep making you worse." },
      { type: 'text', content: "I want your cock throbbing for me." },
      { type: 'text', content: "I want you stroking your cock listening to my voice, {name}." },
      { type: 'text', content: "Do you want to do that?" },
      { type: 'text', content: "Yeah? How bad do you want to." },
      { type: 'text', content: "I love how badly you want it. So here it is." },
      { type: 'text', content: "Stroke your cock listening to my voice." },
      { type: 'audio', file: 'Ageplay1.mp3' },
      { type: 'text', content: "Did that trigger you?" },
      { type: 'text', content: "Was it enough to get your cock throbbing for me?" },
      { type: 'text', content: "I bet your cock loved it." },
      { type: 'text', content: "You're probably stroking it right now still thinkning about my voice." },
      { type: 'text', content: "I love how easily I can make your cock hard and have it throbbing." },
      { type: 'text', content: "How fast you are to grab it and hold it tight." },
      { type: 'text', content: "Stroking your cock so quickly after hearing me." },
      { type: 'text', content: "All for talking to a teen." },
      { type: 'text', content: "I love what a pervert you are {name}." },
      { type: 'text', content: "I bet no one knows that {name} is such a perv for barely legal teens 🤭" },
      { type: 'text', content: "Want another audio from mommy?" },
      { type: 'text', content: "How bad do you want it?" },
      { type: 'text', content: "I love how despertate you get for a barely legal teen." },
      { type: 'text', content: "Here {name}, you earned it." },
      { type: 'audio', file: 'Ageplay2.mp3' },
      { type: 'text', content: "Don’t worry, it’ll be our little secret." },
      { type: 'text', content: "No one has to know {name}."},
      { type: 'text', content: "No one will know how hard your cock gets for girls that you know are too young for you, {name}." },
      { type: 'text', content: "They won't know you love that I was just in highschool." },
      { type: 'text', content: "That you love knowing I just graduated." },
      { type: 'text', content: "How hard you get thinking of picking me up from school." },
      { type: 'text', content: "Getting to see me walk out of school during lunch period to jump in your car." },
      { type: 'text', content: "Having me sucking your cock while you park in the schools parking lot." },
      { type: 'text', content: "I bet you're loving this aren't you?" },
      { type: 'text', content: "Want mommy to coninue?" },
      { type: 'audio', file: 'Ageplay6.mp3' },
      { type: 'text', content: "Keep going. Keep getting worse for me." },
      { type: 'text', content: "Keep thinking of little teen mommy." },
      { type: 'text', content: "Having me in the car with you." },
      { type: 'text', content: "Gagging on your cock while other students pass by." },
      { type: 'text', content: "Hearing my moaning while you touch me as well." },
      { type: 'text', content: "Feeling how wet I get being touched while sucking cock." },
      { type: 'text', content: "Having your cock in my tiny little teen mouth." },
      { type: 'text', content: "Sucking your cock better than anyone your age." },
      { type: 'text', content: "Knowing that I should be back in class while I skip to keep getting you off." },
      { type: 'text', content: "Asking you if im doing good." },
      { type: 'text', content: "Asking if im being a good girl." },
      { type: 'text', content: "If I learned how to suck your cock well." },
      { type: 'text', content: "If you want to fuck my tight little pussy next." },
      { type: 'text', content: "If you want to feel how wet I am with your cock." },
      { type: 'text', content: "Stretching me out so good." },
      { type: 'text', content: "Asking you to fuck me." },
      { type: 'text', content: "Begging to be fucked." },
      { type: 'text', content: "Begging you for your big adult cock." },
      { type: 'text', content: "Until I finally-" },
      { type: 'audio', file: 'Ageplay3.mp3' },
      { type: 'text', content: "Sorry about that." },
      { type: 'text', content: "I just got a little horny and carried away." },
      { type: 'text', content: "I think you will understand 😇." },
      { type: 'text', content: "But if you want to get a nl session with mommy, dm me on tele @ gooningalexis." },
      { type: 'audio', file: 'Ageplay4.mp3' },
      { type: 'text', content: "Or join my FREE Onlyfans for more of a barely legal teen. Links are below 👇🏼" },
      { type: 'text', content: "I’ll be waiting to keep making you worse for me 😉" },
      { type: 'text', content: "Hope you liked this one!." },

    ]
  },
  'JOI': {
    description: "Ready for some jerk off instructions?",
    image: "/images/joi.jpg",
    content: [
      { type: 'text', content: "You pressed that so fast, it's almost like you have your cock in your hand and ready to pump how I say." },
      { type: 'nameInput', prompt: "Now, what should mommy call you when telling you how to get off?" },
      { type: 'text', content: "Hello {name}, is your cock hard for mommy yet?" },
      { type: 'text', content: "It should be." },
      { type: 'audio', file: 'joi1.mp3' },
      { type: 'text', content: "I want you touching your cock just how I say, {name}. " },
      { type: 'text', content: "Letting a little teen control your cock 🥰 " },
      { type: 'text', content: "Is that what you want?" },
      { type: 'text', content: "Want me to tell you just how to stroke your cock?" },
      { type: 'text', content: "You’re so desperate for a teen to own your cock." },
      { type: 'text', content: "Well you finally got it." },
      { type: 'text', content: "Your cock belongs to a barely legal teen now 😈" },
      { type: 'text', content: "Are you ready for me, {name}?" },
      { type: 'text', content: "Lets start then." },
      { type: 'audio', file: 'joi2.mp3' },
      { type: 'text', content: "There we go." },
      { type: 'text', content: "Just like that baby." },
      { type: 'text', content: "Start off slow." },
      { type: 'text', content: "Slow and steady for me." },
      { type: 'text', content: "I want your cock desperate for more." },
      { type: 'text', content: "Eager to be touched harder." },
      { type: 'text', content: "But not yet." },
      { type: 'text', content: "Keep going slow for me." },
      { type: 'text', content: "Now faster." },
      { type: 'text', content: "Just a little faster. Don’t get carried away." },
      { type: 'text', content: "There we go. Just like that." },
      { type: 'text', content: "Keep a steady pace for mommy." },
      { type: 'text', content: "Up and down for me." },
      { type: 'text', content: "A little bit faster now." },
      { type: 'text', content: "Grip your cock harder for me." },
      { type: 'text', content: "I bet that feels so good doesn’t it? 😏" },
      { type: 'text', content: "Want to hear me telling you how to stroke your cock too?" },
      { type: 'text', content: "Yeah? How bad do you want to hear more, {name}?" },
      { type: 'text', content: "Mmm… I love how eager and needy I make you." },
      { type: 'audio', file: 'joi3.mp3' },
      { type: 'text', content: "Keep going." },
      { type: 'text', content: "Don’t stop." },
      { type: 'text', content: "Faster." },
      { type: 'text', content: "Harder." },
      { type: 'text', content: "Up. Down." },
      { type: 'text', content: "Up. Down." },
      { type: 'text', content: "Keep going faster." },
      { type: 'text', content: "I want you getting closer for me." },
      { type: 'text', content: "I want your cock throbbing because of a little teen." },
      { type: 'audio', file: 'joi4.mp3'},
      { type: 'text', content: "Aww, is your cock throbbing now?" },
      { type: 'text', content: "Is your cock craving more?" },
      { type: 'text', content: "Don’t worry baby. We’re not done yet " },
      { type: 'text', content: "Now start slow again." },
      { type: 'text', content: "Up." },
      { type: 'text', content: "Down." },
      { type: 'text', content: "Up." },
      { type: 'text', content: "Down." },
      { type: 'text', content: "Now faster." },
      { type: 'text', content: "Up. Down." },
      { type: 'text', content: "Up. Down." },
      { type: 'text', content: "Keep going for me, {name}. I want your cock leaking." },
      { type: 'text', content: "I want your precum leaking down your cock." },
      { type: 'text', content: "I want you panting while stroking your cock." },
      { type: 'text', content: "Keep going thinking of my tiny little hands on it." },
      { type: 'text', content: "Helping you stroke your cock with you." },
      { type: 'text', content: "Not stopping until you make a mess everywhere." },
      { type: 'text', content: "Making your legs shake for me." },
      { type: 'text', content: "I want to see all your cum shooting out." },
      { type: 'text', content: "So let me know if you ever want a paid session 😋" },
      { type: 'text', content: "You can DM me on tele @ gooningalexis." },
       { type: 'audio', file: 'joi5.mp3' },
      { type: 'text', content: "I would love to help you jerk off again." },
      { type: 'text', content: "Telling you exactly how to get off with me live." },
      { type: 'text', content: "Hope you liked this one baby. 💕" },


    ]
  },
  'Cheating': {
    description: "Ready for some jerk off instructions?",
    image: "/images/cheating.jpg",
    content: [
      { type: 'text', content: "You're so excited to cheat on her with a little teen aren't you?" },
      { type: 'text', content: "Pressing yes so quickly." },
      { type: 'nameInput', prompt: "Now, what should mommy call you her favorite cheater?" },
      { type: 'text', content: "Hi {name}, my little cheater." },
      { type: 'text', content: "I love that you can’t control yourself from cheating on her with me. " },
      { type: 'text', content: "I’m just so much better aren’t I?" },
      { type: 'text', content: "She can’t compare to me." },
      { type: 'text', content: "She’ll never be able to compare to a barely legal teen." },
      { type: 'text', content: "Someone younger." },
      { type: 'text', content: "Someone so much hotter." },
      { type: 'text', content: "So much tighter." },
      { type: 'text', content: "I’m better than her in every way. 🥰" },
      { type: 'audio', file: 'cheating1.mp3' },
      { type: 'text', content: "That’s what you want right,{name}?" },
      { type: 'text', content: "A barely legal, tighter and sexier teen?" },
      { type: 'text', content: "Yeah? How bad do you want to cheat on her with me?" },
      { type: 'text', content: "I love knowing you would cheat on her the first chance you got with me 😈" },
      { type: 'text', content: "That you prefer me over her." },
      { type: 'text', content: "But it's all her fault." },
      { type: 'text', content: "Isn't it?" },
      { type: 'text', content: "Her fault for not turning you on as much as I do." },
      { type: 'text', content: "She deserves you cheating on her with me." },
      { type: 'text', content: "Wanting me over her." },
      { type: 'text', content: "Prefering my tight little pussy." },
      { type: 'text', content: "You know that it would squeeze your cock so good." },
      { type: 'text', content: "I’d jump on your cock and ride you so much better than she ever has." },
      { type: 'text', content: "I would have your cock harder than it’s ever been for her." },
      { type: 'text', content: "And you know it." },
      { type: 'text', content: "Don’t you,{name}? " },
      { type: 'text', content: "That’s why your cock is so hard for me right now." },
      { type: 'text', content: "That’s why you’re still stroking it thinking of me." },
      { type: 'text', content: "Stroking your cock to me and not her." },
      { type: 'audio', file: 'cheating2.mp3' },
      { type: 'text', content: "So don’t stop." },
      { type: 'text', content: "Keep thinking of cheating on her with someone so much younger than her. " },
      { type: 'text', content: "She knows she’ll never be this young or sexy again." },
      { type: 'text', content: "It’s her fault for not making you as horny as I do." },
      { type: 'text', content: "For not making you nearly as hard." },
      { type: 'text', content: "For not making your cock throb like it does for me." },
      { type: 'text', content: "She deserves you cheating. 😉" },
      { type: 'text', content: "She deserves you cheating on her with someone better." },
      { type: 'text', content: "Keep stroking your cock thinking of my young little pussy." },
      { type: 'text', content: "Filling me up with your taken cock." },
      { type: 'text', content: "Stretching me out with your adult cock." },
      { type: 'text', content: "Hearing me moan and beg for more." },
      { type: 'text', content: "Begging for your adult cock in me." },
      { type: 'text', content: "Begging you to fuck me harder." },
      { type: 'text', content: "To fuck me harder." },
      { type: 'text', content: "Harder than you have ever fucked her." },
      { type: 'text', content: "Asking you who’s pussy feels better." },
      { type: 'text', content: "Making you say out out that mine is better, {name}." },
      { type: 'text', content: "Hearing you say it while I ride your cock." },
      { type: 'audio', file: 'cheating3.mp3' }, 
      { type: 'text', content: "Making you addicted to me." },
      { type: 'text', content: "Addicted to a little teen. " },
      { type: 'text', content: "Addicted to using my tight little pussy." },
      { type: 'text', content: "Making it so she’ll never be enough again." },
      { type: 'text', content: "For you to be unable to fuck her with out thinking of me." },
      { type: 'text', content: "Having to think of me every time you fuck her." },
      { type: 'text', content: "Every single time." },
      { type: 'text', content: "Closing your eyes and seeing me while you’re inside her." },
      { type: 'text', content: "Using her like a toy while you think of me." },
      { type: 'text', content: "I’m going to leave you completely addicted to me." },
      { type: 'text', content: "If you already are and want more, DM me on tele @ gooningalexis. 😋" },
      { type: 'audio', file: 'cheating4.mp3' },  
      { type: 'text', content: "Hope you liked stroking your cock thinking of me instead of her." },
      { type: 'text', content: "I hope it's not the last time. 😉" },
    ]
  },
  'Cucking': {
    description: "Ready to be cucked by mommy?",
    image: "/images/cucking.jpg",
    content: [
      { type: 'text', content: "You're so eager to be cucked, pressing yes so quickly." },
      { type: 'nameInput', prompt: "Now, what should mommy call her little cuck?" },
      { type: 'text', content: "I bet you wish you could touch me, {name}." },
      { type: 'text', content: "You wish you could feel my pretty little body." },
      { type: 'text', content: "Running your fingers along my perfect teen skin." },
      { type: 'text', content: "Knowing you will never get to." },
      { type: 'text', content: "Knowing that you will never get to touch me." },
      { type: 'text', content: "You know that right?" },
      { type: 'text', content: "That I will only exist in your dreams." },
      { type: 'text', content: "That’s a good little cuck for mommy, {name}." },
      { type: 'text', content: "I love that you know your place." },
      { type: 'text', content: "You know your place right?" },
      { type: 'text', content: "At the corner of the room, with your cock locked away and watching me and daddy." },
      { type: 'audio', file: 'cuck1.mp3' },
      { type: 'text', content: "Hearing how good he makes me feel." },
      { type: 'text', content: "Getting to see how he fucks me." },
      { type: 'text', content: "Seeing my ass bounce on his fat cock." },
      { type: 'text', content: "Watching me take all of it." },
      { type: 'text', content: "Every single inch." },
      { type: 'text', content: "Deep inside me." },
      { type: 'text', content: "Knowing he’s fucking me soo good." },
      { type: 'text', content: "Like you never will, {name}." },
      { type: 'text', content: "Knowing that you’ll never get to fuck me like that. 😉" },
      { type: 'text', content: "Never hearing me moan because of you." },
      { type: 'text', content: "Never being inside my tight little pussy." },
      { type: 'text', content: "Never having me beg you for more." },
      { type: 'text', content: "Because you would never be good enough." },
      { type: 'text', content: "This is all you deserve." },
      { type: 'text', content: "All you will ever get." },
      { type: 'text', content: "Just fucking your fist thinking of me." },
      { type: 'text', content: "Knowing that’s as close as you’ll get to the real thing." },
      { type: 'text', content: "So keep fucking your fist for me." },
      { type: 'text', content: "Keep pumping your cock, {name}." },
      { type: 'text', content: "All while you think about others using me." },
      { type: 'text', content: "Thinking about me telling you how good they were." },
      { type: 'text', content: "Telling you how amazing their cocks felt." },
      { type: 'text', content: "All while teasing you. Just like this:" },
      { type: 'audio', file: 'cuck2.mp3' },
      { type: 'text', content: "You did didn’t you?" },
      { type: 'text', content: "You’re so fucking pathetic." },
      { type: 'text', content: "Who gets this hard hearing about that?" },
      { type: 'text', content: "So hard listening to how much better they were." },
      { type: 'text', content: "Do you want to know how they fucked me?" },
      { type: 'text', content: "Yeah? How bad do you want to know?" },
      { type: 'text', content: "Look at you now." },
      { type: 'text', content: "So desperate to keep getting cucked. 😋" },
      { type: 'text', content: "So pathetic for mommy." },
      { type: 'text', content: "They were so much better than you’ll ever be too." },
      { type: 'audio', file: 'cuck3.mp3' },
      { type: 'text', content: "So much better than you ever could." },
      { type: 'text', content: "You would just never compare to them." },
      { type: 'text', content: "You could never fuck me so good." },
      { type: 'text', content: "So just keep pumping your cock." },
      { type: 'text', content: "Keep fucking your fist for me." },
      { type: 'text', content: "And if you ever want a paid cucking session, dm me on tele @ Gooningalexis 😋." },
      { type: 'audio', file: 'cuck4.mp3' },
      { type: 'text', content: "Hope to see you there" },
    ]
  },
  'Praise': {
    description: "Coming soon.",
    image: "/images/praise.jpg",
    content: [
      { type: 'text', content: "Such a good boy for mommy, pressing yes so quickly." },
      { type: 'nameInput', prompt: "Now, what should mommy call her good boy?" },
      { type: 'text', content: "Hello {name}, this part is Coming soon." },
      { type: 'audio', file: 'praise1.mp3' },
    ]
  },
  'Humiliation': {
    description: "Coming soon.",
    image: "/images/humiliation.jpg",
    content: [
      { type: 'text', content: "Well aren't you excited to be humiliated by mommy, pressing that so quickly." },
      { type: 'nameInput', prompt: "Now, what should mommy call her desperate beta" },
      { type: 'text', content: "Hello {name}, this is coming soon." },
      { type: 'audio', file: 'humiliation1.mp3' },
    ]
  },
  'Findom': {
    description: "Coming soon.",
    image: "/images/Findom.jpg",
    content: [
      { type: 'text', content: "I love how excited you are, pressing yes so quickly to get started." },
      { type: 'nameInput', prompt: "Now, what should mommy call her new human atm machine?" },
      { type: 'text', content: "Hello {name}, this is coming soon." },
      { type: 'audio', file: 'findom1.mp3' },
    ]
  },
};


function ThemeSelection() {
  return (
    <div className="App">
      <h1>Choose Your Theme</h1>
      <p className="theme-instruction">Select a theme to explore:</p>
      <div className="theme-list">
        {themes.map((theme) => (
          <Link key={theme} to={`/theme/${theme}`} className="theme-button">
            {theme}
          </Link>
        ))}
      </div>
    </div>
  );
}

const buttonSegments = {
  "Age Play": {
    badMommy: [14, 29],
    yesMommy: [42,]
  },
  "JOI": {
    badMommy: [30],
    yesMommy: [7]
  },
  "Cheating": {
    badMommy: [14],
    yesMommy: [27]
  },
  "Cucking": {
    badMommy: [41],
    yesMommy: [9]
  },
  "Praise": {
    badMommy: [],
    yesMommy: []
  },
  "Humiliation": {
    badMommy: [],
    yesMommy: []
  },
  "Findom": {
    badMommy: [],
    yesMommy: []
  }
};

function ThemePage() {
  const { theme } = useParams();
  const navigate = useNavigate();
  const [showDescription, setShowDescription] = useState(false);
  const [startExperience, setStartExperience] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(-1);
  const [userName, setUserName] = useState('');
  const [waitingForName, setWaitingForName] = useState(false);
  const [animatingSegment, setAnimatingSegment] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [showBadMommyButton, setShowBadMommyButton] = useState(false);
  const [badMommyClickedSegments, setBadMommyClickedSegments] = useState([]); // Add this line
  const [showYesMommyButton, setShowYesMommyButton] = useState(false);
  const [yesMommyClickedSegments, setYesMommyClickedSegments] = useState([]);
  const contentRef = useRef(null);
  const audioRef = useRef(null);
  const startButtonRef = useRef(null);

  const handleBadMommyClick = () => {
    setBadMommyClickedSegments(prev => [...prev, currentSegment]);
    setShowBadMommyButton(false);
    setTimeout(() => {
      setCurrentSegment(prev => prev + 1);
      setTimeout(() => setAnimatingSegment(prev => prev + 1), 100);
    }, 1000);
  };

  const handleYesMommyClick = () => {
    setYesMommyClickedSegments(prev => [...prev, currentSegment]);
    setShowYesMommyButton(false);
    setTimeout(() => {
      setCurrentSegment(prev => prev + 1);
      setTimeout(() => setAnimatingSegment(prev => prev + 1), 100);
    }, 1000);
  };

  useEffect(() => {
    setShowDescription(false);
    setStartExperience(false);
    setCurrentSegment(-1);
    setAnimatingSegment(-1);
    setUserName('');
    setWaitingForName(false);
    setAudioPlayed(false);
    setShowBadMommyButton(false);
    setShowYesMommyButton(false);

    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, 1000);

    return () => clearTimeout(descriptionTimer);
  }, [theme]);

  useEffect(() => {
    if (startExperience && currentSegment < themeContent[theme].content.length - 1) {
      const currentItem = themeContent[theme].content[currentSegment];
      if (currentItem && currentItem.type === 'nameInput' && !userName) {
        setWaitingForName(true);
      } else if (currentItem && currentItem.type === 'audio' && !audioPlayed) {
        // Do nothing, wait for audio to be played
      } else if (
        (buttonSegments[theme]?.badMommy.includes(currentSegment) && !badMommyClickedSegments.includes(currentSegment)) ||
        (buttonSegments[theme]?.yesMommy.includes(currentSegment) && !yesMommyClickedSegments.includes(currentSegment))
      ) {
        // Show the appropriate button with a delay
        const buttonTimer = setTimeout(() => {
          if (buttonSegments[theme]?.badMommy.includes(currentSegment)) {
            setShowBadMommyButton(true);
          } else {
            setShowYesMommyButton(true);
          }
        }, 1000); // 1 second delay
        return () => clearTimeout(buttonTimer);
      } else {
        const timer = setTimeout(() => {
          setCurrentSegment(prev => prev + 1);
          setTimeout(() => setAnimatingSegment(prev => prev + 1), 100);
          setAudioPlayed(false);
        }, 4000);
        return () => clearTimeout(timer);
      }
    }
  }, [startExperience, currentSegment, theme, userName, audioPlayed, badMommyClickedSegments, yesMommyClickedSegments]);
  // Removed themeContent from the dependency array

  useEffect(() => {
    if (contentRef.current) {
      const newElement = contentRef.current.querySelector('.text-segment:last-child, .audio-item:last-child, .name-input-container:last-child, .bad-mommy-button, .yes-mommy-button');
      if (newElement) {
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
    if (showDescription && !startExperience && startButtonRef.current) {
      startButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [animatingSegment, showBadMommyButton, showYesMommyButton, showDescription, startExperience]);

  const handleContinue = () => {
    if (currentSegment === -1) {
      setStartExperience(true);
      setTimeout(() => {
        setCurrentSegment(0);
        setTimeout(() => setAnimatingSegment(0), 100);
      }, 1600);
    } else if (waitingForName) {
      if (userName.trim() !== '') {
        setWaitingForName(false);
        setTimeout(() => {
          setCurrentSegment(prev => prev + 1);
          setTimeout(() => setAnimatingSegment(prev => prev + 1), 100);
          setIsLoading(false);
        }, 1400);
      } else {
        setIsLoading(false);
      }
    }
  };

  const handleAudioEnd = () => {
    setTimeout(() => {
      setCurrentSegment(prev => prev + 1);
      setTimeout(() => setAnimatingSegment(prev => prev + 1), 100);
    }, 1000); // 1 second delay
  };

  const goToNextTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    navigate(`/theme/${themes[nextIndex]}`);
  };

  return (
    <div className="theme-page">
      {isLoading && <div className="loading-overlay">Loading...</div>}
      <div className="theme-header">
        <button onClick={() => navigate('/')} className="nav-button back-button">Back to Themes</button>
        <h2>{theme}</h2>
        <button onClick={goToNextTheme} className="nav-button next-button">Next Theme</button>
      </div>
      <div className="theme-image-container">
        <img src={themeContent[theme].image} alt={theme} className="theme-image" />
      </div>
      <div className="theme-content-box" ref={contentRef}>
        <div className={`theme-description ${showDescription ? 'show' : ''} ${startExperience ? 'hide' : ''}`}>
          <p>{themeContent[theme].description}</p>
          {showDescription && !startExperience && (
            <button 
              ref={startButtonRef}
              onClick={handleContinue} 
              className={`start-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Yes please!'}
            </button>
          )}
        </div>
        <div className="theme-detailed-text">
        {themeContent[theme].content.slice(0, currentSegment + 1).map((item, index) => {
  if (item.type === 'text') {
    return (
      <p 
        key={index} 
        className={`text-segment ${index <= animatingSegment ? 'show' : ''}`}
      >
        {item.content.replace('{name}', userName || 'there')}
      </p>
    );
  } else if (item.type === 'audio') {
    return (
      <div key={index} className={`audio-item ${index <= animatingSegment ? 'show' : ''}`}>
        <audio 
          ref={audioRef}
          controls 
          src={`/audio/${theme}/${item.file}`} 
          className="audio-player" 
          onEnded={handleAudioEnd}
        />
      </div>
    );
            } else if (item.type === 'nameInput') {
              return (
                <div key={index} className={`name-input-container ${index <= animatingSegment ? 'show' : ''}`}>
                  <p>{item.prompt}</p>
                  <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleContinue();
                      }
                    }}
                  />
                  <button 
                    onClick={handleContinue}
                    className={`continue-button ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Continue'}
                  </button>
                </div>
              );
            }
            return null;
          })}
          {/* Add the new button here */}
          {showBadMommyButton && !badMommyClickedSegments.includes(currentSegment) && (
     <button 
       className="bad-mommy-button"
       onClick={handleBadMommyClick}
     >
       Really bad mommy!
     </button>
   )}
   {showYesMommyButton && !yesMommyClickedSegments.includes(currentSegment) && (
            <button 
              className="yes-mommy-button"
              onClick={handleYesMommyClick}
            >
              Yes mommy!
            </button>
          )}
        </div>
      </div>
      <footer className="theme-footer">
        <div className="footer-content">
          <div className="footer-line">
            <span>Follow my FREE:</span>
            <div className="social-links">
              <a href="https://onlyfans.com/mommyalexis23" target="_blank" rel="noopener noreferrer">OnlyFans</a>
              <a href="https://instagram.com/goonfvelalexis" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://t.me/c/2188514931/1" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
          </div>
          <div className="footer-line">
            <span>Get my PAID:</span>
            <div className="social-links">
              <a href="https://onlyfans.com/paidmommyalexis/c3" target="_blank" rel="noopener noreferrer">Onlyfans</a>
              <a href="https://t.me/YourPrivateTelegramChannel" target="_blank" rel="noopener noreferrer">Private tele</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


function MainContent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeSelection />} />
        <Route path="/theme/:theme" element={<ThemePage />} />
      </Routes>
    </Router>
  );
}

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      {!isVerified ? (
        <AgeVerification onVerified={() => setIsVerified(true)} />
      ) : (
        <MainContent />
      )}
    </>
  );
}

export default App;