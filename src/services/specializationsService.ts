import { $api } from "../constants/api";
import { ISpecialization } from "../types/apiTypes";

class SpecializationsService {
  getAll() {
    return $api<ISpecialization[]>("specializations/");
  }
  getById(id: number) {
    return $api<ISpecialization>(`specializations/${id}/`);
  }
}

export default new SpecializationsService();
