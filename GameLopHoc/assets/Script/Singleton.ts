import LoadSceneManager from "./LoadSceneManager";
import LopHocCtrl from "./Lophoc/LopHocCtrl";

export default class Singleton {
    public static LOP_HOC_CTRL: LopHocCtrl = null;
    public static LOAD_SCENE_MANAGER: LoadSceneManager = null;
}