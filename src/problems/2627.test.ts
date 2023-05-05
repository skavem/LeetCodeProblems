import { sleep } from "../utils";
import { debounce } from "./2627"

describe('main', () => {
  it('work on example 1', async () => {
    let start = Date.now()

    const log = jest.fn((...inputs: number[]) => { 
      console.log([ Date.now() - start, inputs ])
    })

    const dlog = debounce(log, 50)
    await sleep(50)
    dlog(1)
    await sleep(25)
    dlog(2)
    await sleep(50)
    expect(log).toBeCalledTimes(1)
  })

  it('work on example 3', async () => {
    let start = Date.now()

    const log = jest.fn((...inputs: number[]) => { 
      console.log([ Date.now() - start, inputs ])
    })

    const dlog = debounce(log, 150)

    setTimeout(() => dlog([1,2]), 50)
    setTimeout(() => dlog([3,4]), 300)
    setTimeout(() => dlog([5,6]), 300)
    await sleep(500)

    expect(log).toBeCalledTimes(2)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})