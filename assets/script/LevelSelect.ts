import Utils from "./Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelSelect extends cc.Component {

    @property(cc.TiledMap)
    map: cc.TiledMap = null

    @property(cc.Sprite)
    sprite: cc.Sprite = null

    onLoad () {
        const towers = this.map.getObjectGroup('towers')
        const tower0 = towers.getObject('tower0')
        const tower0Position = Utils.convertTiledMapPosition(this.map, tower0.offset)
        this.sprite.node.position = tower0Position
    }

    start () {

    }

    // update (dt) {}
}
