const modelsUsers = require('./users.js');

module.exports.addUsers = async (data) => {
  try {
    const add = new modelsUsers(data);      
    await add.save();
  } catch(e) {
    console.log(e);
  }
}

module.exports.cekUsers = async (id) => {
  try {
    const user = await modelsUsers.findOne({ id: id });
    return user;    
  } catch(e) {
    console.log(e);
  }
};

module.exports.setUsers = async (id, data) => {
  try {
    const user = await modelsUsers.findOne({ id: id });

    if (!user) {
      throw new Error(`User with id ${id} not found.`);
    }

    const fieldsToUpdate = [
      'id', 'name', 'gender', 'umur', 'cmd', 'rating', 'bergabung', 'like', 'dislike', 'medali', 'bintang'
    ];

    await Promise.all(
      fieldsToUpdate.map(async field => {
        if (data?.[field] !== undefined) {
          user[field] = data[field];
        }
      })
    );

    if (data?.invite) {
      user.invite.push(data.invite);
    }

    const incrementFields = ['bintang', 'medali', 'like', 'dislike'];
    
    await Promise.all(
      incrementFields.map(async field => {
        if (data?.[`${field}P`] !== undefined) {
          user[field] += data[`${field}P`];
        }
        if (data?.[`${field}M`] !== undefined && user[field] - data[`${field}M`] >= 0) {
          user[field] -= data[`${field}M`];
        }
      })
    );

    if (data?.status) {
      await Object.assign(user.status, data.status);
    }

    if (data?.teman) {
      await Object.assign(user.teman, data.teman);
    }

    if (data?.game) {
      await Object.assign(user.game, data.game);
    }

    await user.save();
  } catch (e) {
    console.error('Error setting user data:', e);
  }
};

/*module.exports.setUsers = async (id, data) => {
  try {
    const user = await modelsUsers.findOne({ id: id });   

    const fieldsToUpdate = [
      'id', 'name', 'gender', 'umur', 'cmd', 'rating', 'bergabung', 'like', 'dislike', 'medali', 'bintang'
    ];

    fieldsToUpdate.forEach(field => {
      if (data?.[field] !== undefined) {
        user[field] = data[field];
      }
    });

    if (data?.invite) {
      user.invite.push(data.invite);
    }

    const incrementFields = ['bintang', 'medali', 'like', 'dislike'];
    incrementFields.forEach(field => {
      if (data?.[`${field}P`] !== undefined) {
        user[field] += data[`${field}P`];
      }
      if (data?.[`${field}M`] !== undefined && user[field] - data[`${field}M`] >= 0) {
        user[field] -= data[`${field}M`];
      }
    });

    if (data?.status) {
      Object.assign(user.status, data.status);
    }

    if (data?.teman) {
      Object.assign(user.teman, data.teman);
    }

    if (data?.game) {
      Object.assign(user.game, data.game);
    }

    await user.save();
  } catch (e) {
    console.log(e);
  }
};
*/