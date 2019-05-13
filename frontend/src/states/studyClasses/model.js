import { attr, Model } from 'redux-orm';

class StudyClass extends Model {
  static get modelName() {
    return 'StudyClass';
  }

  static get fields() {
    return {
      id: attr(),
      role: attr(),
      name: attr(),
      description: attr(),
      totalStudySets: attr(),
      createdAt: attr(),
      updatedAt: attr()
    };
  }
}

export default StudyClass;
