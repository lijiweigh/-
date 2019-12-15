Component({
    properties: {
        MusicListItem: {
            type: Object
        }
    },
    data: {
        playCount: ""
    },
    methods: {
        tap () {
            this.triggerEvent("ListTap")
        }
    },
    attached () {
        let playCount = this.data.MusicListItem.playCount

        if (playCount > 100000000) {
            playCount = (playCount / 100000000 ).toFixed(2) + "亿"
        } else if (playCount > 10000) {
            playCount = (playCount / 10000).toFixed(2) + "万"
        }
        this.setData({
            playCount: playCount
        })
    }
})