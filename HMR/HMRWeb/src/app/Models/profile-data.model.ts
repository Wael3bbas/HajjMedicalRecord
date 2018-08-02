import { ContactModel } from "./contact.model";
import { PersonalInfoModel } from "./personal-info.model";

export class ProfileDataModel {
    PersonalInfo: PersonalInfoModel;
    EmergancyContacts: ContactModel[];
}