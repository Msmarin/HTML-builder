async function copyDir(){
  const fs = require('fs');
  const dir=('files-copy');  
  const path=require('path');

  fs.rm( dir, { recursive: true, force: true, },err => {
    if(err) throw err; 
    console.log('Папка удалена');
    
    fs.mkdir(dir,{  force: true } ,err => {
      if(err) throw err; 
      console.log('Папка успешно создана1');
   
      fs.readdir(path.join(__dirname,'files'),(err , files)=>{
        if (err) throw err;
        else{
          console.log(files);
          files.forEach ( el=>{
            fs.copyFile(path.join(__dirname, 'files' ,el), path.join(__dirname, dir ,el),(err)=>{
              if (err) throw err;
              console.log('copy');
            });
          });
        }
      });
      
    }); 
  });
}

copyDir();