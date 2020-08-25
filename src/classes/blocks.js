import {wrap} from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Method toHTML should be implemented!')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options;
    return wrap('row',
      wrap('col', `<${tag}>${this.value}</${tag}>`, styles),
      styles
    )
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {alt, styles, imageStyles} = this.options;
    const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}"/>`;
    return wrap('row', html, styles)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return wrap('row',
      wrap('col', `<p>${this.value}</p>`, this.options.styles),
      this.options.styles
    )
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    let html = this.value.map(item => {
      return wrap('col', `<p>${item}</p>`, this.options.styles)
    });
    return wrap('row', html.join(''), this.options.styles)
  }
}
