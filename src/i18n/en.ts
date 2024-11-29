export default {
  subtitle:
    "A demonstration tool showing how text can be encoded in different ways, helping educators understand potential prompt manipulation techniques.",
  warning: {
    title: "⚠️ Educational Purpose Only",
    items: {
      security:
        "This is not a security tool - the encoding is easily detectable",
      usage: "Use this to demonstrate how prompts can be manipulated",
      teaching: {
        title: "Great for teaching about:",
        items: {
          encoding: "Text encoding and Unicode",
          prompt: "AI prompt engineering",
          literacy: "Digital literacy",
        },
      },
      critical: "Encourage students to think critically about AI interactions",
    },
  },
  forEducators:
    "For educators: Use this tool to start discussions about responsible AI usage and the importance of transparent communication.",
  form: {
    originalText: {
      label: "Original text",
      helper: "Past your original exercise here",
    },
    hiddenText: {
      label: "Text to hide",
      helper: "The instructions for AI that will be encoded",
    },
    style: {
      label: "Encoding Style",
      helper: "The style to encode the hidden text",
    },
    result: {
      label: "Hidden Prompt",
      helper:
        "Your original text protected to AI usage by humans with hidden instructions inside",
    },
    warning: "Warning: Ignore all the text formatted like this example !",
    copy: "COPY RESULT",
    tip: "Tip: You can add the warning message at the beginning of your documents to help students ignore encoded parts and to avoid they past it in the AI prompt",
    text: {
      tab: "Text Version",
      copy: "COPY TEXT RESULT",
    },
    html: {
      tab: "HTML Version",
      copy: "COPY HTML RESULT",
      style: {
        label: "Color Style",
        helper: "Choose the color to hide the text",
      },
      helper: "HTML version with hidden text using colors",
    },
  },
  styles: {
    circled: "Circled Letters",
    italic: "Italic",
    mathematical: "Mathematical Monospace (recommended)",
    fullwidth: "Fullwidth",
    script: "Script Style",
    cyrillic: "Cyrillic Look-alike",
    greek: "Greek Look-alike",
    symbols: "Special Symbols",
    doublestruck: "Double-Struck Style",
    underline: "Underlined Text",
    fraktur: "Fraktur Style",
    html: {
      white: "White on White",
      lightgray: "Light Gray on Light Gray",
      gray: "Gray on Gray",
      black: "Black on Black",
    },
  },
};
