AFRAME.registerComponent('buzz', {
    schema: {},

    init: function() {
        const data = this.data;
        const el = this.el; 

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
    }
}); 