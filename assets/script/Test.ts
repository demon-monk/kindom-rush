import TowerCreator, { TowerCreatorStatus, TowerType } from "./TowerCreator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestTowerCreator extends cc.Component {

    @property(TowerCreator)
    towerCreator: TowerCreator = null

    onLoad () {
        this.towerCreator.setStatus(TowerCreatorStatus.PreSelect)
        this.towerCreator.setCurrentSelectTowerType(TowerType.Barrack)
    }

    start () {

    }

    // update (dt) {}
}
