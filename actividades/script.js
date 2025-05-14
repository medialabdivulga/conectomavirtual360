pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/medialabdivulga/conectomavirtual360/refs/heads/main/assets/actividades360/visitaRaquel1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 45.9,
                    "type": "scene",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/medialabdivulga/conectomavirtual360/refs/heads/main/assets/actividades360/visitaRaquel2.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});
