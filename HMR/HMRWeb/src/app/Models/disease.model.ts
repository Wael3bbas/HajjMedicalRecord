import { MedicineModel } from "./medicine.model";

export class DiseaseModel {
    name: string;
    description: string;
    medicines: MedicineModel[];
}