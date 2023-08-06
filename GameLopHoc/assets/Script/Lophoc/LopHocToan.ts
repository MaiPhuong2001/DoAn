

const { ccclass, property } = cc._decorator;

@ccclass
export default class LopHocToan extends cc.Component {
    // @property(cc.TextAsset)
    sourcetxt: cc.TextAsset = null;
    @property(cc.Label)
    Cauhoi: cc.Label = null;

    @property(cc.Label)
    dapanA: cc.Label = null;
    @property(cc.Label)
    dapanB: cc.Label = null;
    @property(cc.Label)
    dapanC: cc.Label = null;
    @property(cc.Label)
    dapanD: cc.Label = null;
    @property(cc.Node)
    winPop: cc.Node = null;
    arrayTxt: string[] = [];
    dapAn: string = "A";
    dataMath = JSON.parse(localStorage.getItem("Math"));
    protected onLoad(): void {
        this.dapanA.node.parent.on(cc.Node.EventType.TOUCH_START, this.clickA, this);
        this.dapanB.node.parent.on(cc.Node.EventType.TOUCH_START, this.clickB, this);
        this.dapanC.node.parent.on(cc.Node.EventType.TOUCH_START, this.clickC, this);
        this.dapanD.node.parent.on(cc.Node.EventType.TOUCH_START, this.clickD, this);
        this.loadData();
        console.log("loadDataToan");

    }
    loadData() {
        cc.resources.load("Cau" + this.dataMath.currentQues.toString(), cc.TextAsset, (err, txt) => {
            if (err) {
                cc.error("Het cau hoi:", err);
                this.node.active = false;
                return;
            }
            // Sử dụng txt ở đây
            this.sourcetxt = txt;
            this.arrayTxt = this.sourcetxt.toString().split("/*");
            this.printfData();
        });
    }
    protected start(): void {


    }
    printfData() {
        this.Cauhoi.string = this.arrayTxt[0];
        this.dapanA.string = this.arrayTxt[1];
        this.dapanB.string = this.arrayTxt[2];
        this.dapanC.string = this.arrayTxt[3];
        this.dapanD.string = this.arrayTxt[4];
        this.dapAn = this.arrayTxt[5].toString();
    }
    clickA() {
        cc.tween(this.dapanA.node.parent)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                console.log(this.dapAn);
                if (this.dapAn == "A") {
                    console.log("dung dung dung");
                    this.dataMath = JSON.parse(localStorage.getItem("Math"));
                    this.dataMath.currentQues += 1;
                    localStorage.setItem("Math", JSON.stringify(this.dataMath));
                    console.log("cau" + this.dataMath.currentQues);
                    this.loadData();
                }
                else {
                    console.log("sai");

                }
            })
            .start()
    }
    clickB() {
        cc.tween(this.dapanB.node.parent)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                console.log(this.dapAn);
                if (this.dapAn == "B") {
                    console.log("dung dung dung");
                    this.dataMath = JSON.parse(localStorage.getItem("Math"));
                    this.dataMath.currentQues += 1;
                    localStorage.setItem("Math", JSON.stringify(this.dataMath));
                    console.log("cau" + this.dataMath.currentQues);
                    this.loadData();
                }
                else {
                    console.log("sai");

                }
            })
            .start()
    }
    clickC() {
        cc.tween(this.dapanC.node.parent)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                console.log(this.dapAn);
                if (this.dapAn == "C") {
                    console.log("dung dung dung");
                    this.dataMath = JSON.parse(localStorage.getItem("Math"));
                    this.dataMath.currentQues += 1;
                    localStorage.setItem("Math", JSON.stringify(this.dataMath));
                    console.log("cau" + this.dataMath.currentQues);
                    this.loadData();
                }
                else {
                    console.log("sai");
                }
            })
            .start()
    }
    clickD() {
        cc.tween(this.dapanD.node.parent)
            .to(0.3, { scale: 1.1 })
            .to(0.3, { scale: 1 })
            .call(() => {
                console.log(this.dapAn);
                if (this.dapAn == "D") {
                    console.log("dung dung dung");
                    this.dataMath = JSON.parse(localStorage.getItem("Math"));
                    this.dataMath.currentQues += 1;
                    localStorage.setItem("Math", JSON.stringify(this.dataMath));
                    console.log("cau" + this.dataMath.currentQues);
                    this.loadData();
                }
                else {
                    console.log("sai");

                }
            })
            .start()
    }

    win() {
        this.winPop.active = true;
    }
}
