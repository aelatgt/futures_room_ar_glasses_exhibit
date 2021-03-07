const colliderWorldPositionVec = new THREE.Vector3();
const targetWorldPositionVec = new THREE.Vector3(); 
let collisionDetectedAlready = false; 

// what to do when a collision starts 
const onCollisionStart = () => {
  console.log('Collision started at ' + (new Date()).toTimeString());
}

// what to do when a collision ends 
const onCollisionEnd = () => {
  console.log('Collision ended at ' + (new Date()).toTimeString());
}

AFRAME.registerComponent("collision-detector", {
  schema: {
    colliders: { type: "selectorAll" },
    target: { type: "selector" },
    threshold: {type: "int", default: 3}
  },
  init() {
    console.log("Initialized collision detector"); 
  },
  tick() {
    if (!this.data.target) return;

    const colliders = this.data.colliders;
    for (let i = 0; i < colliders.length; i++) {
      const collider = colliders[i];
      const object3D = collider.object3D;
      object3D.getWorldPosition(colliderWorldPositionVec);
      const target3D = this.data.target.object3D; 
      target3D.getWorldPosition(targetWorldPositionVec);

      const euclideanDistance = (
        (colliderWorldPositionVec.x - targetWorldPositionVec.x) ** 2 
        + (colliderWorldPositionVec.y - targetWorldPositionVec.y) ** 2 
        + (colliderWorldPositionVec.z - targetWorldPositionVec.z) ** 2
      ) ** 0.5; 
      if (euclideanDistance <= this.data.threshold && !collisionDetectedAlready) {
        onCollisionStart(); 
        collisionDetectedAlready = true; 
      } else if (euclideanDistance > this.data.threshold && collisionDetectedAlready) {
        onCollisionEnd(); 
        collisionDetectedAlready = false; 
      }
    }
  }
});
