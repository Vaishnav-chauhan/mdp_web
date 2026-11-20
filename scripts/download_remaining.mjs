import fs from 'fs';
import path from 'path';
import https from 'https';

const remaining = [
  // Indoor play / blocks
  { url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_16.png' },
  { url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_3.png' },
  { url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/gallery_png/gallery_png_4.png' },

  // Outdoor playground
  { url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_4.png' },
  { url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/gallery_png/gallery_png_7.png' },

  // Cultural & stage events
  { url: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_5.png' },
  { url: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/gallery_png/gallery_png_9.png' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const get = (uri) => {
      https.get(uri, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download ${uri}: status ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    };
    get(url);
  });
}

async function run() {
  for (const item of remaining) {
    const fullDest = path.resolve(process.cwd(), item.dest);
    try {
      console.log(`Downloading ${item.dest}...`);
      await download(item.url, fullDest);
      console.log(`Saved ${item.dest}`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('Remaining downloads completed!');
}

run();
