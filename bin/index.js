const yargs = require("yargs");
const fs = require('fs');
var dir = './';
const withOption = (name) => {
      return yargs.argv[name] == true
}
const createScss = (name, sdir) => {
      let content = 'demo write file - Hello scss!'
      fs.writeFile(sdir + name + '.scss', content, function (err) {
            if (err) throw err;
      });
}

const createComponents = (name) => {
      
    let content = `\nconst ${name} = ()=>{
    return(
        <>
                  
        </>
    )}\nexport default ${name}`
      let fdir = dir + name + "/"
      let compDir = './'
      let scssDir = './'
      if(withOption('f')){
            if (!fs.existsSync(fdir)){
                  fs.mkdirSync(fdir);
            }

            compDir = fdir + "index.js"
            scssDir = fdir
      }
      else{
            compDir = name+".js"
      }

      console.log(yargs.argv.scss);

      if(withOption('scss')){
            createScss(name, scssDir)
            content = `import styles from "./${name+".scss"}"\n` + content
      }

      fs.writeFile(compDir, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
      });
      
}


switch(yargs.argv._[0])  {
    case "components": {    
      createComponents(yargs.argv._[1])
      break;
    }

    case "styles": {      
      fs.writeFile('demo3.txt', 'demo write f5ile - Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
      });
      break;
    }
}