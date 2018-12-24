const {ccclass, property} = cc._decorator;

export enum TowerType {
    None,
    Archer,
    Barrack,
    Mega,
    Artillery,
}

export enum TowerCreatorStatus {
    Default,
    PreSelect,
    PostSelect,
    Construct,
    Done,
}

@ccclass
export default class TowerCreator extends cc.Component {

    @property(cc.Node)
    initTerrian: cc.Node = null

    @property(cc.Node)
    rangeParent: cc.Node = null

    @property(cc.Node)
    previewParent: cc.Node = null

    @property([cc.Node])
    previews: cc.Node[] = []

    @property(cc.Node)
    selectorParent: cc.Node = null

    @property([cc.Node])
    selectors: cc.Node[] = []

    @property(cc.Node)
    constructorParent: cc.Node = null

    @property(cc.Node)
    constructors: cc.Node[] = []

    @property(cc.Node)
    progressBarParent: cc.Node = null

    @property(cc.Sprite)
    progressBar: cc.Node = null

    private status: TowerCreatorStatus = TowerCreatorStatus.Default

    private currentSelectTowerType: TowerType = TowerType.None

    start () {

    }

    setStatus (status: TowerCreatorStatus) {
        this.status = status
        this.initTerrian.active = status === TowerCreatorStatus.Default || status === TowerCreatorStatus.PreSelect
        this.selectorParent.active = status === TowerCreatorStatus.PreSelect || status === TowerCreatorStatus.PostSelect
        this.previewParent.active = status === TowerCreatorStatus.PostSelect
        this.rangeParent.active = status === TowerCreatorStatus.PostSelect
        this.constructorParent.active = status === TowerCreatorStatus.Construct
        this.progressBarParent.active = status === TowerCreatorStatus.Construct
    }

    setCurrentSelectTowerType (towerType: TowerType) {
        this.currentSelectTowerType = towerType
        this.previews.forEach((preview, idx) => {
            preview.active = (idx + 1) === towerType
        })
        this.selectors.forEach((selector, idx) => {
            selector.children[0].children[0].active = (idx + 1) === towerType
        })
        this.constructors.forEach((constructor, idx) => {
            constructor.active = (idx + 1) === towerType
        })
    }

    // update (dt) {
        
    // }
}
