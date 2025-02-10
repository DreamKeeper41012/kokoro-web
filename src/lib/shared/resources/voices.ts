export type Voice = (typeof voices)[number];
export type VoiceId = Voice["voiceId"];

export const voices = [
  {
    voiceId: "af_heart",
    name: "Heart",
    lang: "en-us",
    gender: "Female",
    targetQuality: "A",
    overallGrade: "A",
  },
  {
    voiceId: "af_alloy",
    name: "Alloy",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "af_aoede",
    name: "Aoede",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "af_bella",
    name: "Bella",
    lang: "en-us",
    gender: "Female",
    targetQuality: "A",
    overallGrade: "A-",
  },
  {
    voiceId: "af_jessica",
    name: "Jessica",
    lang: "en-us",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "af_kore",
    name: "Kore",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "af_nicole",
    name: "Nicole",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "B-",
  },
  {
    voiceId: "af_nova",
    name: "Nova",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "af_river",
    name: "River",
    lang: "en-us",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "af_sarah",
    name: "Sarah",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "af_sky",
    name: "Sky",
    lang: "en-us",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C-",
  },
  {
    voiceId: "am_adam",
    name: "Adam",
    lang: "en-us",
    gender: "Male",
    targetQuality: "D",
    overallGrade: "F+",
  },
  {
    voiceId: "am_echo",
    name: "Echo",
    lang: "en-us",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "am_eric",
    name: "Eric",
    lang: "en-us",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "am_fenrir",
    name: "Fenrir",
    lang: "en-us",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "am_liam",
    name: "Liam",
    lang: "en-us",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "am_michael",
    name: "Michael",
    lang: "en-us",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "am_onyx",
    name: "Onyx",
    lang: "en-us",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "am_puck",
    name: "Puck",
    lang: "en-us",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "am_santa",
    name: "Santa",
    lang: "en-us",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D-",
  },
  {
    voiceId: "bf_emma",
    name: "Emma",
    lang: "en-gb",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "B-",
  },
  {
    voiceId: "bf_isabella",
    name: "Isabella",
    lang: "en-gb",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "bm_george",
    name: "George",
    lang: "en-gb",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "bm_lewis",
    name: "Lewis",
    lang: "en-gb",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D+",
  },
  {
    voiceId: "bf_alice",
    name: "Alice",
    lang: "en-gb",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "bf_lily",
    name: "Lily",
    lang: "en-gb",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "bm_daniel",
    name: "Daniel",
    lang: "en-gb",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "bm_fable",
    name: "Fable",
    lang: "en-gb",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "ef_dora",
    name: "Dora",
    lang: "es",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "em_alex",
    name: "Alex",
    lang: "es",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "em_santa",
    name: "Santa",
    lang: "es",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "jf_alpha",
    name: "Alpha",
    lang: "ja",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    voiceId: "jf_gongitsune",
    name: "Gongitsune",
    lang: "ja",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "jf_nezumi",
    name: "Nezumi",
    lang: "ja",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C-",
  },
  {
    voiceId: "jf_tebukuro",
    name: "Tebukuro",
    lang: "ja",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "jm_kumo",
    name: "Kumo",
    lang: "ja",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C-",
  },
  {
    voiceId: "zf_xiaobei",
    name: "Xiaobei",
    lang: "zh",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zf_xiaoni",
    name: "Xiaoni",
    lang: "zh",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zf_xiaoxiao",
    name: "Xiaoxiao",
    lang: "zh",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zf_xiaoyi",
    name: "Xiaoyi",
    lang: "zh",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zm_yunjian",
    name: "Yunjian",
    lang: "zh",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zm_yunxi",
    name: "Yunxi",
    lang: "zh",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zm_yunxia",
    name: "Yunxia",
    lang: "zh",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "zm_yunyang",
    name: "Yunyang",
    lang: "zh",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "hf_alpha",
    name: "Alpha",
    lang: "hi",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "hf_beta",
    name: "Beta",
    lang: "hi",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "hm_omega",
    name: "Omega",
    lang: "hi",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "hm_psi",
    name: "Psi",
    lang: "hi",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "if_sara",
    name: "Sara",
    lang: "it",
    gender: "Female",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "im_nicola",
    name: "Nicola",
    lang: "it",
    gender: "Male",
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    voiceId: "pf_dora",
    name: "Dora",
    lang: "pt-br",
    gender: "Female",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "pm_alex",
    name: "Alex",
    lang: "pt-br",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    voiceId: "pm_santa",
    name: "Santa",
    lang: "pt-br",
    gender: "Male",
    targetQuality: "C",
    overallGrade: "D",
  },
] as const;

export const voicesMap = (() => {
  const map = {} as Record<VoiceId, Voice>;
  voices.forEach((voice) => {
    map[voice.voiceId] = voice;
  });
  return map;
})();

export const voicesIds = voices.map((voice) => voice.voiceId);
