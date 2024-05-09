 module.exports = (sequelize,DataTypes) =>{
  const Details = sequelize.define(
    'Details',
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      
      is_delete: {
        type: DataTypes.INTEGER,
        defaultValue : 0
      },
    },
    {
      tableName: 'details',
      // timestamps: false,  if we dont't need timestemp (updateAt,createdAt)
      // createdAt: false,
      // updatedAt: 'updated_at'
    },
  );

    // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true
 }