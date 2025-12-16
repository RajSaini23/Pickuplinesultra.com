import type { Category, Quote } from './types';
import { data as romanticData } from './categories/romantic';
import { data as cuteData } from './categories/cute';
import { data as crushData } from './categories/crush';
import { data as proposalData } from './categories/proposal';
import { data as dreamyData } from './categories/dreamy';
import { data as poeticData } from './categories/poetic';
import { data as missData } from './categories/miss';
import { data as breakupData } from './categories/breakup';
import { data as toxicData } from './categories/toxic';
import { data as cleverData } from './categories/clever';
import { data as comedyData } from './categories/comedy';
import { data as birthdayData } from './categories/birthday';
import { data as flirtyData } from './categories/flirty';
import { data as boldData } from './categories/bold';
import { data as seductiveData } from './categories/seductive';
import { data as tinderReadyData } from './categories/tinder-ready';
import { data as apologyData } from './categories/apology';
import { data as commitmentData } from './categories/commitment';
import { data as longDistanceData } from './categories/long-distance';
import { data as jealousyData } from './categories/jealousy';
import { data as selfLoveData } from './categories/self-love';
import { data as sarcasmData } from './categories/sarcasm';
import { data as wordplayData } from './categories/wordplay';
import { data as worstLinesData } from './categories/worst-lines';
import { data as memeData } from './categories/meme';
import { data as darkHumorData } from './categories/dark-humor';
import { data as movieLinesData } from './categories/movie-lines';
import { data as songLyricsData } from './categories/song-lyrics';
import { data as anniversaryData } from './categories/anniversary';
import { data as valentinesDayData } from './categories/valentines-day';
import { data as goodMorningNightData } from './categories/good-morning-night';
// Hindu Festivals
import { data as diwaliData } from './categories/diwali';
import { data as holiData } from './categories/holi';
import { data as dussehraData } from './categories/dussehra';
import { data as navratriData } from './categories/navratri';
import { data as durgaPujaData } from './categories/durga-puja';
import { data as ramNavamiData } from './categories/ram-navami';
import { data as janmashtamiData } from './categories/janmashtami';
import { data as ganeshChaturthiData } from './categories/ganesh-chaturthi';
import { data as makarSankrantiData } from './categories/makar-sankranti';
import { data as basantPanchamiData } from './categories/basant-panchami';
import { data as mahashivratriData } from './categories/mahashivratri';
import { data as gudiPadwaData } from './categories/gudi-padwa';
import { data as ugadiData } from './categories/ugadi';
import { data as vishuData } from './categories/vishu';
import { data as rathYatraData } from './categories/rath-yatra';
import { data as kumbhMelaData } from './categories/kumbh-mela';
import { data as akshayaTritiyaData } from './categories/akshaya-tritiya';
import { data as karvaChauthData } from './categories/karva-chauth';
import { data as rakshaBandhanData } from './categories/raksha-bandhan';
import { data as bhagwatiJatraData } from './categories/bhagwati-jatra';
import { data as chhathPujaData } from './categories/chhath-puja';
import { data as bihuData } from './categories/bihu';
import { data as teejData } from './categories/teej';
import { data as govardhanPujaData } from './categories/govardhan-puja';
import { data as bhaiDoojData } from './categories/bhai-dooj';
import { data as hanumanJayantiData } from './categories/hanuman-jayanti';
import { data as skandaSashtiData } from './categories/skanda-sashti';
import { data as tulsiVivahData } from './categories/tulsi-vivah';

// Muslim Festivals
import { data as eidUlFitrData } from './categories/eid-ul-fitr';
import { data as eidUlAdhaData } from './categories/eid-ul-adha';
import { data as ramadanData } from './categories/ramadan';
import { data as muharramData } from './categories/muharram';

// Christian Festivals
import { data as christmasData } from './categories/christmas';
import { data as newYearData } from './categories/new-year';
import { data as easterData } from './categories/easter';


