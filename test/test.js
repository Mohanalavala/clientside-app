QUnit.module('CalcCurrency MODULE', {})

QUnit.test('CalcCurrency (aysnc)', async assert => {
  assert.expect(2) // expect two async tests
  const ans = await CalcCurrency()
  const len = ans.length
  console.info(`FETCHED ${len} characters: ${ans}`)
  assert.notEqual(0, len, 'Length is not zero')
  assert.notEqual(ans, 'No circle for you', 'wrong answer')
})