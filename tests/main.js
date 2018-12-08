const path = require('path')

const directoryStat = require('..')
const PathCollector = require('../src/stat-collectors/path-collector')
const StatCollector = require('../src/stat-collectors/stat-collector')


const StatWriter = directoryStat.StatWriter

class FileContentCollector extends StatCollector {
  constructor(name) {
    super(name)
  }

  async collect(path, stat) {
    if (!stat.isFile()) return undefined
    return 'hello'
  }
}

try {
  const statWriter = new StatWriter(
    path.join(__dirname, 'example'),
    { size: false, type: false, statCollectors: [new FileContentCollector('content'), new PathCollector()] }
  )
  statWriter.export()
} catch (err) {
  console.err(err)
}