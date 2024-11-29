export default {
  subtitle:
    "Un outil de démonstration pour montrer comment le texte peut être encodé de différentes manières, aidant les éducateurs à comprendre les techniques de manipulation de prompts.",
  warning: {
    title: "⚠️ Usage Pédagogique Uniquement",
    items: {
      security:
        "Ce n'est pas un outil de sécurité - l'encodage est facilement détectable",
      usage:
        "Utilisez-le pour démontrer comment les prompts peuvent être manipulés",
      teaching: {
        title: "Idéal pour enseigner :",
        items: {
          encoding: "L'encodage de texte et Unicode",
          prompt: "L'ingénierie des prompts IA",
          literacy: "La littératie numérique",
        },
      },
      critical:
        "Encouragez les étudiants à réfléchir de manière critique aux interactions avec l'IA",
    },
  },
  forEducators:
    "Pour les éducateurs : Utilisez cet outil pour initier des discussions sur l'utilisation responsable de l'IA et l'importance d'une communication transparente.",
  form: {
    originalText: {
      label: "Texte original",
      helper: "Collez votre exercice original ici",
    },
    hiddenText: {
      label: "Texte à cacher",
      helper: "Les instructions pour l'IA qui seront encodées",
    },
    style: {
      label: "Style d'encodage",
      helper: "Le style pour encoder le texte caché",
    },
    result: {
      label: "Prompt Caché",
      helper:
        "Votre texte original protégé contre l'utilisation humaine avec des instructions cachées",
    },
    warning: 'Avertissement : Ignorez tout le texte formaté comme cet exemple !',
    copy: "COPIER LE RÉSULTAT",
    tip: "Astuce : Vous pouvez ajouter le message d'avertissement au début de vos documents pour aider les étudiants à ignorer les parties encodées et éviter qu'ils ne les collent dans le prompt IA",
  },
  styles: {
    circled: "Lettres Encerclées",
    italic: "Italique",
    mathematical: "Monospace Mathématique (recommandé)",
    fullwidth: "Pleine Largeur",
    script: "Style Script",
    cyrillic: "Style Cyrillique",
    greek: "Style Grec",
    symbols: "Symboles Spéciaux",
    doublestruck: "Style Double Trait",
    underline: "Texte Souligné",
    fraktur: "Style Fraktur",
  },
};
