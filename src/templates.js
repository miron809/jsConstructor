import {wrap} from './utils'

function title(block) {
  const {tag, styles} = block.options;
  return wrap('row',
    wrap('col', `<${tag}>${block.value}</${tag}>`, styles),
    styles
  )
}

function image(block) {
  const {alt, styles, imageStyles} = block.options
  const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}"/>`
  return wrap('row', html, styles)
}

function text(block) {
  return wrap('row',
    wrap('col', `<p>${block.value}</p>`, block.options.styles),
    block.options.styles
  )
}

function textColumns(block) {
  let html = block.value.map(item => {
    return wrap('col', `<p>${item}</p>`, block.options.styles)
  })
  return wrap('row', html.join(''), block.options.styles)
}

export const templates = {title, text, textColumns, image}
