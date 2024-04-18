/**
 * Define functions for all of the combinatory birds from Raymond Smullyan's To Mock a Mockingbird.
 * References: https://www.angelfire.com/tx4/cus/combinator/birds.html
 */

export const B = Object.assign(x => S(K(S))(K)(x), {
  bird: 'Bluebird',
  combinator: 'S(KS)K',
})

export const B1 = Object.assign(x => B(B)(B)(x), {
  bird: 'Blackbird',
  combinator: 'BBB',
})

export const B2 = Object.assign(x => B(B(B)(B))(B)(x), {
  bird: 'Bunting',
  combinator: 'B(BBB)B',
})

export const B3 = Object.assign(x => B(B(B))(B)(x), {
  bird: 'Becard',
  combinator: 'B(BB)B',
})

export const C = Object.assign(x => S(B(B)(S))(K(K))(x), {
  bird: 'Cardinal',
  combinator: 'S(BBS)(KK)',
})

export const D = Object.assign(x => B(B)(x), {
  bird: 'Dove',
  combinator: 'BB',
})

export const D1 = Object.assign(x => B(B(B))(x), {
  bird: 'Dickcissel',
  combinator: 'B(BB)',
})

export const D2 = Object.assign(x => B(B)(B(B))(x), {
  bird: 'Dovekies',
  combinator: 'BB(BB)',
})

export const E = Object.assign(x => B(B(B)(B))(x), {
  bird: 'Eagle',
  combinator: 'B(BBB)',
})

export const Ê = Object.assign(x => B(B(B)(B))(B(B(B)(B)))(x), {
  bird: 'Bald Eagle',
  combinator: 'B(BBB)(B(BBB))',
})

export const F = Object.assign(x => E(T)(T)(E)(T)(x), {
  bird: 'Finch',
  combinator: 'ETTET',
})

export const G = Object.assign(x => B(B)(C)(x), {
  bird: 'Goldfinch',
  combinator: 'BBC',
})

export const H = Object.assign(x => B(W)(B(C))(x), {
  bird: 'Hummingbird',
  combinator: 'BW(BC)',
})

export const I = Object.assign(x => S(K)(K)(x), {
  bird: 'Identity Bird (aka Idiot)',
  combinator: 'SKK',
})

export const J = Object.assign(x => B(B(C))(W(B(C)(B(B(B)(B)))))(x), {
  bird: 'Jay',
  combinator: 'B(BC)(W(BC(B(BBB))))',
})

export const K = Object.assign(a => _b => a, {
  bird: 'Kestrel',
  combinator: 'K',
})

export const L = Object.assign(x => C(B)(M)(x), {
  bird: 'Lark',
  combinator: 'CBM',
})

export const M = Object.assign(x => S(I)(I)(x), {
  bird: 'Mockingbird',
  combinator: 'SII',
})

export const M2 = Object.assign(x => B(M)(x), {
  bird: 'Double Mockingbird',
  combinator: 'BM',
})

export const O = Object.assign(x => S(I)(x), {
  bird: 'Owl',
  combinator: 'SI',
})

export const Q = Object.assign(x => C(B)(x), {
  bird: 'Queer Bird',
  combinator: 'CB',
})

export const Q1 = Object.assign(x => B(C)(B)(x), {
  bird: 'Quixotic Bird',
  combinator: 'BCB',
})

export const Q2 = Object.assign(x => C(B(C)(B))(x), {
  bird: 'Quizzical Bird',
  combinator: 'C(BCB)',
})

export const Q3 = Object.assign(x => B(T)(x), {
  bird: 'Quirky Bird',
  combinator: 'BT',
})

export const Q4 = Object.assign(x => F_(B)(x), {
  bird: 'Quacky Bird',
  combinator: 'F*B',
})

export const R = Object.assign(x => B(B)(T)(x), {
  bird: 'Robin',
  combinator: 'BBT',
})

export const S = Object.assign(a => b => c => a(c)(b(c)), {
  bird: 'Starling',
  combinator: 'S',
})

export const T = Object.assign(x => C(I)(x), {
  bird: 'Thrush',
  combinator: 'CI',
})

export const U = Object.assign(x => L(O)(x), {
  bird: 'Turing',
  combinator: 'LO',
})

export const V = Object.assign(x => B(C)(T)(x), {
  bird: 'Vireo (aka Pairing)',
  combinator: 'BCT',
})

export const W = Object.assign(x => C(B(M)(R))(x), {
  bird: 'Warbler',
  combinator: 'C(BMR)',
})

export const W1 = Object.assign(x => C(W)(x), {
  bird: 'Converse Warbler',
  combinator: 'CW',
})

export const Y = Object.assign(x => S(L)(L)(x), {
  bird: 'Why Bird (aka Sage)',
  combinator: 'SLL',
})

export const I_ = Object.assign(x => S(S(K))(x), {
  bird: 'Identity Bird Once Removed',
  combinator: 'S(SK)',
})

export const W_ = Object.assign(x => B(W)(x), {
  bird: 'Warbler Once Removed',
  combinator: 'BW',
})

export const C_ = Object.assign(x => B(C)(x), {
  bird: 'Cardinal Once Removed',
  combinator: 'BC',
})

export const R_ = Object.assign(x => C_(C_)(x), {
  bird: 'Robin Once Removed',
  combinator: 'C*C*',
})

export const F_ = Object.assign(x => B(C_)(R_)(x), {
  bird: 'Finch Once Removed',
  combinator: 'BC*R*',
})

export const V_ = Object.assign(x => C_(F_)(x), {
  bird: 'Vireo Once Removed',
  combinator: 'C*F*',
})

export const W__ = Object.assign(x => B(B(W))(x), {
  bird: 'Warbler Twice Removed',
  combinator: 'B(BW)',
})

export const C__ = Object.assign(x => B(C_)(x), {
  bird: 'Cardinal Twice Removed',
  combinator: 'BC*',
})

export const R__ = Object.assign(x => B(R_)(x), {
  bird: 'Robin Twice Removed',
  combinator: 'BR*',
})

export const F__ = Object.assign(x => B(F_)(x), {
  bird: 'Finch Twice Removed',
  combinator: 'BF*',
})

export const V__ = Object.assign(x => B(V_)(x), {
  bird: 'Vireo Twice Removed',
  combinator: 'BV*',
})

// console.log(M(I).bird)
