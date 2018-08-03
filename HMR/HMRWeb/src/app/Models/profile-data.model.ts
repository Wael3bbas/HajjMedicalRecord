import { ContactModel } from "./contact.model";
import { PersonalInfoModel } from "./personal-info.model";
import { DiseaseModel } from "./disease.model";
import { CaseModel } from "./case.model";

export class ProfileDataModel {
    personalInfo: PersonalInfoModel;
    emergancyContacts: ContactModel[];
    diseases: DiseaseModel[];
    cases: CaseModel[];
}