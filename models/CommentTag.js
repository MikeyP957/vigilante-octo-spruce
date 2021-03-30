const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class CommentTag extends Model {}

CommentTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: true,
            }
        },
        blogPost_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'blogPost',
                key:'id',
                unique: true,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag'
      }
)