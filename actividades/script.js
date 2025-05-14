pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "visita1",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "visita1": {
            "hfov": 110,
            "pitch": -10,
            "yaw": 57,
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/medialabdivulga/conectomavirtual360/refs/heads/main/actividades/assets/img/visitaRaquel1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 77.9,
                    "type": "scene",
                    "sceneId": "visita2"
                }
            ]
        },

        "visita2": {
            "hfov": 110,
            "yaw": 2,
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/medialabdivulga/conectomavirtual360/refs/heads/main/actividades/assets/img/visitaRaquel2.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 17.1,
                    "type": "scene",
                    "sceneId": "visita1",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});
