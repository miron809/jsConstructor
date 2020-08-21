export function wrap(target, content, styles = '') {
  const wrapper = {
    row: `<div class="row" style="${styles}">${content}</div>`,
    col: `<div class="col-sm" style="${styles}">${content}</div>`
  }
  return wrapper[target]
}
