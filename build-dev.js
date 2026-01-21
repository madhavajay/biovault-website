import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// Custom plugin to inline CSS as a string
const inlineCSSPlugin = {
  name: 'inline-css',
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, args => ({
      path: path.resolve(args.resolveDir, args.path),
      namespace: 'css-text',
    }));
    
    build.onLoad({ filter: /.*/, namespace: 'css-text' }, async (args) => {
      const contents = await fs.promises.readFile(args.path, 'utf8');
      return {
        contents: `export default ${JSON.stringify(contents)};`,
        loader: 'js',
      };
    });
  },
};

// Custom plugin to inline images as base64
const inlineImagePlugin = {
  name: 'inline-image',
  setup(build) {
    build.onResolve({ filter: /\.(png|jpg|jpeg|gif|svg)$/ }, args => ({
      path: path.resolve(args.resolveDir, args.path),
      namespace: 'image-base64',
    }));
    
    build.onLoad({ filter: /.*/, namespace: 'image-base64' }, async (args) => {
      const contents = await fs.promises.readFile(args.path);
      const base64 = contents.toString('base64');
      const ext = path.extname(args.path).slice(1);
      const mimeType = ext === 'svg' ? 'svg+xml' : ext;
      const dataUrl = `data:image/${mimeType};base64,${base64}`;
      return {
        contents: `export default ${JSON.stringify(dataUrl)};`,
        loader: 'js',
      };
    });
  },
};

const ctx = await esbuild.context({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/index.js',
  platform: 'browser',
  target: 'esnext',
  plugins: [inlineCSSPlugin, inlineImagePlugin],
  external: [],
  minify: false,
  sourcemap: true,
  conditions: ['worker', 'browser'],
  define: {
    'process.env.NODE_ENV': '"development"'
  }
});

await ctx.watch();
console.log('Watching for changes...');

// Keep the process alive
process.stdin.resume();