/**
 * ARpón - Batch Image to SVG Converter (vtracer)
 *
 * Convierte todas las imágenes de monstruos a SVG usando vtracer.
 *
 * Uso: node scripts/convert-to-svg.js
 * Requiere: cargo install vtracer
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = 'visual_reference/Monstruos Arpon';
const OUTPUT_DIR = 'public/monsters/svg';

const SLUG_MAP = {
  'Acuerdos burocraticos': 'acuerdos-burocraticos',
  'Bonachon': 'bonachon',
  'Coloso Blindado': 'el-coloso',
  'Coloso BlindadoAtacado': 'el-coloso-atacado',
  'Coloso BlindadoHuyendo': 'el-coloso-huyendo',
  'Conspiracion': 'conspiracion',
  'Declinante': 'el-declinante',
  'Derretido': 'el-derretido',
  'Don Tentaculos': 'don-tentaculos',
  'Dormilon': 'el-dormilon',
  'El Archivo': 'el-archivo',
  'El Inflado': 'el-inflado',
  'Escondido': 'el-escondido',
  'Hidra Burocratica': 'la-hidra-burocratica',
  'La Serpiente': 'la-serpiente',
  'La SerpienteAtacada': 'la-serpiente-atacada',
  'Nessy': 'nessy',
  'Planeacion': 'planeacion',
  'Red de Corrupcion': 'la-red',
  'Sanguijuela': 'la-sanguijuela',
  'Tembloroso': 'el-tembloroso',
  'Vacio': 'el-vacio',
};

function slugify(name) {
  return SLUG_MAP[name] || name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function convertImage(inputPath, outputPath) {
  try {
    execSync(
      `vtracer --input "${inputPath}" --output "${outputPath}" --preset poster --colormode color --hierarchical stacked --mode polygon --filter_speckle 4 --color_precision 6 --corner_threshold 60 --segment_length 4 --splice_threshold 45 --path_precision 2`,
      { stdio: 'pipe' }
    );
    const size = fs.statSync(outputPath).size;
    return { success: true, size };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function main() {
  console.log('🎯 ARpón Image-to-SVG Converter\n');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
  const results = [];

  for (const file of files) {
    const name = path.basename(file, path.extname(file));
    const slug = slugify(name);
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, `${slug}.svg`);

    process.stdout.write(`  ${name} → ${slug}.svg ... `);
    const result = convertImage(inputPath, outputPath);
    results.push({ name, slug, ...result });

    if (result.success) {
      console.log(`✅ ${formatBytes(result.size)}`);
    } else {
      console.log(`❌ ${result.error}`);
    }
  }

  const succeeded = results.filter(r => r.success).length;
  console.log(`\n📊 ${succeeded}/${results.length} converted successfully`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + 'B';
  return (bytes / 1024).toFixed(1) + 'KB';
}

main();
