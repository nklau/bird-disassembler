import * as core from './core.js'

export const disassemble = (input, output = '') => {
  const symbols = input.match(/\(\S+\)|[WCRFV]\*\*|[IWCRFV]\*|[BDQW]1|[BDMQ]2|[BQ]3|Q4|[B-M]|[Q-W]|[OYÊ]/g)

  symbols.forEach(symbol => {
    if (symbol === core.S.combinator || symbol === core.K.combinator) {
      output += symbol
    } else if (symbol.startsWith('(')) {
      if (/^\([SK]+\)$/.test(symbol)) {
        output += symbol
      } else {
        output += disassemble(symbol.slice(1, symbol.length - 1), output)
      }
    } else {
      output += disassemble(core[symbol].combinator, output)
    }
  })

  return output
}