const statements = {
  showTest: 'select * from mytest',
  queryUser: (name) => {
    return `select pw_md from t_user where t_user = ${name}`
  },
};

module.exports = statements;