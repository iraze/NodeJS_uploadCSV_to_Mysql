module.exports = (sequelize, Sequelize) => {
    const Saldo = sequelize.define("saldo", {
        id: {
			type: Sequelize.BIGINT,
			autoIncrement: true,
            allowNull: false,
            primaryKey: true  			
		},
		conta: {
			allowNull: false,		
			type: Sequelize.BIGINT,
		},		
			
		saldo: {
			allowNull: false,		
			type: Sequelize.DECIMAL(15,2)
		},

		nome: {
			allowNull: false,
			type: Sequelize.STRING(100),			
		},
		createdAt: {
			allowNull: false,		
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,		
			type: Sequelize.DATE
		}
		
		
    }
	, { freezeTableName: true });
  
    return Saldo;
  };


