export type Quote = {
  id: number;
  category: string; // slug from categories
  hinglish: string;
  english: string;
  emoji: string;
};

export const quotes: Quote[] = [
  { id: 1, category: 'desi-swag', hinglish: 'Apna time aayega!', english: 'My time will come!', emoji: '👑' },
  { id: 2, category: 'desi-swag', hinglish: 'Style mein rehne ka.', english: 'One must live in style.', emoji: '🕶️' },
  { id: 3, category: 'desi-swag', hinglish: 'Hum jahan khade hote hain, line wahin se shuru hoti hai.', english: 'The line starts from where I stand.', emoji: '💯' },
  { id: 4, category: 'romantic', hinglish: 'Tum ho toh sab kuch hai.', english: 'If you are here, I have everything.', emoji: '💖' },
  { id: 5, category: 'romantic', hinglish: 'Dil ki baatein dil hi jaane.', english: 'Only the heart knows the matters of the heart.', emoji: '💌' },
  { id: 6, category: 'romantic', hinglish: 'Ek cup chai, aur tum.', english: 'A cup of tea, and you.', emoji: '☕' },
  { id: 7, category: 'sad', hinglish: 'Akele hain, toh kya gum hai.', english: 'I am alone, but what sorrow is there.', emoji: '😔' },
  { id: 8, category: 'sad', hinglish: 'Yaadein mithai ke dibbe ki tarah hoti hain.', english: 'Memories are like a box of sweets.', emoji: '💔' },
  { id: 9, category: 'sad', hinglish: 'Kuch baatein adhuri hi achi lagti hain.', english: 'Some things are better left incomplete.', emoji: '...'},
  { id: 10, category: 'motivational', hinglish: 'Kar har maidaan fateh.', english: 'Conquer every field.', emoji: '🚀' },
  { id: 11, category: 'motivational', hinglish: 'Uth, jaag, aur tab tak mat ruk jab tak lakshya na praapt ho jaaye.', english: 'Arise, awake, and stop not till the goal is reached.', emoji: '🎯' },
  { id: 12, category: 'motivational', hinglish: 'Jo jeeta wohi Sikandar.', english: 'The one who wins is the conqueror.', emoji: '🏆' },
  { id: 13, category: 'funny', hinglish: 'Main paida hi hot hua tha.', english: 'I was born hot.', emoji: '😜' },
  { id: 14, category: 'funny', hinglish: 'Error 404: Dimaag not found.', english: 'Error 404: Brain not found.', emoji: '🧠' },
  { id: 15, category: 'funny', hinglish: 'Samosa is my spirit animal.', english: 'Samosa is my spirit animal.', emoji: '🥟' },
  { id: 16, category: 'shayari', hinglish: 'Hazaaron khwaishein aisi ki har khwaish pe dum nikle.', english: 'A thousand desires, such that each one takes a lifetime.', emoji: '📜' },
  { id: 17, category: 'shayari', hinglish: 'Ishq par zor nahi, hai yeh woh aatish, Ghalib.', english: 'Love cannot be forced, it is that fire, Ghalib.', emoji: '🕯️' },
  { id: 18, category: 'shayari', hinglish: 'Girte hain shehsawar hi maidan-e-jung mein.', english: 'Only the great warriors fall on the battlefield.', emoji: '⚔️' }
];
