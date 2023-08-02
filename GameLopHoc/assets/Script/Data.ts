

const { ccclass, property } = cc._decorator;

@ccclass
export default class Data extends cc.Component {

    protected onLoad(): void {
        const ClassMath = {
            currentQues: 1,
            nextQues: 2,
            pass: false,
            dct: 1
        };
        // const ClassMusic = {
        //     currentQues: 1,
        //     nextQues: 2,
        //     pass: false
        // };
        // const ClassHistory = {
        //     currentQues: 1,
        //     nextQues: 2,
        //     pass: false
        // };
        // const dataMath = JSON.stringify(ClassMath);
        // // localStorage.setItem('Math', dataMath);

        // const dataMusic = JSON.stringify(ClassMusic);
        // // localStorage.setItem('Music', dataMusic);

        // const dataHistory = JSON.stringify(ClassHistory);
        // localStorage.setItem('History', dataHistory);
        // localStorage.clear();

    }
    loadScenesCauDo() {
        cc.director.loadScene("CauDo");
    }
}
