async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(undefined), duration)
  })
}

async function main() {
  console.log('first')
  await sleep(1000)
  console.log('second')
  await sleep(1000)
  console.log('third')
}

main()
