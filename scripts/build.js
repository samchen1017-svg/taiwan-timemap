import {mkdir,cp,rm,writeFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const name of ['index.html','src','assets']){try{await cp(name,'dist/'+name,{recursive:true})}catch(e){if(name!=='assets')throw e}}
await writeFile('dist/.nojekyll','');console.log('Static build: dist/ (relative paths; works under /taiwan-timemap/)');
