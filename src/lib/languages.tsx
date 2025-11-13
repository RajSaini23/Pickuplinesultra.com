
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  icon: (props: any) => JSX.Element;
}

const GlobeIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const HindiIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="currentColor">अ</text>
  </svg>
);

const ChineseIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="currentColor">文</text>
  </svg>
);

const HinglishIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="currentColor">A/अ</text>
  </svg>
);

export const languages: Language[] = [
  { code: 'hin-eng', name: 'Hinglish', nativeName: 'Hinglish', icon: HinglishIcon },
  { code: 'en', name: 'English', nativeName: 'English', icon: GlobeIcon },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', icon: HindiIcon },
  { code: 'zh', name: 'Mandarin Chinese', nativeName: '中文', icon: ChineseIcon },
];
