
const {ccclass, property} = cc._decorator;

@ccclass
export default class Utils {
    static convertTiledMapPosition (map: cc.TiledMap, pos: cc.Vec2): cc.Vec2 {
        const mapSize = map.getMapSize()
        const tileSize = map.getTileSize()
        const x = pos.x - mapSize.width * tileSize.width * 0.5
        const y = mapSize.height * tileSize.height * 0.5 - pos.y
        return cc.v2(x, y)
    }
}
