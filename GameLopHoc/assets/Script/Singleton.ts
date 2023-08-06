import CauDoCtrl from "./CauDoCtrl";
import LoadSceneManager from "./LoadSceneManager";
import LopHocCtrl from "./Lophoc/LopHocCtrl";

export default class Singleton {
    public static CAU_DO_CTRL: CauDoCtrl = null;
    public static LOP_HOC_CTRL: LopHocCtrl = null;

    public static LOAD_SCENE_MANAGER: LoadSceneManager = null;
}