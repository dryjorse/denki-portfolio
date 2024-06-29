import { $api } from "../constants/api";
import { ISkill } from "../types/apiTypes";

class SkillsService {
  getAll() {
    return $api<ISkill[]>("skills/");
  }
}

export default new SkillsService();
