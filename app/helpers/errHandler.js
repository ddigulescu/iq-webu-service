'use strict';

const errHandler = res => err => res.json({ error: 'Something went wrong' });

module.exports = errHandler;
