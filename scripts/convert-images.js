/**
 * ARpón - Script de Conversión de Imágenes
 * 
 * Convierte imágenes originales a múltiples formatos y tamaños
 * optimizados para web.
 * 
 * Uso: node scripts/convert-images.js
 * 
 * Requiere: npm install sharp glob
 */

const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Configuración
const CONFIG = {
  inputDir: 'src/assets/monsters/originals',
  outputDir: 'public/monsters',
  sizes: [64, 128, 256, 512, 1024],
  formats: {
    webp: { quality: 80, effort: 4 },
    avif: { quality: 65, effort: 4 },
    png: { quality: 90, compressionLevel: 9 }
  },
  placeholder: {
    width: 8,
    height: 8,
    quality: 20
  }
};

// Colores de fondo para transparencia
const BACKGROUND = { r: 0, g: 0, b: 0, alpha: 0 };

/**
 * Crear directorios de salida
 */
function createDirectories() {
  const dirs = [
    `${CONFIG.outputDir}/webp`,
    `${CONFIG.outputDir}/avif`,
    `${CONFIG.outputDir}/png`,
    `${CONFIG.outputDir}/placeholder`,
    ...CONFIG.sizes.map(s => `${CONFIG.outputDir}/webp/${s}`),
    ...CONFIG.sizes.map(s => `${CONFIG.outputDir}/avif/${s}`),
    ...CONFIG.sizes.map(s => `${CONFIG.outputDir}/png/${s}`)
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created: ${dir}`);
    }
  });
}

/**
 * Procesar una imagen individual
 */
async function processImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const startTime = Date.now();
  
  console.log(`\n🔄 Processing: ${filename}`);
  
  try {
    // Obtener metadata original
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);
    
    // Procesar cada tamaño
    for (const size of CONFIG.sizes) {
      const image = sharp(inputPath);
      
      // Redimensionar manteniendo relación de aspecto
      await image
        .resize(size, size, {
          fit: 'contain',
          background: BACKGROUND,
          withoutEnlargement: true
        });
      
      // WebP
      await image
        .clone()
        .webp(CONFIG.formats.webp)
        .toFile(`${CONFIG.outputDir}/webp/${size}/${filename}.webp`);
      
      // AVIF (futuro)
      await image
        .clone()
        .avif(CONFIG.formats.avif)
        .toFile(`${CONFIG.outputDir}/avif/${size}/${filename}.avif`);
      
      // PNG fallback
      await image
        .clone()
        .png(CONFIG.formats.png)
        .toFile(`${CONFIG.outputDir}/png/${size}/${filename}.png`);
      
      // Calcular tamaños
      const webpSize = fs.statSync(`${CONFIG.outputDir}/webp/${size}/${filename}.webp`).size;
      const avifSize = fs.statSync(`${CONFIG.outputDir}/avif/${size}/${filename}.avif`).size;
      const pngSize = fs.statSync(`${CONFIG.outputDir}/png/${size}/${filename}.png`).size;
      
      console.log(`   ${size}x${size}: WebP ${formatBytes(webpSize)} | AVIF ${formatBytes(avifSize)} | PNG ${formatBytes(pngSize)}`);
    }
    
    // Generar placeholder (tiny version)
    await sharp(inputPath)
      .resize(CONFIG.placeholder.width, CONFIG.placeholder.height, {
        fit: 'cover'
      })
      .webp({ quality: CONFIG.placeholder.quality })
      .toFile(`${CONFIG.outputDir}/placeholder/${filename}-tiny.webp`);
    
    const placeholderSize = fs.statSync(`${CONFIG.outputDir}/placeholder/${filename}-tiny.webp`).size;
    console.log(`   Placeholder: ${formatBytes(placeholderSize)}`);
    
    const elapsed = Date.now() - startTime;
    console.log(`   ✅ Completed in ${elapsed}ms`);
    
    return { filename, success: true };
    
  } catch (error) {
    console.error(`   ❌ Error processing ${filename}:`, error.message);
    return { filename, success: false, error: error.message };
  }
}

/**
 * Formatear bytes a KB/MB
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Generar reporte de conversión
 */
function generateReport(results) {
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 CONVERSION REPORT');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log('='.repeat(60));
  
  // Calcular tamaño total
  let totalSize = 0;
  const sizes = CONFIG.sizes;
  
  for (const size of sizes) {
    const webpFiles = glob.sync(`${CONFIG.outputDir}/webp/${size}/*.webp`);
    const sizeTotal = webpFiles.reduce((sum, file) => sum + fs.statSync(file).size, 0);
    totalSize += sizeTotal;
    console.log(`   ${size}px: ${formatBytes(sizeTotal)}`);
  }
  
  console.log(`\n📦 Total size (WebP): ${formatBytes(totalSize)}`);
  console.log(`\n💡 Recommendation: Use CDN with immutable cache headers`);
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(60));
  console.log('🎯 ARpón Image Converter');
  console.log('='.repeat(60));
  
  // Verificar directorio de entrada
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`\n❌ Input directory not found: ${CONFIG.inputDir}`);
    console.log('\nPlease create the directory and add your monster images:');
    console.log(`   mkdir -p ${CONFIG.inputDir}`);
    console.log(`   cp your-images/* ${CONFIG.inputDir}/`);
    process.exit(1);
  }
  
  // Buscar imágenes
  const images = glob.sync(`${CONFIG.inputDir}/*.{png,jpg,jpeg,webp}`);
  
  if (images.length === 0) {
    console.error(`\n❌ No images found in ${CONFIG.inputDir}`);
    console.log('\nSupported formats: .png, .jpg, .jpeg, .webp');
    process.exit(1);
  }
  
  console.log(`\n📁 Found ${images.length} images to process`);
  console.log(`📐 Sizes: ${CONFIG.sizes.join(', ')}`);
  console.log(`🖼️  Formats: WebP, AVIF, PNG`);
  
  // Crear directorios
  createDirectories();
  
  // Procesar imágenes
  const results = [];
  for (const image of images) {
    const result = await processImage(image);
    results.push(result);
  }
  
  // Generar reporte
  generateReport(results);
  
  console.log('\n🎉 Conversion complete!');
}

// Ejecutar
main().catch(console.error);
