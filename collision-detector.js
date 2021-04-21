const colliderWorldPositionVec = new THREE.Vector3();
const targetWorldPositionVec = new THREE.Vector3(); 
let collisionDetectedAlready = false; 

// what to do to the provided object when a collision starts 
const onCollisionStart = (object) => {
  console.log('Collision started at ' + (new Date()).toTimeString());
  object.setAttribute('visible', true); 
}

// what to do to the provided object when a collision ends 
const onCollisionEnd = (object) => {
  console.log('Collision ended at ' + (new Date()).toTimeString());
  object.setAttribute('visible', false); 
}

AFRAME.registerComponent("collision-detector", {
  schema: {
    colliders: { type: "selectorAll" }, // objects expected to collide with target 
    target: { type: "selector" }, // object that collision detector is attached to 
    threshold: {type: "float", default: 3.0}, // collision radius 
    object: { type: "selector" } // object affected by collision (not necessarily the target or one of colliders)
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
        onCollisionStart(this.data.object); 
        collisionDetectedAlready = true; 
      } else if (euclideanDistance > this.data.threshold && collisionDetectedAlready) {
        onCollisionEnd(this.data.object); 
        collisionDetectedAlready = false; 
      }
    }
  }
});
