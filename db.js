var Pool = require('pg').Pool;

// postgres configuration
var config = {
	host    : '127.0.0.1',
	user    : 'postgres',
	password: 'shasin670621',
	database: 'postgres'
};

var pool = new Pool(config);

module.exports.createNewUser = function (usrObj, callback) {
	var query_string = 'INSERT INTO "user" (email, password, first_name, last_name, dob) VALUES ($1, $2, $3, $4, $5);';
	pool.query(query_string
    , [email, hashedPassword, firstname, lastname, dob]
		, function (err, result) {
			 if (err) {
				 callback(err.toString(), false);
			 } else {
				 callback(null, true);
			 }
	});
};

module.exports.getUserById = function (userId, callback) {
	pool.query('SELECT * FROM "user" WHERE id=$1', [userId], function(err, result) {
		if (err) return err;
		else {
			if (result.rows.length === 0) {
				callback(404, null);
			} else {
				callback(null, result.rows[0]);
			}
		}
	});
};

module.exports.getUserByEmail = function (email, callback) {
	pool.query('SELECT * FROM "user" WHERE email=$1', [email], function(err, result) {
		if (err) return err;
		else {
			if (result.rows.length === 0) {
				callback(404, null);
			} else {
				callback(null, result.rows[0]);
			}
		}
	});
};

module.exports.getAllUsers = function (limit, callback) {
	pool.query('SELECT * FROM "user" LIMIT $1', [limit], function(err, result) {
		if (err) return err;
		else {
			if (result.rows.length === 0) {
				callback(err_code, null);
			} else {
				callback(null, result.rows);
	    }
		}
	});
};

function checkFriendship(userId1, userId2) {
   pool.query('SELECT * FROM relation WHERE user_one=$1 AND user_two=$2;', [userId1, userId2], function(err, result) {
       if (err) return err;
			 return result.rows[0];
	 });
}

module.exports.setFriendRequest = function(userId1, userId2, actionUserId) {
  if(userId1 < userId2) {
		pool.query('INSERT INTO relation VALUES($1, $2, $3, $4);', [userId1, userId2, 0, actionUserId],function(err) {
			if (err) return err;
		});
  } else {
		pool.query('INSERT INTO relation VALUES($1, $2, $3, $4);', [userId2, userId1, 0, actionUserId],function(err) {
			if (err) return err;
		});
	}
};
