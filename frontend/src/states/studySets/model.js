import { attr, Model } from 'redux-orm';

class StudySet extends Model {
  static get modelName() {
    return 'StudySet';
  }

  static get fields() {
    return {
      id: attr(),
      role: attr(),
      title: attr(),
      totalTerms: attr(),
      viewPermission: attr(),
      editPermission: attr(),
      createdAt: attr(),
      updatedAt: attr()
    };
  }
}

export default StudySet;
