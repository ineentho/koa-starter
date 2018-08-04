import example from './example'

describe('route /example', () => {
  it('it should respond with example: true', async () => {
    const ctx = {}
    await example(ctx)

    expect(ctx.body).toEqual({ example: true })
  })
})
