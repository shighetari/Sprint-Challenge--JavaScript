
// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attributes){
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }
  
//   CuboidMaker.prototype.volume = function(){
//     return this.length*this.width*this.height;
//   }
  
//   const cuby = new CuboidMaker({
//     length: 10,
//     width: 1,
//     height: 2
//   })

//   CuboidMaker.prototype.surfaceArea = function(){
//     return this.length*this.width + this.length*this.height + this.width*this.height;
//   }

class CuboidMaker{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;  
    }
    
    volume(){
        return this.length*this.width*this.height;
    }
    
    surfaceArea(){
        return 2*this.length*this.width + 2*this.length*this.height + 2*this.width*this.height;
    }
    
    }
    
     
    
    
    // Test your volume and surfaceArea methods by uncommenting the logs below:
    const cuboid = new CuboidMaker({
        length: 10,
        width: 5,
        height: 2
      })
    // console.log(cuboid.volume()); // 100
    // console.log(cuboid.surfaceArea()); // 130
    
    const cuby = new CuboidMaker({
        length: 10,
        width: 1,
        height: 2
      })
     
    //cuby sounded nicer :3 lol 
    console.log(cuby.volume()); // 
    console.log(cuby.surfaceArea()); // 
    
    // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
    //Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
    //Test your work by logging out your volume and surface area.
    
    class CubeMaker extends CuboidMaker{
    constructor(attributes){
        super(attributes);
    }
    
    volume(){
    return Math.pow(this.length,3);
    }
    
    surfaceArea(){
        return 6*Math.pow(this.length,2);
    }
    
    }
    
    const cubyTheCube = new CubeMaker({
        length: 5,
        width: 1,
        height: 2
      })
     
    
    console.log(cubyTheCube.volume());
    console.log(cubyTheCube.surfaceArea());