const statements = {
  showTest: 'select * from t_test',
  signIn: (name,email) => {
    return `select * from t_user where uid = '${name}' OR email = '${email}' `;
  },
  signUp: (info)=>{
    return `insert into t_user values ("${info.uid}","${info.pwd}","${info.nickname}",'${info.tel}',"${info.email}",NULL,NULL,0);`;
  },
  queryBookByISBN: (ISBN)=>{
    return `select * from t_book where ISBN = ${ISBN}`;
  },
  queryBooks: (BookName)=>{
    return `select * from t_book where BookName like "%${BookName}%"`;
  },
  insertBook: (book)=>{
    return `insert into t_book values (${book.ISBN},${book.BookName},${book.Author},${book.Publishing},${book.Pages},${book.Price},${book.PhotoUrl})`
  }
};

module.exports = statements;