// Buddhist Festivals
import { data as buddhaPurnimaData } from './categories/buddha-purnima';
import { data as asalhaPujaData } from './categories/asalha-puja';

// Sikh Festivals
import { data as guruNanakJayantiData } from './categories/guru-nanak-jayanti';
import { data as guruGobindSinghJayantiData } from './categories/guru-gobind-singh-jayanti';

// Jain Festivals
import { data as mahavirJayantiData } from './categories/mahavir-jayanti';

// Regional & Harvest Festivals
import { data as lohriData } from './categories/lohri';

// National & Cultural Festivals
import { data as republicDayData } from './categories/republic-day';
import { data as independenceDayData } from './categories/independence-day';
import { data as gandhiJayantiData } from './categories/gandhi-jayanti';
import { data as childrensDayData } from './categories/childrens-day';
import { data as teachersDayData } from './categories/teachers-day';
import { data as hindiDiwasData } from './categories/hindi-diwas';
import { data as engineersDayData } from './categories/engineers-day';
import { data as armedForcesDayData } from './categories/armed-forces-day';


const allCategoryData = [
  // Existing Categories
  romanticData,
  cuteData,
  crushData,
  proposalData,
  dreamyData,
  poeticData,
  missData,
  breakupData,
  toxicData,
  cleverData,
  comedyData,
  birthdayData,
  flirtyData,
  boldData,
  seductiveData,
  tinderReadyData,
  apologyData,
  commitmentData,
  longDistanceData,
  jealousyData,
  selfLoveData,
  sarcasmData,
  wordplayData,
  worstLinesData,
  memeData,
  darkHumorData,
  movieLinesData,
  songLyricsData,
  anniversaryData,
  valentinesDayData,
  goodMorningNightData,

  // New Festival Categories
  diwaliData,
  holiData,
  dussehraData,
  navratriData,
  durgaPujaData,
  ramNavamiData,
  janmashtamiData,
  ganeshChaturthiData,
  makarSankrantiData,
  basantPanchamiData,
  mahashivratriData,
  gudiPadwaData,
  ugadiData,
  vishuData,
  rathYatraData,
  kumbhMelaData,
  akshayaTritiyaData,
  karvaChauthData,
  rakshaBandhanData,
  bhagwatiJatraData,
  chhathPujaData,
  bihuData,
  teejData,
  govardhanPujaData,
  bhaiDoojData,
  hanumanJayantiData,
  skandaSashtiData,
  tulsiVivahData,
  eidUlFitrData,
  eidUlAdhaData,
  ramadanData,
  muharramData,
  christmasData,
  newYearData,
  easterData,
  buddhaPurnimaData,
  asalhaPujaData,
  guruNanakJayantiData,
  guruGobindSinghJayantiData,
  mahavirJayantiData,
  lohriData,
  republicDayData,
  independenceDayData,
  gandhiJayantiData,
  childrensDayData,
  teachersDayData,
  hindiDiwasData,
  engineersDayData,
  armedForcesDayData,
].filter(d => d.quotes.length > 0);


export const categories: Category[] = allCategoryData.map(d => d.category);

let globalQuoteId = 1;
export const quotes: Quote[] = allCategoryData.flatMap(d => 
  d.quotes.map(q => {
    // The original quote objects from category files don't have a unique ID.
    // We're adding a globally unique ID here during the flattening process.
    // This is crucial for React keys and consistent rendering.
    const quoteWithId = { 
      ...q,
      id: globalQuoteId++,
      category: d.category.slug 
    };
    return quoteWithId as Quote;
  })
);


export const getCategory = (slug: string): Category | undefined => {
    return categories.find(c => c.slug === slug);
}

export const getQuotesForCategory = (slug: string): Quote[] => {
    // This function now filters the pre-generated, globally-unique-ID quotes.
    // This ensures data consistency and prevents re-generating IDs on the fly.
    return quotes.filter(q => q.category === slug);
}
