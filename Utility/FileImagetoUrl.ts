import fs from 'fs';

export const imagetoUrl=(image:any)=>{

  //return image;
 
 return fs.readFileSync(`${image}`, 'base64');
}


export const imagestoUrl=(images:any[])=>{
   let urls:string[]=[];
  urls= images.map(image=>{
       return fs.readFileSync(`${image}`, 'base64');
  })
}