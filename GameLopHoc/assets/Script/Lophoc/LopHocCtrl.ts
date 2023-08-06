import Singleton from "../Singleton";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LopHocCtrl extends cc.Component {

    @property(cc.Node)
    toan: cc.Node = null;
    @property(cc.Node)
    amNhac: cc.Node = null;
    @property(cc.Node)
    lichSu: cc.Node = null;
    @property(cc.Node)
    lopToan: cc.Node = null;
    @property(cc.Node)
    lopAmNhac: cc.Node = null;
    @property(cc.Node)
    lopLichSu: cc.Node = null;
    @property(cc.Node)
    dim: cc.Node = null;


    protected onLoad(): void {


        this.toan.on(cc.Node.EventType.TOUCH_START, this.openLopToan, this)
        this.amNhac.on(cc.Node.EventType.TOUCH_START, this.openAmNhac, this)
        this.lichSu.on(cc.Node.EventType.TOUCH_START, this.openLichSu, this)


    }
    protected start(): void {
      
    }
    openLopToan() {
        this.dim.active = true;
        cc.tween(this.toan)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                cc.tween(this.dim)
                    .to(0.5, { opacity: 255 })
                    .call(() => {
                        this.lopToan.active = true;
                    })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.dim.active = false;
                    })
                    .start();
            })
            .start()

    }
    openAmNhac() {
        this.dim.active = true;
        cc.tween(this.amNhac)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                cc.tween(this.dim)
                    .to(0.5, { opacity: 255 })
                    .call(() => {
                        this.lopAmNhac.active = true;
                    })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.dim.active = false;
                    })
                    .start();
            })
            .start()

    }
    openLichSu() {
        this.dim.active = true;
        cc.tween(this.lichSu)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                cc.tween(this.dim)
                    .to(0.5, { opacity: 255 })
                    .call(() => {
                        this.lopLichSu.active = true;
                    })
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.dim.active = false;
                    })
                    .start();
            })
            .start()

    }
    loadsceneSPL() {
        cc.director.loadScene("Spl");
    }
}
