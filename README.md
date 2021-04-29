This repository features an exhibit of AR glasses that allows the user to see an AR Buzz come to life when approaching and putting on the AR glasses. 

How to Run: 
1. Run this command on the command line while in the root folder of this project: `npm install && npm start`
2. A new tab should open in your web broswer. Bypass permissions when prompted. 
3. Open up the developer console to see output from the collision detection component.
4. Use the arrows to move the user/camera toward the AR glasses, and watch an AR Buzz come to life! 

File Information: 
1. The `collision-detector.js` file is for the A-Frame collision detection component. 
2. The buzz.blend and buzz.glb files are for the 3D model of Buzz. 
3. The `glasses.blend` and the `glasses.glb` files are for the 3D model of the glasses, which was edited so that it could be successfully imported into the A-Frame scene. The `original_glasses.blend` and the `original_glasses.glb` files are for the original 3D model of the glasses. See the to-do below. 
4. The `scene.blend` file is for the 3D model that contains the glasses and Buzz. 
5. The `index.html` file is where the A-Frame scene is set up and rendered. 

Credits: 
1. The A-Frame code was written by Akshay Sathiya and built upon examples and existing code from the A-Frame documentation (https://aframe.io/docs/1.2.0/introduction/) and Mozilla's trigger volume compoment (https://github.com/mozilla/hubs/blob/hubs-cloud/src/components/trigger-volume.js). 
2. The 3D model of Buzz was created by William Colin Freeman. 
3. The 3D model of the AR glasses was developed by Andrew Nazareth (`original_glasses.blend`, `original_glasses.glb`) and was slightly modified by Akshay Sathiya (`glasses.blend`, `glasses.glb`) so that it could be successfully imported into the A-Frame scene.  
4. The Gallery Content team working on the Futures Room, which this exhibit will be placed in, was led by Jisu Park. 

To-do: 
1. Get the colors of the original glasses model (`original_glasses.blend`, `original_glasses.glb`) to appear on the glasses model in the A-Frame scene. The original glasses show up misshapen and all black in the A-Frame scene, without the colors that are present in Blender. The edited glasses model (`glasses.blend`, `glasses.glb`) preserves the shape, but not the colors. To test out the different glasses models, simply go to line 30 of the `index.html` file and change the `src="./glasses.glb"` to `src="./original_glasses.glb"`. 
