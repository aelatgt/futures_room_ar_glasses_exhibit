AFRAME.registerComponent('box', {
    schema: {
        width: {type: 'number', default: 1},
        height: {type: 'number', default: 1},
        depth: { type: 'number', default: 1 },
        color: {type: 'color', default: '#AAA'},
        position: {type: 'array', default: [0, 0, 0]}
    },

    init: function () {
        const data = this.data; 
        const el = this.el; 

        // create geometry 
        this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);

        // create material
        this.material = new THREE.MeshStandardMaterial({color: data.color}); 

        // create mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        // set mesh on entity 
        el.setObject3D('mesh', this.mesh);

        // apply position
        el.object3D.position.x = this.data.position[0];
        el.object3D.position.y = this.data.position[1];
        el.object3D.position.z = this.data.position[2]; 

        // create event handler
        this.eventHandlerMove = function (e) {
            el.setAttribute('position', {
                x: el.object3D.position.x + e.detail.x,
                y: el.object3D.position.y + e.detail.y, 
                z: el.object3D.position.z + e.detail.z
            }); 
        }

        // create event listener
        el.addEventListener('move', this.eventHandlerMove); 
    },

    update: function(oldData) {
        const data = this.data; 
        const el = this.el; 

        // if in init process create event listener and return 
        if (Object.keys(oldData).length === 0) {
            return; 
        }

        // update geometry 
        if (data.width !== oldData.width || data.height !== oldData.height || data.depth !== oldData.depth) {
            el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
        }

        // update material 
        if (data.color !== oldData.color) {
            el.getObject3D('mesh').material.color = new THREE.Color(data.color);
        }
    }
}); 