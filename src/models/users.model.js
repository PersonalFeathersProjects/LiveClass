// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
  
    email: { type: String, unique: true, lowercase: true },

    password: { type: String },
    
    name: { type: String },

    userName: { type: String },

    role: { type: String },

    gradeLevel: { type: String },

    active: { type: Boolean },

    avatar: { type: String },

    phone: { type: String },

    schoolAddress: { type: String },

    schoolLiason: { type: String },

    students: [{ schoolId: { type: mongooseClient.Schema.Types.ObjectId }, name: { type: String }, schoolName: { type: String }, userName: { type: String }, email: { type: String }, phone: { type: String }, gradeLevel: { type: String } }],// this will contain an array of patched data of students belonging to a school for users with the role of "school"


    gradeLevels: [{ schoolId: { type: mongooseClient.Schema.Types.ObjectId }, name: { type: String }, schoolName: { type: String }, estimateStudents: { type: String } }],// this will contain an array of patched data of grade levels or class belonging to a school for users with the role of "school"
    

    subjects: [{ schoolId: { type: mongooseClient.Schema.Types.ObjectId }, name: { type: String }, schoolName: { type: String }, estimateTeachers:{type: String} }],// this will contain an array of patched data of subject belonging to a school for users with the role of "school"


    teachers: [{ schoolId: { type: mongooseClient.Schema.Types.ObjectId }, name: { type: String }, schoolName: { type: String }, userName: { type: String }, email: { type: String }, phone: { type: String }, }],// this will contain an array of patched data of teachers belonging to a school for users with the role of "school"
    
    
    
    schoolId: { type: mongooseClient.Schema.Types.ObjectId }, //this field is to save the id of school which a student or teacher may belond to

    schoolName: { type: String }, //this field is to save the name of school which a student or teacher may belond to

    adminRandomId: { type: mongooseClient.Schema.Types.ObjectId },

    auth0Id: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
    twitterId: { type: String },
    githubId: { type: String },
  
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
