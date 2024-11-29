declare const translations: {
  title: string
  subtitle: string
  warning: {
    title: string
    items: {
      security: string
      usage: string
      teaching: {
        title: string
        items: {
          encoding: string
          prompt: string
          literacy: string
        }
      }
      critical: string
    }
  }
  forEducators: string
  form: {
    originalText: {
      label: string
      helper: string
    }
    hiddenText: {
      label: string
      helper: string
    }
    style: {
      label: string
      helper: string
    }
    result: {
      label: string
      helper: string
    }
    copy: string
    tip: string
  }
  styles: {
    circled: string
    italic: string
    mathematical: string
    fullwidth: string
    script: string
    cyrillic: string
    greek: string
    symbols: string
    doublestruck: string
    underline: string
    fraktur: string
  }
}

export default translations
