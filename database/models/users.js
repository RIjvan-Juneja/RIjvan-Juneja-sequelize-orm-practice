module.exports = (sequelize,DataTypes) =>{

  const User = sequelize.define(
    'User',
    {
      // Model attributes are defined here
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      dob: {
        type: DataTypes.DATE,
        // allowNull defaults to true
      },
      is_delete: {
        type: DataTypes.INTEGER,
        defaultValue : 0
      },
    },
    {
      tableName: 'users',
      // timestamps: false,  if we dont't need timestemp (updateAt,createdAt)
      createdAt: false,
      updatedAt: 'updated_at'
    },
  );
  
  return User;
  // `sequelize.define` also returns the model
  // console.log(User === sequelize.models.User); // true

}
