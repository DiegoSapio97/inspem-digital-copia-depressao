import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const SOURCE =
  'https://raw.githubusercontent.com/DiegoSapio97/inspem-digital-copia/main';

const files = [
  'public/favicon.ico',
  'public/assets/consultorio-entrada_79d99e1f.webp',
  'public/assets/consultorio-sala-atendimento_bf036d93.webp',
  'public/assets/consultorio-sala-equipe_8dd520a7.webp',
  'public/assets/consultorio-sala-espera_1698daab.webp',
  'public/assets/equipe-inspem_7eb2d3c6.webp',
  'public/assets/fachada-baltimore_dbfddbea.webp',
  'public/assets/ingrid-consultorio_01f79ed7.webp',
  'public/assets/logo-inspem-header_a08984b5.webp',
  'public/assets/supervisora-ingrid_369c6147.webp',
  'public/assets/supervisora-simone_059072ac.webp',
];

for (const file of files) {
  const res = await fetch(`${SOURCE}/${file}`);
  if (!res.ok) {
    throw new Error(`Falha ao baixar ${file}: ${res.status} ${res.statusText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, buf);
  console.log(`baixou ${file} (${buf.length} bytes)`);
}
