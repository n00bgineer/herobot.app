import fs from 'fs'
import path from 'path'
import chokidar from 'chokidar'
import sharp from 'sharp'

const config = {
  watchDir:
    '/home/asxyzp/Documents/Projects/Hackathon Projects/HeroBot.site/Repo/main/app/web/src/assets',
  imageExtensions: ['.jpg', '.jpeg', '.png'],
  ignoreExtensions: ['.webp', '.svg'],
  ignoreFiles: [
    '/herosite-hero.jpg'
  ],
  deletedOriginalFile: false,
  generateFreshWebp: true,
}

const optimiseImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase() // GETTING FILE EXTENSION
  const baseName = path.basename(filePath, ext) // GETTING BASE NAME OF THE FILE
  const dir = path.dirname(filePath) // GETTING THE DIRECTORY OF THE FILE
  const fileName = path.basename(filePath) // GETTING FULL FILE NAME

  // RETURN, IF NOT A VALID EXTENSION
  if (
    !config.imageExtensions.includes(ext) ||
    config.ignoreFiles.includes(fileName)
  )
    return

  try {
    const webpPath = path.join(dir, `${baseName}.webp`)
    const optimizedWebpPath = path.join(dir, `${baseName}--optimised.webp`)

    // CONVERTING TO WEBP
    if (config.generateFreshWebp) {
      await sharp(filePath).webp({ quality: 100 }).toFile(webpPath)
    }

    // GENERATING A COMPRESSED IMAGE FOR LAZY LOADING
    await sharp(filePath)
      .webp({ quality: 40, alphaQuality: 100 })
      .blur()
      .toFile(optimizedWebpPath)

    console.log(`CONVERTED: ${filePath} TO WEBP AND OPTIMIZED VERSIONS`)

    // DELETE THE ORIGINAL FILE AFTER PROCESSING
    if (config.deletedOriginalFile) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`ERROR DELETING FILE ${filePath}:`, err)
        } else {
          console.log(`ORIGINAL FILE DELETED: ${filePath}`)
        }
      })
    }
  } catch (error) {
    console.error(`ERROR PROCESSING ${filePath}:`, error)
  }
}

// INITIALIZE FILE WATCHER
const watcher = chokidar.watch(config.watchDir, {
  ignored: (filePath) =>
    config.ignoreExtensions.includes(path.extname(filePath).toLowerCase()),
  persistent: true,
})

// ADD EVENTS FOR THE WATCHER
watcher
  .on('add', optimiseImage)
  .on('change', optimiseImage)
  .on('error', (error) => console.error('WATCHER ERROR:', error))
console.log(`WATCHING FOR IMAGE ADDITIONS IN: ${config.watchDir}`)
