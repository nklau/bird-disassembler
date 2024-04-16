/**
 * Define functions for all of the combinatory birds from Raymond Smullyan's To Mock a Mockingbird.
 * References: https://www.angelfire.com/tx4/cus/combinator/birds.html
 */

export const B = Object.assign((...input) => S(K(S))(K)(...input), {
  bird: 'Bluebird',
  functionAbstraction: (a, b, c) => a(b(c)),
})

export const S = Object.assign(this.functionAbstraction, {
  bird: 'Starling',
  functionAbstraction: (a, b, c) => a(c)(b(c)),
})

export const K = Object.assign(this.functionAbstraction, {
  bird: 'Kestrel',
  functionAbstraction: (a, _b) => a,
})
